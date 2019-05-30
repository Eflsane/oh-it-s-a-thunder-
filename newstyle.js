const heds = document.getElementsByTagName('header');
const navi = document.getElementsByTagName('nav');
const lmenu = document.getElementsByClassName('leftmenu');
const pray = document.getElementsByClassName('pray');
const prayb1 = document.getElementsByClassName('praybut');
const prayb2 = document.getElementById('praybut');
const main = document.getElementsByTagName('main');
const start = document.getElementsByClassName('start');
const foot = document.getElementsByTagName('footer');
let flag = 0;

function nows(page) {
  if (flag === 0) {
    heds[0].style.backgroundColor = 'rgb(247, 234, 0)';
    navi[0].style.backgroundColor = 'rgb(128, 128, 128)';
    for (var i = 0; i < lmenu.length; i++) {
      if (i !== page) lmenu[i].style.backgroundColor = 'rgb(128, 128, 128)';
      lmenu[i].style.border = '1px solid black';
    }
    pray[0].style.backgroundColor = 'rgb(47, 56, 174)';
    prayb1[0].style.backgroundColor = 'rgb(253, 253, 253)';
    prayb2.style.backgroundColor = 'rgb(176, 176, 176)';
    main[0].style.backgroundColor = 'rgb(16, 112, 21)';
    main[0].style.color = 'rgb(251, 182, 87)';
    start[0].style.backgroundColor = 'rgb(16, 112, 21)';
    foot[0].style.backgroundColor = 'rgb(36, 44, 132)';
    flag = 1;
  }
  else {
    heds[0].style.backgroundColor = 'rgb(0, 0, 0)';
    navi[0].style.backgroundColor = 'rgb(black)';
    for (var i = 0; i < lmenu.length; i++) {
      if (i !== page) lmenu[i].style.backgroundColor = 'black';
      lmenu[i].style.border = '0px solid black';
    }
    pray[0].style.backgroundColor = 'rgb(35, 20, 53)';
    prayb1[0].style.backgroundColor = 'rgb(74, 28, 55)';
    prayb2.style.backgroundColor = 'rgb(237, 112, 90)';
    main[0].style.backgroundColor = 'rgb(19, 19, 19)';
    main[0].style.color = 'rgb(47, 17, 189)';
    start[0].style.backgroundColor = 'rgb(19, 19, 19)';
    foot[0].style.backgroundColor = 'black';
    flag = 0;
  }
}
