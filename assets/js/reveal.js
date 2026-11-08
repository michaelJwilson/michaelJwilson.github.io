// Experience page: roles stay fixed in the centre of the screen; scrolling
// (mouse wheel, trackpad, keys) only drives a crossfade between them:
// fade in, hold, fade out, a moment of black, then the next role.
// Falls back to a normal page if a role doesn't fit on screen (e.g. phones),
// for reduced motion, or without JavaScript.
(function () {
  var roles = [].slice.call(document.querySelectorAll('.role'));
  if (roles.length < 2) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var root = document.documentElement;
  var bar = document.querySelector('.topbar');
  var parent = roles[0].parentNode;

  var track = document.createElement('div'); track.className = 'scene-track';
  var stage = document.createElement('div'); stage.className = 'scene-stage';
  track.appendChild(stage);

  var SEG = 1.1;          // screen-heights of scrolling per role
  var on = false, top = 0, view = 0;

  function enable() {
    parent.insertBefore(track, roles[0]);
    roles.forEach(function (r) { stage.appendChild(r); });
    root.classList.add('scene-on'); on = true;
  }
  function disable() {
    roles.forEach(function (r) { parent.insertBefore(r, track); r.style.opacity = ''; r.style.visibility = ''; });
    if (track.parentNode) track.parentNode.removeChild(track);
    root.classList.remove('scene-on'); on = false;
  }

  function layout() {
    top = bar ? bar.offsetHeight : 0;
    view = window.innerHeight - top;
    root.style.setProperty('--stick-top', top + 'px');
    if (on) disable();
    var fits = window.innerWidth >= 860 && roles.every(function (r) { return r.offsetHeight <= view - 24; });
    if (!fits) return;
    enable();
    track.style.height = (view + (roles.length - 1) * SEG * view) + 'px';
    update();
  }

  function clamp(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }
  function smooth(x) { return x * x * (3 - 2 * x); }

  function update() {
    if (!on) return;
    var scrolled = top - track.getBoundingClientRect().top;
    var p = clamp(scrolled / ((roles.length - 1) * SEG * view)) * (roles.length - 1);
    roles.forEach(function (r, i) {
      // Transition between role k and k+1 spans p in [k, k+1]:
      // hold to 0.25, fade out to 0.45, black to 0.55, fade in to 0.75, hold.
      var d = p - i, o;
      if (d >= 0) o = i === roles.length - 1 ? 1 : 1 - smooth(clamp((d - 0.25) / 0.2));
      else        o = smooth(clamp((d + 0.45) / 0.2));
      r.style.opacity = o.toFixed(3);
      r.style.visibility = o > 0.01 ? 'visible' : 'hidden';
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
