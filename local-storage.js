let singleStep;
let sessionUpdate;
let singleSelect;
let singleToken;
let singleParsed;

function saveSession() {
  for (let i = 1; i <= steps; i++) {
    singleStep = document.getElementById(i);
    sessionUpdate = {
        "checked" : singleStep.firstElementChild.checked,
        "fr"      : singleStep.lastElementChild.value
    }
    localStorage.setItem(i, JSON.stringify(sessionUpdate));
  };
  alert('session saved in browser storage.\nuse the load button to restore this session. \n\nsaving again will overwrite this session. \ndeleting browser data will erase your saved session.');
}

function loadSession() {
  console.log('load session');
  for (let i = 1; i <= steps; i++) {
    singleStep  = document.getElementById(i);
    singleToken = localStorage.getItem(i);
    singleParsed = JSON.parse(singleToken);
    if ( singleParsed.checked ) {
      singleStep.firstElementChild.checked = true;
    }
    singleStep.lastElementChild.value = singleParsed.fr;
  }
}
