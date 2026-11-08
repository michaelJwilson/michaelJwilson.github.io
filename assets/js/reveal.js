// Experience page: one role at a time, centred on screen.
// Opacity follows scroll: a role is fully visible while it is near the
// middle of the screen, fades out as it moves away, the screen is briefly
// black between roles, and the next fades in as it reaches the middle.
// No movement other than normal scrolling.
(function () {
  var roles = [].slice.call(document.querySelectorAll('.role'));
  if (!roles.length) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var root = document.documentElement;
  var bar = document.querySelector('.topbar');
  root.classList.add('scene-on');

  function clamp(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }
  function smooth(x) { return x * x * (3 - 2 * x); }
  var top = 0, view = 0;

  function layout() {
    top = bar ? bar.offsetHeight : 0;
    view = window.innerHeight - top;
    // Padding so the first role starts centred and the last can be centred.
    var first = roles[0].offsetHeight, last = roles[roles.length - 1].offsetHeight;
    root.style.setProperty('--pad-top', Math.max(0, (view - first) / 2) + 'px');
    root.style.setProperty('--pad-bottom', Math.max(0, (view - last) / 2) + 'px');
    update();
  }

  function update() {
    var mid = top + view / 2;
    roles.forEach(function (r) {
      var rect = r.getBoundingClientRect();
      var c = rect.top + rect.height / 2;
      // Hold fully visible within this distance of the centre, then fade.
      var hold = Math.max(0, (view - rect.height) / 2) * 0.35 + view * 0.06;
      var fade = view * 0.22;
      var d = Math.abs(c - mid);
      r.style.opacity = (1 - smooth(clamp((d - hold) / fade))).toFixed(3);
    });
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(function () { ticking = false; update(); }); }
  }, { passive: true });
  window.addEventListener('resize', layout);
  window.addEventListener('load', layout);
  layout();
})();
