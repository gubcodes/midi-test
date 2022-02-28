let singleStep;
let sessionUpdate;
let singleSelect;
let singleToken;
let singleParsed;
let saveMsg;


function saveSession() {
  const timestamp = Number(new Date());
  const humanDate = new Date(timestamp);
  localStorage.setItem("time", humanDate);
  let bpm = document.getElementById("bpm");
  localStorage.setItem("bpm", bpm.value);

  for (let i = 1; i <= (steps + 1); i++) {
    if ( i !== steps +1) {
      singleStep = document.getElementById(i);
      sessionUpdate = {
          "checked" : singleStep.firstElementChild.checked,
          "fr"      : singleStep.lastElementChild.value
      }
      localStorage.setItem(i, JSON.stringify(sessionUpdate));
    } else {
      saveMsg = document.getElementById("save-message");
      saveMsg.innerHTML = `session saved at ${humanDate}`;
    }
  };
}

function loadSession() {
  let bpm = document.getElementById("bpm");
  let sessionBpm = localStorage.getItem("bpm");
  bpm.value = sessionBpm;

  for (let i = 1; i <= (steps + 1); i++) {
    if ( i !== steps +1) {
      singleStep  = document.getElementById(i);
      singleToken = localStorage.getItem(i);
      singleParsed = JSON.parse(singleToken);
      if ( singleParsed.checked ) {
        singleStep.firstElementChild.checked = true;
      }
      singleStep.lastElementChild.value = singleParsed.fr;
    } else {
      let time = localStorage.getItem("time");
      saveMsg = document.getElementById("save-message");
      saveMsg.innerHTML = `session restored from ${time}`;
    }
  }
}
