---
layout: default
title: Experience
wide: true
hide_title: true
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

I lead development of [`cna-maste`](https://github.com/raphael-group/cna_maste), open-source software that detects cancer [copy-number aberrations](https://www.genome.gov/genetics-glossary/Copy-Number-Variation-CNV) — the gains and losses of DNA that drive tumor growth — in high-resolution spatial transcriptomics, which maps gene expression across a slice of tissue ([10x VisiumHD](https://www.10xgenomics.com/platforms/visium/product-family), [Illumina StrataMap](https://www.illumina.com/products/by-brand/stratamap.html)).

By exploiting sparsity, graph-cut optimization, JAX and a carefully chosen inductive bias, `cna-maste` improves sensitivity and recall by ~25% over existing methods, and scales inference to ~100K spatial locations in minutes — more than 20× the size of current datasets.

The method is validated on simulations and on an ovarian cancer sample, and a first-author manuscript has been submitted.
</div>
<div class="role-figure">
{% include figure.html src="/assets/img/experience/princeton-spatial.jpg" alt="Spatial transcriptomics map of a tumor tissue section, coloured by region" %}
</div>
</section>

<section class="role" id="biomodal" markdown="1">
<div class="role-text" markdown="1">
## biomodal
<p class="meta">Computational Scientist · Cambridge, UK · 2022 – 2023</p>

At biomodal, a Cambridge genomics startup, I was a core developer of the flagship [allele-specific methylation](https://biomodal.com/technology/variant-associated-methylation/) software, which measures methylation differences between the two parental copies of each gene. I helped take it from prototype to a commercial product used by customers, covering read pre-processing and quality control, statistical calling, analysis and reporting.

I led analysis of protocol performance, biological validation and experimental design, with results presented at leading international genomics conferences (AGBT, Biology of Genomes), and represented biomodal at the [Seqera (Nextflow) Summit](https://summit.nextflow.io/2023/barcelona/speakers/michael-wilson/).

I also built and managed a scalable, reproducible [Nextflow](https://www.nextflow.io) pipeline on GCP with Docker to classify colorectal cancer from epigenetic sequencing of a large patient cohort; that work is submitted to PNAS.
</div>
<div class="role-figure">
{% include figure.html src="/assets/img/experience/biomodal-genome-forest.jpg" alt="Sight lines passing through a 3D map of clouds, as in the Lyman-alpha forest; here each sight line stands for a sequenced genome" %}
</div>
</section>

<section class="role" id="durham" markdown="1">
<div class="role-text" markdown="1">
## Durham University
<p class="meta">Postdoctoral Associate · UK · 2021 – 2022</p>

At Durham I designed and built the core inference pipeline for the luminosity function of the DESI Bright Galaxy Survey — how many galaxies exist at each brightness in the local Universe — developing optimal statistical estimators that run on high-performance computing for more than 10 million galaxies.

The result is the most precise measurement to date: it reaches unprecedentedly faint galaxies, with much smaller errors than the previous benchmark (GAMA), and is published in [MNRAS (2026)](https://arxiv.org/abs/2511.01803).
</div>
<div class="role-figure">
{% include figure.html src="/assets/img/experience/durham-telescope.jpg" alt="The Mayall Telescope dome on Kitt Peak under a starry sky at dusk" caption="The Mayall Telescope at Kitt Peak, home of the DESI instrument." %}
</div>
</section>

<section class="role" id="berkeley" markdown="1">
<div class="role-text" markdown="1">
## Lawrence Berkeley National Lab
<p class="meta">Postdoctoral Fellow · 2017 – 2021</p>

At Berkeley Lab I co-led the Bright Galaxy Survey team for the $70M [DESI](https://desi.lbl.gov) experiment, owning its science goals, survey design and software, which had to meet strict Department of Energy performance requirements.

I developed statistical estimators and target-selection algorithms that maximize survey efficiency; they run in production on every observation and underpin the survey's downstream science ([Hahn et al. 2022](https://iopscience.iop.org/article/10.3847/1538-3881/accff8/pdf); [Ruiz-Macias et al. 2020](https://academic.oup.com/mnras/article/502/3/4328/6127300); [Myers et al. 2023](https://iopscience.iop.org/article/10.3847/1538-3881/aca5f9/pdf)).

I also led the science case for a [next-generation high-redshift survey](https://iopscience.iop.org/article/10.1088/1475-7516/2019/10/015) — simulations, forecasts and comparisons of competing instruments — which was incorporated as a key component of the five-year DESI-II extension. I was awarded DESI "Builder" status for critical contributions to the survey.
</div>
<div class="role-figure">
{% include figure.html src="/assets/img/experience/berkeley.jpg" alt="Sather Tower at UC Berkeley at sunset, with the Golden Gate Bridge across the bay" caption="Berkeley at sunset, looking out to the Golden Gate." %}
</div>
</section>

<section class="role" id="edinburgh" markdown="1">
<div class="role-text" markdown="1">
## University of Edinburgh
<p class="meta">PhD in Physics · UK · 2012 – 2017</p>

For my PhD I designed a [calibration method](http://mnras.oxfordjournals.org/content/early/2016/10/08/mnras.stw2576.abstract) for large-scale parameter inference with galaxy surveys that runs 1,000× faster while improving accuracy; it has been adopted as standard by major international collaborations.

I also reduced the ~100,000-galaxy VIPERS survey to summary statistics and used them to measure the cosmic growth rate to ~10% precision, finding it consistent with General Relativity.
</div>
<div class="role-figure">
{% include figure.html src="/assets/img/experience/edinburgh.jpg" alt="Edinburgh skyline from Calton Hill, with the castle and the Dugald Stewart Monument" caption="Edinburgh, from Calton Hill." %}
</div>
</section>
