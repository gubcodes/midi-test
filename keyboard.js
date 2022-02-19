const blacks = [ 
  "22", "25", "27", "32", "30", "34", "37", "39", "42", "44", "46", "49", "51", "54", "56", "58", "61", "63", "66", "68", "70", "73", "75", "78", "80", "82", "85", "87", "90", "92", "94", "97", "99", "102", "104", "106"
]

const kb = document.getElementById('keyboard');

Object.entries(d.f).forEach(entry => {
  const kbKey = document.createElement('div');
  const [key, value] = entry;
  kb.appendChild(kbKey);
  kbKey.classList.add('key');
  kbKey.setAttribute('id', key);
  if ( blacks.includes(key) ) {
    kbKey.classList.add('black');
  };
  kbKey.setAttribute('onclick', 'play(1,'+ key + ')')
});