export type ProfileLink = {
  label: string;
  href: string;
};

export const principles = [
  "Formulate the system clearly.",
  "Optimise under real constraints.",
  "Stress-test assumptions with data.",
];

export const projects = [
  {
    title: "PyVWF: Python Virtual Wind Farm",
    kind: "Open Source",
    summary:
      "Open-source Python library for bias correction of reanalysis wind data and wind power capacity factor estimation. Featured above under Open Source & Research Software.",
    url: "https://github.com/ellyess/PyVWF",
  },
  {
    title: "Improving Wind Representation in PyPSA-Eur",
    kind: "Energy Systems",
    summary:
      "Scenario design and optimisation experiments for large-scale energy system planning using PyPSA-Eur and scientific Python tooling.",
    url: "https://github.com/ellyess/pypsa-eur-wind",
  },
  {
    title: "LLM Personas vs Real UK Opinion",
    kind: "LLM Research",
    summary:
      "An independent study of whether populations of LLM personas reproduce the real distribution of opinions a human group holds, measured against nationally representative UK surveys. Five persona methods, two models, distribution-fidelity metrics (TVD/JSD), and diagnostics that detect a model being right for the wrong reasons.",
    url: "https://github.com/ellyess/llm-persona-research",
  },
  {
    title: "Fool's Ascension",
    kind: "Game Development",
    summary:
      "Roguelite card game in development, built on the Russian card game Durak. Branching 3-act runs, persistent meta-progression, and tightly-systemised encounter design in Godot.",
  },
  {
    title: "Music Production and Sound Exploration",
    kind: "Creative Practice",
    summary:
      "Explorations in musical composition and sound design, blending technical precision with artistic expression.",
    url: "https://soundcloud.com/ellyxss",
  },
  {
    title: "OBK Gear Optimiser",
    kind: "Side Project",
    summary:
      "A small constrained-optimisation web app for tuning gear setups in a kart racing game. A hobby project applying search algorithms to a game-balancing problem.",
    url: "https://github.com/ellyess/OBK-Gear-Optimiser",
  },
];

export const profileLinks: ProfileLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/ellyess",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ellyessbenmoufok/",
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0009-0000-0337-5690",
  },
  {
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Ellyess_Benmoufok2",
  },
  {
    label: "Bandcamp",
    href: "https://ellyxss.bandcamp.com/",
  },
  {
    label: "SoundCloud",
    href: "https://soundcloud.com/ellyxss",
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/3bDrg6yqhNheNR2vUbvzrS",
  },
];

export const areas = [
  {
    title: "Research",
    href: "/research",
    summary: "Wind energy systems, optimisation methods, and computational modelling.",
  },
  {
    title: "Code",
    href: "/code",
    summary: "Scientific software and implementation-focused engineering output.",
  },
  {
    title: "Music",
    href: "/music",
    summary: "Music production and sound explorations.",
  },
];

export const researchItems = [
  {
    title: "PhD - Data Science-Enhanced Wind Power Modelling: From Reanalysis Correction to Energy System Representation",
    summary: "A comprehensive research project for improving wind power modelling through data-driven bias correction and enhanced representation in energy system models.",
    meta: "Completed",
  },
  {
    title: "Geographic variability in reanalysis wind speed biases: A high-resolution bias correction approach for UK wind energy",
    summary: "A spatially granular bias correction method for improving wind resource estimates and energy system planning outcomes.",
    meta: "Published",
    url: "https://doi.org/10.1016/j.enconman.2026.121066",
  },
  {
    title: "Improving wind power modelling through granular spatial and temporal bias correction of reanalysis data",
    summary: "A novel bias correction method for enhancing the accuracy of wind resource assessments and energy system optimization.",
    meta: "Published",
    url: "https://doi.org/10.1016/j.energy.2024.133759",
  },
  {
    title: "Multi-Output Regression with Generative Adversarial Networks (MOR-GANs)",
    summary: "A novel approach for multi-output regression using generative adversarial networks, enhancing predictive performance in complex systems.",
    meta: "Published",
    url: "https://doi.org/10.3390/app12189209",
  },
  
];

export const codeItems = [
  {
    title: "PyVWF",
    summary:
      "Modular wind farm simulation and bias-correction framework for reanalysis-driven power modelling.",
    tech: "Python · NumPy · Pandas · Xarray · SciPy · Dask · ERA5 · Snakemake",
    meta: "GitHub",
    url: "https://github.com/ellyess/PyVWF",
  },
  {
    title: "PyPSA-Eur-Wind",
    summary:
      "Energy systems optimisation extensions integrating advanced wind modelling into the PyPSA-Eur ecosystem.",
    tech: "Python · PyPSA · Atlite · Snakemake · Gurobi · Geospatial workflows",
    meta: "GitHub",
    url: "https://github.com/ellyess/pypsa-eur-wind",
  },
  {
    title: "OBK Gear Optimiser",
    summary:
      "Constrained optimisation web app translating search algorithms into practical gear recommendations.",
    tech: "Python · Streamlit · Pandas · Optimisation algorithms",
    meta: "Web App",
    url: "https://obk-gear-optimiser.streamlit.app/",
  },
  {
    title: "OBK Guild Territory Tracker",
    summary:
      "Lightweight web app for tracking and visualising guild territory activity.",
    tech: "JavaScript · HTML · CSS · GitHub Pages",
    meta: "Web App",
    url: "https://ellyess.github.io/OBK-Swax-GT/",
  },
  {
    title: "Fool's Ascension",
    summary:
      "In-development roguelite card game built on Russian Durak. Branching 3-act runs across a 12-floor node graph, persistent deck/relic/HP progression, encounter modifiers, and a meta-progression Hall of Ascension.",
    tech: "Godot · GDScript · Procedural map generation · Systems design",
    meta: "In development",
  },
];

export const musicItems = [
  {
    title: "Spotify — ellyxss",
    summary: "Distributed releases on streaming. The cleanest place to follow new music.",
    meta: "Spotify",
    url: "https://open.spotify.com/artist/3bDrg6yqhNheNR2vUbvzrS",
  },
  {
    title: "SoundCloud — ellyxss",
    summary: "Working archive of released and exploratory tracks. Production and sound design as a continuing creative outlet alongside technical work.",
    meta: "SoundCloud",
    url: "https://soundcloud.com/ellyxss",
  },
  {
    title: "Bandcamp — ellyxss",
    summary: "Mirror archive of selected releases.",
    meta: "Bandcamp",
    url: "https://ellyxss.bandcamp.com/",
  },
];

export const musicEmbeds = [
  {
    title: "ellyxss on Spotify",
    href: "https://open.spotify.com/artist/3bDrg6yqhNheNR2vUbvzrS",
    src: "https://open.spotify.com/embed/artist/3bDrg6yqhNheNR2vUbvzrS?utm_source=generator&theme=0",
    height: 352,
    platform: "Spotify",
    rounded: true,
  },
  {
    title: "ellyxss on SoundCloud — full discography",
    href: "https://soundcloud.com/ellyxss",
    src: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/ellyxss&color=%239a64ff&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
    height: 450,
    platform: "SoundCloud",
  },
];