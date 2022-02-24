const seq = document.getElementById('sequencer');
let steps = 16;
let interval = 125; //120 bpm at 1/16 (16 steps)
let count;
let checkbox;
let frequency;
let defSel = 60;
let seqStatus = false;

// creating steps (checkboxes, labels)
for (let i = 1; i <= steps; i++) {
  let single = document.createElement('div');
  let input = document.createElement('INPUT');
  let label = document.createElement('Label');
  seq.appendChild(single);
  single.classList.add('single');
  single.setAttribute('id', i);
  single.appendChild(input);
  input.setAttribute('type', 'checkbox');
  label.setAttribute('for', i);
  label.innerHTML = i;
  single.appendChild(label);

  // creating frequency dropdowns
  let select = document.createElement('select');
  single.appendChild(select);
  select.name = 'freq';
  select.id = 'freq' + i;
  for (const val in freq) {
    var option = document.createElement("option");
    option.value = val;
    option.text = val;
    if ( val == defSel ) {
      option.setAttribute('selected', 'selected')
    }
    select.appendChild(option);
  }
}

// stopping sequencer
function sequencerStop() {
  seqStatus = false;
}

// starting sequencer
function sequencerPlay() {
  seqStatus = true;
  for (i = 1; i <= steps; i++) {
    e = document.getElementById(`${i}`);
    sequencerSpeed(e);
  }
  setTimeout(function() {
    if ( seqStatus ) {
      sequencerPlay();
    }
  }, interval * steps)
}


// sequencer steps
function sequencerSpeed(element) {
  setTimeout(function() {
    checkbox = element.firstChild.checked;
    frequency = element.lastChild.value;
    if(checkbox) {
      play(1, frequency);
    }
    element.classList.add('single-current');
    setTimeout(function() {
      if(checkbox) {
        play(0, frequency);
      }
      element.classList.remove('single-current')
    }, interval);
  }, interval * element.id);
}

// todo:
// add note names to dropdowns
// add speed (bpm if possible - lots o math) option
// add amount of steps option
// add ability to make more lines (measures) of steps - and then how manys steps in each measure
// add key objects to filter frequencies available
// conditionally change sequencerSpeed interval to 0 if it is the first element (so that it starts immediately when clicking "play") - only use "interval * element.id" for every element after the first