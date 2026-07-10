import { Section } from "@/components/Section";
import { Row, RowBullets, RowTitle } from "@/components/Row";
import { projects } from "@/content/site";

export default function HomePage() {
  return (
    <main className="space-y-24">
      {/* —— Hero —— */}
      <header className="pb-2">
        <p className="eyebrow hero-rise" style={{ animationDelay: "0.05s" }}>
          Climate &amp; energy data science · Scientific Python · Research software engineering
        </p>
        <h1
          className="hero-name display mt-10 text-[clamp(2.8rem,9.5vw,7rem)] text-[var(--text)] hero-rise"
          style={{ animationDelay: "0.15s" }}
        >
          <span className="given">Ellyess</span>
          <span className="family display-light text-[var(--muted)]">Benmoufok</span>
        </h1>
        <p
          className="mt-11 max-w-[62ch] text-[15.5px] leading-relaxed text-[var(--muted)] hero-rise"
          style={{ animationDelay: "0.3s" }}
        >
          Computational scientist and data scientist specialising in{" "}
          <span className="text-[var(--text)]">climate and energy systems modelling, scientific Python, and reproducible research software</span>.
          {" "}I recently completed my PhD at Imperial College London (Earth Science and
          Engineering), working on high-resolution wind power modelling and statistical bias
          correction of ERA5 reanalysis data, with peer-reviewed publications in Energy and
          Energy Conversion and Management.
        </p>
        <p
          className="mt-4 max-w-[62ch] text-[15.5px] leading-relaxed text-[var(--muted)] hero-rise"
          style={{ animationDelay: "0.3s" }}
        >
          I&apos;m the author of PyVWF, an open-source Python library for bias correction of
          reanalysis wind data, and I build tooling for large spatiotemporal datasets with
          Xarray, Dask, and GeoPandas, spanning geospatial analysis, uncertainty quantification,
          and the testing, packaging, and CI discipline that turns research code into something
          others can build on.
        </p>
        <div
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 hero-rise"
          style={{ animationDelay: "0.45s" }}
        >
          <a href="mailto:benmoufok.ellyess@gmail.com" className="link-arrow">
            Get in touch
          </a>
          <a href="/research" className="link-arrow">
            View research
          </a>
        </div>
      </header>

      {/* —— Education —— */}
      <Section number="01" title="Education" kicker="2015 – 2026">
        <Row
          meta={
            <>
              <span className="eyebrow text-[var(--subtle)]">Oct 2021 – 2026</span>
              <span className="eyebrow text-[var(--subtle)]">Earth Science &amp; Engineering</span>
            </>
          }
        >
          <RowTitle title="PhD, Computational Science" sub="Imperial College London" />
          <RowBullets
            bullets={[
              "Developed PyVWF, modular wind simulation and reanalysis bias-correction tooling.",
              "Built scalable ERA5 spatiotemporal pipelines integrated into PyPSA-Eur optimisation studies.",
              "Published peer-reviewed work on high-resolution wind bias correction.",
            ]}
          />
        </Row>
        <Row
          meta={
            <>
              <span className="eyebrow text-[var(--subtle)]">Oct 2019 – Oct 2020</span>
              <span className="eyebrow text-[var(--subtle)]">Distinction</span>
            </>
          }
        >
          <RowTitle
            title="MSc, Applied Computational Science and Engineering"
            sub="Imperial College London"
          />
          <RowBullets
            bullets={[
              "Numerical methods, optimisation, and parallel programming in Python and C++.",
              "Research project on multi-output regression with GANs (co-authored publication).",
            ]}
          />
        </Row>
        <Row
          meta={
            <>
              <span className="eyebrow text-[var(--subtle)]">Sep 2015 – Jun 2018</span>
              <span className="eyebrow text-[var(--subtle)]">First Class Honours</span>
            </>
          }
        >
          <RowTitle title="BSc, Physics" sub="University of Surrey" />
          <RowBullets
            bullets={[
              "Foundations in mathematical modelling, numerical analysis, and physical systems.",
              "Applied computational techniques (Fortran, Python) to scientific problem-solving.",
            ]}
          />
        </Row>
      </Section>

      {/* —— Experience —— */}
      <Section number="02" title="Experience" kicker="2019 – present">
        <Row meta={<span className="eyebrow text-[var(--subtle)]">Oct 2020 – Oct 2024</span>}>
          <RowTitle title="Graduate Teaching Assistant" sub="Imperial College London" />
          <RowBullets
            bullets={[
              "Supported teaching and assessment across computational science modules.",
            ]}
          />
        </Row>
        <Row meta={<span className="eyebrow text-[var(--subtle)]">Jun 2021 – Sep 2021</span>}>
          <RowTitle title="Data Science Intern" sub="Shell" />
          <RowBullets
            bullets={[
              "Applied data science methods to energy-relevant datasets; delivered analysis and prototypes.",
            ]}
          />
        </Row>
        <Row meta={<span className="eyebrow text-[var(--subtle)]">Dec 2020 – Mar 2021</span>}>
          <RowTitle title="App Developer" sub="Imperial College London" />
          <RowBullets
            bullets={[
              "Contributed to I-Hex, a Google Earth Engine web application suite (Imperial College London, Maldives National University, Banyan Tree Foundation) surfacing decades of satellite remote-sensing and climate data for island environmental monitoring in the Indian Ocean.",
              "Applied machine learning to satellite imagery for land-cover classification and feature detection.",
            ]}
          />
        </Row>
        <Row meta={<span className="eyebrow text-[var(--subtle)]">Jan 2019 – Aug 2019</span>}>
          <RowTitle title="Data Scientist" sub="Link Humans" />
          <RowBullets
            bullets={[
              "Most technical member of the team; led automation of the Employer Brand Index, the company's core data product.",
              "Built web scrapers and data-cleaning pipelines to source and standardise employer branding signals.",
              "Prototyped the data pipeline intended to support training a language model on the collected corpus.",
            ]}
          />
        </Row>
      </Section>

      {/* —— Publications —— */}
      <Section number="03" title="Selected Publications" kicker="Peer-reviewed">
        <Row
          meta={
            <span className="eyebrow text-[var(--subtle)]">Energy Conv. &amp; Mgmt · 2026</span>
          }
        >
          <h3 className="text-[17px] font-semibold leading-snug tracking-[-0.01em] text-[var(--text)]">
            Geographic variability in reanalysis wind speed biases: A high-resolution bias
            correction approach for UK wind energy
          </h3>
          <p className="text-[13.5px] leading-relaxed text-[var(--muted)]">
            Wang, Y., Warder, S., <Strong>Benmoufok, E.F.</Strong>, Wynn, A., Buxton, O.R.H.,
            Staffell, I., &amp; Piggott, M.D.
          </p>
          <p className="text-xs italic text-[var(--subtle)]">
            Energy Conversion and Management, 352, 121066.
          </p>
          <p className="text-sm leading-relaxed text-[var(--muted)]">
            Extends the multi-country high-resolution bias correction framework PyVWF.
          </p>
          <a
            href="https://doi.org/10.1016/j.enconman.2026.121066"
            target="_blank"
            rel="noreferrer"
            className="link-arrow !mt-4"
          >
            View publication
          </a>
        </Row>
        <Row meta={<span className="eyebrow text-[var(--subtle)]">Energy · 2024</span>}>
          <h3 className="text-[17px] font-semibold leading-snug tracking-[-0.01em] text-[var(--text)]">
            Improving wind power modelling through granular spatial and temporal bias correction
            of reanalysis data
          </h3>
          <p className="text-[13.5px] leading-relaxed text-[var(--muted)]">
            <Strong>Benmoufok, E.F.</Strong>, Warder, S., Zhu, E., Bhaskaran, B., Staffell, I.,
            &amp; Piggott, M.D.
          </p>
          <p className="text-xs italic text-[var(--subtle)]">Energy, 313, 133759.</p>
          <p className="text-sm leading-relaxed text-[var(--muted)]">
            Lead-author study introducing PyVWF, a multi-country high-resolution bias correction
            framework for reanalysis-driven wind power modelling.
          </p>
          <a
            href="https://doi.org/10.1016/j.energy.2024.133759"
            target="_blank"
            rel="noreferrer"
            className="link-arrow !mt-4"
          >
            View publication
          </a>
        </Row>
        <Row meta={<span className="eyebrow text-[var(--subtle)]">Applied Sciences · 2022</span>}>
          <h3 className="text-[17px] font-semibold leading-snug tracking-[-0.01em] text-[var(--text)]">
            Multi-Output Regression with Generative Adversarial Networks (MOR-GANs)
          </h3>
          <p className="text-[13.5px] leading-relaxed text-[var(--muted)]">
            Phillips, T.R.F., Heaney, C.E., <Strong>Benmoufok, E.</Strong>, Li, Q., Hua, L.,
            Porter, A.E., Chung, K.F., &amp; Pain, C.C.
          </p>
          <p className="text-xs italic text-[var(--subtle)]">Applied Sciences, 12(18), 9209.</p>
          <p className="text-sm leading-relaxed text-[var(--muted)]">
            Co-authored study developing GAN approaches for multi-output regression in scientific
            modelling.
          </p>
          <a
            href="https://doi.org/10.3390/app12189209"
            target="_blank"
            rel="noreferrer"
            className="link-arrow !mt-4"
          >
            View publication
          </a>
        </Row>
      </Section>

      {/* —— Open Source & Research Software —— */}
      <Section number="04" title="Open Source & Research Software" kicker="Reproducible research">
        <Row
          meta={
            <>
              <span className="eyebrow text-[var(--subtle)]">Author</span>
              <span className="eyebrow text-[var(--accent)]">JOSS submission in preparation</span>
            </>
          }
        >
          <RowTitle title="PyVWF (Python Virtual Wind Farm)" />
          <p className="text-sm leading-relaxed text-[var(--muted)]">
            An open-source Python library for statistical bias correction of reanalysis wind data
            and wind power capacity factor estimation, developed through my PhD and the
            peer-reviewed publications above.
          </p>
          <p className="text-sm leading-relaxed text-[var(--muted)]">
            Maintained as reproducible research software: a pytest suite with coverage, linting
            with ruff, and GitHub Actions CI across Python 3.10 to 3.12, packaged for pip install.
            A submission to the Journal of Open Source Software (JOSS) is in preparation.
          </p>
          <p className="pt-1 text-[11.5px] text-[var(--subtle)] [font-family:var(--font-mono)]">
            Python · Xarray · Dask · GeoPandas · SciPy · scikit-learn
          </p>
          <a
            href="https://github.com/ellyess/PyVWF"
            target="_blank"
            rel="noreferrer"
            className="link-arrow !mt-4"
          >
            View on GitHub
          </a>
        </Row>
        <Row meta={<span className="eyebrow text-[var(--subtle)]">Research code</span>}>
          <RowTitle title="PyPSA-Eur wind integration" />
          <p className="text-sm leading-relaxed text-[var(--muted)]">
            Energy systems optimisation extensions integrating improved wind modelling into the
            PyPSA-Eur ecosystem, with Snakemake workflows carrying corrected reanalysis fields
            into continental-scale planning studies.
          </p>
          <p className="pt-1 text-[11.5px] text-[var(--subtle)] [font-family:var(--font-mono)]">
            Python · PyPSA · Atlite · Snakemake · ERA5
          </p>
          <a
            href="https://github.com/ellyess/pypsa-eur-wind"
            target="_blank"
            rel="noreferrer"
            className="link-arrow !mt-4"
          >
            View on GitHub
          </a>
        </Row>
      </Section>

      {/* —— Stack —— */}
      <Section number="05" title="Technical Stack" kicker="Working tools">
        <SpecRow label="Languages" value="Python · JavaScript · C++ · Fortran · GDScript" />
        <SpecRow label="Scientific" value="NumPy · Pandas · Xarray · SciPy · Dask" />
        <SpecRow label="Energy / Optimisation" value="PyPSA · PyPSA-Eur · Atlite · Gurobi" />
        <SpecRow label="Geo / Climate" value="GeoPandas · Shapely · Rasterio · ERA5" />
        <SpecRow label="Workflow" value="Snakemake · Conda · Git · GitHub" />
        <SpecRow
          label="Software practice"
          value="pytest + coverage · GitHub Actions CI · ruff · Packaging (pyproject)"
        />
        <SpecRow label="Writing" value="LaTeX · Matplotlib" />
        <SpecRow label="Creative" value="TouchDesigner · Ableton Live · Godot" />
      </Section>

      {/* —— Beyond Research —— */}
      <Section number="06" title="Beyond Research" kicker="Creative practice">
        <Row>
          <p className="text-sm leading-relaxed text-[var(--muted)]">
            Outside computational energy modelling, I work on real-time audio-visual systems
            and creative coding, with generative visuals in TouchDesigner and music production
            in Ableton Live, oriented toward interactive and performance-driven workflows.
          </p>
          <p className="text-sm leading-relaxed text-[var(--muted)]">
            I&apos;m also developing{" "}
            <span className="font-medium text-[var(--text)]">Fool&apos;s Ascension</span>, a
            roguelite card game built on Russian Durak. Branching 3-act runs, persistent
            meta-progression, and tightly-systemised encounter design in Godot.
          </p>
        </Row>
      </Section>

      {/* —— Selected Work —— */}
      <Section number="07" title="Selected Work" kicker="Projects & artefacts">
        {projects.map((project) => (
          <Row
            key={project.title}
            meta={<span className="eyebrow text-[var(--muted)]">{project.kind}</span>}
          >
            <RowTitle title={project.title} />
            <p className="text-sm leading-relaxed text-[var(--muted)]">{project.summary}</p>
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="link-arrow !mt-4"
                aria-label={`Open ${project.title}`}
              >
                Open
              </a>
            ) : null}
          </Row>
        ))}
      </Section>
    </main>
  );
}

function Strong({ children }: { children: React.ReactNode }) {
  return <span className="font-medium text-[var(--text)]">{children}</span>;
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)] items-baseline gap-x-6 gap-y-1 border-t border-[var(--line)] py-3.5 first:border-t-0 md:grid-cols-[72px_176px_minmax(0,1fr)]">
      <span aria-hidden className="hidden md:block" />
      <span className="eyebrow text-[var(--subtle)] md:col-start-2">{label}</span>
      <span className="text-[12.5px] text-[var(--text)] [font-family:var(--font-mono)] md:col-start-3 md:row-start-1">
        {value}
      </span>
    </div>
  );
}
