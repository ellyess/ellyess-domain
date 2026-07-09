import { Section } from "@/components/Section";
import { projects } from "@/content/site";

export default function HomePage() {
  return (
    <main className="space-y-20">
      {/* —— Hero —— */}
      <header className="space-y-7 pt-2">
        <p className="eyebrow hero-rise" style={{ animationDelay: "0.05s" }}>
          Climate &amp; energy data science · Scientific Python · Research software engineering
        </p>
        <h1 className="hero-name display text-[clamp(3rem,11vw,8.5rem)] text-[var(--text)] tracking-[-0.03em]">
          <span className="given hero-rise" style={{ animationDelay: "0.15s" }}>
            Ellyess
          </span>
          <span
            className="family display-light text-[var(--muted)] hero-rise"
            style={{ animationDelay: "0.3s" }}
          >
            Benmoufok
          </span>
        </h1>
        <p
          className="max-w-2xl text-[15px] leading-relaxed text-[var(--muted)] hero-rise"
          style={{ animationDelay: "0.45s" }}
        >
          Computational scientist and data scientist specialising in{" "}
          <span className="text-[var(--text)]">climate and energy systems modelling, scientific Python, and reproducible research software</span>.
          {" "}I recently completed my PhD at Imperial College London (Earth Science and
          Engineering), working on high-resolution wind power modelling and statistical bias
          correction of ERA5 reanalysis data, with peer-reviewed publications in Energy and
          Energy Conversion and Management. I&apos;m the author of PyVWF, an open-source Python
          library for bias correction of reanalysis wind data, and I build tooling for large
          spatiotemporal datasets with Xarray, Dask, and GeoPandas, spanning geospatial
          analysis, uncertainty quantification, and the testing, packaging, and CI discipline
          that turns research code into something others can build on.
        </p>
        <div
          className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 hero-rise"
          style={{ animationDelay: "0.6s" }}
        >
          <a href="mailto:benmoufok.ellyess@gmail.com" className="link-arrow" data-magnetic>
            Get in touch
          </a>
          <a href="/research" className="link-arrow" data-magnetic>
            View research
          </a>
        </div>
      </header>

      {/* —— Education —— */}
      <Section number="01" title="Education" kicker="2015 – 2026">
        <div className="space-y-px">
          <EducationCard
            degree="PhD, Computational Science"
            institution="Imperial College London"
            period="Oct 2021 – 2026"
            note="Department of Earth Science and Engineering"
            bullets={[
              "Developed PyVWF, modular wind simulation and reanalysis bias-correction tooling.",
              "Built scalable ERA5 spatiotemporal pipelines integrated into PyPSA-Eur optimisation studies.",
              "Published peer-reviewed work on high-resolution wind bias correction.",
            ]}
          />
          <EducationCard
            degree="MSc, Applied Computational Science and Engineering"
            institution="Imperial College London"
            period="Oct 2019 – Oct 2020"
            note="Distinction"
            bullets={[
              "Numerical methods, optimisation, and parallel programming in Python and C++.",
              "Research project on multi-output regression with GANs (co-authored publication).",
            ]}
          />
          <EducationCard
            degree="BSc, Physics"
            institution="University of Surrey"
            period="Sep 2015 – Jun 2018"
            note="First Class Honours"
            bullets={[
              "Foundations in mathematical modelling, numerical analysis, and physical systems.",
              "Applied computational techniques (Fortran, Python) to scientific problem-solving.",
            ]}
          />
        </div>
      </Section>

      {/* —— Experience —— */}
      <Section number="02" title="Experience" kicker="2019 – present">
        <div className="space-y-px">
          <ExperienceCard
            role="Graduate Teaching Assistant"
            org="Imperial College London"
            period="Oct 2020 – Oct 2024"
            bullets={[
              "Supported teaching and assessment across computational science modules.",
            ]}
          />
          <ExperienceCard
            role="Data Science Intern"
            org="Shell"
            period="Jun 2021 – Sep 2021"
            bullets={[
              "Applied data science methods to energy-relevant datasets; delivered analysis and prototypes.",
            ]}
          />
          <ExperienceCard
            role="App Developer"
            org="Imperial College London"
            period="Dec 2020 – Mar 2021"
            bullets={[
              "Contributed to I-Hex, a Google Earth Engine web application suite (Imperial College London, Maldives National University, Banyan Tree Foundation) surfacing decades of satellite remote-sensing and climate data for island environmental monitoring in the Indian Ocean.",
              "Applied machine learning to satellite imagery for land-cover classification and feature detection.",
            ]}
          />
          <ExperienceCard
            role="Data Scientist"
            org="Link Humans"
            period="Jan 2019 – Aug 2019"
            bullets={[
              "Most technical member of the team; led automation of the Employer Brand Index, the company's core data product.",
              "Built web scrapers and data-cleaning pipelines to source and standardise employer branding signals.",
              "Prototyped the data pipeline intended to support training a language model on the collected corpus.",
            ]}
          />
        </div>
      </Section>

      {/* —— Publications —— */}
      <Section number="03" title="Selected Publications" kicker="Peer-reviewed">
        <div className="space-y-px">
          <PublicationCard
            title="Geographic variability in reanalysis wind speed biases: A high-resolution bias correction approach for UK wind energy"
            authors={(
              <>
                Wang, Y., Warder, S., <Strong>Benmoufok, E.F.</Strong>, Wynn, A., Buxton, O.R.H.,
                Staffell, I., &amp; Piggott, M.D.
              </>
            )}
            venue="Energy Conversion & Management · 2026"
            cite="Energy Conversion and Management, 352, 121066."
            note="Extends the multi-country high-resolution bias correction framework PyVWF."
            url="https://doi.org/10.1016/j.enconman.2026.121066"
          />
          <PublicationCard
            title="Improving wind power modelling through granular spatial and temporal bias correction of reanalysis data"
            authors={(
              <>
                <Strong>Benmoufok, E.F.</Strong>, Warder, S., Zhu, E., Bhaskaran, B., Staffell, I.,
                &amp; Piggott, M.D.
              </>
            )}
            venue="Energy · 2024"
            cite="Energy, 313, 133759."
            note="Lead-author study introducing PyVWF, a multi-country high-resolution bias correction framework for reanalysis-driven wind power modelling."
            url="https://doi.org/10.1016/j.energy.2024.133759"
          />
          <PublicationCard
            title="Multi-Output Regression with Generative Adversarial Networks (MOR-GANs)"
            authors={(
              <>
                Phillips, T.R.F., Heaney, C.E., <Strong>Benmoufok, E.</Strong>, Li, Q., Hua, L.,
                Porter, A.E., Chung, K.F., &amp; Pain, C.C.
              </>
            )}
            venue="Applied Sciences · 2022"
            cite="Applied Sciences, 12(18), 9209."
            note="Co-authored study developing GAN approaches for multi-output regression in scientific modelling."
            url="https://doi.org/10.3390/app12189209"
          />
        </div>
      </Section>

      {/* —— Open Source & Research Software —— */}
      <Section number="04" title="Open Source & Research Software" kicker="Reproducible research">
        <div className="space-y-px">
          <OpenSourceCard
            title="PyVWF (Python Virtual Wind Farm)"
            role="Author"
            status="JOSS submission in preparation"
            tech="Python · Xarray · Dask · GeoPandas · SciPy · scikit-learn"
            url="https://github.com/ellyess/PyVWF"
            paragraphs={[
              "An open-source Python library for statistical bias correction of reanalysis wind data and wind power capacity factor estimation, developed through my PhD and the peer-reviewed publications above.",
              "Maintained as reproducible research software: a pytest suite with coverage, linting with ruff, and GitHub Actions CI across Python 3.10 to 3.12, packaged for pip install. A submission to the Journal of Open Source Software (JOSS) is in preparation.",
            ]}
          />
          <OpenSourceCard
            title="PyPSA-Eur wind integration"
            role="Research code"
            status="GitHub"
            tech="Python · PyPSA · Atlite · Snakemake · ERA5"
            url="https://github.com/ellyess/pypsa-eur-wind"
            paragraphs={[
              "Energy systems optimisation extensions integrating improved wind modelling into the PyPSA-Eur ecosystem, with Snakemake workflows carrying corrected reanalysis fields into continental-scale planning studies.",
            ]}
          />
        </div>
      </Section>

      {/* —— Stack —— */}
      <Section number="05" title="Technical Stack" kicker="Working tools">
        <div className="card grid grid-cols-1 gap-px md:grid-cols-2">
          <StackRow label="Languages" value="Python · JavaScript · C++ · Fortran · GDScript" />
          <StackRow label="Scientific" value="NumPy · Pandas · Xarray · SciPy · Dask" />
          <StackRow label="Energy / Optimisation" value="PyPSA · PyPSA-Eur · Atlite · Gurobi" />
          <StackRow label="Geo / Climate" value="GeoPandas · Shapely · Rasterio · ERA5" />
          <StackRow label="Workflow" value="Snakemake · Conda · Git · GitHub" />
          <StackRow label="Software practice" value="pytest + coverage · GitHub Actions CI · ruff · Packaging (pyproject)" />
          <StackRow label="Writing" value="LaTeX · Matplotlib" />
          <StackRow label="Creative" value="TouchDesigner · Ableton Live · Godot" />
        </div>
      </Section>

      {/* —— Beyond Research —— */}
      <Section number="06" title="Beyond Research" kicker="Creative practice">
        <div className="space-y-px">
          <article className="card px-6 py-6">
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              Outside computational energy modelling, I work on real-time audio-visual systems
              and creative coding, with generative visuals in TouchDesigner and music production
              in Ableton Live, oriented toward interactive and performance-driven workflows.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              I&apos;m also developing{" "}
              <span className="display-medium text-[var(--text)]">Fool&apos;s Ascension</span>
              , a roguelite card game built on Russian Durak. Branching 3-act runs,
              persistent meta-progression, and tightly-systemised encounter design in Godot.
            </p>
          </article>
        </div>
      </Section>

      {/* —— Selected Work —— */}
      <Section number="07" title="Selected Work" kicker="Projects & artefacts">
        <div className="space-y-px">
          {projects.map((project, i) => (
            <article key={project.title} className="card card-accent group grid grid-cols-1 gap-4 px-6 py-6 md:grid-cols-[180px_minmax(0,1fr)_auto] md:items-baseline md:gap-8">
              <div className="flex items-baseline gap-3 md:flex-col md:items-start md:gap-2">
                <span className="eyebrow text-[var(--subtle)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="eyebrow text-[var(--muted)]">{project.kind}</span>
              </div>
              <div className="space-y-2">
                <h3 className="display text-xl md:text-2xl text-[var(--text)]">{project.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted)] max-w-2xl">
                  {project.summary}
                </p>
              </div>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="card-link link-arrow self-start md:self-center"
                  aria-label={`Open ${project.title}`}
                >
                  Open
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </Section>

      <footer className="pt-8 pb-4">
        <p className="eyebrow text-[var(--subtle)]">
          © {new Date().getFullYear()} Ellyess Benmoufok · London
        </p>
      </footer>
    </main>
  );
}

function Strong({ children }: { children: React.ReactNode }) {
  return <span className="font-medium text-[var(--text)]">{children}</span>;
}

function EducationCard({
  degree,
  institution,
  period,
  note,
  bullets,
}: {
  degree: string;
  institution: string;
  period: string;
  note?: string;
  bullets: string[];
}) {
  return (
    <article className="card grid grid-cols-1 gap-3 px-6 py-6 md:grid-cols-[180px_minmax(0,1fr)] md:gap-8">
      <div className="space-y-1">
        <p className="eyebrow text-[var(--muted)]">{period}</p>
        {note ? <p className="eyebrow text-[var(--subtle)]">{note}</p> : null}
      </div>
      <div className="space-y-3">
        <div>
          <h3 className="display text-xl md:text-[22px] text-[var(--text)]">{degree}</h3>
          <p className="mt-1 text-sm text-[var(--muted)]">{institution}</p>
        </div>
        <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-[var(--muted)] marker:text-[var(--subtle)]">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function ExperienceCard({
  role,
  org,
  period,
  bullets,
}: {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}) {
  return (
    <article className="card grid grid-cols-1 gap-3 px-6 py-6 md:grid-cols-[180px_minmax(0,1fr)] md:gap-8">
      <p className="eyebrow text-[var(--muted)]">{period}</p>
      <div className="space-y-3">
        <div>
          <h3 className="display text-xl md:text-[22px] text-[var(--text)]">{role}</h3>
          <p className="mt-1 text-sm text-[var(--muted)]">{org}</p>
        </div>
        <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-[var(--muted)] marker:text-[var(--subtle)]">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function PublicationCard({
  title,
  authors,
  venue,
  cite,
  note,
  url,
}: {
  title: string;
  authors: React.ReactNode;
  venue: string;
  cite: string;
  note: string;
  url: string;
}) {
  return (
    <article className="card card-accent group grid grid-cols-1 gap-3 px-6 py-6 md:grid-cols-[180px_minmax(0,1fr)] md:gap-8">
      <p className="eyebrow text-[var(--muted)]">{venue}</p>
      <div className="space-y-3">
        <h3 className="display text-lg md:text-xl text-[var(--text)] leading-snug">
          {title}
        </h3>
        <p className="text-sm text-[var(--muted)]">{authors}</p>
        <p className="text-xs italic text-[var(--subtle)]">{cite}</p>
        <p className="text-sm leading-relaxed text-[var(--muted)]">{note}</p>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="link-arrow inline-flex pt-1"
        >
          View publication
        </a>
      </div>
    </article>
  );
}

function OpenSourceCard({
  title,
  role,
  status,
  tech,
  url,
  paragraphs,
}: {
  title: string;
  role: string;
  status: string;
  tech: string;
  url: string;
  paragraphs: string[];
}) {
  return (
    <article className="card card-accent group grid grid-cols-1 gap-3 px-6 py-6 md:grid-cols-[180px_minmax(0,1fr)] md:gap-8">
      <div className="space-y-1">
        <p className="eyebrow text-[var(--muted)]">{role}</p>
        <p className="eyebrow text-[var(--subtle)]">{status}</p>
      </div>
      <div className="space-y-3">
        <h3 className="display text-lg md:text-xl text-[var(--text)] leading-snug">{title}</h3>
        {paragraphs.map((p) => (
          <p key={p} className="text-sm leading-relaxed text-[var(--muted)]">
            {p}
          </p>
        ))}
        <p className="text-xs text-[var(--subtle)]">{tech}</p>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="link-arrow inline-flex pt-1"
        >
          View on GitHub
        </a>
      </div>
    </article>
  );
}

function StackRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-r border-[var(--line)] px-5 py-4 last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 md:[&:nth-child(2n)]:border-r-0">
      <p className="eyebrow text-[var(--subtle)]">{label}</p>
      <p className="mt-1.5 text-sm text-[var(--text)]">{value}</p>
    </div>
  );
}
