var canvas = document.getElementById('myChart');
if (canvas.getContext) {
  var ctx = canvas.getContext('2d');

  // fillStyle：填色
  ctx.fillStyle = 'rgb(200,0,0)';
  // fillRect：定義形狀
  ctx.fillRect(10, 10, 55, 50);

  ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
  ctx.fillRect(30, 30, 55, 50);
}
