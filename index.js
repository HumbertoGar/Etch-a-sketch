// When true, moving the mouse draws on the canvas
let isDrawing = false;
let x = 0;
let y = 0;
const myPics = document.getElementById('myPics');
const context = myPics.getContext('2d');
const reset = document.getElementById('reset');
const color = document.getElementById('color');
const pencilResize = document.getElementById('resize');

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

// Add the event listeners for mousedown, mousemove, and mouseup
myPics.addEventListener('mousedown', e => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

myPics.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener('mouseup', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

reset.addEventListener('click', e => {
  myPics.width = myPics.width;

},false)

color.addEventListener('click', e => {
  context.strokeStyle = color.value;

},false)

pencilResize.addEventListener('click', e => {
  var res = prompt('¿How much resize do you want?');
  if (isNaN(res)) {
    alert('Please enter number - ERR!!')
  } else {
    context.lineWidth = res ;
    
  }
},false)

function drawLine(context, x1, y1, x2, y2,res) {
  context.beginPath();  
  context.strokeStyle = color.value;
  context.lineWidth = res;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
  
}




















