// Experience page: one role at a time.
// Each role holds the screen while you scroll; then a short fade to black,
// and the next role rolls in from the bottom (tilted back, flattening as it
// rises). On narrow screens roles scroll normally and just roll in.
(function () {
  var roles = [].slice.call(document.querySelectorAll('.role'));
  if (!roles.length) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var root = document.documentElement;
  var bar = document.querySelector('.topbar');

  // Wrap each role's content in a stage that can stick and animate.
  var stages = roles.map(function (r) {
    var s = document.createElement('div');
    s.className = 'role-stage';
    while (r.firstChild) s.appendChild(r.firstChild);
    r.appendChild(s);
    return s;
  });
  root.classList.add('scene-on');

  var top = 0, flat = false;
  function clamp(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }
  function ease(x) { return 1 - Math.pow(1 - x, 3); }

  function layout() {
    top = (bar ? bar.offsetHeight : 0) + 8;
    root.style.setProperty('--stick-top', top + 'px');
    flat = window.innerWidth < 860;
    root.classList.toggle('scene-flat', flat);
    if (!flat) {
      // If any role is too tall to fit, fall back to normal scrolling.
      flat = stages.some(function (s) { return s.scrollHeight > window.innerHeight - top; });
      root.classList.toggle('scene-flat', flat);
    }
    update();
  }

  function roll(s, e, fade) {
    s.style.transform = 'perspective(1400px) translateY(' + ((1 - e) * 90).toFixed(1) + 'px) rotateX(' + ((1 - e) * 22).toFixed(2) + 'deg)';
    s.style.opacity = (e * fade).toFixed(3);
  }

  function update() {
    var vh = window.innerHeight;
    roles.forEach(function (r, i) {
      var s = stages[i], rect = r.getBoundingClientRect();
      if (flat) {                      // roll in as it enters the screen
        roll(s, ease(clamp((vh - rect.top) / (vh * 0.4))), 1);
        return;
      }
      var span = rect.height - (vh - top);
      var p = clamp((top - rect.top) / span);
      var enter = i === 0 ? 1 : ease(clamp(p / 0.22));          // roll in
      var last = i === roles.length - 1;
      var fade = last ? 1 : 1 - clamp((p - 0.62) / 0.14);        // short fade out, then black
      roll(s, enter, fade);
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
