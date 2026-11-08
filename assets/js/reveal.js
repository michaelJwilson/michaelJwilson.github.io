// Experience page: stacked sticky cards.
// Each role sticks below the top bar; the next one folds up from the bottom
// (a slight backward tilt that flattens as it rises) and slides over it,
// while the covered card shrinks and dims a little.
(function () {
  var roles = [].slice.call(document.querySelectorAll('.role'));
  if (!roles.length) return;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root = document.documentElement;
  root.classList.add('stack-on');
  var bar = document.querySelector('.topbar');
  var top = 0;

  function layout() {
    top = (bar ? bar.offsetHeight : 0) + 16;
    root.style.setProperty('--stick-top', top + 'px');
    roles.forEach(function (r) {
      // Only stick cards on wide screens, and only if they fit; otherwise they
      // scroll normally and just fold in.
      r.classList.toggle('no-stick', window.innerWidth < 860 || r.offsetHeight > window.innerHeight - top - 16);
    });
    update();
  }

  function clamp(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }

  function update() {
    if (reduce) return;
    var vh = window.innerHeight;
    roles.forEach(function (r, i) {
      var rect = r.getBoundingClientRect();
      // Entering: fold up from the bottom over the last 45% of the screen.
      var enter = clamp((vh - rect.top) / (vh * 0.45));
      var tilt = (1 - enter) * 14;            // degrees
      var lift = (1 - enter) * 40;            // px
      // Covered: how far the next card has slid over this one.
      var cover = 0, next = roles[i + 1];
      if (next && !r.classList.contains('no-stick')) {
        var nTop = next.getBoundingClientRect().top;
        cover = clamp((rect.top + rect.height - nTop) / rect.height);
      }
      var scale = 1 - 0.06 * cover;
      r.style.transform = 'perspective(1400px) translateY(' + lift.toFixed(1) + 'px) rotateX(' + tilt.toFixed(2) + 'deg) scale(' + scale.toFixed(4) + ')';
      r.style.opacity = (0.35 + 0.65 * enter).toFixed(3);
      r.style.filter = cover > 0 ? 'brightness(' + (1 - 0.45 * cover).toFixed(3) + ')' : '';
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
