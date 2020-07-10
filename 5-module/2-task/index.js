function toggleText() {
  let elementButton = document.querySelector('.toggle-text-button');
  let elementText = document.querySelector('#text');

  function clickHidden () {
    elementText.setAttribute('hidden', '');
  } 

  function clickHiddenOff () {
    elementText.removeAttribute('hidden', '');
  } 

  function clickHandler () {
      if (elementText.hasAttribute('hidden') === true) {
        clickHiddenOff ();
      } else {
        clickHidden ();
      }
    }
  
  elementButton.addEventListener('click', clickHandler);
  
}
