const button1 = document.querySelector('button:nth-of-type(1)');
const button2 = document.querySelector('button:nth-of-type(2)');
const button3 = document.querySelector('button:nth-of-type(3)');
const link = document.querySelector('a');

button1.addEventListener('click', function() {
  document.body.style.backgroundColor = 'blue';
});

button2.addEventListener('dblclick', function() {
  document.body.style.backgroundColor = 'pink';
});

button3.addEventListener('mousedown', function() {
  document.body.style.backgroundColor = 'brown';
});

button3.addEventListener('mouseup', function() {
  document.body.style.backgroundColor = 'white';
});

link.addEventListener('mouseover', function() {
  document.body.style.backgroundColor = 'yellow';
});

link.addEventListener('mouseout', function() {
  document.body.style.backgroundColor = 'white';
});

