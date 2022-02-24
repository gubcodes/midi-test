const seq = document.getElementById('sequencer');
let steps = 16;
// let interval = 125; //120 bpm at 1/16 (16 steps)
let interval = 300;
let count;
let checkbox;
// console.log(interval);

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
}

function sequencerPlay() {
  console.log('sequencer start');
  for (i = 1; i <= steps; i++) {
    e = document.getElementById(`${i}`);
    sequencerSpeed(e);
  }
  setTimeout(function() {
    sequencerPlay()
  }, interval * steps)
}

function sequencerSpeed(element) {
  setTimeout(function() {
    checkbox = element.firstChild.checked;
    if(checkbox) {
      console.log('checked');
      play(1, 60);
    }
    element.classList.add('single-current');
    setTimeout(function() {
      if(checkbox) {
        console.log('checked');
        play(0, 60);
      }
      element.classList.remove('single-current')
    }, interval);
  }, interval * element.id);
}

// todo: redo the functions above^
// create async function to fire sequencerPlay again after all.forEach finishes
// conditionally change sequencerSpeed interval to 0 if it is the first element (so that it starts immediately when clicking "play") - only use "interval * element.id" for every element after the first