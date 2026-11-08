// Experience page: roll-out / black / fade-in, tied to scroll position.
// Roles scroll normally (no sticking). As a role leaves at the top it rolls
// out (tilting forward and fading). Large gaps between roles leave a black
// bridge; the next role then fades in quickly from black, without moving.
(function () {
  var roles = [].slice.call(document.querySelectorAll('.role'));
  if (!roles.length) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var root = document.documentElement;
  var bar = document.querySelector('.topbar');
  root.classList.add('scene-on');

  function clamp(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }
  function smooth(x) { return x * x * (3 - 2 * x); }

  function update() {
    var vh = window.innerHeight;
    var top = bar ? bar.offsetHeight : 0;
    var view = vh - top;
    roles.forEach(function (r) {
      var rect = r.getBoundingClientRect();
      var h = Math.min(rect.height, view);
      // Quick fade in from black: 0 when the role's top is 25% up the screen,
      // 1 once it is 40% up (no movement)
      var enter = smooth(clamp((vh - view * 0.25 - rect.top) / (view * 0.15)));
      // 0 while the role's bottom is in the lower part of the view, 1 once it reaches the top bar
      var exit = smooth(clamp((top + h * 0.55 - rect.bottom) / (h * 0.55) + 1));
      var t, o;
      if (exit > 0 && enter >= 1) {
        r.style.transformOrigin = '50% 100%';
        t = 'perspective(1400px) translateY(' + (-exit * 60).toFixed(1) + 'px) rotateX(' + (-exit * 20).toFixed(2) + 'deg)';
        o = 1 - exit;
      } else {
        t = 'none';
        o = enter;
      }
      r.style.transform = t;
      r.style.opacity = o.toFixed(3);
    });
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(function () { ticking = false; update(); }); }
  }, { passive: true });
  window.addEventListener('resize', update);
  window.addEventListener('load', update);
  update();
})();
