---
layout: default
title: Experience
wide: true
permalink: /experience/
---

<!--
  Images: put files under assets/img/experience/ and add, inside a section,

  A wide banner under the section heading:
  {% include banner.html src="/assets/img/experience/princeton.jpg" alt="What it shows" %}

  A plot or figure with a caption:
  {% include figure.html src="/assets/img/experience/princeton-plot.png" alt="What it shows" caption="Optional caption" %}
-->

<section class="role" id="princeton" markdown="1">
<div class="role-text" markdown="1">
## Princeton University
<p class="meta">Associate Research Scholar · 2024 – present</p>

I lead development of [`cna-maste`](https://github.com/raphael-group/cna_maste), open-source software that detects cancer copy-number aberrations — gains and losses of DNA that drive tumors — in high-resolution spatial transcriptomics ([10x VisiumHD](https://www.10xgenomics.com/platforms/visium/product-family), [Illumina StrataMap](https://www.illumina.com/products/by-brand/stratamap.html)).

It improves sensitivity and recall by ~25% over existing methods and scales to ~100K spatial locations in minutes, using sparsity, graph cuts, JAX and inductive bias. Validated on simulations and an ovarian cancer sample; first-author manuscript submitted.
</div>
<div class="role-figure">
{% include figure.html src="/assets/img/experience/princeton-spatial.jpg" alt="Spatial transcriptomics map of a tumor tissue section, coloured by region" caption="Spatial transcriptomics of a tumor tissue section, coloured by region." %}
</div>
</section>

<section class="role" id="biomodal" markdown="1">
<div class="role-text" markdown="1">
## biomodal
<p class="meta">Computational Scientist · Cambridge, UK · 2022 – 2023</p>

I was a core developer of biomodal's flagship allele-specific methylation software, taking it from prototype to a commercial product: read pre-processing and QC, statistical calling, analysis and reporting.

I also led analysis of protocol performance and biological validation, presented at AGBT, Biology of Genomes and the Seqera (Nextflow) Summit, and built a reproducible Nextflow pipeline on GCP to classify colorectal cancer from epigenetic sequencing (submitted to PNAS).
</div>
<div class="role-figure">
{% include figure.html src="/assets/img/experience/biomodal-genome-forest.jpg" alt="Sight lines passing through a 3D map of clouds, as in the Lyman-alpha forest; here each sight line stands for a sequenced genome" caption="Population-wide DNA methylation, by analogy with the Lyman-α forest: each sight line is a genome, and methylation read along many genomes maps the population-wide landscape, as quasar sight lines map intergalactic gas." %}
</div>
</section>

<section class="role" id="durham" markdown="1">
<div class="role-text" markdown="1">
## Durham University
<p class="meta">Postdoctoral Associate · UK · 2021 – 2022</p>

I built the inference pipeline for the DESI Bright Galaxy Survey luminosity function — how many galaxies exist at each brightness — on HPC for 10M+ objects, published in MNRAS (2026).
</div>
<div class="role-figure">
{% include figure.html src="/assets/img/experience/durham-telescope.jpg" alt="The Mayall Telescope dome on Kitt Peak under a starry sky at dusk" caption="The Mayall Telescope at Kitt Peak, home of the DESI instrument." %}
</div>
</section>

<section class="role" id="berkeley" markdown="1">
<div class="role-text" markdown="1">
## Lawrence Berkeley National Lab
<p class="meta">Postdoctoral Fellow · 2017 – 2021</p>

I co-led the Bright Galaxy Survey team for the $70M DESI experiment, owning science goals, survey design and software. My target-selection algorithms run on every observation. I also led the science case for a next-generation high-redshift survey, which fed into the five-year DESI extension, and was awarded DESI "Builder" status.
</div>
<div class="role-figure">
{% include figure.html src="/assets/img/experience/berkeley.jpg" alt="Sather Tower at UC Berkeley at sunset, with the Golden Gate Bridge across the bay" caption="Berkeley at sunset, looking out to the Golden Gate." %}
</div>
</section>

<section class="role" id="edinburgh" markdown="1">
<div class="role-text" markdown="1">
## University of Edinburgh
<p class="meta">PhD in Physics · UK · 2012 – 2017</p>

I designed a calibration method with 1,000× faster runtime for galaxy-survey inference, adopted as standard by major collaborations, and measured the cosmic growth rate from the VIPERS survey to ~10% precision.
</div>
<div class="role-figure">
{% include figure.html src="/assets/img/experience/edinburgh.jpg" alt="Edinburgh skyline from Calton Hill, with the castle and the Dugald Stewart Monument" caption="Edinburgh, from Calton Hill." %}
</div>
</section>
