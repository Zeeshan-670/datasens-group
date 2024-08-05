const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

function showAlert() {
  Swal.fire({
    title: 'Success!',
    icon: 'success',
    confirmButtonText: 'OK',
  });
}

function sendEmail(name, email, companyName, phoneNo, SelectService, detail) {
  $.ajax({
    type: 'GET',
    // url: `./server/sendEmail.php?name=${name}&email=${email}&companyName=${companyName}&phoneNo=${phoneNo}&detail=${detail}`,
    url: `./server/sendEmail.php?name=${name}&email=${email}&companyName=${companyName}&phoneNo=${phoneNo}&SelectService=${SelectService}&detail=${detail}`,
    success: function (response) {
      //   showAlert();
      console.log(response);
      // showAlert();
      console.log('success');
    },
    error: function (error) {
      console.log('Error:', error);
    },
  });
}

function resetForm() {
  // Reset the form fields
  $('#name').val('');
  $('#email').val('');
  $('#companyName').val('');
  $('#phoneNo').val('');
  $('#SelectService').val('');
  $('#detail').val('');
}

function handleModal(id, action) {
  var modalElement = document.getElementById(id);

  // Initialize the modal with static backdrop and keyboard options
  var modal = new bootstrap.Modal(modalElement, {
    backdrop: 'static',
    keyboard: false,
  });

  // Show the modal
  if (action == 'show') {
    modal.show();
  } else {
    modal.hide();
  }
}

function validateAndSubmit() {
  // Validate each field
  if (
    !validateField('name', 'Name') ||
    !validateField('email', 'Email') ||
    !validateField('companyName', 'Company Name') ||
    !validateField('detail', 'Detial Message')
  ) {
    return; // Do not submit if any field is empty
  }

  let formData = {
    name: $('#name').val(),
    email: $('#email').val(),
    companyName: $('#companyName').val(),
    phoneNo: $('#phoneNo').val(),
    SelectService: $('#SelectService').val(),
    detail: $('#detail').val(),
  };

  let name = formData.name.trim();
  let email = formData.email.trim();
  let companyName = formData.companyName.trim();
  let phoneNo = formData.phoneNo.trim();
  let SelectService = formData.SelectService.trim();
  let detail = formData.detail.trim();
  sendEmail(name, email, companyName, phoneNo, SelectService, detail);
  // Clear form fields
  handleModal('additionalInfo', 'show');
}

function showNotification(type, message) {
  Lobibox.notify(type, {
    pauseDelayOnHover: true,
    size: 'mini',
    lines: 5,
    rounded: true,
    icon:
      type === 'success'
        ? 'fa-solid fa-circle-check'
        : 'fa-solid fa-circle-xmark',
    delayIndicator: false,
    continueDelayOnInactiveTab: false,
    position: 'top right',
    msg: message,
    sound: false,
  });
}

function validateField(fieldId, fieldName) {
  var fieldValue = $('#' + fieldId).val();
  if (fieldValue.trim() === '') {
    Toast.fire({
      icon: 'error',
      title: fieldName + ' cannot be empty!',
    });
    return false;
  }
  return true;
}

$(document).ready(function () {
  $('.nav-tabs > li a[title]').tooltip();
  //Wizard
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var $target = $(e.target);
    if ($target.hasClass('disabled')) {
      return false;
    }

    // handle with prgressbar
    var step = $(e.target).data('step');
    var percent = (parseInt(step) / 6) * 100;
    $('.progress-bar').css({ width: percent + '%' });
    // $(".progress-bar").text("Step " + step + " of 6");
  });

  $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
    var $target = $(e.target);
    $target.parent().addClass('active');
  });

  $('a[data-toggle="tab"]').on('hide.bs.tab', function (e) {
    var $target = $(e.target);
    $target.parent().removeClass('active');
  });

  $('.prev-step').click(function (e) {
    var $active = $('.wizard .nav-tabs li a.active');
    prevTab($active);
  });
});

function nextTab(elem) {
  $(elem).parent().next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
  $(elem).parent().prev().find('a[data-toggle="tab"]').click();
}

// Select the checkboxes and the next button
const checkboxes = document.querySelectorAll('.bnCheckBox');

// Add event listener to each checkbox
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function (e) {
    if (document.querySelector('#check3').checked) {
      document.getElementById('othersInput').style.display = 'block';
    } else {
      document.getElementById('othersInput').style.display = 'none';
      document.getElementById('othersInput').children[1].value = '';
    }
  });
});
// Usage

function addRadioChangeListener(radioSelector, detailsElementId) {
  const radiobuttons = document.querySelectorAll(radioSelector);
  radiobuttons.forEach((radiobtn) => {
    radiobtn.addEventListener('change', function (e) {
      //console.log(e.target.value);
      // console.log(e.target.value == 'Others');
      const detailsElement = document.getElementById(detailsElementId);
      if (e.target.value == 'Others') {
        detailsElement.style.display = 'block';
      } else {
        detailsElement.style.display = 'none';
        detailsElement.children[1].value = '';
      }
    });
  });
}

function handleNext() {
  var $active = $('.wizard .nav-tabs li a.active');
  $active.parent().next().children().removeClass('disabled');
  $active.parent().addClass('done');
  nextTab($active);
}

// Usage
addRadioChangeListener('.radiobox', 'othersInput2');
addRadioChangeListener('.radiobox1', 'othersInput3');
addRadioChangeListener('.radiobox2', 'othersInput4');
addRadioChangeListener('.radiobox3', 'othersInput5');
addRadioChangeListener('.radiobox4', 'othersInput6');

let formData = {};
function handleFormSubmit(id) {
  var checkboxes = document.querySelectorAll('.bnCheckBox');
  var anyChecked = Array.from(checkboxes).some((checkbox) => checkbox.checked);

  console.log($('#check3').is(':checkbox'));

  var radioButtons = {
    step2: 'businessType',
    step3: 'industry',
    step4: 'timeline',
    step5: 'budget',
    step6: 'hiringDecision',
  };

  if (id === 'step1') {
    if (anyChecked) {
      const othersInputId = `othersInput`;
      const othersInput = document.getElementById(`otherInputField`);
      if (
        document.querySelector('#check3').checked &&
        othersInput &&
        othersInput.value.trim() === ''
      ) {
        showNotification(
          'error',
          `Please fill in the input field for "Others" before proceeding.`
        );

        return;
      }
      document.querySelector('#check3').value = othersInput.value.trim();
      var checkedValues = Array.from(document.querySelectorAll('.bnCheckBox'))
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);
      formData.bussinessNeed = checkedValues.toString().replace(',', '-');
      // console.log(formData);
      handleNext();
    } else {
      showNotification('error', 'No checkboxes are checked.');
    }
  } else if (radioButtons[id]) {
    // console.log(radioButtons[id]);
    if ($(`input[name="${radioButtons[id]}"]:checked`).length > 0) {
      if (
        id === 'step2' ||
        id === 'step3' ||
        id === 'step4' ||
        id === 'step5' ||
        id === 'step6'
      ) {
        const othersInputId = `othersInput${id.charAt(id.length - 1)}`;
        const othersInput = document.getElementById(
          `otherInputField${id.charAt(id.length - 1)}`
        );

        if (
          document.querySelector(
            `input[name="${radioButtons[id]}"][value="Others"]:checked`
          ) &&
          othersInput &&
          othersInput.value.trim() === ''
        ) {
          showNotification(
            'error',
            `Please fill in the input field for "Others" before proceeding.`
          );
          return;
        }
      }

      let inputRadio = $(`input[name="${radioButtons[id]}"]:checked`).val();
      if (radioButtons[id] == 'businessType') {
        if (inputRadio == 'Others') {
          inputRadio = document
            .getElementById(`otherInputField${id.charAt(id.length - 1)}`)
            .value.trim();
        }
        formData.businessType = inputRadio;
      } else if (radioButtons[id] == 'industry') {
        if (inputRadio == 'Others') {
          inputRadio = document
            .getElementById(`otherInputField${id.charAt(id.length - 1)}`)
            .value.trim();
        }
        formData.industry = inputRadio;
      } else if (radioButtons[id] == 'timeline') {
        if (inputRadio == 'Others') {
          inputRadio = document
            .getElementById(`otherInputField${id.charAt(id.length - 1)}`)
            .value.trim();
        }
        formData.timeline = inputRadio;
      } else if (radioButtons[id] == 'budget') {
        if (inputRadio == 'Others') {
          inputRadio = document
            .getElementById(`otherInputField${id.charAt(id.length - 1)}`)
            .value.trim();
        }
        formData.budget = inputRadio;
      } else if (radioButtons[id] == 'hiringDecision') {
        if (inputRadio == 'Others') {
          inputRadio = document
            .getElementById(`otherInputField${id.charAt(id.length - 1)}`)
            .value.trim();
        }
        formData.hiringDecision = inputRadio;
        formData.username = document.getElementById('name').value;
        formData.email = document.getElementById('email').value;
        console.log('formData');
        console.log(formData);
        apiCall(formData);
      }
      handleNext();
    } else {
      showNotification('error', 'No radio button is checked.');
    }
  }
}

function apiCall(data) {
  $.ajax({
    url: './server/additional.php',
    type: 'POST',
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    data: $.param(data),
    success: function (response) {
      console.log(response);
      // handleModal('additionalInfo', 'hide');
      // window.location.href = 'https://datasensegroup.co/thanks.html';
      // resetForm();
    },
    error: function (xhr, status, error) {
      console.error('Error: ' + status + ' ' + error);
    }
  });
}
