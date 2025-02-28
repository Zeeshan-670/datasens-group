var Lobibox = Lobibox || {};
!(function () {
  function LobiboxPrompt(type, options) {
    (this.$input = null),
      (this.$type = 'prompt'),
      (this.$promptType = type),
      (options = $.extend({}, Lobibox.prompt.DEFAULT_OPTIONS, options)),
      (this.$options = this._processInput(options)),
      this._init(),
      this.debug(this);
  }
  function LobiboxConfirm(options) {
    (this.$type = 'confirm'),
      (this.$options = this._processInput(options)),
      this._init(),
      this.debug(this);
  }
  function LobiboxAlert(type, options) {
    (this.$type = type),
      (this.$options = this._processInput(options)),
      this._init(),
      this.debug(this);
  }
  function LobiboxProgress(options) {
    (this.$type = 'progress'),
      (this.$progressBarElement = null),
      (this.$options = this._processInput(options)),
      (this.$progress = 0),
      this._init(),
      this.debug(this);
  }
  function LobiboxWindow(type, options) {
    (this.$type = type),
      (this.$options = this._processInput(options)),
      this._init(),
      this.debug(this);
  }
  (Lobibox.counter = 0),
    (Lobibox.prompt = function (type, options) {
      return new LobiboxPrompt(type, options);
    }),
    (Lobibox.confirm = function (options) {
      return new LobiboxConfirm(options);
    }),
    (Lobibox.progress = function (options) {
      return new LobiboxProgress(options);
    }),
    (Lobibox.error = {}),
    (Lobibox.success = {}),
    (Lobibox.warning = {}),
    (Lobibox.info = {}),
    (Lobibox.alert = function (type, options) {
      return ['success', 'error', 'warning', 'info'].indexOf(type) > -1
        ? new LobiboxAlert(type, options)
        : void 0;
    }),
    (Lobibox.window = function (options) {
      return new LobiboxWindow('window', options);
    });
  var LobiboxBase = {
    $type: null,
    $el: null,
    $options: null,
    debug: function () {
      this.$options.debug &&
        window.console.debug.apply(window.console, arguments);
    },
    _processInput: function (options) {
      if ($.isArray(options.buttons)) {
        for (var btns = {}, i = 0; i < options.buttons.length; i++)
          btns[options.buttons[i]] =
            Lobibox.base.OPTIONS.buttons[options.buttons[i]];
        options.buttons = btns;
      }
      options.customBtnClass = options.customBtnClass
        ? options.customBtnClass
        : Lobibox.base.DEFAULTS.customBtnClass;
      for (var i in options.buttons)
        if (options.buttons.hasOwnProperty(i)) {
          var btn = options.buttons[i];
          (btn = $.extend({}, Lobibox.base.OPTIONS.buttons[i], btn)),
            btn['class'] || (btn['class'] = options.customBtnClass),
            (options.buttons[i] = btn);
        }
      return (
        (options = $.extend({}, Lobibox.base.DEFAULTS, options)),
        void 0 === options.showClass &&
          (options.showClass = Lobibox.base.OPTIONS.showClass),
        void 0 === options.hideClass &&
          (options.hideClass = Lobibox.base.OPTIONS.hideClass),
        void 0 === options.baseClass &&
          (options.baseClass = Lobibox.base.OPTIONS.baseClass),
        void 0 === options.delayToRemove &&
          (options.delayToRemove = Lobibox.base.OPTIONS.delayToRemove),
        options.iconClass ||
          (options.iconClass =
            Lobibox.base.OPTIONS.icons[options.iconSource][this.$type]),
        options
      );
    },
    _init: function () {
      var me = this;
      me._createMarkup(),
        me.setTitle(me.$options.title),
        me.$options.draggable &&
          !me._isMobileScreen() &&
          (me.$el.addClass('draggable'), me._enableDrag()),
        me.$options.closeButton && me._addCloseButton(),
        me.$options.closeOnEsc &&
          $(document).on('keyup.lobibox', function (ev) {
            27 === ev.which && me.destroy();
          }),
        me.$options.baseClass && me.$el.addClass(me.$options.baseClass),
        me.$options.showClass &&
          (me.$el.removeClass(me.$options.hideClass),
          me.$el.addClass(me.$options.showClass)),
        me.$el.data('lobibox', me);
    },
    _calculatePosition: function (position) {
      var top,
        me = this;
      top =
        'top' === position
          ? 30
          : 'bottom' === position
          ? $(window).outerHeight() - me.$el.outerHeight() - 30
          : ($(window).outerHeight() - me.$el.outerHeight()) / 2;
      var left = ($(window).outerWidth() - me.$el.outerWidth()) / 2;
      return { left: left, top: top };
    },
    _createButton: function (type, op) {
      var me = this,
        btn = $('<button></button>')
          .addClass(op['class'])
          .attr('data-type', type)
          .html(op.text);
      return (
        me.$options.callback &&
          'function' == typeof me.$options.callback &&
          btn.on('click.lobibox', function (ev) {
            var bt = $(this);
            me._onButtonClick(me.$options.buttons[type], type),
              me.$options.callback(me, bt.data('type'), ev);
          }),
        btn.click(function () {
          me._onButtonClick(me.$options.buttons[type], type);
        }),
        btn
      );
    },
    _onButtonClick: function (buttonOptions, type) {
      var me = this;
      (('ok' === type && 'prompt' === me.$type && me.isValid()) ||
        'prompt' !== me.$type ||
        'ok' !== type) &&
        buttonOptions &&
        buttonOptions.closeOnClick &&
        me.destroy();
    },
    _generateButtons: function () {
      var me = this,
        btns = [];
      for (var i in me.$options.buttons)
        if (me.$options.buttons.hasOwnProperty(i)) {
          var op = me.$options.buttons[i],
            btn = me._createButton(i, op);
          btns.push(btn);
        }
      return btns;
    },
    _createMarkup: function () {
      var me = this,
        lobibox = $('<div class="lobibox"></div>');
      lobibox.attr('data-is-modal', me.$options.modal);
      var header = $('<div class="lobibox-header"></div>').append(
          '<span class="lobibox-title"></span>'
        ),
        body = $('<div class="lobibox-body"></div>');
      if (
        (lobibox.append(header),
        lobibox.append(body),
        me.$options.buttons && !$.isEmptyObject(me.$options.buttons))
      ) {
        var footer = $('<div class="lobibox-footer"></div>');
        footer.append(me._generateButtons()),
          lobibox.append(footer),
          Lobibox.base.OPTIONS.buttonsAlign.indexOf(me.$options.buttonsAlign) >
            -1 && footer.addClass('text-' + me.$options.buttonsAlign);
      }
      me.$el = lobibox.addClass(Lobibox.base.OPTIONS.modalClasses[me.$type]);
    },
    _setSize: function () {
      var me = this;
      me.setWidth(me.$options.width),
        me.setHeight(
          'auto' === me.$options.height
            ? me.$el.outerHeight()
            : me.$options.height
        );
    },
    _calculateBodyHeight: function (height) {
      var me = this,
        headerHeight = me.$el.find('.lobibox-header').outerHeight(),
        footerHeight = me.$el.find('.lobibox-footer').outerHeight();
      return (
        height -
        (headerHeight ? headerHeight : 0) -
        (footerHeight ? footerHeight : 0)
      );
    },
    _addBackdrop: function () {
      0 === $('.lobibox-backdrop').length &&
        $('body').append('<div class="lobibox-backdrop"></div>');
    },
    _triggerEvent: function (type) {
      var me = this;
      me.$options[type] &&
        'function' == typeof me.$options[type] &&
        me.$options[type](me);
    },
    _calculateWidth: function (width) {
      var me = this;
      return (
        (width = Math.min(
          Math.max(width, me.$options.width),
          $(window).outerWidth()
        )),
        width === $(window).outerWidth() &&
          (width -= 2 * me.$options.horizontalOffset),
        width
      );
    },
    _calculateHeight: function (height) {
      var me = this;
      return (
        console.log(me.$options.height),
        (height = Math.min(
          Math.max(height, me.$options.height),
          $(window).outerHeight()
        )),
        height === $(window).outerHeight() &&
          (height -= 2 * me.$options.verticalOffset),
        height
      );
    },
    _addCloseButton: function () {
      var me = this,
        closeBtn = $('<span class="btn-close">&times;</span>');
      me.$el.find('.lobibox-header').append(closeBtn),
        closeBtn.on('mousedown', function (ev) {
          ev.stopPropagation();
        }),
        closeBtn.on('click.lobibox', function () {
          me.destroy();
        });
    },
    _position: function () {
      var me = this;
      me._setSize();
      var pos = me._calculatePosition();
      me.setPosition(pos.left, pos.top);
    },
    _isMobileScreen: function () {
      return $(window).outerWidth() < 768;
    },
    _enableDrag: function () {
      var el = this.$el,
        heading = el.find('.lobibox-header');
      heading.on('mousedown.lobibox', function (ev) {
        el.attr('offset-left', ev.offsetX),
          el.attr('offset-top', ev.offsetY),
          el.attr('allow-drag', 'true');
      }),
        $(document).on('mouseup.lobibox', function () {
          el.attr('allow-drag', 'false');
        }),
        $(document).on('mousemove.lobibox', function (ev) {
          if ('true' === el.attr('allow-drag')) {
            var left =
                ev.clientX -
                parseInt(el.attr('offset-left'), 10) -
                parseInt(el.css('border-left-width'), 10),
              top =
                ev.clientY -
                parseInt(el.attr('offset-top'), 10) -
                parseInt(el.css('border-top-width'), 10);
            el.css({ left: left, top: top });
          }
        });
    },
    _setContent: function (msg) {
      var me = this;
      return me.$el.find('.lobibox-body').html(msg), me;
    },
    _beforeShow: function () {
      var me = this;
      me._triggerEvent('onShow');
    },
    _afterShow: function () {
      var me = this;
      Lobibox.counter++,
        me.$el.attr('data-nth', Lobibox.counter),
        me.$options.draggable ||
          $(window).on(
            'resize.lobibox-' + me.$el.attr('data-nth'),
            function () {
              me.refreshWidth(),
                me.refreshHeight(),
                me.$el
                  .css('left', '50%')
                  .css('margin-left', '-' + me.$el.width() / 2 + 'px'),
                me.$el
                  .css('top', '50%')
                  .css('margin-top', '-' + me.$el.height() / 2 + 'px');
            }
          ),
        me._triggerEvent('shown');
    },
    _beforeClose: function () {
      var me = this;
      me._triggerEvent('beforeClose');
    },
    _afterClose: function () {
      var me = this;
      me.$options.draggable ||
        $(window).off('resize.lobibox-' + me.$el.attr('data-nth')),
        me._triggerEvent('closed');
    },
    hide: function () {
      function callback() {
        me.$el.addClass('lobibox-hidden'),
          0 === $('.lobibox[data-is-modal=true]:not(.lobibox-hidden)').length &&
            ($('.lobibox-backdrop').remove(),
            $('body').removeClass(Lobibox.base.OPTIONS.bodyClass));
      }
      var me = this;
      return (
        me.$options.hideClass
          ? (me.$el.removeClass(me.$options.showClass),
            me.$el.addClass(me.$options.hideClass),
            setTimeout(function () {
              callback();
            }, me.$options.delayToRemove))
          : callback(),
        this
      );
    },
    destroy: function () {
      function callback() {
        me.$el.remove(),
          0 === $('.lobibox[data-is-modal=true]').length &&
            ($('.lobibox-backdrop').remove(),
            $('body').removeClass(Lobibox.base.OPTIONS.bodyClass)),
          me._afterClose();
      }
      var me = this;
      return (
        me._beforeClose(),
        me.$options.hideClass
          ? (me.$el
              .removeClass(me.$options.showClass)
              .addClass(me.$options.hideClass),
            setTimeout(function () {
              callback();
            }, me.$options.delayToRemove))
          : callback(),
        this
      );
    },
    setWidth: function (width) {
      var me = this;
      return me.$el.css('width', me._calculateWidth(width)), me;
    },
    refreshWidth: function () {
      this.setWidth(this.$el.width());
    },
    refreshHeight: function () {
      this.setHeight(this.$el.height());
    },
    setHeight: function (height) {
      var me = this;
      return (
        me.$el
          .css('height', me._calculateHeight(height))
          .find('.lobibox-body')
          .css('height', me._calculateBodyHeight(me.$el.innerHeight())),
        me
      );
    },
    setSize: function (width, height) {
      var me = this;
      return me.setWidth(width), me.setHeight(height), me;
    },
    setPosition: function (left, top) {
      var pos;
      return (
        'number' == typeof left && 'number' == typeof top
          ? (pos = { left: left, top: top })
          : 'string' == typeof left && (pos = this._calculatePosition(left)),
        this.$el.css(pos),
        this
      );
    },
    setTitle: function (title) {
      return this.$el.find('.lobibox-title').html(title);
    },
    getTitle: function () {
      return this.$el.find('.lobibox-title').html();
    },
    show: function () {
      var me = this,
        $body = $('body');
      if (
        (me._beforeShow(),
        me.$el.removeClass('lobibox-hidden'),
        $body.append(me.$el),
        me.$options.buttons)
      ) {
        var buttons = me.$el.find('.lobibox-footer').children();
        buttons[0].focus();
      }
      return (
        me.$options.modal &&
          ($body.addClass(Lobibox.base.OPTIONS.bodyClass), me._addBackdrop()),
        me.$options.delay !== !1 &&
          setTimeout(function () {
            me.destroy();
          }, me.$options.delay),
        me._afterShow(),
        me
      );
    },
  };
  (Lobibox.base = {}),
    (Lobibox.base.OPTIONS = {
      bodyClass: 'lobibox-open',
      modalClasses: {
        error: 'lobibox-error',
        success: 'lobibox-success',
        info: 'lobibox-info',
        warning: 'lobibox-warning',
        confirm: 'lobibox-confirm',
        progress: 'lobibox-progress',
        prompt: 'lobibox-prompt',
        default: 'lobibox-default',
        window: 'lobibox-window',
      },
      buttonsAlign: ['left', 'center', 'right'],
      buttons: {
        ok: {
          class: 'lobibox-btn lobibox-btn-default',
          text: 'OK',
          closeOnClick: !0,
        },
        cancel: {
          class: 'lobibox-btn lobibox-btn-cancel',
          text: 'Cancel',
          closeOnClick: !0,
        },
        yes: {
          class: 'lobibox-btn lobibox-btn-yes',
          text: 'Yes',
          closeOnClick: !0,
        },
        no: {
          class: 'lobibox-btn lobibox-btn-no',
          text: 'No',
          closeOnClick: !0,
        },
      },
      icons: {
        bootstrap: {
          confirm: 'glyphicon glyphicon-question-sign',
          success: 'glyphicon glyphicon-ok-sign',
          error: 'glyphicon glyphicon-remove-sign',
          warning: 'glyphicon glyphicon-exclamation-sign',
          info: 'glyphicon glyphicon-info-sign',
        },
        fontAwesome: {
          confirm: 'fa fa-question-circle',
          success: 'fa fa-check-circle',
          error: 'fa fa-times-circle',
          warning: 'fa fa-exclamation-circle',
          info: 'fa fa-info-circle',
        },
      },
    }),
    (Lobibox.base.DEFAULTS = {
      horizontalOffset: 5,
      verticalOffset: 5,
      width: 600,
      height: 'auto',
      closeButton: !0,
      draggable: !1,
      customBtnClass: 'lobibox-btn lobibox-btn-default',
      modal: !0,
      debug: !1,
      buttonsAlign: 'center',
      closeOnEsc: !0,
      delayToRemove: 200,
      delay: !1,
      baseClass: 'animated-super-fast',
      showClass: 'zoomIn',
      hideClass: 'zoomOut',
      iconSource: 'bootstrap',
      onShow: null,
      shown: null,
      beforeClose: null,
      closed: null,
    }),
    (LobiboxPrompt.prototype = $.extend({}, LobiboxBase, {
      constructor: LobiboxPrompt,
      _processInput: function (options) {
        var me = this,
          mergedOptions = LobiboxBase._processInput.call(me, options);
        return (
          (mergedOptions.buttons = {
            ok: Lobibox.base.OPTIONS.buttons.ok,
            cancel: Lobibox.base.OPTIONS.buttons.cancel,
          }),
          (options = $.extend(
            {},
            mergedOptions,
            LobiboxPrompt.DEFAULT_OPTIONS,
            options
          ))
        );
      },
      _init: function () {
        var me = this;
        LobiboxBase._init.call(me), me.show();
      },
      _afterShow: function () {
        var me = this;
        me._setContent(me._createInput())._position(),
          me.$input.focus(),
          LobiboxBase._afterShow.call(me);
      },
      _createInput: function () {
        var label,
          me = this;
        return (
          (me.$input = me.$options.multiline
            ? $('<textarea></textarea>').attr('rows', me.$options.lines)
            : $('<input type="' + me.$promptType + '"/>')),
          me.$input.addClass('lobibox-input').attr(me.$options.attrs),
          me.$options.value && me.setValue(me.$options.value),
          me.$options.label &&
            (label = $('<label>' + me.$options.label + '</label>')),
          $('<div></div>').append(label, me.$input)
        );
      },
      setValue: function (val) {
        return this.$input.val(val), this;
      },
      getValue: function () {
        return this.$input.val();
      },
      isValid: function () {
        var me = this,
          $error = me.$el.find('.lobibox-input-error-message');
        return me.$options.required && !me.getValue()
          ? (me.$input.addClass('invalid'),
            0 === $error.length &&
              (me.$el
                .find('.lobibox-body')
                .append(
                  '<p class="lobibox-input-error-message">' +
                    me.$options.errorMessage +
                    '</p>'
                ),
              me._position(),
              me.$input.focus()),
            !1)
          : (me.$input.removeClass('invalid'),
            $error.remove(),
            me._position(),
            me.$input.focus(),
            !0);
      },
    })),
    (LobiboxPrompt.DEFAULT_OPTIONS = {
      width: 400,
      attrs: {},
      value: '',
      multiline: !1,
      lines: 3,
      type: 'text',
      label: '',
      required: !0,
      errorMessage: 'The field is required',
    }),
    (LobiboxConfirm.prototype = $.extend({}, LobiboxBase, {
      constructor: LobiboxConfirm,
      _processInput: function (options) {
        var me = this,
          mergedOptions = LobiboxBase._processInput.call(me, options);
        return (
          (mergedOptions.buttons = {
            yes: Lobibox.base.OPTIONS.buttons.yes,
            no: Lobibox.base.OPTIONS.buttons.no,
          }),
          (options = $.extend(
            {},
            mergedOptions,
            Lobibox.confirm.DEFAULTS,
            options
          ))
        );
      },
      _init: function () {
        var me = this;
        LobiboxBase._init.call(me), me.show();
      },
      _afterShow: function () {
        var me = this,
          d = $('<div></div>');
        me.$options.iconClass &&
          d.append(
            $('<div class="lobibox-icon-wrapper"></div>').append(
              '<i class="lobibox-icon ' + me.$options.iconClass + '"></i>'
            )
          ),
          d.append(
            '<div class="lobibox-body-text-wrapper"><span class="lobibox-body-text">' +
              me.$options.msg +
              '</span></div>'
          ),
          me._setContent(d.html()),
          me._position(),
          LobiboxBase._afterShow.call(me);
      },
    })),
    (Lobibox.confirm.DEFAULTS = { title: 'Question', width: 500 }),
    (LobiboxAlert.prototype = $.extend({}, LobiboxBase, {
      constructor: LobiboxAlert,
      _processInput: function (options) {
        var me = this,
          mergedOptions = LobiboxBase._processInput.call(me, options);
        return (
          (mergedOptions.buttons = { ok: Lobibox.base.OPTIONS.buttons.ok }),
          (options = $.extend(
            {},
            mergedOptions,
            Lobibox.alert.OPTIONS[me.$type],
            Lobibox.alert.DEFAULTS,
            options
          ))
        );
      },
      _init: function () {
        var me = this;
        LobiboxBase._init.call(me), me.show();
      },
      _afterShow: function () {
        var me = this,
          d = $('<div></div>');
        me.$options.iconClass &&
          d.append(
            $('<div class="lobibox-icon-wrapper"></div>').append(
              '<i class="lobibox-icon ' + me.$options.iconClass + '"></i>'
            )
          ),
          d.append(
            '<div class="lobibox-body-text-wrapper"><span class="lobibox-body-text">' +
              me.$options.msg +
              '</span></div>'
          ),
          me._setContent(d.html()),
          me._position(),
          LobiboxBase._afterShow.call(me);
      },
    })),
    (Lobibox.alert.OPTIONS = {
      warning: { title: 'Warning' },
      info: { title: 'Information' },
      success: { title: 'Success' },
      error: { title: 'Error' },
    }),
    (Lobibox.alert.DEFAULTS = {}),
    (LobiboxProgress.prototype = $.extend({}, LobiboxBase, {
      constructor: LobiboxProgress,
      _processInput: function (options) {
        var me = this,
          mergedOptions = LobiboxBase._processInput.call(me, options);
        return (options = $.extend(
          {},
          mergedOptions,
          Lobibox.progress.DEFAULTS,
          options
        ));
      },
      _init: function () {
        var me = this;
        LobiboxBase._init.call(me), me.show();
      },
      _afterShow: function () {
        var me = this;
        me.$progressBarElement = me.$options.progressTpl
          ? $(me.$options.progressTpl)
          : me._createProgressbar();
        var label;
        me.$options.label &&
          (label = $('<label>' + me.$options.label + '</label>'));
        var innerHTML = $('<div></div>').append(label, me.$progressBarElement);
        me._setContent(innerHTML),
          me._position(),
          LobiboxBase._afterShow.call(me);
      },
      _createProgressbar: function () {
        var me = this,
          outer = $(
            '<div class="lobibox-progress-bar-wrapper lobibox-progress-outer"></div>'
          ).append(
            '<div class="lobibox-progress-bar lobibox-progress-element"></div>'
          );
        return (
          me.$options.showProgressLabel &&
            outer.append(
              '<span class="lobibox-progress-text" data-role="progress-text"></span>'
            ),
          outer
        );
      },
      setProgress: function (progress) {
        var me = this;
        if (100 !== me.$progress)
          return (
            (progress = Math.min(100, Math.max(0, progress))),
            (me.$progress = progress),
            me._triggerEvent('progressUpdated'),
            100 === me.$progress && me._triggerEvent('progressCompleted'),
            me.$el
              .find('.lobibox-progress-element')
              .css('width', progress.toFixed(1) + '%'),
            me.$el
              .find('[data-role="progress-text"]')
              .html(progress.toFixed(1) + '%'),
            me
          );
      },
      getProgress: function () {
        return this.$progress;
      },
    })),
    (Lobibox.progress.DEFAULTS = {
      width: 500,
      showProgressLabel: !0,
      label: '',
      progressTpl: !1,
      progressUpdated: null,
      progressCompleted: null,
    }),
    (LobiboxWindow.prototype = $.extend({}, LobiboxBase, {
      constructor: LobiboxWindow,
      _processInput: function (options) {
        var me = this,
          mergedOptions = LobiboxBase._processInput.call(me, options);
        return (
          options.content &&
            'function' == typeof options.content &&
            (options.content = options.content()),
          options.content instanceof jQuery &&
            (options.content = options.content.clone()),
          (options = $.extend(
            {},
            mergedOptions,
            Lobibox.window.DEFAULTS,
            options
          ))
        );
      },
      _init: function () {
        var me = this;
        LobiboxBase._init.call(me),
          me.setContent(me.$options.content),
          me.$options.url && me.$options.autoload
            ? (me.$options.showAfterLoad || me.show(),
              me.load(function () {
                me.$options.showAfterLoad && me.show();
              }))
            : me.show();
      },
      _afterShow: function () {
        var me = this;
        me._position(), LobiboxBase._afterShow.call(me);
      },
      setParams: function (params) {
        var me = this;
        return (me.$options.params = params), me;
      },
      getParams: function () {
        var me = this;
        return me.$options.params;
      },
      setLoadMethod: function (method) {
        var me = this;
        return (me.$options.loadMethod = method), me;
      },
      getLoadMethod: function () {
        var me = this;
        return me.$options.loadMethod;
      },
      setContent: function (content) {
        var me = this;
        return (
          (me.$options.content = content),
          me.$el.find('.lobibox-body').html('').append(content),
          me
        );
      },
      getContent: function () {
        var me = this;
        return me.$options.content;
      },
      setUrl: function (url) {
        return (this.$options.url = url), this;
      },
      getUrl: function () {
        return this.$options.url;
      },
      load: function (callback) {
        var me = this;
        return me.$options.url
          ? ($.ajax(me.$options.url, {
              method: me.$options.loadMethod,
              data: me.$options.params,
            }).done(function (res) {
              me.setContent(res),
                callback && 'function' == typeof callback && callback(res);
            }),
            me)
          : me;
      },
    })),
    (Lobibox.window.DEFAULTS = {
      width: 480,
      height: 600,
      content: '',
      url: '',
      draggable: !0,
      autoload: !0,
      loadMethod: 'GET',
      showAfterLoad: !0,
      params: {},
    });
})(),
  (Math.randomString = function (n) {
    for (
      var text = '',
        possible =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        i = 0;
      n > i;
      i++
    )
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  });
var Lobibox = Lobibox || {};
!(function () {
  var LobiboxNotify = function (type, options) {
    (this.$type = null), (this.$options = null), (this.$el = null);
    var me = this,
      _processInput = function (options) {
        return (
          ('mini' === options.size || 'large' === options.size) &&
            (options = $.extend(
              {},
              Lobibox.notify.OPTIONS[options.size],
              options
            )),
          (options = $.extend(
            {},
            Lobibox.notify.OPTIONS[me.$type],
            Lobibox.notify.DEFAULTS,
            options
          )),
          'mini' !== options.size && options.title === !0
            ? (options.title = Lobibox.notify.OPTIONS[me.$type].title)
            : 'mini' === options.size &&
              options.title === !0 &&
              (options.title = !1),
          options.icon === !0 &&
            (options.icon =
              Lobibox.notify.OPTIONS.icons[options.iconSource][me.$type]),
          options.sound === !0 &&
            (options.sound = Lobibox.notify.OPTIONS[me.$type].sound),
          options.sound &&
            (options.sound =
              options.soundPath + options.sound + options.soundExt),
          options
        );
      },
      _appendInWrapper = function ($el, $wrapper) {
        if ('normal' === me.$options.size)
          $wrapper.hasClass('bottom')
            ? $wrapper.prepend($el)
            : $wrapper.append($el);
        else if ('mini' === me.$options.size)
          $wrapper.hasClass('bottom')
            ? $wrapper.prepend($el)
            : $wrapper.append($el);
        else if ('large' === me.$options.size) {
          var tabPane = _createTabPane().append($el),
            $li = _createTabControl(tabPane.attr('id'));
          $wrapper.find('.lb-notify-wrapper').append(tabPane),
            $wrapper.find('.lb-notify-tabs').append($li),
            _activateTab($li),
            $li.find('>a').click(function () {
              _activateTab($li);
            });
        }
      },
      _activateTab = function ($li) {
        $li.closest('.lb-notify-tabs').find('>li').removeClass('active'),
          $li.addClass('active');
        var $current = $($li.find('>a').attr('href'));
        $current
          .closest('.lb-notify-wrapper')
          .find('>.lb-tab-pane')
          .removeClass('active'),
          $current.addClass('active');
      },
      _createTabControl = function (tabPaneId) {
        var $li = $('<li></li>', {
          class: Lobibox.notify.OPTIONS[me.$type]['class'],
        });
        return (
          $('<a></a>', { href: '#' + tabPaneId })
            .append('<i class="tab-control-icon ' + me.$options.icon + '"></i>')
            .appendTo($li),
          $li
        );
      },
      _createTabPane = function () {
        return $('<div></div>', {
          class: 'lb-tab-pane',
          id: Math.randomString(10),
        });
      },
      _createNotifyWrapper = function () {
        var $wrapper,
          selector =
            ('large' === me.$options.size
              ? '.lobibox-notify-wrapper-large'
              : '.lobibox-notify-wrapper') +
            '.' +
            me.$options.position.replace(/\s/gi, '.');
        return (
          ($wrapper = $(selector)),
          0 === $wrapper.length &&
            (($wrapper = $('<div></div>')
              .addClass(selector.replace(/\./g, ' ').trim())
              .appendTo($('body'))),
            'large' === me.$options.size &&
              $wrapper
                .append($('<ul class="lb-notify-tabs"></ul>'))
                .append($('<div class="lb-notify-wrapper"></div>'))),
          $wrapper
        );
      },
      _createNotify = function () {
        var $iconEl,
          $innerIconEl,
          $iconWrapper,
          $body,
          $msg,
          OPTS = Lobibox.notify.OPTIONS,
          $notify = $('<div></div>', {
            class:
              'lobibox-notify ' +
              OPTS[me.$type]['class'] +
              ' ' +
              OPTS['class'] +
              ' ' +
              me.$options.showClass,
          });
        return (
          ($iconWrapper = $(
            '<div class="lobibox-notify-icon-wrapper"></div>'
          ).appendTo($notify)),
          ($iconEl = $('<div class="lobibox-notify-icon"></div>').appendTo(
            $iconWrapper
          )),
          ($innerIconEl = $('<div></div>').appendTo($iconEl)),
          me.$options.img
            ? $innerIconEl.append('<img src="' + me.$options.img + '"/>')
            : me.$options.icon
            ? $innerIconEl.append(
                '<div class="icon-el"><i class="' +
                  me.$options.icon +
                  '"></i></div>'
              )
            : $notify.addClass('without-icon'),
          ($msg = $(
            '<div class="lobibox-notify-msg">' + me.$options.msg + '</div>'
          )),
          me.$options.messageHeight !== !1 &&
            $msg.css('max-height', me.$options.messageHeight),
          ($body = $('<div></div>', { class: 'lobibox-notify-body' })
            .append($msg)
            .appendTo($notify)),
          me.$options.title &&
            $body.prepend(
              '<div class="lobibox-notify-title">' + me.$options.title + '<div>'
            ),
          _addCloseButton($notify),
          ('normal' === me.$options.size || 'mini' === me.$options.size) &&
            (_addCloseOnClick($notify), _addDelay($notify)),
          me.$options.width &&
            $notify.css('width', _calculateWidth(me.$options.width)),
          $notify
        );
      },
      _addCloseButton = function ($el) {
        me.$options.closable &&
          $('<span class="lobibox-close">&times;</span>')
            .click(function (ev) {
              ev.preventDefault(), ev.stopPropagation(), me.remove();
            })
            .appendTo($el);
      },
      _addCloseOnClick = function ($el) {
        me.$options.closeOnClick &&
          $el.click(function () {
            me.remove();
          });
      },
      _addDelay = function ($el) {
        if (me.$options.delay) {
          if (me.$options.delayIndicator) {
            var delay = $(
              '<div class="lobibox-delay-indicator"><div></div></div>'
            );
            $el.append(delay);
          }
          var time = 0,
            interval = 1e3 / 30,
            currentTime = new Date().getTime(),
            timer = setInterval(function () {
              me.$options.continueDelayOnInactiveTab
                ? (time = new Date().getTime() - currentTime)
                : (time += interval);
              var width = (100 * time) / me.$options.delay;
              width >= 100 &&
                ((width = 100), me.remove(), (timer = clearInterval(timer))),
                me.$options.delayIndicator &&
                  delay.find('div').css('width', width + '%');
            }, interval);
          me.$options.pauseDelayOnHover &&
            $el
              .on('mouseenter.lobibox', function () {
                interval = 0;
              })
              .on('mouseleave.lobibox', function () {
                interval = 1e3 / 30;
              });
        }
      },
      _findTabToActivate = function ($li) {
        var $itemToActivate = $li.prev();
        return (
          0 === $itemToActivate.length && ($itemToActivate = $li.next()),
          0 === $itemToActivate.length ? null : $itemToActivate
        );
      },
      _calculateWidth = function (width) {
        return (width = Math.min($(window).outerWidth(), width));
      };
    (this.remove = function () {
      me.$el.removeClass(me.$options.showClass).addClass(me.$options.hideClass);
      var parent = me.$el.parent(),
        wrapper = parent.closest('.lobibox-notify-wrapper-large'),
        href = '#' + parent.attr('id'),
        $li = wrapper.find('>.lb-notify-tabs>li:has(a[href="' + href + '"])');
      return (
        $li
          .addClass(Lobibox.notify.OPTIONS['class'])
          .addClass(me.$options.hideClass),
        setTimeout(function () {
          if ('normal' === me.$options.size || 'mini' === me.$options.size)
            me.$el.remove();
          else if ('large' === me.$options.size) {
            var $newLi = _findTabToActivate($li);
            $newLi && _activateTab($newLi), $li.remove(), parent.remove();
          }
          var list = Lobibox.notify.list,
            ind = list.indexOf(me);
          list.splice(ind, 1);
          var next = list[ind];
          next && next.$options.showAfterPrevious && next._init();
        }, 500),
        me
      );
    }),
      (me._init = function () {
        var $notify = _createNotify();
        if (
          ('mini' === me.$options.size && $notify.addClass('notify-mini'),
          'string' == typeof me.$options.position)
        ) {
          var $wrapper = _createNotifyWrapper();
          _appendInWrapper($notify, $wrapper),
            $wrapper.hasClass('center') &&
              $wrapper.css('margin-left', '-' + $wrapper.width() / 2 + 'px');
        } else
          $('body').append($notify),
            $notify.css({
              position: 'fixed',
              left: me.$options.position.left,
              top: me.$options.position.top,
            });
        if (((me.$el = $notify), me.$options.sound)) {
          var snd = new Audio(me.$options.sound);
          snd.play();
        }
        me.$options.rounded && me.$el.addClass('rounded'),
          me.$el.on('click.lobibox', function (ev) {
            me.$options.onClickUrl &&
              (window.location.href = me.$options.onClickUrl),
              me.$options.onClick &&
                'function' == typeof me.$options.onClick &&
                me.$options.onClick.call(me, ev);
          }),
          me.$el.data('lobibox', me);
      }),
      (this.$type = type),
      (this.$options = _processInput(options)),
      (me.$options.showAfterPrevious && 0 !== Lobibox.notify.list.length) ||
        this._init();
  };
  (Lobibox.notify = function (type, options) {
    if (['default', 'info', 'warning', 'error', 'success'].indexOf(type) > -1) {
      var lobibox = new LobiboxNotify(type, options);
      return Lobibox.notify.list.push(lobibox), lobibox;
    }
  }),
    (Lobibox.notify.list = []),
    (Lobibox.notify.closeAll = function () {
      var list = Lobibox.notify.list;
      for (var i in list) list[i].remove();
    }),
    (Lobibox.notify.DEFAULTS = {
      title: !0,
      size: 'normal',
      soundPath: 'sounds/',
      soundExt: '.ogg',
      showClass: 'fadeInDown',
      hideClass: 'zoomOut',
      icon: !0,
      msg: '',
      img: null,
      closable: !0,
      hideCloseButton: !1,
      delay: 5e3,
      delayIndicator: !0,
      closeOnClick: !0,
      width: 400,
      sound: !0,
      position: 'bottom right',
      iconSource: 'bootstrap',
      rounded: !1,
      messageHeight: 60,
      pauseDelayOnHover: !0,
      onClickUrl: null,
      showAfterPrevious: !1,
      continueDelayOnInactiveTab: !0,
      onClick: null,
    }),
    (Lobibox.notify.OPTIONS = {
      class: 'animated-fast',
      large: { width: 500, messageHeight: 96 },
      mini: { class: 'notify-mini', messageHeight: 32 },
      default: { class: 'lobibox-notify-default', title: 'Default', sound: !1 },
      success: {
        class: 'lobibox-notify-success',
        title: 'Success',
        sound: 'sound2',
      },
      error: { class: 'lobibox-notify-error', title: 'Error', sound: 'sound4' },
      warning: {
        class: 'lobibox-notify-warning',
        title: 'Warning',
        sound: 'sound5',
      },
      info: {
        class: 'lobibox-notify-info',
        title: 'Information',
        sound: 'sound6',
      },
      icons: {
        bootstrap: {
          success: 'glyphicon glyphicon-ok-sign',
          error: 'glyphicon glyphicon-remove-sign',
          warning: 'glyphicon glyphicon-exclamation-sign',
          info: 'glyphicon glyphicon-info-sign',
        },
        fontAwesome: {
          success: 'fa fa-check-circle',
          error: 'fa fa-times-circle',
          warning: 'fa fa-exclamation-circle',
          info: 'fa fa-info-circle',
        },
      },
    });
})();
