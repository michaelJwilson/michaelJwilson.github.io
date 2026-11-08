---
layout: default
title: Experience
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
## Princeton University
<p class="meta">Associate Research Scholar · 2024 – present</p>

I lead development of [`cna-maste`](https://github.com/raphael-group/cna_maste), open-source software that detects cancer copy-number aberrations — gains and losses of DNA that drive tumors — in high-resolution spatial transcriptomics (10x VisiumHD, Illumina StrataMap).

It improves sensitivity and recall by ~25% over existing methods and scales to ~100K spatial locations in minutes, using sparsity, graph cuts, JAX and inductive bias. Validated on simulations and an ovarian cancer sample; first-author manuscript submitted.
</section>

<section class="role" id="biomodal" markdown="1">
## biomodal
<p class="meta">Computational Scientist · Cambridge, UK · 2022 – 2023</p>

I was a core developer of biomodal's flagship allele-specific methylation software, taking it from prototype to a commercial product: read pre-processing and QC, statistical calling, analysis and reporting.

I also led analysis of protocol performance and biological validation, presented at AGBT, Biology of Genomes and the Seqera (Nextflow) Summit, and built a reproducible Nextflow pipeline on GCP to classify colorectal cancer from epigenetic sequencing (submitted to PNAS).
</section>

<section class="role" id="durham" markdown="1">
## Durham University
<p class="meta">Postdoctoral Associate · UK · 2021 – 2022</p>

I built the inference pipeline for the DESI Bright Galaxy Survey luminosity function — how many galaxies exist at each brightness — on HPC for 10M+ objects, published in MNRAS (2026).
</section>

<section class="role" id="berkeley" markdown="1">
## Lawrence Berkeley National Lab
<p class="meta">Postdoctoral Fellow · 2017 – 2021</p>

I co-led the Bright Galaxy Survey team for the $70M DESI experiment, owning science goals, survey design and software. My target-selection algorithms run on every observation. I also led the science case for a next-generation high-redshift survey, which fed into the five-year DESI extension, and was awarded DESI "Builder" status.
</section>

<section class="role" id="edinburgh" markdown="1">
## University of Edinburgh
<p class="meta">PhD in Physics · UK · 2012 – 2017</p>

I designed a calibration method with 1,000× faster runtime for galaxy-survey inference, adopted as standard by major collaborations, and measured the cosmic growth rate from the VIPERS survey to ~10% precision.
</section>
