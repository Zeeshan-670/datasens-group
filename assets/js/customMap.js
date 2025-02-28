 'use strict';

      class WorldMap extends HTMLElement {
        static get TEMPLATE() {
          return `
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 673 343'>
          <g fill='#55595c' fill-rule='evenodd'>
            <path d='M110 24v1h1l1-1h2v-1-1h1v-1a1 1 0 0 0-1-1v1h-1-2l-2 1v2h1zm34-2h-3v1h6v-1h-1-2zm27 13v-1h-1v1h-1l-1 1v2l2 1 1-1h3l1-1h1v-1-1h-1a1 1 0 0 1 0-1v1l-1-1h-1l-1 1h-1z'></path>
            <path d='M137 20h2v1h-1l1 1h4v-1l-1-1h1l-2-1v1-1h-2l-2-1v1c0 1 0 0 0 0h-1v1h1zm-15-2h1v0h1v1h0v1h4v-1 1h3v1h1l1 1h1l1 1v-1-1l-1-1v-1h-2l-1-1h-3l-1-1-1 1h-1v-1h-2-1v1zm13 7v1h-1v-1-1l-1 1h1v1h-2 1v2h1-1l-2-2h-1v2h1v1h-2v1h2v-1l2 1 1-1v1h-1-1v1h7v-1h-1v-3h-1v-1h-1v-1a2 2 0 0 1 0-1h-1v1zm45 301v-2-1h-2c0 1 0 0 0 0v2h1l-1 1h0l1 1v0l1 1v-2zM103 27v1h1l-1 1v-1 1h-1 2l-2 1 1 1h1v-1h1v1-1 1h2l-1-1h1v-1 1h6v-1h1v1h-1l-1 1h-3v1h-1-1l1 1h4v-1h1v-1l1 1v-1h5v-1l1 1h2l1-1-1-2v-1h-1v-1 3h-1v-1h-1v-1-1l-1 1v-1h-1l-1-1v-1h-1v3h1l-1 1h1v1h-4v-1h-3v-1h-5-1zm30 22a1 1 0 0 0-1-1v-1h-1-1l-1-1-1-1s1 0 0 0v1l-2-1-1-3a4 4 0 0 1-1 0v-1l-1-1h-1-2l-1 1-1 1v-1-1l1-1h-1v-1h-1v-1 1l-1-1a1 1 0 0 1-1 1v1h-1c0-2-2-1-2-2h-1v3h-2v-1h-1v-1-2h-2l-1 1h-3v1h-1l-1 1v1h-1v1h-1v1h1v1l1-1 1 1a3 3 0 0 1-1 0h4v-1h2v1h-4v1h-2l1 1h8l1-1v1h2v1h-6v1h-4v2h1v1h4v1l1 1h6v-1h3l1-1h1l2-1 1-1h1v2h1v1l1-1 1 1h3l1-1h1-1v-1h-1v1l-1-1-1-1h2v1h2v-1h-1 2v1h1z'></path>
            <path d='M90 43v1h2v-1l1-1h4v-1-1l1-1h1v-1h1l1-1h1l1-1v1-1h2v-1h-1a1 1 0 0 0 0-1h-4-2l-2-1-2-1-1 1h-3v1h-2l1 1v3h-1l1 1v1h-1v1l1 1 1 1zm-1-16h1v1h4v-1l1 1h1v-1-1h1v0h1v-1l1-1h1l-1 1v1h1l2-1v-1h1l1-1v-1l-1-1h-2v1h-5l-1 1-1 1h-1l-1 1v1h-3v1zM4 67v-1H2a6 6 0 0 0-1 0H0v1h3l1 1h1v-1h1-2zm409-25l1 2h1v-1h2v1h2v1h-1-1v1h1-1v1l1-1h1v1h1v-1h1v1l2-1v1-1h3l-1-1h-1l-1-1h-1v-1h-1v-2h1l-1-1h1v-1-1h-1v-1h-2 4v-1h1v-1h1v-1 1l1-1 1-1h-1 1l1-1h2v-1h2v-1h3l2-1v0h4v-1h2v-1h1v-1-1h-2v1h-1-1v1h-3-1v1h-1-1v-1h-2v1h-3v1h-1l-2 1h-1a2 2 0 0 0-1 0h-1v1h-1-1 1l-1 1h-1v1h-1v1h-2v1h-1 3v1h-1-1v1h1-1v1h-1v1h-1v2h-1l-1 1zm-2-30l-2 1a5 5 0 0 1-1 0h-3 1v1h1v1h2v-1h3l-1-1h3v-1l-1 1v-1h-2zm240 34l1 1v-1h1l3 1v-1-1h-3v-1h-1v1h-1l-1 1h1zm-74-9h1v1h6v-1l-1-1h-1v-1h-2v1h-1l-1 1h-1zm14-5h5v-1h1v-1a8 8 0 0 0-2 0h-1-3v2zm-18 1h1v1l1 1 1-2 2-1-1-2v-1h-2v-1l-1 1-1 1v3zm-70-12v1h2v-1h1v-1 1h3l1-1h2v-1l-1-1h-2v-1h-1v0l-1-1c0 1 0 1 0 0h-1v3h-1 1-1v1h-1l-1 1zm43 17h2v2l1-1h2v-1h1v-1h-1l-2-1h-3l-1 1 1 1zm-53-23h5-2l-1 1v1h-2v1l1-1v1-1h1v1h3l2 1v-1l1 1 2-1v-1h1v-2h-1v1h-1v-1a1 1 0 0 1-1 0h-2 1l1-2h-2v-1h-1v-1h-2l-2 1-1 1h1-1v1h-2 1l1 1zm-351-5h-1v1h5v1l-3 1-1 1h4l1 1h-2v-1h-2v1l1 1h3v1h-2v1h2l1-1h2v1h-3v1h1v2h3v-1 1h1v-1h1v1-1-1h2v-1h1v1l1-1h4v-1h1v-1h-1v-1l1 1v1h1v-1l1 1h-2l4 1v0h-4-3l-1 1h-2v2h2v-1h1v1h2v-1l1-1v1l-1 1h1v1h3v1h-1v1l-1-1h-2v-1h-1l-2-1v1h-2l1 1v1h-3v1h-2v1h1v1-1h1v1h2v-1h1v1h1v-1l1 1h3v-1h-1 1l1-1v1h4v-1 1h2v1h2v-1h3v-1s0 1 0 0h1-2v-1h-1l-2-1h4v-2h5-1v-1h1v-1h2v-1h-5l-1 1v-1h1l-2-1h2v1l1-1h1l-2-1h3v1h1v-1h-4v-1l2 1v-1l1 1h1v-1l1 1 1-1v1h3v-1h1v-1h1-1l1-1v1h1l1-1h1l-1-1h1v1h1v-1h2v-1h1l3-1h2l2-1V8l-3 1h-2 2l1-1h2V7h2l1-1h2V5h-3-1V4h-1-1V3h-3-1l-1 1h-1v1h-3v0h-1 3V4h1l1-1h-1V2l-1 1h-4V2v1a7 7 0 0 0-2-1l-1 1v1-1l-3 1v1l-1-1h-7l1 1h1l1 1h-1V5h-2-2V4v1h-1v1h-1V5h-1v1h2l1 1h-1l-2-1h-2V5a2 2 0 0 0-1 0v1l1 1-1-1h-1v1l-1-1h-1l-2-1h-2v1h-1-1-1v1h4v1h1-1V7l-1 1v1l-1-1-1-1v1h-1V7h-1-2v1h-1-1-2-1v1h3-2 3l-3 1v1l1-1h3l1-1v1h-3l-1 1 1 1v-1h7v1h3v-1l1-1v1h7l3-1h2V9v1h2V9h1l-3 1h2v1h-1a1 1 0 0 0-1 0h-2v1h3-4v1l-2-1v0l-3 1a1 1 0 0 1 0 1v1h3-3v-1l-1-1h-1v-1h-2l-3 1v1h-1v1h-1v-2-1h-1v1h-1v-1 1h-4-1v-1h-1l-1-2h-1V9h-7 2l1 1v1h-1v-1h-1zm23 16l-1-1h1v1zm2-4h1l1 1h-2v-1zm20 22v-1h-1v-1h-1v2h-1v-1 1-1h-1v-1l-1 1v-1h-1 2l-1-2h-1 1v-1h-4-1l-1-1h-2-1v1h1l1 1a2 2 0 0 1-2-1v1h-1v1-2l-1 1h-1 1v-1h-1v1h-1v1h-2 1v-1-1l-1-1 1-1v-1-1h-4v1h-1a1 1 0 0 0-1 0v1h-1v2h1l1 1h-1-2v1h2l-1 1 1 1a2 2 0 0 1-1 0h-3l2-1-1-1v-4l1-1 3-1h0-7l-1 1v1h-1v1h-1v1h-1l1 1h-1v2h1l1 1h2v1h-1v1h2l-1 1h2v-1h1v1h1v1h1v-1l1 1h4l1 1h1v-1h-1v-1h-1 1l1 1h1v1h1v-1h-1v-1h3v1h2v-1h-1v-1h1v1h1l1 2v-1h2v1l1-1v1h1-1v1h1v1h-1v1h1v1l1-1h1v-1h1l-1 1v1h1l1 1v2h1v1h-1v1l1 1h-2v1h-1v1h-1l1 1 2 2h-4v1l-1-1v1h-3-1l-1 1h1l-1 2h1v1l1-1v1h1l1-1 1-1v1h2v-1h-1v-1l1 1v-1l1 1v1l1-1h1v2h1v1l1 1v-1h1v1h-1l1 1 1-1v1l2-1v1-1l1 1 1-1v1h5v-1h-2v-1h-2v-1h-1l-1-1h-1l1-1 2 1v-1l1 1h4v1h1-1v-1h-1v-1h1v-1 1l1-1h-1v-1h-1l1 1-1-1h-1c1 0 0 0 0 0v-1h-1l-1-1v-1h-1v-1h-1 2l-1-1v-1l1 1v-1h1v2h2v1h2v1h0v1l1-1v1h2v-1-1h-1 2v-1l1-1v-1 1h1v-1s1 0 0 0v-1l1 1v-1h-1v-1h-1v0l-1 1v-1 1h-1l1-1h-1v1-1h-1-2 1v-1h-1v-1 1h-1v-1h1-1l-1 1v-1 1l-1-1v1h-1l1-1h-1v-1h-1 1-1v-1h-2-1v-1h2l-1-1v-1l1 1h1l-1-1h-1v-1h-1 2v-1h1l-1-1h-1v1h-1v-1h-1 2l-1-1-1-1-1 1h-1 1v-1l-1 1v-1h-1l1-1-1 1h-1zm4 4h-1 1zm-3-3h1l-1 1v-1zm-1 12v-1h1l1 1h1l1 1 1 1h-2-1l-1 1a1 1 0 0 1 0-1v-1h-1a2 2 0 0 1 0-1zm0 5v1h1v-1 1l1 2h-1-2v-1h1v-1h-1v-1h1z'></path>
            <path d='M153 33v-1h1v1h3l1-1v1h2v-1 1h4v-1l1 1h1v-1 1h1l3-1v-1h1v-1-1h-4v-1h-2-3v1h-5-1 1-1-1l-2-1v1-1h-2-1l1-1 1 1v-1h1l-1-1h-2l-1-1h-1v1h-2v-1 1l-1-1-2-1h-1s0 1 0 0l-2 1h1v1h1v1h6v1s0-1 0 0h1v2h-1l1 1h-1v1h1l-1 1h5zm-13 7h1l-1-1v-1l-1 1v-1h-1v-1 1h-1v-1l2-1v-1h-4l2-1v-1h-1v1h-1v1h-1-2-1v2h2v2h-2-1v-1a1 1 0 0 0-1 0h-1v1l1 1h1l1 1v-1h1l1 1h1v2h1v1l2-1v-1h3v-2zm160 60h-1 2l-1 1 2-1v1l1-1h2v-1h1v-1h1l-1-1h1-1v-1-1-1h2v-2h-1 1l-1-1-2 1h1v-1h-2v1h-1 1l-1 1v1l-1-1-1 1a1 1 0 0 0 0-1v2h-1v1h2v1h-1v1l-1 1h1-2l1 1zM139 48h-2v1-1h-1l-1 2v1h2v1h3l2-1h-1v-2h-1v-1h-1zm225-24h-3v-1h-3-1v1h1l-1 1h2v1l1-1v1-1h4v-1zm35-11v1h1l1-1h1l1 1v-1h1v-1l2 1 1-1 1 1h2v-1h-3v-1l-2 1v-1l-2 1-1-1v1h-4v1h-1v1l2-1v1-1zm-46 1h1v1h1-1-1l1 1h5-1v1h-2 1-2v1h7v1h2l2-1v-1h2v-1h1l1-1h-1l-2-1h-1v-1l-1 1v1h-1v-1-1l-1 1-1 1h-1v-1h-1-1v-1h-2a1 1 0 0 1-1-1v1l-1 1h-2zm-12 2l1 1v1h-1l1 1v2h2v-1h1v-1h2v1h1v1h2-3-1v1h-1v-1h-1v1a1 1 0 0 0 0-1v2h4-2l1 1h-2-1v1l2 1h2l1 2v-1 1-1h1v-1h1l1-1 1-2h1v-1-1a5 5 0 0 1 3-1h-2v-1h-1v-1l-1-1v1h-1v-2l-1-1h-1l-1-1-1 1-1 1v1h1v2-1h-1l-1-1v-1-1l-1 1v1h-1v-1h-1 1v-1h-2v1l-1-1v1z'></path>
            <path d='M308 85v2l1 1h-1v1h1v1s1 0 0 0v2h4-1v1h1v3a3 3 0 0 0-2 0v-1h-1l1 1-2 1h2v1h-1v1h-1v1h1v1l2-1v1-1h2l-1 1h-3a1 1 0 0 1 0 1l-1 1-2 1h1v1l1-1 1-1h1v1l1-1h3v-1h3l1 1v-1h2v-1h-2 1-1v-1h2v-1l1-1v-1h-2c-1 0 0 0 0 0l-1 1v-1-1l-1-1h1l-1-1-1-1h-1v-1-1l-1-1h-1v-1h-1v-1h1-1v-1h1v-2h1v-1h-2l-2 1v-1-1h1v-1h1l-1-1h-1-1v0h-1v3h-1v1zm239 113v1h-1v-1h-1v1h-2v2h1v-1l1 1h1v-1l1 1v1 1l1 1h2v-1-1 1h1l-1-1 1-1v-1h1l-1-3h-1v1h-3zm54 78h-1v-1-5h-1v-1h-1v-1h-1v-1h-1v-2l-1-1a2 2 0 0 1-1 0v-1-2h-1v-1-1h-1v-1h-1-1v-1h-1a1 1 0 0 0-1 0v-4h-1v-1-1h-1v-2-1h-1v-1h-1v1l-1-1v-1-2-1h-1v-2h-1v-1h-1v3h-1 1v2h-1v3h1v1h-1v3h-1v2h-2v-1h-1a3 3 0 0 1-2-1v-1h-1v-1h-2v-1h-1a2 2 0 0 0-1-1l1-1v-2h1v-1l1-1-1-1h1-2v0h-1-1-2l-1-1v1h-1v-1h-1-1l2 1v1h-1-1v-1l-1 1h-1l-1 1 1 1h-1v1h-1l1 2v1l-1-1h-1-1v1h-1l1-2h-1l-1-1h-2v1h-1v1h-1l1 1h-2v2h-1v-1l-1 1 1 1v1h-1v-1l-1-1v1h-1v3l-1 1h-1v1h-1v1h-3l-1 1-1 1h-2l-1 1v-1l-1 2h-1l-1 1h-1v1l-1-1h1-1v4h-1l1 1v2l1 2h-1v-1 1h-1v-1 2h1v1h1v2l1 1v1h1v5l1 1v1 1h-1v1h1l-1 1h-1l1 1 1 1v1h4l1-1h1v-1h6l1-1v1h1v-1h1l1-1h1v-1h1v-1h4l1-1h4l1-1 1 1 1 1h1v-1 1h2v1h0v1h2v3h2v-1h1v-1h1l1-1v2h-1v2h-1v1h1l1-1v-1h1v3h2v2h1v2l1 1v1h3v1h1l1 1h1v-1h1v-1l1-1 1 1h-1v1l1-1v1h1v1l1 1v-1h1v-1h1v-2h4v-1h1l-1-1v-1h1v-3h1v-2-2h1v-1h1v-1h1v-1h1v-2-1-1-1-1h1l-1-1h1v-2zm-31 8h-1v1l-1-2 1 1zm2-1l-1-1h1v1zm19 22l-1 1h-1-2-1v-1h-1-1l1 2v1h1l1 1h-1v1l1 1h1l-1 1h3v-1h-1l1-1v1h1v-1h-1l1-1v-1-3zm-38-92l1 1-1 1h1-1v1h1v1h0v-2h1v1h1l-1-1 1-1a2 2 0 0 0 0-1h-1v1h-1v-1h1l-1-1h1l-1-1v1h-1v1zm-11 22l1 1v-1h2a1 1 0 0 1 0-1l-2 1v-1h-4v1h3zm-180-95l2 1h3v-1h-5zm-20-6h-1l1 1h1v1h1l1 1h1v-2-1h1-5zm329-65h-1v-1h-1l-1 1h-1v-1 1h-1l1 1 2-1 1 1h1v0h1l-1-1zm-44 194h-2v-1h-1v-1h-1v-1l-1-1v2h1v1h1v1l1 1h2l-1-1zM334 128v3h1v1l1-1 1-3v-1h-1v-1l-1 1h-1v1z'></path>
            <path d='M667 64v-1 1h1v-1h1v-1h1-1v-1h-2l-1-1v-1h-5l1 1h-1v-1l-1-1v-1h-1l-1-1h-1-1v-1l-1-1h-1v-1l-1 1v-1h-1l-1-1-1-1v-1h-5v-1h-2a2 2 0 0 0 0-1h-4-4-1v1l1 1v1h-1v1l-3 1v-2h-1v-2l-1 1h-1-2l-1-1h-1l-1 1v-1h-5v1h-1v1l-1 1v-1-1l-1-1h-1l1-1v-1a8 8 0 0 0-1 0h-1v-1h-2v-1h-1v1l-1-1v1h-1-1v-1h-1l-2 1h-7v1h-1v-1l-1 1v-1h-1v1h-1l2-2v-1h-1v-1h1v1l1-1-1-1h-2l-1-1v1h-2v1h-1v1h-1v1h-1v-2h1v-1h1v1h-1 1v-1h-3-1v-1h2-2v-1l-2 1v-1h-3l-1-1h-1l1 1h-2v1h2v1h-1v-1l-1 1v2h-2v-1 1h-1v1h-1-1v-1a3 3 0 0 1-1 0h-1v-1h-2-1l-1 1h-1v-1h-1v-1l-1 1v3l-1 1h-1v-1h-1l-1-1h-1l-1-1-1 1v-1h1v-1 1h-1v-1h-1v-1h-1l-1 1v-1h-1-2v-1h-2 1v-1h-2v1l-1-1h-3v-1h-3v1l-1-1h-1v-1h-1v-2h-2-2a3 3 0 0 1-2 0h-1l-1 1h-1v2h1-1l-1 1v0l1-1h-1 1a1 1 0 0 0-1-1h1l-1-2v1h-3v-1h-2l-1 1 1 1h-1l-1 1h-1v1l-2-1h-1v1h-1l-2 1h-1v-1h3l1-1 2-1h1v-1h1v-1-1h1v-1h5v-1h3v-1a3 3 0 0 0 0-1h-1v-1l1 1v-2h-1v-1l-1-1h-1v-1l-1-1v1h-3-2-1l-1 1h-1l1-1-2-1h-2 1-1v-1h1-1v-1h-1-2l-1 1v-1l-2 1h-1 1-1l-1 1v2h1-4-1 1v1h-1-1l-1 1a1 1 0 0 0-1 0h-1v1h-1v-1h1v-1h-2-4l-3 1h-4v1h-4v1h1-1v2h-1v-1h-1a2 2 0 0 0 0 1h1v1-1l-1 1 1 1 1 1-1 1h-1l1-1h-1v-1l-1 1h-2-3-3-1v3h-1l1 2h1v1h2l1 1 1 1h-1v3l-1 1 1 1h4v2-1h-1a1 1 0 0 1 0-1l-1 1h-2l-1-1-1-1-1 1v-1l1-1v-1-2h1v-1h-3l-1-1-1-1h-1-3v1h1l-1 1h-1l-1-1h-1v2h2v1h1v1h1-1v-1h-2v0h-1v0l-1 1-1-1v-2h-1v-1h1v-1h-1v-1h1-1v-1h-1v5h-1v3h1v1h-1v2h1v1h2l2-1v1h2l1 1v1l1 1-1 1v1h1v1h2-3v1l-2-1 1-3v-1h-1v-1a1 1 0 0 1 0-1h-1l-1 1h-1-1l-1 2h1v2h-1v2h-1l-3 1v1h1v2h0l-1-1v-1h-4v-1h-1 4l1-1h1v-1h1v-1h0v-2h1v-1l-1-1h-1v-1-1-1-2-1h-1v-1-1h1v-1-1-1c1 0 0 0 0 0v-1-1h-1v-1l-4 1v-1 1h-1v2h-1v1l-1 1h-1v1h-1v2l1 2h-1v2h2l-1 1 1 1c0 1 0 1 0 0h1l-1 1v1l-1 1v-1h-1v-1l-1-1h-2l1-1h-2v1h-1v-1l1-1a5 5 0 0 1-1 0h-1-1v-1 1-1h-1l-1 1-2-1v1h-2l1 1v2h-2v1h-1v-1-1l-3 1h-1-2-2v1a1 1 0 0 0-1 0h-1-1 1v-1h-1v-1h-1v1h-1v1-1h-2v1h-2v1h-2-1v1h-1v1 2l-1-1v1h-3l-1-1a1 1 0 0 1 1-1v-1h2v-1l-1-1-1-1h-2l-1-1h-1l2 1v2h-1l-1 1v1h1v1l-1 1v2h-1v-1l-1-1h-2v1h-1v1h-1l-1 1 1 1 1 1h-4l1-1h-1l-1-1h-1v2l2 1v1c0 1 0 0 0 0v1h-4v-1-1l-1 1h-1v-3-1-1a1 1 0 0 1-1 0v-1h-3 1v-1h-1v-1a1 1 0 0 0-1 0v-1h-1v-1h1v1h1v1h2v1-1h1v1h3v1h6l1-1 1-1v-3h-1l-1-1h-1l-2-1v-1h-2l-2-1-1-1-1 1v-1h-1-1v-1 1l-1-1-1 1v-1h-1 2l-1-1h-5v1l-1-1h1l1-1h1v-1h-1v-1l-1 1v-1h-1v-1l-1 1v0h-1l1-1h-2v1h-1v1a1 1 0 0 0-1 1v-2h1v-1h-1v2h-1v1h-1v1h-1l1-1 1-1v-1h-2-1v0h-1v1l-1 1h-1-1v-1l-1 1v-1h-1v1h1v1l-1-1v2h-1v-2 1h-1v0l-1 1v-1h-1v2a1 1 0 0 0-1 0v-1l1 1h-2v2h-1v1h-1v1h-1 2l-1 1h-1-1 1-1v1h1v1h-1v1h-1v1-1 1h-2v2h-1v1h-1l-1 1v1h-1-1 1-1v1h-1l-1 1v1h-1 1-1 1c0 1 0 0 0 0h1l1-1v1h-1-1v1h-1v-1l-1 1-1-1v1l-1 1h1-1v0h-2v1h1l-1 1h-2 1v1h1-4v1h1-1v2l1-1v1h1v-1 1l1-1v0h1v1h-4 1v1h-1v1h2v0h1l-1 1v1h-2v1h2v-1h1l-1 1v2h-1l1 1h2v1h1v-1h2v-1h2v-1h2l1-1v2l1 1a1 1 0 0 1-1 0v1l1 1 1 2h1-1v1h1-1v2h1v1-1h2v-1h1v-1h3l1-1v-1l-1 1v-2h1v-2-1l-1-1h4v-1h1-1l1-1v-1l-1-1-1-1h-1v-3-1-2h1v-1h1v-1l1-1v1-1h2l1-1 1-1v-2-1h1v-1h1v-1h1v1l1-1h2v1h1v2l-1 1-1 1v1h-1v1h-1v1h-1v1h-1v2l1 1-1 1v2l1-1v1h1v1h0v1h1v-1 1h1v1h1v-1h1v-1h3v-1h3l1 2 2-1v1h1v1h-4v1h-7v1h-1v1h-1l1 1v4h-1l-1-1h-1v-1l-1 1h-1v2h-1v4h-1 1-2v1h1-1v2h-1v-1l-1 1-1-1h0-2v1h-3l-2 1v-1h-4v1l-1-1v1h-1v-1h-2v-2h-1l1-1v-1l1-2v1h1v-1h-1v-2h-1 1v-1-1h-1v1h-2l-1 1v1l1-1h1v1l-1 1-1-1v4h1v1a1 1 0 0 0-1 1h1v1l1 1h-1v1h-1v1-1l-2 1h1v1l-1-1h-2v-1l-1 1-1 1h-1v2h-1v1h-3l-1 1h-1v2l-2 1v1h-3v-1h-1v1l1 2h-2-1v1l-1-1h-2l-1 1h1l-1 1h2l1 1h1v1h1v2h2v1h1v3l-1 1h1l-1 1-1 1h-1-1-1-3v-1h-3v1a2 2 0 0 1-1-1h-2v1h-1s1 0 0 0l-1 1h1l-1 1h1v6l-1 1v1h1v1h-1 1v2l-1 1h2v1l1-1h2v1h1v1l1 1 1-1h1v-1h1v1l1-1v1h2v-1l1-1h1v-1h1v-1h1v-1l1-1h-1v-1-1h1v-1h1v-1l1-1h1l1-1 1-1h1l-1-1v-1h1v-1h4v1h2v-1h1v-1h1l1-1h2v1h1v1h1v2l2 1v1l1 1h1v1h3v1h1v1l1 1v1h1-1 1v1h-1v2h1v-1h1v-1h1l-1-1h1-1l-1-1 1-2h1v1h1v1h1v-1l-1-1-1-1-2-1v-1h-3v-1l-1-1v-1h-1v-1l-1-1h-1v-1-1-2h3-1v1l1 1 1-1v2h1l1 1h-1 1v1h2v1l2 1 1 1h2v1h1v1h-1 1v1h-1v1l1 1h1v2h1v1h1v1h2v1h1-3v2h4v-2l1 1v-1l-1-1v-1 1h1v1h1v-1h-1a1 1 0 0 0-1-1h-1v-1h1l-1-2h-1l1-1h1v1h1v-1h1a1 1 0 0 0-1 0v-1h3a5 5 0 0 1 1 0l1 1h-1v1h1v-1h2v-1h2v-1h-1v-1h-1v-1-1-1h1v-1h1v-1-1l1-1v-1h1-1v-1h1l1-1v-1h2l1-1v1h-1l1 1h3v1h-1l-1 1h2v2h1l1-1h2v-1h0-1-1v-1l-1-1v-1h1v1h1l1-1h1v-1h3v-1h3-1v1h-1v1a5 5 0 0 0-2 0h1l1 1h-1v1h-1v1h-1 1v1h1v1h1l1 1h1v1h1v1h2v1l1 2h-1v1h-1l-1 1-1-1h-1v1h-1-1v-1h-2-1l-1-1h-1a1 1 0 0 1 0-1l-1 1h-1v-1h-2v1h-1-1l-1 1h-2-1-1v1h0v1h-3-1a1 1 0 0 0-1 1h-1v1h2l-1 2h1v1h-1v1h1v2h2v1-1h1v1h1v1l1 1v-1h1l1-1h2v1h1l4-1h1l1-1v6h0v1h-1v4h-1v1l-1 1-2 1v-1h-1l-1 1v-1h-1 1-1v1h-1a1 1 0 0 1 0-1h-1v1h-3v-1l-1 1-1-1v1l-1-1h-1l-2-1v1l-1-1h-2v-1h-2v-1h-1l-2-1v1h-2l-1 2 1 1-2 2-3-1h-2l-1-1-1-1h-1v-1h-2v-1h-3l-1-1h-1c0-1 0 0 0 0v-1h-1v-2-1h1v-2h-1v-1h1v-2h-1v0h-1v-1 1h-5v1a2 2 0 0 0-1-1h-2-1-4v1l-2-1v1h-1l-1 1h-1-1l-1 1h-1v1h-3v-1 1h-2-1l-1-1h-1-1v2l-1 1v1h-1v1h-1-1l-1 1-1 1v2h-1v5l-1 1-1 1-1 1-1 1h-1v1h-1v1h-1v1h-1v1h-1v3h-1v1h-1v2h-1v2h-1v3h1v11l-1 1v1h-1 1v4h1-1l1 1v1h1l1 1h-1 1v1h1v1h1v2l1 1v1h1v1h-1 1v1h1v1h1l1 1 1 1 1 1h1l2 2h1v1l4-2h4v1h2l1-1h2v-1h3v-1h1v0h1l-1 1h1v-1h1l1-1h2-1 2l1 1h1v1l1 1h-1v1h1v1h2v-1 1l1-1s0 1 0 0h3v1h1v2h1v1h-1v5h-1l1 1h-1v2h-1 1v1h1v1h-1 1v1h1v1h1v1l1 1h1v2h1v3h1v2l1 1v6h1v4h-1v1h-1v2h-1v3h-1v6l1 1v1h1v3h1v1h1v2h1v6h1v2h-1l1 1v3h1v2h1l1 1v1h1l-1 1h1v2l1 1 1 2-1 1v4h2v1h1l2-1h3l1-1 1 1v-1l2 1 1-1h4v-1h1l1-1 1-1 1-1 1-1v-1l1-1 1-1v-1h1v-1h1l1-1v-1-1l1-2h-1v-1h1v-1h-1l1-1h1v-1h2l1-1h1v-1h-1l1-1h-1l1-1h-1v-1-2-2h-1v-3h1l1-1v-1h1v-1h2v-1h3v-1h1v-1h1v-1h1v-1-1h1-1v-3l1-1h-1v-3-1-2l-1-1v-1h-1v-2l1-2a1 1 0 0 0-1-1v-1a2 2 0 0 0-1 0v-1-1h1v-3h1l-1-1h1v-1l1-1h1a2 2 0 0 0 0-1h1v-1l1-1v-1h1v-1l1-1v-1h1a1 1 0 0 0 0-1h1v-1h1l1-1h1l2-2v-1h1v-1h1v-1c1 0 0 0 0 0h1v-2l1-1v-1l1-1v-1-1l1-1v-1h1v-1-2h1v-3a1 1 0 0 1 0-1l-1 1h-1-3v1h-1-2v1a1 1 0 0 1-1 0h-4l-1-1v-1a1 1 0 0 0-1 0v-1h1a1 1 0 0 1 0-1v-1h-1l-1-1v-1h-1v-1h-1v-1a4 4 0 0 0-1 0h-1v-1l-1-1h-1v-5h-1v-1l-2-1v-1h-1v-1h1l-1-1h1v-2h-1 1l-1-1v-1l-1-1-1-1v-1h-1v-1h1l-1-1v-1h-1v-1a1 1 0 0 0-1-1v-1l-1-2-1-1v-2a3 3 0 0 0-1 0v-2l1 1v1l1 1v1h1l1-2v1h1v1h1v1l1 1v1l1 1 1 1v2l2 1v2l1 1-1 1v1h1v3h1v1h1l1 1h1v3h1v1h1v2h1v2h-1 1v1h-1 1v3h1l-1 1h1v1h3l1-1h3v-1h3l1-1v-1h3v-1l2-1v-1h1v-1h2v-1h3v-1-1h2v-1h1l1-1h1v-3l1 1v-2-1h1v-1h1v-1-1h-1v-1h-1v-1h-1l-1-1-1-1h-1v-1h-1v-3 1l-2 1v1h-1v1h-1v1h-1v-1h-1a1 1 0 0 0-1 1l-1-1h-1v-1h1l-1-1 1-1h-1v1h-2v-3h-1v-1h-1l1-1h-1s1 0 0 0l-1-1v-2h-1v-1-1h1l-1-1h1v1l1-1 1 1h1l1 1v1h1v2h1v1h1v1l1 1h1v1h4v-1h1l1-1v1h1v1l1 1 1 1h4l1 1h2l1-1v1h1l1-1h5v2h2v1h1v1l1-1h1l-1 1v1l2 1h2v-1h1l-1 1-1 1h-2l3 4h1v-1h2v-2-1h1v4l-1 1 1 1v4h1v4h1v2h1v4h1v2l1 1v1l1 1v1h1l-1 1h1v2h1v1h1l1-1 1-1v-1h1v-1h1s-1 0 0 0v-1h-1v-2l1-1v-1h1l-1-2v-3c1 0 0 0 0 0v-1l1-1h1l1-1h1a1 1 0 0 1 0-1v-1h1l1-1h2l1-3h1v-1h2v-1h1v-1h1l-1-1h1v-1h4v-1 1l1-1v1l1-1v-3l1 1h1v1l1 1v3h1v1h2v2h1-1l1 2v5l1-1v1h1v-1h1l1-2v1h1v1h1v2h1v3h1v5h1v2h-1v1h1v1h-1v3l2 1v2h1v3h1l-1 1h1v2l1 1v2h2v1h1v1h1v-1h1v-2h-1v-4l-1-1v-1h-1l-1-1v-1l-1-1h-1l-1-2-1-2v-2-3l1-1v-1-2h1l1 2h1l1 1 1 2 1 1 1 1v-1 1l1 1v2h1l-1 1 2-1v-1-2 1h1l-1-1h4v-1h1v-1l1-1h1v-2-2h-1v-1-2h-1l-1-1v-1-1h-1v-1l-1-1h-1v-1l-1-1v-3h1v-1l1-1v-1h2l1-1h2v2l1 1h1v-1h-1v-1h1l1-1h1v-1h3v-1l1-1h1v1h1v-1h3v-1l1-1h1v-1h1v-1h2v-1-1h1v-1h-1v-1h1v-1h1v-1h1v-1h1v-1h1l-1-1v-1h1v-1l1-1h-3v-1h1l1-1-1-1-1-1v1h-1a1 1 0 0 0 0-1 2 2 0 0 1 1 0h1l-1-1a5 5 0 0 0 0-1h-1v-2h-1l-1-4h1v-1h1v-1h1l1-1h1v-1 1l1-1 1-1h-6l-1 1h-1l-1-2h-1v-1-1h2l1-2h1l1-1 1-1 1-1h2v1h-1v1l-1 1v1h0v1h1v-1l1-1h5v2h1-1l-1 1 1 1 1 1h2v4l-1 1 1 1h-1v2l2-1 2-1 1-1 1-1h-1v-1h1-1v-1l1-1h-1v-1h-1v-2h-1v-1h-1v-1-1l1-1h1v-1h2v-1-1-1-1h1l1-1h1v-1h1v-1h2l-1 1h1v1h3v-1h1v-1h1l1-2v-1h1v-1h1v-1h1v-1l1-1v-1h1v-1l1-1v-1l1-1 1-1v-2-2-2h1v-1-1-2l1 1v-1h-1v-1h-1v-1h-2v-1h-1v1h-1v1h-2l1-1-1-1v1h-1v-2h-3l1-1v-1h1l1-1 1-1h1v-1l1-1v-1h1v-1h1l1-1 1-1h1v-2h1v-1h1v-1h1l1-1v-1l1 1v-1 1h5v1h1l1-1v1h4l-1-1h1v-1l2 1h2l1-1v2h1-2l1 2v-1h3v-1h1v1l1-1h1v-1l-2 1v-2h1v-1l1-1h1v-1h1l1-1v-1 1-1h7v1h-1v1h1v1h-1 1l1-1h1v-1l1-1h1v1h1v-1-1-1h1v-1h1l2 1h-1l-2 1 1 1h-1v3h-4v2h-1v1l-1 1-2 1v1l-1 1h-1v1h-1-2v3h-1l-1 1v2h-1l1 3v5h1v4l1 1v-1h1l2-1v-2-1h2v-2-1h1v-1h3v-1l-1-1v-1h1v-1l1-1h2v-1h-2v-1-1l1-1v-1h-1l-1-1 2-2v-1h1a8 8 0 0 1 0-1v-1h3l2-2v3l1-1v-1h1v-1 1-1h3v1h1l1 1h1v-1l1-1h1v-1h1l1-1h1v-1h2v-1h3v-1h5v1l1-1v-1h-1v-1-2h-1v-1l-1 1h-1l1-1v-1 1h-1l-1-1h-1 4l2 1v-1h2l1-2h-1v-1-1h1v-1 1-1 3l1 1 2-1h2l1 1v1l1 1 1-1v1h1l1 1 1-1 1 1h1l-1-1v-1h1v-1h-1v-1h1v1h1zM345 80l-1 1v1h-1-1v-1l1-1v-1h1l1 1zm1 2v1h-1l1-2v1zm5-3h0zm19 4v-1h-1v-1h1v1h1l-1 1zm9-7l-2 1h-1a1 1 0 0 0 0-1l-1-1v-1l-1-1h2v-1 1h2v1h1l1 2h-1zm3-9h1l1 1h-1l-1-1zm4 7v1h-1v-1l-1-1h-1v-1h2v-1h-1-1v-1h2v2h1v2zm1 2h2v1h-1l-1-1zm4 5v1h-1v1h-1v-1h-1l-1-1h1c1 0 0 0 0 0h1v-1h-1v-1l1 1 1 1h1zm-4 111h1v1l-1-1zm-2 16v-1h1v3h1v1l-1-1-1-1v-1zm-10 5h1v-1 1l-1 1v-1zm-3 5v-1h1l-1 1zm-1 17v1h-1v-1l1-1 1 1h-1zm1-14a3 3 0 0 1 0-1v-1 1h1l-1 1h-1 1zm5 13h-2l1-1h-1v-1l-1-1h-1v-1-2h-1l1-1h-1v-1-2-1h1l1 3v1h-1v2h2v1h1l-1 2 1 1h1v1zm6 11h-1v-2l-1-1 1-1h-1v-1h1v-1h-1v-3h1v2h1-1v4h1v1h-1 1v2zm1-21l-1 1v-1h1zm-5-8h1v-1h1v2h2v1l-1 1v1h-1v1h2l-1 1h-1v0h-2v1h-1v-1h-1v-1c1 0 0 0 0 0l1-1-1-1v-2h1v-1h1zm0-3v1l-1-1h1zm19-81v1h-2l2-1h1-1zm4-4v1l-1-1h1zm2 8l-1 1-1-1v-1h-1l1-1-1-1h1l1 1v1l1 1zm15-9v1l-1-1h-2v2h1v1h1l-1 1h1v6h-1v-1l-2 1a1 1 0 0 1-1 0l-1-1h-1l-1-1a1 1 0 0 0-1 0l-1-1v-2h-1l1-1v-1h1v-2h1v-1h-1l-1-1v-1h-1a1 1 0 0 0 0-1h-1v-1l-1-1v-3h-2 1v-1-1-1h1v-1-1 1-1h1v1h1v-1h1l1-1h2v-2l2 1h2v1h1v1h1v1l1 1v2l-1-1-1 1v1h-2 1v-1h1l1-1-2-1-1 1h-1v1l-1-1v2h1-2v1h1v1h1v1h2v1l-1 1 1 1h1v-1h1v1l2 1-1 1zm14-9h-1l1 1h-1v1h-1v1h-2v-1l-1 2a1 1 0 0 0 0-1v-1l-2 1v-2-1-1l1-1v-1h1v1-1h1v-1h1v-1h2v1l-1 1v1l1 2h1zm73-87h1v-1h-1 4l1-1h-1 2v1h-2v1h-1l-1 1h-1v-1h-1zm-2 72h1-1v-1zm0-1h1-1zm-26-65h1-1v1-1zm-15 85l-1 1h-1-1v-1h3s1 0 0 0zm3-10h-2v1h-4v-1 1-1h-1v1h-1a1 1 0 0 1 0 1h-2v1h-1v2h-1v-1h-1l1-1v-1l1-1h2v-1h7l1-1h1v1zm37 65h-1 1zm2-40h-1v-1l1 1zm8 57v0zm8-102v1l-1 2-1 1h1l-1 1-1 1h-1l-1 1h-1l-1 2-1 1h-3v-1h2v-1h1v-1l1-1h1v-1h1v-1h1v-1h1l1-1v-1l1-1v-1h1v-1 2zm6 63h-1 1v-1 1zm8-1h-1 1zm5-5h1v1h-1v-1zm23-32v1h-1l1-1h-1v-1l1 1zm-19 123l2-1 1-1h2v-1h1l1-1h1v-1h1-5v1h-1v1h-1v1h-1v1h-1v1zM216 100h-3v1h-1v4h1l-1 1h-1s0 1 0 0h-1v1h1v1h-2l1 1h9l-1 1a1 1 0 0 0-1 1l2-1 1-1h1v1h-1v1h1v-1h1l-1 1h2v-2 1h-1v-1l1-1h-1v1h-1l1-1h-1l1-1h-2v1-2 1h-1l1-1h-1l1-1h-3v0h-2l1-1h-1v-1 1h-1v1h-1l1-1h-1 1l-1-1h1v-2l1 1v-2h1zm-24 76l-1-1h-1-1v-1h-1v-1l-1 1v-1l-1 1h-1l-1-1h-1l1 1v1l1 1a1 1 0 0 0 0 1l-1-1h-1-2v1h5v1h1v-1-1l2 1h1v-1h2zm83-126v-1l1 1v-1h1v-1l2-1h-3l-1-1h-2v1h-1-2l1-1h-3l-1-1h-1 1l1-1h5l-1-1h-5 1v-1h-1 5v1h2v1h1v1h1v1h3v1l1-1h-1v-1l1-1h-1v-1h-1v-1h-1 1-1v-1h-2a2 2 0 0 0-1-1h-1 1a1 1 0 0 1 0-1h-1-1v1h-1v-1h-1-1v-1h3v-1h1v-1h2-1 1v1h5v-1h1v-1h-1l-1 1v-1h-1v-2h1l3 1h2v-1h-3v-1l-1 1-1-1h2v-1h-1-1v-1h3v1h1v-1l-1-2-1-1-1 1v-1h-1 1l1-1c-1 0-1 0 0 0v-1h-1l4 1h1v-1-1l-1-1-1 1h-1-1v-1h1l-1-1h1l1 1v-1h1-2v-1l-1 1-2-1v-1h2v1h1v-1l1-1v-1h1v-1h-1l3-1 1-1v-1h-4v1h-1v-1h-1 1v-1l4 1h2l1-1 1-1h-2-4 2v-1h7v-1h1V9h2l-1-1h-5-4l-2 1a6 6 0 0 1-1 0h-1V8l-1 1h-2l-1 1-2 1v-1l-1 1h-1v-1h2V9h2V8 7h-3v1h-1-4l1-1h-10v1h-1V7h2V6h9l4 1h1V6h4l1-1-1-1h-4V3v1-1h-2v1h-2 1V3h1l-1-1h-1-1l-1 1h-1l2-1V1h-1-3l-2-1v1h-2-2V0h-1-1-2-5-1-1v1l-1-1v1h-1-2v1h-1v1h1-1V2h-1v1l-1 1-1-1V2h-3-1l-1 1h1-1v1h4v1l2 1h-1a3 3 0 0 1-1 0V5l-2-1h-3l1 1v1l-1-1h-2-1-1v1h1v1h1v1h2v1h2v1-1h-3v1h-2V9h-1l-1-1V7l-1-1h-1V5h-1-2v1l1 1h-1v2h-2V8h-2a1 1 0 0 0-1 0l-1 1-1-1V6h-2v1a1 1 0 0 1-1 0V6a2 2 0 0 0-1 0v1a1 1 0 0 0-1-1 1 1 0 0 0-1 0h-1v1h-4v1h-1 1v2-1h-1V8h-1l-2 1 1 1v1h-1v-1h-3-1v1h-3v1h-2l-1 1v1h6v2l-1 1-1 1h-1-2-3-1l-2 1h-2-2v1l1 1v1h2v1h1c2 0 2-1 2-2v1l1 1 3-1h2v1h-5l-3 1 1 1h-2v-1h-1-1v1h1v1l1-1v1h2-1v1l1 1h3v-1h1v-1 1h3l1 1v-1h3v-1h1v1l1-1 1 1h3v1h1l1 1h2v1h1v1h1v1h2v1l-1 1h1l1 1v1h1v1h1v1h-1 1-1v1a3 3 0 0 0-1 0v2l-1 1h1v1h1l1-1v-1h1v1h3v1l2-1v1h-1 1l1 1h-1 1-1v1h1v1l-1-1v1h1v1l-1-1h-2v-1h-5l1 1h1v1h-1-1v1l-1 1v1h3-2l1 1h3v-1h1v-1c-1 0-1-2-3-2v-1l1 1h1l1 1 2-1v1h1v1h-1 1v1h1l-1 1h1l-1 1v-1h-1v1h1v1h-1-2v1h-1 4v1h-3v-1h-1v1h2-2l-2 1v1l1-1h3v-1 2l1-1v-1h1v2h-2v-1h-1a2 2 0 0 0-2 1 1 1 0 0 0-1 0v1h1v1h1-1 1-1v1l-1 1h2-1v1h2v-1h1v1h-1v2h1v1h2v-1 2h-2 1-1v1h1l-1 1h2-1v1h1v1-1h1l-1 1h2v1h1v1l1-1-1 1v1l1-1v2l1-1v1h-1 1v1h1-1 3v-1h1v1h-1 2l-1 1h1v-1h1v1-1h1v1l-1 1 1-1v0h1l-1 1h1v1l1-1h0v-1h1l-1-1h-1 2l-1-1 1-1v-1h1v-1h-1l1-1v-1h1l1-1h-1v-1l1 1v-2h1l-2-1h2v-1a1 1 0 0 1-1-1h1l1-1v-1h4v-1l1 1v1l1-1v-1h1v1l1-1v-1h1l1-1 2-1v-1h1v-1 1h1v-2l-1-1v-1 1h1v1h3v-1h1v1l1-1h3v-1h3v-1h2-1 1v-1h3zm3-20v1-1zm-10-18h1l2-1v1h-2l-1 1h-1l1-1zm-41 46h-1v1h-1l2-1zm33-55h8-6-2zm-4 0V2h1v1h3-3v0h-1zm-3 1l2-1-1 1h-1zm-3 56l-1-1h2l-1 1zm18-13zm1 0h-1 1zm-94 126h6v-1h-3l1-1h-1v-1h-1c-1 0 0 0 0 0h-1a6 6 0 0 0-1-1h-1v-1h-2l-1-1h-1v-1h-2l-1 1v-1h-3v1h-1v1h-1v1h2v-1l1-1h2v1h3v1h1v1h2l1 1v1h2l-1 1zm21 166h-2l-1-1v-1h-1l-1-1v-1-1h-3-1v2h2-1v1h-1l1 1h1a1 1 0 0 1-1 0 2 2 0 0 0-1 0l1 1h-1v-2h-1v1h-1v-1 1h1l-1 1h-1 3v1h1s-1 0 0 0h3l1 1 1-1h4v-1h-1zM164 66h-1l1 1h2v1l1-1v-1h-2v-2h-2v-1h-2a4 4 0 0 0-1 0v-1h1-1v-1 1 4l-2 1v1h1v-1h1v2l1-1h1v-2l1-1h1v1z'></path>
            <path d='M254 232v-1-1-1h-1v-2l-2-1v1-1h-2 1-1v-1h-1v-1h-1l-1-1h-1v-1h-1-4v-1h-2l-1 1-1-1v-1h-1l1-1h-2v-1 1a1 1 0 0 0-1-1h-1v-1h-2l-1 1v1h-1v1h-1v-1 1-1h-1v1h-1v-1h-1v-1h-1v2h-1v-2l-1 1h-2v1l-1 1h-4l2-1h2v-1h3l1-1v-1h1v-1h1v-1l1 1h1v-1h-1v-1l1 1v-2a1 1 0 0 0-1 1v-1l1-1h-2 1l-1-2v-2l-1-1-1-1v-1h-1v-1l-2-1h-1l-2-1v1-1 1h-3l-1-1h-1v-1h-1v2h-1v-1-1h1v-1h-1v-1h-1v-1h-5-1 2v-1h1v-1-1h-1v1l-1-1h-1v-1h1v-1l-1 1h-2 1-2l-2 1v-1h-5a1 1 0 0 1 0-1l-1-1h-2v-1h-1v1h1l-3 1v1h1v2l-1 1h-1v-2l1-1-1-1h1a1 1 0 0 1-1 0v-1h1v-1-1h-1v1h-1v1h-1-1l-2 1v0h-1v1 2h-1v1h-1v1l-1 1-1-1h-1v-1h-1v-1l-2-1v1h-2v1h-1l-1-1v1l-1-1v-1h-1a1 1 0 0 0-1-1v-1h-1v-1-2-1-2h1v-2-1h-1v-1h-1v-1h-2a1 1 0 0 0-1 0h-2v0h-2v0a1 1 0 0 0-1 1v-1c-1 0 0 0 0 0v-1-1h1-1 1v-1-1l-1-1 1-1v1h1v-1-2-1-1h1v-2h-4v1h-2v3h-1v1l-1 1h-1v0h-1l-1 1h-1a7 7 0 0 0-2 0v-1h-2l-1-2h-1v-1h-1v-2h-1v-1a1 1 0 0 0 0 1v-3-2-1-2-1h1v-2a1 1 0 0 0 0-1h-1v-1-1h1v-1l1-1h1v-1h2v-2h3v-1 1l1-1v1h2v1l1-1v1h2v-1h1v1h2-1v-1h0v-1 1a1 1 0 0 0 0-1h-1 1v-1h2v1l1-1v1h1v-1h2l1 1 1 1h1l1-1 1 2h1v4l1-1v2l1 1v1h1v1l1 1v-1h1v-5h-1v-2h-1v-3a1 1 0 0 1-1-1h1v-2-1h1v-1h1l1-1h1v-1h1l1-1h1v-1l1-1-1-1h1v-1h1v1l1-1h-1a4 4 0 0 0-1-1h2l-1-1-1-1v-1h1a1 1 0 0 0-1-1v-1h-1 1v-3h2v-1 1l-1 1v2h1v1h1v-1-1-1-1h1l1-1h1v-1-1h-1 1l1-1v-1h3v-1h3-1v-1h-1l1-1v-1l1-1h-1l1-1 1 1v-1 1-1h1v-1h1v1-1l1 1 1-1v-2l2 1v-1-1h1l-1 1h1v-1l1-1h1v1h-1v1l3-1v1h-1v1l-1-1h-1l-1 1-1 1v2h2l1-1 1 1-1-1h1v-1h1v1-1l2-1h1v-1h1v-1h-1v-1l-1 2h-1a1 1 0 0 1 0-1h-1v-1 1h-1v-1h1-2v-3l-1 1v-1h1v-1-1l-2 1h-1v-1h1a1 1 0 0 0-1 0h1v-1 1h1v-1h1v-2l1 1-1-1v-1h-3l-1 1h-1-1v1h-1l-1 1v1h-1l-1 2h-1l-1 1v-1h1l1-1 1-1-1-1h1l1-1h1v-1h1v-1h1v-2h14v-1h1l1-1h-1 1v-1h1v-1h2l1-1h1v-1-1a3 3 0 0 1 0-1h-2v-1h-3l-1 1h-1l-1 1v-1h2v-1h3v-2h-1v1l-1-1v-1h-1-1v1-1h-1v-1l-1-1h-1v-1h-1v-1 1h-1l1-1h-1v-1l1 1 1-1v0l-1-1h-1 1v-1l-1-1h-1 1-1v-1h1-2l1-1v-1h-1v-1h-1v-1-1h-1v-1-1l-1 1v1l-1 1h0v1l-1 1h-1v1h-1v1l-1-1v-1 1h-1v-1h-1v-1h-1-1l1-2h-1v-1h1-1l1-1 1-1h-3l1-1h-2-1v-1h-1v-1h-1v-1h-1a1 1 0 0 0-1 0l-1 1a7 7 0 0 1-2 0h-2v-1h-1-1v1h-1v1h1v1h-1v1h1l-1 1 1 1v2h-1v1h-1v2h2v2h1v2h1l-1 1v2h1v-1 1h-1v1h-1v1l-1 1-3 1v2h1v3h1-1l1 1-1 1v1h-1v1l-2-1-1-1a1 1 0 0 0-1 0l1-1-2-1v-2-4h-1-1v-1h-2-2v-1h-2l-1-1h-1v-2h-3v-1h-2v-1h-2v1h-1v-1h-1v-3h-1v-1h-2-1v-1l-1-1h1v-3h1v-1l1-1v-1h2v-1h1v-1h1-1 2v-1h1a1 1 0 0 0 0-1h-1v-1h2v-1-1h3v0h2v-1-1h-1v-1h-5 2v-1h3l1 1h1l1-1v-1h-1 1v-1h1l1 2h1v-1h1-1v-1-1l-1 1v-1h1l1 1 1 1 1-1v-1h2l1-1h1v-2h-2v-1-1l1-1h-1v-1h1v-1h-2a1 1 0 0 0 0-1h-1l1-1h-2a1 1 0 0 0-1 0h-2v2h1v2h-1l-1 1v1l-1 1v1h-1v1h-1l-1-1-1-1v-1h-1 1v-1-1h1v-1l-1-1v-1l-1 1h-1v3h-1v-1h-1v-2h-2v-1h-1l-1-1h1l1-1h-1v-1h2v-1h-1l-1-1h-2a1 1 0 0 0 0-1h-1l-1-1h-1v-1h1v-1h1l-1-1v-1h6v-1h1v-1-1h-1v-1h-2v0h-3l-1-1v2a1 1 0 0 1-1-1h-1v1h-1v2h1v5h-1l1 1h-1l-1 1 1 2h-1v1h1v2h1v-2 1h1v1h2v-1h2-1l-1 1v1h1-2-1l1 1-1 1 2-1v1c0 1 0 0 0 0l-1 1h-1v1h-1s1 0 0 0h-1v1l-1 1h1v1h1l-1 1v-1h-1a2 2 0 0 1-1-1v-3l-1 1-1-1-1-1a1 1 0 0 0 0 1v2h-3a1 1 0 0 0-1-1v1h-1-1-2l-1-1h-3 1a1 1 0 0 0-1-1v1l-1-1v-2h-4-1-1v2h-1v1h1v-1 1h1v-1h-1 2v-1l1 1v-1h2l-1 1h-2v1h-2v2h1-1v1h1l-1 1-1-1v-2 1l-1 1v-1-1h-1l-1-1h-1v1h-4-1-1-1v-1h1v-1h1l-1-1h-1v-1h-2l1 1h-1-1v-1h-3v-1h-3v-1h-1l-1-1h-2-1v1h-1-1v-2h-1l1 1h-1v2l-1-1-1-1h-1v-1h-1l-1-1-1-1-1-1h-1v1l-1 2h-1v1h-1v1h-1-1-1v1h-1a1 1 0 0 0 0 1l-1 1v-1-1l1-2h4v-1h1v-1h-2l-1 1h-2v1h-1v1h-2l-1-1v1h-1v1l-1-1v1l-1-1v1h1v1h1-1l1 1h-1v-1h-1v-1h-1-1l-1-1h-1v-1h-1-1-3v-1h-2v-1l-1 1v-1h-1l-1 1h-1v-1h-9v-1h-1-2v1-1h-4l-1-1h-1v1h-1v-1h-2v1h-1v-1h1-1v-1h-2v1h-2v1h-2v-1l-1 1-1 1h-3v1l-1 1v1h-1v2h-6l1 2h-1 1v1h1l1 1h2v2h1v-1h1v1l1-1v1h1-1v1l1-1v1h2-1 1l-1 1h-1v-1l-1 1h1v1-1l-1 1h-3l-1-1h1v-1h-1v-1l-1 1h-2v1l-1 1-1-1v1H8l-1 1h3v1H9l1 1 2 1h2v-1h1l1 1h1v-1h3v4h-2l-1 1h-1-1v-1h-1l-1 1h1v2-1h-1v1l-2 1v2h1v1h3-1v2l1 1h1l1-1v-1h1v1h-1v1h1v1c1 0 0 0 0 0v1h0l1 1h1l2-1h1v1h1v0l1-1v1h2v-1h1v1h-1v2h-1v2h-1v1l-1 1h-1l-2 1v1h-1-2v1h-1v1h-1v1h1v-1l1 1v-2h2-1 2l1-1v1h1v-1l1-1v0l1-1h1v-1h2v-1h1v-1h1v-1h1v-1h1v-1h2v-1h-2v-1h1v-1h1v-1h2v-1l1-1 1-1 1-1v1l2-1v2h-1v-1h-1v1h-1v2h-1v1h1l-1 1v1h1v-1h2v-1h1v-1 1l1-1h3v-2l-1 1v-1h-1v-1h2v1-1h2v1h1v1h2v1h2l1 1 1-1h1v1h5v1h1v1h1v-1h1l-1 1 1 1v1h2v1h1v1h1v1l1-1v1h1l-1-1h1l-1-1h-2 1v-1h1v-1l1 1h1v1h1v1h1l-1 1h1v1h1-1l1 1v1h1v2h1v-1h1-1v2h1v-1l1 1h-1v1h1-1v1h1v-1l1-1v1h1-1l-1 1v1h1l-1 1h1-1l1 1 1 1v-1h1v1h-1l1 1h1v1h1v4h1v-1l1 1h3v1h2v1h1l1 1v1h1l-1 1 1 1v1h-1v-1h0-1-1-2v1h1l1 2v7l-1 2v2l1 1v4h-1v1h1v1l1 1v1l1 1v1h1v-1h-1 1v2-1 2h1v1h-1l1 1v1h1v1h1v2h2l1 1h1c0 1 0 0 0 0l1 1v1h1v2h1v1l1 1v1l1 1v1h2l1 1-1 1h1v3h-2 1l1 1v1h2v1h1v2h1v2h1v1h1l1 1v2h1v-1-1l-1-1h-1v-2-1h-1v-2h-1v-1l-1-1h0v-1h-1v-2-1a2 2 0 0 0-1 0v-2h-1v-1h-1v-2h-1l1-1h-1l2 1v-1h1l1 1v2h1v2h1v1l1 1h1v2h1l1 1v1h1v2l1 1h1v1l1 1v1h1l1 1v2h1v1h1v6l1 1h1l1 1h1v1l1 1h2v1h1v1h3v1h3v1h6v-1 1h3l1 1v1h1v1h1v1h1-1 2v1h3l2 1v-1h1v2h1v2h1v1h1v2h-1l1 1v1h1v-1h1v1h1l1 1h-1v1h1v-1 1h3v1h1l1 1 1-1h-1v-1h2v-1h1v1h2v1h-1v1l1 1h1v2l-1 1 1 1v1l-1 1v1h1l-1 1v1h-1l-1 1s1 0 0 0l1 1h-1l-1 2h-1v2h-1v1l1 1h-1-1l1 1-1 1 1 1h-1v1h2v1l-2 2-1 1h1v3h1v1h1v1h1l1 1 1 1v1h1v2h1v3l1 1v1l1 1v1l1 2h-1l1 1v1h1v1h1v1h1l1 1h1v1h2l1 1h1v1l1 1 1 2v4 1l-1 1v9h-1l1 1h-1v5h-1v1l1 2v1h-1v3h0v4h-1 0v2l-1 2v3l-1 1v1h-1 1l-1 1 1 1v4h-1v4h1v-1h1v4h-1v1l1 1-1 1v1l-1-1 1 1h-1v2h1l-1 1v2-1h-1v0h-2v1h1l-1 1h2v1h1l-1 1h0v4l1-1-1 1v1l-1 1 1 1h1v1h-1l1 1v1h-2 2v1l1-1h0v1h-1v2h1v1h1l2 1v-2h1v-1h2v-1h2v-1h-1v-2l-1 1 1-1v-1h1l-1-1 1-1v1l2-1v-1h-1 1v-1l1-1h1v-1h1v-1h-1 1v-2h-2l-1-1v-1-1l2-1v-1h2v-1h-1 1v-1-1l1-2h1v-1h-1s0 1 0 0h1v1l1-1h1v-1h-1v1l-2-1v-1h-1v-1h1v-1h1v1h3v-1h1v-2-1-1h-1v-1h1l1 1-1-1h5v-1h3v-1l1-1v-1h1v-2h-1-1l1-1-1-1v-1h-1v-1h-1v-1-1l1-2v3h1v1h1l1 1h4l1-1v-1h1v-1l1-1v-1l1-1v-1l1-1h1v-2l1 1v-1 3h-1 1v-2h1v-1-1l1-1 1-1 1-1v-1-2h-1 1-1v-1h1-1v-2h1v-1h1l1-1 1-1h1v-1h3v-2h3v-1h1v1h1v-1h1v-1-1-1h1v-1l1-1v-1l1-1h1v-2l1-1-1-1v-1l1-1v-1-3-2h-1 1a1 1 0 0 0 0-1l1-1v-1l1 1v-1l1-1v-1l1-2h1v-1h1l1-1v-1h1v-3zM200 95v1l-1-1h1zm-9-1l1-1v1h-1zm-1 2h1l-1 1-1 1 1-2zm-7 22v-1 1zm-1-29h1-1zm0 13h1l1-2h1l-1 2h-2zm0 13l-1 1v-1h1v1-1zm-2-28l1 1h-1v-1zm-8 32h3v1l1-1h-1a1 1 0 0 1-1 0v-1h2v1h1l1-1v1h-1 1l-1 1-1 1h-4v1h-1v1h-1l-1 1h-2l-1 1h-2 1-1v-1-1l1-1v2h1v-1h1l1-1h1l1-1h1v-1h1v-1zm-3-6h2v1h-1v-1h-1zm-15-9v-1h1l1 2h-1a1 1 0 0 1 0-1h-1v0zm-5 7h1v-1h2v-1h1v-1h1l1-1v-1l1 1v-1h1v1l1-1v2h1v1h2v1l1 1v2h2v1-1 1h5l1 1 1 2h-1v1h0-1v-1 1-1h-1l-1 1v3h-1l-1-2h-1l-1 1 1-3v-1a1 1 0 0 0-1-1h-1-1l-1 1v1a1 1 0 0 0-1 0v1l-1 1v2h1v1h-1v2h-1-1v-4-2l1-1v-1l-1 2h-1l1-1v-1h1v-1-1h1v1-1h5l-1-1h-1v-1h-2v1h-1-2v-1h-2v-1h2v-1l-2 1-1 1h-2-1-2l1-1zm-6-72v-1l1 1h-1zM67 81l-2-1h1l1 1zm25 29l-1 1v-1h1zm48-9v1h-1v-1-2h-2v-1h1l-1-1-2-1v-1h-1v-1h1v-1h1v-1 1h1v3h1v2h1v1h1v2zm-12-20a4 4 0 0 1 0 1h-1v-1h1zm-28-14h-1l-1 1h-1v-1h-2 2v-1l1 1h2zm0-6h-3v1h2v1h-1v-1l-3 1v1h-1v-1h1l2-1a1 1 0 0 1-1 0h-1-1v1l-1 1-1-1h-1v-1l1-1-1-1h3v-1h-3v-1h-1v1h-1v-1h1l1-1 1 1v-1h7l-3 1h1v1h4l-1 1 1 1h-1zm10 65l-1-2h2v1l-1 1zm2-56v1h-1v1h-2l-1 1-1 1h-3a1 1 0 0 0-1 0v-1h-2v-1h1l3-1h1v-1l-1-1v-1l-1-1h1v1h2v2h4l1-1 1-1h1v-1h2v1l-1-1 1 1h-1v1h-1l-1 1h-1zm8 8h-1-1l-1 1h-2v1l-1 1h-2l1-1 1-1h1v-1h1v-1l1 1h4-1zm7 9zm3-4l-1 1h1v1h-1v1h-1v-1-1c0-1 0 0 0 0v-1h1v-1h1v1zm4 16l-1-1v-1l-1-1h-1l2-1h-1 1l1 1v3zm3 4h-1l-1-2-1-1a1 1 0 0 0 0-1h1l1 2v1h1v1zm22 87h-1v-1h1v1zm2 2h-1v-1h-1v-1h1v1h1v1zm22 143l1-1v1h-1zm1-1h1a1 1 0 0 1-1 0zm1 2v-1-1h1v1l-1 1zm5-86v-1h-1-1v-1h1v1h2l-1 1zm4 6v-1h-1 1v1z'></path>
            <path d='M81 102v2h1v-1 1h2v1h2v1h1v1h3c0 1 0 1 0 0v1h1a1 1 0 0 0 0-1h-1v-1l-1-1-2-1-1-1h-2v-1h-3zm438 112v2h1v3l1-1 1 1v3l2 1 1-1v1h5v1h1v-1h2v-1h1v-1h1l-1-1 1-2v-1h1-1v-1h1-1v-1l3-1h-1l-1-1v-3l-1-1 1-1h-1v-1l1 1 1-1v-1h1v-2h-2v-2h-1-1v-1 2h-1v1h-1v2h-1l-1 1a3 3 0 0 0-1 0v1l-1 1v1h-3l-1 1v2h-1 1-1v-1h-2-1v1l-1 1zm39-70v1l1 1h-1v1l1-1v1l1-1-1-1h1v2h-1v2h-1 1l1-1v1h1v-3h1v-1c-1 0 0 0 0 0h-1v-1h-1v-1h-1v1h-1zm-21 51v1l-1 1h-1l-1 1h2v-1l1-2h1v-1h1v-1-1l-1 1v1h-1 1-1v1zm-17-17l1 1v-1h2v-1-2h1l-1-1h-1v1h-2v1h-1v1l1 1h1-1zm44-38l-1 1-1 1h-1-1v1h2l1-1 1 1v-1h4l-1 1s1 0 0 0v1h3v-1h1v-1h-1 1l1 1v-1h2l1-1v0h2-1v-1h1v-1 2l1-1v-1h-1 1v-3h1l-1-1 1-2v-1h1v-4l-1-1h-1v-1h-1v2h-1 1l-1 2h1v1h-1v2h-1v1l-1 1h-1v1h-1v1h-1v-1h-1 1v-1l-1 1v2h-1v2h-4l-1 1v-1zm-23 26h-1l1 2 1 1v-1h1v-2l1-3v-1h-1l-1 1v1h-1v2zm-2 16v1h1v2h1v2h1v1-1h2v1h1v-1h-1 1v1h1v1h1v-1-1l-1-1v1h-1v-1h-3v-1-1-2h1v-1h1v-3h-1 1v-1h-1-2v2h-1v1h1l-1 1v1h-1zm0 36l-1 1v5h1v1h-1v3h2v-1l1-1-1-1h1v-2h1v2h1v2h1v-1h1v-1l-1-1v-1h-1v-2h-1 1v-1h1v-1h2v-1h-4v1l-1-1h-1l1-3v1-1h1l1 1v-1h2v1h2l1-1 1-1v-1h-1v1h-3l-1 1v-1h-4l-1 1v3zm38-95v2h2v-1h-1v-1h2l1 1h2v-1l1-1h3v-1-1h-1-1v-1l-1 1-1-1a6 6 0 0 0-1-1v-1a1 1 0 0 0-1 0v-1h-1l-1 1h1v3h-1l1 2h-2v-1h-1v1h0v1zm4-10v2h-1 1v-1h1v-1l1 2h1v-1h-1v-2h-1v-1-2h1v-1-1l1-1 1 1v1h1v-1h-1v-1h-1v-1-3h-1l1-2h-1l1-2h-1v-3-1l-1 1v2l-1 1v15zm6 115a1 1 0 0 1 0-1l-1-1v-1h-2v-1h-3v-1h-1l-1-1h-1-1v-1l-1 1v-1h-3v-1h-1l-1 1h-1l-1 1v1h-2v-1h-1v-4h-6v2h2v1h3l-1 1h-3 1l1 1v1l1-1h1v1h1v1h1v1l1-1v1h2l1 1h2v3h1v3h-1l-1 1h2v-1 1h3v1h1v1h2v-1h3v-1-1h1l1 1h1v-1 1h2v2h2v1h1v1h3v1h2v-1h-2l1-1h-1l-1-1h-1v-2h-1c0-1 0 0 0 0v-1h-1v-2h1v-2h-1l-1-1h-2zm7 1l-1-1-1 1h5l1-1h1v-2h-1v1h-1v1h-1-1v-1 1h-1v1zM285 67v-1h1l1 1v-1h3v-1h1v-1h1v-1l1 1h1l-1-1h1-1v-1l-1-1-1 1 1-1-1-1h1v-1l-1 1a1 1 0 0 1-1-1h-1l-1 1h-1-1-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v1h-1v-1h0v-1l-1-1v1h-1 1v1h-1v-1h-1-1 1v1l-1 1h-1 2l1-1 1 1h-1v1h0l-2 1h2l1 1h1l-1 1h-1 3l1 1h1-1v1l1-1v1h2l1-1v0h1a1 1 0 0 0-1 0zm126 180v-1-2l-1-1s0 1 0 0h-1v-1l-1 1v2h-1v2h-1 1-1v1h-1v1h-3v1h-1l-1 1-1 1v4h1v2l-1 1h-1v1h1l-1 1v1h-1v3h1v2h1v2h1v1h3v-1h2v-2h1v-3l1-1v-1a1 1 0 0 1 0-1h1v-2-1-2h1v-1h1v-2-1-2-1l1 1v-3zM278 42h1l1-1h-2l1-1h-2 2v-1h-2l1-1h-2 1l-2-1h-2v1h-2-1v1h3v-1l1 1h1l1 1-1 1h2l1 1zm-8 4v-1h1v1l1-1v-1l-2 1v-1 1h-3v1h1l1-1v1h1zm258 187l1 1h1v-2l-1-1h-2v-1h-1v-1h-1-1-1-3-1v-1h-1-1-3l-1 2h2-1v1h3v1h6v1h5zm-59-33l-1-1v-1c-1 0 0 0 0 0h-1v-1h-1v-1l-1 1h0l1 1h-1v5h1v1h1l1-1h1v-4zm43 27h2v-2l1-2h-1v-1-1h-1a1 1 0 0 0-1 0v-1-1l-1-1h-1v-1-2l-1-1h-1-1v-1l-1-1v-1h-1v1l-1-1v-1l-1-1h-1v-1h-1v-1c-1 0 0 0 0 0l-1-1-1-1a1 1 0 0 1 0-1h-2-3v1h1v2h1v1h1l1 1v1h1v1l2 1v2h1v2h1v1h1v1h1v3h1v1l1 1v1h1v2h2v1h1l1 1v-1zM284 7zm142 5h-1 1zm-8 0zm-57 1zm58 1zm-260 4zm28 5zm158 0v1-1zm-62 3zm-140 2zm348 0h1-1zm-352 0v0zm1 0zm-24 4v-1l-1 1h1zm168 1h1v-1h-1v1zm-143 0h0zm278 0v1m-280 3zm413 1v1h-1 1v-1zm0 1l1-1h-1v1zm2 0zm-2 2v-1 1zm3-1zm1 2zm-372 1v-1 1zm38 0v1m374-1v0zm-233 1h1-1zm233 2zm-236 0h1-1zm9 0h-1 1zm-12 1v-1 1zm67-1zm-266 0l1 1v-1h-1zm-9 2v-1 1zm21 1v-1 1zm446 0zm-484 1v-1 1zm41 0v-1 1zm443 0zm-266 1v-1 1zm-1 0h0zm-127 2zm203 0h1-1zM10 53zm125 1h-1 1zm210 0h-1v1h1v-1zM17 58v-1 1zm145 1zm182 2zm20 2zm-167 0h1-1zm-15 4v-1 1zm-6 2h1-1zm6 0h-1 1zm202 3v1-1h-1 1zM45 75zm273 0zM47 76v-1 1m306 0zm-25 2zm1 0zm-1 0h1-1zm-138 1h0zm138 0zM35 82zm30 0h1v1h-1zm6 1zm288 1h1-1zm-54 0s-1 0 0 0zM34 85h1-1zm40 2zm97 0h-1zm-98 0v0zm-3 1zm101 0zm135 0v0zm314 2zm-313 0zm1 1v-1 1zm49-1v1zM73 91v-1 1zm265 2h1v-1l-1 1zM77 94zm1 2zm438 1h1-1zM80 98v-1 1zm1 0h-1v1h1v-1zm586 1h1-1zm-11 1h-1 1zm-7 1h-1 1zm-433 1h-1 1zm100 1h-1 1zM604 106h1-1zm-448 1zm447 1zm-449 0h-1 1zm444 5h1-1zm-434 1zm267 0zm164 2l1-1v-1 1h-1v1zm-436-1h-1 1zm9 1h-1l1 1m37-1zm385 5l-1-1 1 1zm-401 3zm167 6zm-35 1v-1 1zm46 2v0zm-188 1h-1 1zm188 1h1-1zm1 2zm2 0h-1 1zm-3 0zm-7 0v1-1m9 3zm196 0h-1 1zm-388 1h-1 1zm390 1v1zm-24 7zm18 2h-1 1zm-2 0zm-266 4h1-1zm-7 0zm271 1zm-4 3v-1 1m-370 12zm21 12l1 1v-1h-1zm287 4v0zm-283 2v-1 1zm283 0v0zm-72 1h-1-1 2zm72 0v0zm48 1h1l-1-1v1zm-48 0v1-1h-1 1zm-291 2h1-1zm290 1zm54 0h1-1zm-338 3h0zm-39 3zm3 0zm0 0zm124 0h1-1zm198 1zm51 1zm-47 9v-1h-1l1 1zm-270 0h-1 1zm281 1h-1m5 1h1v1h-1zm-363 4v-1 1zm75 0zm287 0zm-286 1v-1 1zm-1 0zm336 0h1-1zm0 1v-1 1zm-5 0zm-51 3v-1 1s1 0 0 0zm86 6v-1 1zm-46 0zm11 6h1-1zm-8 1zm1 0zm50 3h-1 1zm-37 3h0zm16 11v-1h-1v1h1zm-165 1v-1 1zm218 10h-1 1zm-102 6v0zm-306 17v-1 1zm-40 27zm0 1zm0 1v-1 1zm1 2v1-1zm-3 12h-1v1l1-1zm6 11h0zm7 2v0zm435-29v-1l1-1 1-1 1-1 1-1h1l1-1 2-1h1v-3h1l1-1v-1l1-1v1l1 1 1-1v4l-2 2v1h1-2l-1 1h-1v1l-1 3-1 1h-6m13-16h1v1h1v2l-1 1 1 1h1l1-1 1-2 1-1v-2h1l1 1v-2h1v-2h-2l-1 1-2-1-1-1v-2l-1 2v-1l-1-1v-1l-1-2-2-1 1 2 1 1v2l2 1v2l-1 1-1 1m-12 18v1l2-1'></path>
          </g>
        </svg>

        <slot></slot>
    `;
        }
        constructor() {
          super();
          this._locationCounter = 0;
          const shadowRoot = this.attachShadow({ mode: 'open' });
          shadowRoot.innerHTML = WorldMap.TEMPLATE;
        }

        createdCallback() {}

        attachedCallback() {}

        get locationCounter() {
          return this._locationCounter;
        }

        registerLocation() {
          this._locationCounter++;
        }
      }

      class WorldMapLocation extends HTMLElement {
        static get TEMPLATE() {
          return `
                <style>
      .pin{
        position:absolute;
      }
      .dot {
        z-index:1;
        display: inline-block;
        position:absolute;
        background: #e3ff04;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        transform: translate(-50%,-50%);
        cursor: pointer;
      }
      .dot.anim {
        animation-duration: 1s;
        animation-fill-mode: backwards;
        animation-name: dot;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
      .spread {
        display: inline-block;
        background: transparent;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        position:absolute;
        transform: translate(-50%,-50%);
      }
      .spread.anim {
        animation-duration: 1s;
        animation-name: spread;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
      .title {
        color: #e3ff04;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
        font-size: 1rem;
        opacity: 0;
        position: absolute;
        bottom: 0;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
      }
      .title.anim {
        -webkit-animation-duration: 1.25s;
        animation-duration: 1.25s;
        -webkit-animation-fill-mode: backwards;
        animation-fill-mode: backwards;
        -webkit-animation-name: title;
        animation-name: title;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
      }

     @keyframes dot {
       from {
         background: transparent
       }
     }

     @keyframes spread {
       from {
         background: #e3ff04;
         width: 0;
         height: 0
       }
     }

      @keyframes title {
        0% {
          opacity: 0;
          transform: translate(-50%,-100%)
        }

        20% {
          opacity: 1;
          transform: translate(-50%,0)
        }

        80% {
          opacity: 1;
          transform: translate(-50%,0)
        }

        100% {
          opacity: 0;
          transform: translate(-50%,300%)
        }
      }
      </style>

      <span class='pin'>
        <span class='dot anim'></span>
        <span class='spread anim'></span>
      </span>

      <span class='title anim'>
      </span>
    `;
        }
        
        constructor() {
          super();

          const shadowRoot = this.attachShadow({ mode: 'open' });
          shadowRoot.innerHTML = WorldMapLocation.TEMPLATE;

          this.pin = this.shadowRoot.querySelector('.pin');
          this.dot = this.shadowRoot.querySelector('.dot');
          this.spread = this.shadowRoot.querySelector('.spread');
          this.label = this.shadowRoot.querySelector('.title');
        }

        connectedCallback() {
          const animationDelay = `${this.parentElement.locationCounter + 0.5}s`;

          this.pin.style.top = this.getAttribute('top');
          this.pin.style.left = this.getAttribute('left');
          this.label.innerHTML = this.getAttribute('label');
          this.dot.style.animationDelay = animationDelay;
          this.spread.style.animationDelay = animationDelay;
          this.label.style.animationDelay = animationDelay;

          this.dot.addEventListener('mouseover', (e) => {
            this.stopAnimation(this.dot);
            this.stopAnimation(this.spread);
            this.stopAnimation(this.label);
            void this.offsetWidth;
            this.startAnimation(this.dot);
            this.startAnimation(this.spread);
            this.startAnimation(this.label);
          });

          this.parentElement.registerLocation();
        }

        stopAnimation(element) {
          element.classList.remove('anim');
          element.style.animationDelay = '';
        }

        startAnimation(element) {
          element.classList.add('anim');
        }
      }

      customElements.define('world-map', WorldMap);
      customElements.define('world-map-location', WorldMapLocation);