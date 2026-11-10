---
layout: default
title: Portfolio
wide: true
hide_title: true
permalink: /portfolio/
---

<section class="role" id="search" markdown="1">
<div class="role-text" markdown="1">
## SEARCH
<p class="meta">automation for a chaotic job market</p>

The job hunt, run like a codebase. Every submitted posting is mapped by commute time and cost, then tracked through to success. Analytics reveal current demand, and the CV alignment happens under version control. Gaps close with targeted resources and a showcase project.
</div>
<div class="role-figure">
<button class="video-thumb" type="button" aria-label="Play the SEARCH demo, full screen">
  <video class="project-video" playsinline preload="metadata" poster="{{ '/assets/img/portfolio/search-poster.jpg' | relative_url }}">
    <source src="{{ '/assets/video/search.mp4' | relative_url }}" type="video/mp4">
  </video>
  <span class="video-play" aria-hidden="true"></span>
</button>
</div>
</section>

<script>
  // NB a click plays the demo full screen; leaving full screen pauses it and returns the thumbnail
  document.querySelectorAll(".video-thumb").forEach(function (thumb) {
    var video = thumb.querySelector("video");
    thumb.addEventListener("click", function () {
      var full = video.requestFullscreen || video.webkitRequestFullscreen;
      video.controls = true;
      if (full) full.call(video);
      else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen();
      video.play();
    });
    function leave() {
      if (document.fullscreenElement || document.webkitFullscreenElement) return;
      video.pause();
      video.controls = false;
    }
    document.addEventListener("fullscreenchange", leave);
    document.addEventListener("webkitfullscreenchange", leave);
    video.addEventListener("webkitendfullscreen", leave);
  });
</script>
