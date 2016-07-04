var buttons7Click = Array.prototype.slice.call( document.querySelectorAll( '#btn-click button' ) ),
  buttons9Click = Array.prototype.slice.call( document.querySelectorAll( 'button.btn-8g' ) ),
  totalButtons7Click = buttons7Click.length,
  totalButtons9Click = buttons9Click.length;

buttons7Click.forEach( function( el, i ) { el.addEventListener( 'click', activate, false ); } );
buttons9Click.forEach( function( el, i ) { el.addEventListener( 'click', activate, false ); } );

function activate() {
  var self = this, activatedClass = 'btn-activated';

  if( classie.has( this, 'btn-7h' ) ) {
    // if it is the first of the two btn-7h then activatedClass = 'btn-error';
    // if it is the second then activatedClass = 'btn-success'
    activatedClass = buttons7Click.indexOf( this ) === totalButtons7Click-2 ? 'btn-error' : 'btn-success';
  }
  else if( classie.has( this, 'btn-8g' ) ) {
    // if it is the first of the two btn-8g then activatedClass = 'btn-success3d';
    // if it is the second then activatedClass = 'btn-error3d'
    activatedClass = buttons9Click.indexOf( this ) === totalButtons9Click-2 ? 'btn-success3d' : 'btn-error3d';
  }

  if( !classie.has( this, activatedClass ) ) {
    classie.add( this, activatedClass );
    setTimeout( function() { classie.remove( self, activatedClass ) }, 1000 );
  }
}

(function() {
  // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
  if (!String.prototype.trim) {
    (function() {
      // Make sure we trim BOM and NBSP
      var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      String.prototype.trim = function() {
        return this.replace(rtrim, '');
      };
    })();
  }

  [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
    // in case the input is already filled..
    if( inputEl.value.trim() !== '' ) {
      classie.add( inputEl.parentNode, 'input--filled' );
    }

    // events:
    inputEl.addEventListener( 'focus', onInputFocus );
    inputEl.addEventListener( 'blur', onInputBlur );
  } );

  function onInputFocus( ev ) {
    classie.add( ev.target.parentNode, 'input--filled' );
  }

  function onInputBlur( ev ) {
    if( ev.target.value.trim() === '' ) {
      classie.remove( ev.target.parentNode, 'input--filled' );
    }
  }
})();

