function hideSelf() {
  let elementButton = document.querySelector('.hide-self-button');
  elementButton.onclick = function () {
    elementButton.setAttribute('hidden', '');
  }
}