var pro = document.getElementById('pro');
setInterval(function () {
  pro.value += 1;
}, 100);

document.getElementById('curYear').innerHTML = new Date().getFullYear();
