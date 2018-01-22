var scrolling = false;

function scroll(start, end) {
  var current = start;

  var move = function () {
    filmroll.style.left = current + 'px';

    if (current == end) {
      clearInterval(loop);
      scrolling = false;
    }

    if (end > start) {
      current = Math.min(current + 20, end);
    } else {
      current = Math.max(current - 20, end);
    }
  }

  var loop = setInterval(move, 50);
  scrolling = true;
}

function handleEvent(e) {
  if (!scrolling) {
    backAndForth(e.keyCode);
  }
}
