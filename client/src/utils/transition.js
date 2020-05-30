function transition(el) {
  if (!(this instanceof transition)) {
    return new transition(el);
  }
  this.el = document.getElementById(el);
}

transition.prototype.fade = function fade(type, ms) {
  let isIn = type === 'in',
    opacity = isIn ? 0 : 1,
    interval = 20,
    duration = ms,
    gap = interval / duration,
    self = this;
  if (isIn) {
    self.el.style.opacity = opacity;
  }

  function func() {
    opacity = isIn ? opacity + gap : opacity - gap;
    self.el.style.opacity = opacity;

    if (opacity <= 0) {
      self.el.style.display = 'none';
    } else {
      self.el.style.display = 'flex';
    }
    if (opacity <= 0 || opacity >= 1) window.clearInterval(fading);
  }

  let fading = window.setInterval(func, interval);
};

export default transition;
