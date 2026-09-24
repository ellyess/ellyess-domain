export type ProfileLink = {
  label: string;
  href: string;
};

export type Item = {
  title: string;
  summary: string;
  tech?: string;
  meta?: string;
  url?: string;
  linkLabel?: string;
};

export const contact = {
  email: "benmoufok.ellyess@gmail.com",
  location: "London, UK",
  pattern: "Open to remote and hybrid roles",
  eligibility: "UK right to work, no sponsorship needed",
};

/* Headline figures. Each one is tied to its configuration in the text
   around it; do not quote these anywhere without that context. */
export const figures = [
  {
    value: "1,729",
    label: "Control points across 12 European countries used to train and validate the correction",
  },
  {
    value: "−36%",
    label: "NRMSE against ENTSO-E 2023 generation, improving 9 of 11 country and technology series",
  },
  {
    value: "469",
    label: "Test functions in the PyVWF v0.5.1 release, run in CI with ruff and mypy",
  },
  {
    value: "3",
    label: "Peer-reviewed papers, one as first author",
  },
];

/* Role shapes the record supports, each backed by named evidence. */
export const fits = [
  {
    role: "Wind resource & energy yield",
    summary:
      "Corrected ERA5 reanalysis wind against observed generation and turned it into capacity factors, with wake losses and spatial resolution treated as modelling choices that move results.",
    evidence:
      "Corrections from 1,729 control points in 12 countries, gridded over 23,989 ERA5 cells; capacity-factor MAE cut by 16 to 79% against uncorrected ERA5.",
  },
  {
    role: "Weather & climate data verification",
    summary:
      "Owning the question of how far a dataset can be trusted, and for which decision. Bias, error decomposition and validation designs that do not leak.",
    evidence:
      "Spatial and leave-one-country-out cross-validation; regions the observations could not support were masked, not published.",
  },
  {
    role: "Model validation & climate risk",
    summary:
      "Pre-registered tests, failed predictions published as failures, and the simpler model kept when the complex one does not earn its place.",
    evidence:
      "Ran the Oasis LMF PiWind catastrophe model end to end with an exposure sensitivity study on AAL and EP curves.",
  },
  {
    role: "Geospatial & earth observation",
    summary:
      "Gridded climate fields, interpolation and projections, and supervised classification of satellite imagery.",
    evidence:
      "Credited App Developer on I-Hex, the Island Health Explorer: land-cover and benthic classification over Maldivian atolls in Google Earth Engine.",
  },
  {
    role: "Research software engineering",
    summary:
      "Turning research code into packages other people can install, test, cite and extend, and working inside other people's codebases to their conventions.",
    evidence:
      "PyVWF: CI, typing, Sphinx docs built with warnings as errors, Docker, semantic versioning and a Zenodo DOI. A public fork of PyPSA-Eur.",
  },
];

export const work: Item[] = [
  {
    title: "PyVWF: bias-corrected wind power from reanalysis",
    meta: "Author · open source",
    summary:
      "A Python rewrite of the Virtual Wind Farm model behind the wind simulations on Renewables.ninja, implementing the granular bias-correction method from my 2024 Energy paper. It trains correction factors against observed generation at turbine, regional or national scale and applies them to ERA5. I wrote every commit in the v0.5.1 release, which carries a Zenodo DOI.",
    tech: "Python · Xarray · Dask · SciPy · scikit-learn · pytest · GitHub Actions · ruff · mypy · Sphinx · Docker",
    url: "https://github.com/ellyess/PyVWF",
    linkLabel: "View on GitHub",
  },
  {
    title: "Wind representation in PyPSA-Eur",
    meta: "Public fork · PhD Part II",
    summary:
      "Extended the open European energy system model with a density-tiered wake-loss correction, the gridded PyVWF corrections, and a spatial splitting algorithm that decouples offshore resource resolution from network topology. Factorial studies (bias × wake × resolution) across a regional North Sea system and a 25-country network. Every manuscript figure regenerates from one script, and the headline claims are held under automated test.",
    tech: "Python · PyPSA · Atlite · Snakemake · Gurobi · GeoPandas",
    url: "https://github.com/ellyess/pypsa-eur-wind",
    linkLabel: "View on GitHub",
  },
  {
    title: "Physics-informed wind correction",
    meta: "Post-PhD · experimental",
    summary:
      "A constrained model meant to transfer corrections to regions with no observations. Gates and thirteen predictions were fixed before each run. As registered it beat uncorrected ERA5 in 5 of 5 held-out regions, with thin margins in two. Seven predictions failed and are published as failures. Two physics extensions were built, tested and rejected.",
    tech: "PyTorch · pre-registration · leave-one-region-out validation",
    url: "https://github.com/ellyess/PyVWF",
    linkLabel: "View in PyVWF",
  },
  {
    title: "ERA5 windstorm × Oasis LMF",
    meta: "Catastrophe modelling · 2026",
    summary:
      "Reproduced the Oasis LMF PiWind example model end to end, then ran a single-site exposure sensitivity study comparing AAL and EP curves, ground-up against insured. It is a reproduction and a sensitivity study, not a catastrophe model; the event set and vulnerability curves are PiWind's example data.",
    tech: "Python · oasislmf · AAL · OEP / AEP",
    url: "https://github.com/ellyess/era5-windstorm-oasis",
    linkLabel: "View on GitHub",
  },
  {
    title: "I-Hex, the Island Health Explorer",
    meta: "Earth observation · 2020–21",
    summary:
      "A Google Earth Engine suite giving policymakers and island communities free access to satellite and climate data for the Maldives. I worked on the supervised land-cover and benthic-feature classification, and digitised and assembled its 861-point labelled training set across nine classes. The classified imagery uses separate Landsat and Sentinel-2 classifiers, with per-atoll median compositing to handle cloud.",
    tech: "Google Earth Engine · JavaScript · Landsat · Sentinel-2 · pandas",
    url: "https://i-hex.github.io/",
    linkLabel: "Open I-Hex",
  },
  {
    title: "WGAN regression",
    meta: "ML research code",
    summary:
      "The codebase behind the MOR-GANs paper, extended past publication: a PyTorch port, and benchmarks against Gaussian process, mixture density network and conditional diffusion baselines on twelve datasets over five seeds. The README reports where the newer baselines win.",
    tech: "TensorFlow · Keras · PyTorch · WGAN-GP",
    url: "https://github.com/ellyess/WGAN-Regression",
    linkLabel: "View on GitHub",
  },
  {
    title: "LLM personas against real UK opinion",
    meta: "AI evaluation",
    summary:
      "An evaluation harness testing whether populations of LLM personas reproduce the distribution of opinion in two nationally representative UK surveys. Five prompt-level persona methods, two Claude models, distribution metrics (TVD, JSD) with bootstrap confidence intervals, and diagnostics for a model being right for the wrong reasons.",
    tech: "Python · Anthropic API · Docker · bootstrap CIs",
    url: "https://github.com/ellyess/llm-persona-research",
    linkLabel: "View on GitHub",
  },
];

export const profileLinks: ProfileLink[] = [
  { label: "GitHub", href: "https://github.com/ellyess" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ellyessbenmoufok/" },
  { label: "ORCID", href: "https://orcid.org/0009-0000-0337-5690" },
  { label: "ResearchGate", href: "https://www.researchgate.net/profile/Ellyess_Benmoufok2" },
];

export const publications = [
  {
    title:
      "Improving wind power modelling through granular spatial and temporal bias correction of reanalysis data",
    authors: ["**Benmoufok, E.F.**", "Warder, S.C.", "Zhu, E.", "Bhaskaran, B.", "Staffell, I.", "Piggott, M.D."],
    venue: "Energy, 313, 133759",
    year: "2024",
    short: "Energy · 2024",
    role: "First author",
    note:
      "Introduces the granular spatial and temporal bias-correction method that PyVWF implements, trained on Danish turbines and validated on a held-out year with 1,445 new turbines.",
    url: "https://doi.org/10.1016/j.energy.2024.133759",
  },
  {
    title:
      "Geographic variability in reanalysis wind speed biases: a high-resolution bias correction approach for UK wind energy",
    authors: ["Wang, Y.", "Warder, S.C.", "**Benmoufok, E.F.**", "Wynn, A.", "Buxton, O.R.H.", "Staffell, I.", "Piggott, M.D."],
    venue: "Energy Conversion and Management, 352, 121066",
    year: "2026",
    short: "Energy Conv. & Mgmt · 2026",
    role: "Co-author",
    note: "Applies high-resolution reanalysis bias correction to UK wind energy.",
    url: "https://doi.org/10.1016/j.enconman.2026.121066",
  },
  {
    title: "Multi-Output Regression with Generative Adversarial Networks (MOR-GANs)",
    authors: ["Phillips, T.R.F.", "Heaney, C.E.", "**Benmoufok, E.**", "Li, Q.", "Hua, L.", "Porter, A.E.", "Chung, K.F.", "Pain, C.C."],
    venue: "Applied Sciences, 12(18), 9209",
    year: "2022",
    short: "Applied Sciences · 2022",
    role: "Co-author",
    note: "Grew out of my MSc dissertation on Wasserstein GANs for multi-output regression, benchmarked against Gaussian process regression.",
    url: "https://doi.org/10.3390/app12189209",
  },
];

export const researchIntro =
  "How much wind power models can be trusted, and what changes downstream when their inputs are corrected. My PhD corrected ERA5 reanalysis wind against observed generation, then carried the correction into European energy system models to measure how wake losses, bias and spatial resolution move investment decisions.";

export const thesis = {
  title:
    "Data Science-Enhanced Wind Power Modelling: From Reanalysis Correction to Energy System Representation",
  degree: "PhD in Computational Science & Data Science, Imperial College London",
  funding: "EPSRC and Shell Industrial CASE award",
  findings: [
    "Gridded corrections from 1,729 control points in 12 countries reduced capacity-factor MAE by 16 to 79% against uncorrected ERA5.",
    "Validated against ENTSO-E generation for 2023, the corrected model improved 9 of 11 country and technology series, cutting NRMSE by up to 36%.",
    "Wake losses reduced optimal offshore wind capacity by 36 to 46% at every scale studied.",
    "In a seven-country North Sea system, spatially resolved correction changed total system cost by 8.1%, more than twice the effect of uniform scaling.",
    "Terrain-informed machine learning lost to geometric interpolation under spatial cross-validation. I reported the lower figures and kept interpolation as the published method.",
  ],
  conclusion:
    "Wind resource representation belongs with the major techno-economic assumptions in energy system modelling, alongside discount rates and cost projections.",
};

export const codeItems: Item[] = [
  ...work,
  {
    title: "OBK Gear Optimiser",
    meta: "Side project",
    summary:
      "Streamlit app for constrained multi-objective optimisation of kart-racing builds: exhaustive enumeration across five part categories, weighted scores, hard constraints and side-by-side comparison.",
    tech: "Python · Streamlit · Pandas",
    url: "https://obk-gear-optimiser.streamlit.app/",
    linkLabel: "Open app",
  },
  {
    title: "Guild availability tracker",
    meta: "Side project",
    summary:
      "Static PyScript site on GitHub Pages with shared state in a Supabase Postgres table over its REST API, and weekly reset logic.",
    tech: "PyScript · Supabase · Postgres · GitHub Pages",
    url: "https://ellyess.github.io/OBK-Swax-GT/",
    linkLabel: "Open app",
  },
  {
    title: "Fool's Ascension",
    meta: "In development",
    summary:
      "Roguelite card game built on the Russian card game Durak: branching three-act runs over a procedurally generated node map, with persistent meta-progression.",
    tech: "Godot · GDScript",
  },
];
