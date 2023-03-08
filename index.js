const input = document.getElementById('button');

function clickAlert() {
  alert('Oh yeah! I was clicked!');
}

input.addEventListener('click', clickAlert);