// for testing: interval should be 125ms for 120bpm


let bpmInput = document.getElementById('bpm');

let bpm = bpmInput.value;

let interval = (60000 / bpm) / 4;

bpmInput.addEventListener('input', updateBPM);

function updateBPM(e) {
  bpm = e.target.value;
  interval = (60000 / bpm) / 4;
}