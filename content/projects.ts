/* Case studies. Every figure is quoted with the configuration it belongs
   to; the candidate profile in ai-job-search is the source of truth. */

export type Figure = {
  images: { src: string; width: number; height: number; alt: string }[];
  caption: string;
};

export type CaseSection = {
  figure?: Figure;
  title: string;
  kicker?: string;
  intro?: string;
  bullets?: string[];
};

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  period: string;
  summary: string;
  description: string;
  tech: string;
  links: { label: string; href: string }[];
  sections: CaseSection[];
};

export const projects: Project[] = [
  {
    slug: "pyvwf",
    title: "PyVWF: bias-corrected wind power from reanalysis",
    kicker: "Open-source library · Author",
    period: "2022 – 2026",
    summary:
      "ERA5 is the default input for simulating wind power, and its wind speeds are biased in ways that change with place and season. PyVWF learns those biases from observed generation and corrects them, at whatever spatial and temporal resolution the data can support.",
    description:
      "Case study: PyVWF, an open-source Python library for granular bias correction of ERA5 reanalysis wind against observed generation, trained at 1,729 control points across 12 European countries.",
    tech: "Python · Xarray · Dask · SciPy · scikit-learn · GeoPandas · pytest · GitHub Actions · ruff · mypy · Sphinx · Docker",
    links: [
      { label: "GitHub", href: "https://github.com/ellyess/PyVWF" },
      { label: "Zenodo DOI", href: "https://doi.org/10.5281/zenodo.21236619" },
      { label: "Method paper", href: "https://doi.org/10.1016/j.energy.2024.133759" },
    ],
    sections: [
      {
        title: "Problem",
        intro:
          "A uniform correction treats reanalysis bias as one number. It is not. It varies by region, by season and by the terrain a turbine sits in, so a single scaling factor fixes the national average and leaves the local errors in place.",
      },
      {
        title: "Approach",
        figure: {
          images: [
            { src: "/work/control-points.png", width: 1263, height: 766, alt: "Maps of Europe showing scalar and offset correction factors at 1,729 control points" },
          ],
          caption:
            "Correction factors at the 1,729 control points: (a) the scalar α, (b) the offset β. Turbine-level data is dense in Denmark, Germany and the UK; elsewhere the points come from national generation. From my thesis, Fig. 4.1.",
        },
        bullets: [
          "A Python rewrite of Iain Staffell's Virtual Wind Farm model, which underpins the wind simulations on Renewables.ninja, implementing the granular method from my 2024 Energy paper.",
          "Turbines are clustered spatially and their generation grouped in time. A scalar and an offset are fitted per cluster and period against observed generation, then applied to ERA5 wind speeds.",
          "Correction factors from control points are interpolated onto the native ERA5 0.25° grid. Four interpolation methods were compared under spatial cross-validation; inverse distance weighting was chosen for bounded extrapolation and stability where control points are unevenly spread.",
          "Observed generation is sourced and vetted per country, from individual turbines up to whole countries: ENTSO-E, AEMO, CAMMESA, CEN, EIA, EMI, ONS and UK sources, with registries such as the Marktstammdatenregister and REPD for turbine metadata.",
        ],
      },
      {
        title: "Results",
        figure: {
          images: [
            { src: "/work/gridded-corrections.png", width: 1263, height: 738, alt: "Gridded maps of the interpolated scalar and offset correction fields over Europe" },
          ],
          caption:
            "The correction fields interpolated onto the ERA5 grid with IDW. A scalar below 1 means ERA5 overestimates wind speed there. Cells far from any control point, in grey, get no correction. From my thesis, Fig. 8.1.",
        },
        kicker: "Each figure with its configuration",
        bullets: [
          "Denmark, 76 correction configurations: intermediate spatial resolution with seasonal or bimonthly grouping generalised best, and over-fitting at high resolution was measured with elbow and silhouette diagnostics rather than assumed.",
          "Energy (2024): trained on 3,389 Danish onshore turbines over 2015 to 2019, validated on 2020 with 4,834 turbines, 1,445 of them new, so the test was independent in both time and space.",
          "Europe: corrections from 1,729 control points in 12 countries, gridded over 23,989 ERA5 cells (161 × 149), reduced capacity-factor MAE by 16 to 79% against uncorrected ERA5.",
          "Borrowing information across Europe outperformed country-specific corrections in several countries.",
          "Regions where observation density could not support a reliable value were masked rather than published as part of one unqualified surface.",
        ],
      },
      {
        title: "What did not work",
        figure: {
          images: [
            { src: "/work/random-vs-spatial-cv.png", width: 1263, height: 538, alt: "Bar chart comparing MAE and R-squared under random and spatial cross-validation" },
          ],
          caption:
            "Elastic Net under random and spatial cross-validation, for (a) the scalar and (b) the offset. Part of the skill under random folds comes from nearby sites leaking into the test set. From my thesis, Fig. 5.1.",
        },
        bullets: [
          "Terrain-informed machine learning, 27 features across 23,009 turbines in Denmark, the UK and Germany. Random cross-validation gave R² of 0.35 to 0.41. Nearby turbines share weather, so those folds were not independent.",
          "Under spatial cross-validation the ranking changed: Elastic Net 0.295, Ridge 0.293, random forest 0.271, gradient boosting 0.261. Holding out the UK, the random forest fell to −0.376 and Ridge was the only model above zero.",
          "I reported the lower figures and kept geometric interpolation as the published method. A feature ablation showed ERA5's own wind climatology carries most of the predictable signal; turbine and land-cover features added almost nothing.",
          "Norway's hourly per-plant file turned out to be modelled rather than measured, so Norway is not used as a validation fold.",
        ],
      },
      {
        title: "Engineering",
        kicker: "Research code made usable",
        bullets: [
          "I wrote all 310 commits in the v0.5.1 release, published with a Zenodo DOI.",
          "469 test functions across 44 files in that release; CI on a Python 3.10 to 3.12 matrix with ruff and mypy enforced, PEP 561 typing, and Sphinx docs built with warnings as errors.",
          "Docker exercised in CI, every example script executed in CI, import-linter layer contracts, pre-commit, Dependabot and semantic versioning.",
          "The validation scorecard is re-run end to end from one commit on a clean tree. Every run manifest records the commit, whether the tree was dirty, and library versions. Superseded results are kept with dated correction notices, not deleted.",
          "The scorecard flags its own weak rows: 7 of 9 turbine-level rows rest on at least one degenerate fit, and only Denmark and New Zealand are clean.",
          "Refactored and extended with Claude Code from early 2026, on top of the pre-2026 research code.",
        ],
      },
      {
        title: "Who uses it",
        intro:
          "PyVWF became a package when MSc and PhD students started projects on top of it. When a PhD student could not get their own data into the model, I wrote a documented input framework with an example notebook. They got their data working, and I used the same pipeline to integrate much more data myself.",
      },
    ],
  },
  {
    slug: "pypsa-eur-wind",
    title: "How wind representation moves energy system plans",
    kicker: "PyPSA-Eur fork · PhD Part II",
    period: "PhD, 2021 – 2026",
    summary:
      "Energy system models plan decades of investment on wind inputs that are rarely questioned. I extended PyPSA-Eur to test how much three of those inputs, reanalysis bias, wake losses and spatial resolution, change the answer.",
    description:
      "Case study: extending PyPSA-Eur with bias-corrected wind, density-tiered wake losses and offshore spatial splitting, validated against ENTSO-E 2023 generation.",
    tech: "Python · PyPSA · Atlite · Snakemake · Gurobi · GeoPandas · Xarray · pytest",
    links: [{ label: "GitHub", href: "https://github.com/ellyess/pypsa-eur-wind" }],
    sections: [
      {
        title: "Problem",
        intro:
          "Wind resource, wake losses and model resolution are usually fixed early and left alone. If they move system cost and technology mix as much as the assumptions modellers do argue about, they deserve the same scrutiny.",
      },
      {
        title: "Approach",
        figure: {
          images: [
            { src: "/work/region-splitting.png", width: 1263, height: 852, alt: "Three maps of the North Sea region split into progressively smaller onshore and offshore subregions" },
          ],
          caption:
            "The splitting algorithm at maximum region sizes of 100,000, 10,000 and 1,000 km², using k-means and Voronoi partitions in an equal-area projection. From my thesis, Fig. 6.1.",
        },
        bullets: [
          "Integrated the gridded PyVWF corrections into the PyPSA-Eur wind resource pipeline, upstream at wind-speed level.",
          "A density-tiered wake-loss correction where losses scale with installed capacity density rather than absolute capacity, which makes it consistent across resolutions by construction. The underlying physical relation came from a postdoctoral colleague; the density-tiered form and its implementation in PyPSA-Eur are mine.",
          "A spatial splitting algorithm that decouples offshore wind resource resolution from network topology, so offshore detail can increase without redrawing the grid.",
          "A factorial design, bias × wake × resolution, run on a regional sector-coupled North Sea system and a 25-country continental network.",
        ],
      },
      {
        title: "Validation",
        figure: {
          images: [
            { src: "/work/entsoe-onshore.png", width: 1263, height: 308, alt: "Weekly wind generation in 2023 for Denmark and France onshore: observed, uncorrected and corrected" },
            { src: "/work/entsoe-offshore.png", width: 638, height: 300, alt: "Weekly wind generation in 2023 for Germany offshore: observed, uncorrected and corrected" },
          ],
          caption:
            "Weekly generation in 2023: ENTSO-E observed (black), uncorrected ERA5 (orange) and IDW-corrected (green). Top: Denmark onshore, where the correction closes much of the gap, and France onshore, where it changes little. Bottom: Germany offshore, where both still overestimate with no wake losses applied. From my thesis, Fig. 8.2.",
        },
        kicker: "ENTSO-E observed generation, 2023",
        bullets: [
          "Modelled capacity factors compared against hourly generation across 23 countries onshore and 7 offshore.",
          "The corrected model improved accuracy in 9 of 11 country and technology combinations, cutting NRMSE by up to 36%.",
          "At fine resolution, Pearson correlation was 0.90 or above for Germany, Denmark, the Netherlands, Belgium and Ireland, and barely moved across configurations: the corrections change the magnitude of generation without distorting the timing of wind events.",
          "On magnitude, combined bias and wake corrections brought mean bias error for Belgium offshore from +49% to +15%, and Denmark from +44% to +12%.",
        ],
      },
      {
        title: "Results",
        figure: {
          images: [
            { src: "/work/system-cost.png", width: 875, height: 480, alt: "Bar chart of total system cost for base, PyVWF-corrected and uniformly scaled wind" },
          ],
          caption:
            "Total annual system cost in a seven-country, electricity-only North Sea system: uncorrected ERA5 (Base), spatially resolved PyVWF correction (+8.10%) and uniform scaling (+3.92%). From my thesis, Fig. 8.4.",
        },
        kicker: "Each figure with its configuration",
        bullets: [
          "Wake losses dominate the technology mix at every scale, reducing offshore wind capacity by 36 to 46% and raising onshore deployment by up to 113%. At continental scale they are also the largest cost driver, at +2.9%.",
          "Bias correction is the largest cost driver regionally, +2.76% at fine resolution. At continental scale the same correction nets −0.1%, because it moves capacity from over-estimated offshore sites to under-estimated onshore ones rather than penalising wind everywhere.",
          "Interactions are slightly sub-additive: +4.32% combined at regional fine resolution, and +2.4% at continental scale, less than wake losses alone.",
          "In a seven-country electricity-only North Sea system, spatially resolved correction changed total system cost by 8.1%, more than twice the effect of uniform scaling.",
          "Coarse resolution dampens both signals and finer resolution amplifies them, so the three choices behave as coupled levers rather than independent refinements.",
        ],
      },
      {
        title: "Reading",
        intro:
          "These results do not show that earlier studies were wrong. The models are large, with many interacting assumptions, and are used to plan systems that do not exist yet. The honest reading is a sensitivity result: wind resource representation belongs alongside discount rates, capital cost projections and fuel prices as a leading-order assumption.",
      },
      {
        title: "Engineering",
        bullets: [
          "Worked inside PyPSA-Eur's conventions, as a public fork, rather than around them.",
          "The analysis layer is mine: 36 Python files and 12,960 lines organised as packages, with 112 tests.",
          "Every manuscript figure and the metrics table regenerate from a named data directory through one script, and the headline claims are held under automated test with tolerances.",
        ],
      },
      {
        title: "Limits",
        intro:
          "Computational cost is the binding constraint at continental scale. The next step is adaptive, multi-resolution modelling that adds spatial detail only where it matters to the system.",
      },
    ],
  },
  {
    slug: "physics-informed-correction",
    title: "Transferring wind corrections to places with no observations",
    kicker: "Post-PhD research · experimental",
    period: "2026",
    summary:
      "Bias corrections only exist where there is observed generation to learn from. This work asks whether a constrained, physics-informed model can carry a correction to a region it has never seen, and fixes the tests before running them.",
    description:
      "Case study: a pre-registered, physics-informed model for transferring wind bias corrections to unseen regions, with failed predictions published alongside the results.",
    tech: "Python · PyTorch · differentiable forward operator · pre-registration · leave-one-region-out validation",
    links: [{ label: "Code in PyVWF", href: "https://github.com/ellyess/PyVWF" }],
    sections: [
      {
        title: "Context",
        intro:
          "A generalisable correction was a goal during the PhD. After machine learning lost to interpolation under spatial validation, I dropped it and put the corrected wind into energy system models instead. I picked it back up in 2026 as independent work. It is not a thesis chapter, and it is experimental: no stable API, and its tests need an optional PyTorch install that CI does not include.",
      },
      {
        title: "Method",
        bullets: [
          "A gated, constrained linear correction inside a differentiable forward operator, trained on some regions and tested zero-shot on others.",
          "A pre-specification fixed the gates, thirteen predictions and the conditions that would falsify them before each run.",
          "An unconstrained ablation at matched features and parameter count tests whether the constraints, rather than the capacity, are doing the work.",
        ],
      },
      {
        title: "Results",
        kicker: "With their caveats",
        bullets: [
          "Zero-shot, leave-one-region-out across Denmark, Germany, the UK, the US and Brazil: as registered, it beat uncorrected ERA5 in 5 of 5 and degraded none. The smallest margins, 0.0025 (US) and 0.0027 (UK) in RMSE, are not yet resampled.",
          "Against the incumbent random-forest transfer it won in 4 of 5, the exception being Germany, where turbine locations are postcode centroids. Mean skill was +0.238 against the random forest's −0.099. That comparison is not yet reproducible from a single commit.",
          "The unconstrained ablation was worse than doing nothing in every region, so the gain comes from the constraints.",
          "Leave-one-country-out across Europe (working branch, unpublished): trained on eight countries, it cut national monthly RMSE in 8 of 9, to a median 29% of the uncorrected error, recovering a median 94% of what fitting inside the country achieves. It failed in France, whose uncorrected series was already unbiased, making its error 78% worse.",
        ],
      },
      {
        title: "What failed",
        bullets: [
          "Seven of the thirteen registered predictions failed. They are published as failures rather than removed.",
          "Two physics extensions were built, tested and rejected. A wake term cut the dense-fleet residual span by 61% and cost transfer in all five regions. A profile-curvature term improved Germany alone and cost mean skill 0.0089 against a 0.005 tolerance.",
          "A configuration chosen after seeing results was re-tested on four regions never used as holdouts, with the consequence registered first. It passed transfer 4 of 4 but lost to the simpler configuration in 3 of 4, so the simpler one became the headline.",
          "Adding six non-European regions to the training pool did not help Europe, as predicted.",
        ],
      },
      {
        title: "Related study",
        kicker: "Terrain and the capacity-factor deficit",
        intro:
          "A separate pre-registered test, committed before the code that ran it existed, asked whether plant-level underperformance grows with sub-grid terrain. All five gates passed: Spearman ρ 0.488 [0.393, 0.576] on 356 US plants, and in the top decile of relief the median plant's observed capacity factor is 2.1 times its simulated one. Nothing from it is implemented yet.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
