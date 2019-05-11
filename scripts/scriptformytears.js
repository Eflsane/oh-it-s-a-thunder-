function randomizer(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let a;
a = randomizer(1, 3);
if (a === 1) alert('Разрази меня гром!');
if (a === 2) alert('*Вас ослепило сиянием молгии');
if (a === 3) alert('Добро пожаловать в обитель гроз');


function okb1() { document.getElementById('advsby').style = 'display: none';}
