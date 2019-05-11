/* function start1() {
  document.getElementById('lir1').style = "height: 100%; font-size: 70%;";
}

function end1() {
  document.getElementById('lir1').style = "height: 0%; font-size: 0%;";
}


function start2() {
  document.getElementById('lir2').style = "height: 100%; font-size: 70%;";
}

function end2() {
  document.getElementById('lir2').style = "height: 0%; font-size: 0%;";
} */

function start1() {
  let stylech = document.getElementById('lir1');
  if (stylech.style.height === "0%") stylech.style = "height: 100%; font-size: 70%;";
  else stylech.style = "height: 0%; font-size: 0%;";
}

function start2() {
  let stylech = document.getElementById('lir2');
  if (stylech.style.height === "0%") stylech.style = "height: 100%; font-size: 70%;";
  else stylech.style = "height: 0%; font-size: 0%;";
}
