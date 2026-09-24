import Link from "next/link";
import { Section } from "@/components/Section";
import { Row, RowBullets, RowTitle } from "@/components/Row";
import { WorkRow } from "@/components/WorkRow";
import { contact, figures, fits, publications, work } from "@/content/site";
import { phdConferred, phdStatus } from "@/lib/status";

// Re-render daily so the PhD status flips on the conferral date
export const revalidate = 86400;

export default function HomePage() {
  const conferred = phdConferred();

  return (
    <main className="space-y-24">
      {/* —— Hero —— */}
      <header className="pb-2">
        <p className="eyebrow hero-rise" style={{ animationDelay: "0.05s" }}>
          Wind resource · Weather &amp; climate data validation · Research software
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
          I build and validate models of weather and climate data, and the software that makes
          them usable by other people.{" "}
          <span className="text-[var(--text)]">
            My PhD at Imperial College London corrected ERA5 reanalysis wind against observed
            generation across 12 European countries
          </span>
          , then measured what that correction changes inside European energy system models.
        </p>
        <p
          className="mt-4 max-w-[62ch] text-[15.5px] leading-relaxed text-[var(--muted)] hero-rise"
          style={{ animationDelay: "0.3s" }}
        >
          I released the method as PyVWF, an open-source Python library with continuous
          integration, typing, documentation and a Zenodo DOI. I am looking for data science,
          modelling or research software roles in climate, energy, weather and climate risk.
        </p>

        <dl
          className="mt-10 grid max-w-[62ch] grid-cols-[auto_minmax(0,1fr)] gap-x-6 gap-y-1.5 text-[13.5px] hero-rise"
          style={{ animationDelay: "0.4s" }}
        >
          <dt className="eyebrow text-[var(--subtle)]">Status</dt>
          <dd className="text-[var(--text)]">
            Available now{conferred ? "" : " · PhD viva passed, conferral 1 October 2026"}
          </dd>
          <dt className="eyebrow text-[var(--subtle)]">Based</dt>
          <dd className="text-[var(--text)]">
            {contact.location} · {contact.pattern}
          </dd>
          <dt className="eyebrow text-[var(--subtle)]">Eligibility</dt>
          <dd className="text-[var(--text)]">{contact.eligibility}</dd>
        </dl>

        <div
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 hero-rise"
          style={{ animationDelay: "0.45s" }}
        >
          <a href={`mailto:${contact.email}`} className="link-arrow">
            {contact.email}
          </a>
          <a href="/Ellyess_Benmoufok_CV.pdf" className="link-arrow" download>
            Download CV (PDF)
          </a>
          <a href="#work" className="link-arrow">
            Selected work
          </a>
          <a
            href="https://www.linkedin.com/in/ellyessbenmoufok/"
            target="_blank"
            rel="noreferrer"
            className="link-arrow"
          >
            LinkedIn
          </a>
        </div>
      </header>

      {/* —— Figures —— */}
      <section aria-label="Headline figures">
        <dl className="grid grid-cols-2 border-t border-[var(--line-strong)] md:grid-cols-4">
          {figures.map((f) => (
            <div
              key={f.label}
              className="flex flex-col-reverse justify-end border-b border-[var(--line)] py-6 pr-6 md:border-b-0 md:border-l md:pl-6 md:first:border-l-0 md:first:pl-0"
            >
              <dt className="mt-3 text-[12.5px] leading-snug text-[var(--muted)]">{f.label}</dt>
              <dd className="display text-[clamp(2rem,4.5vw,2.75rem)] text-[var(--text)]">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* —— Where I fit —— */}
      <Section number="01" title="Where I fit" kicker="Roles the record supports">
        {fits.map((fit) => (
          <Row
            key={fit.role}
            meta={<span className="eyebrow text-[var(--accent)]">{fit.role}</span>}
          >
            <p className="text-sm leading-relaxed text-[var(--text)]">{fit.summary}</p>
            <p className="text-[13px] leading-relaxed text-[var(--muted)]">{fit.evidence}</p>
          </Row>
        ))}
      </Section>

      {/* —— Selected work —— */}
      <div id="work" className="scroll-mt-8">
        <Section number="02" title="Selected work" kicker="Code & artefacts">
          {work.map((item) => (
            <WorkRow key={item.title} item={item} />
          ))}
        </Section>
      </div>

      {/* —— How I work —— */}
      <Section number="03" title="How I work" kicker="Method">
        <Row meta={<span className="eyebrow text-[var(--subtle)]">Validation first</span>}>
          <p className="text-sm leading-relaxed text-[var(--muted)]">
            I tested whether machine learning could beat my geometric correction. Random
            cross-validation gave R² of 0.35 to 0.41. Neighbouring sites share weather, so the
            folds were not independent. Under spatial cross-validation the best model scored
            0.295, and on an unseen country the tree models fell below zero. I reported the lower
            figures and kept interpolation as the published method.
          </p>
        </Row>
        <Row meta={<span className="eyebrow text-[var(--subtle)]">Decide before running</span>}>
          <p className="text-sm leading-relaxed text-[var(--muted)]">
            For the physics-informed work, the gates and thirteen predictions were fixed before
            each run. Seven predictions failed; they are published as failures. A configuration chosen after seeing results was re-tested on four new
            regions, lost to the simpler one in three, and the simpler one became the headline.
          </p>
        </Row>
        <Row meta={<span className="eyebrow text-[var(--subtle)]">Build for the next user</span>}>
          <p className="text-sm leading-relaxed text-[var(--muted)]">
            PyVWF started as research code only I could read. When MSc and PhD students began
            building on it, I made it a package. When a student could not load their own data, I
            wrote a documented input framework with an example notebook, then used the same
            pipeline to integrate a lot more data myself.
          </p>
        </Row>
      </Section>

      {/* —— Experience —— */}
      <Section number="04" title="Experience" kicker="2019 – 2026">
        <Row
          meta={
            <>
              <span className="eyebrow text-[var(--subtle)]">Oct 2021 – Jun 2026</span>
              <span className="eyebrow text-[var(--subtle)]">London</span>
            </>
          }
        >
          <RowTitle
            title="PhD Researcher, Computational Science & Data Science"
            sub="Imperial College London · EPSRC and Shell Industrial CASE award"
          />
          <RowBullets
            bullets={[
              "Designed and released PyVWF for granular bias correction of reanalysis wind, trained and validated at 1,729 control points across 12 European countries.",
              "Extended PyPSA-Eur with a density-tiered wake-loss correction, gridded bias correction and a spatial splitting algorithm; validated against ENTSO-E 2023 generation.",
              "Wrote seven Python API clients for national generation data and ERA5, with rate-limit backoff, request batching and resumable downloads.",
              "Reported to an industry supervisor at Shell throughout, presenting results in terms of system cost for a commercial audience.",
            ]}
          />
        </Row>
        <Row
          meta={
            <>
              <span className="eyebrow text-[var(--subtle)]">Jun 2021 – Sep 2021</span>
              <span className="eyebrow text-[var(--subtle)]">London</span>
            </>
          }
        >
          <RowTitle title="Data Science Intern" sub="Shell" />
          <RowBullets
            bullets={[
              "Proof of concept for statistically downscaling CMIP6 climate projections to asset level for renewable-energy variables, using machine learning on large, heterogeneous climate datasets, with offshore wind lidar observations as ground truth.",
              "Supported separate operational weather-modelling work, retrieving data from HPC.",
            ]}
          />
        </Row>
        <Row
          meta={
            <>
              <span className="eyebrow text-[var(--subtle)]">Dec 2020 – Mar 2021</span>
              <span className="eyebrow text-[var(--subtle)]">London</span>
            </>
          }
        >
          <RowTitle title="Research App Developer" sub="Imperial College London" />
          <RowBullets
            bullets={[
              "App Developer on I-Hex, the Island Health Explorer, with Maldives National University and the Banyan Tree Foundation.",
              "Supervised land-cover and benthic-feature classification of satellite imagery over Maldivian atolls in Google Earth Engine; assembled the 861-point labelled training set.",
            ]}
          />
        </Row>
        <Row
          meta={
            <>
              <span className="eyebrow text-[var(--subtle)]">Jan 2019 – Aug 2019</span>
              <span className="eyebrow text-[var(--subtle)]">London</span>
            </>
          }
        >
          <RowTitle title="Data Scientist" sub="Link Humans" />
          <RowBullets
            bullets={[
              "Most technical member of a five-person team. Wrote Python scrapers and pipelines to collect employer-branding data from across the web.",
              "Classified large volumes of unstructured text and produced insight reports for more than ten clients on monthly to quarterly cycles.",
            ]}
          />
        </Row>
        <Row
          meta={
            <>
              <span className="eyebrow text-[var(--subtle)]">2020 – 2024</span>
              <span className="eyebrow text-[var(--subtle)]">Imperial</span>
            </>
          }
        >
          <RowTitle title="Research guidance and teaching" />
          <RowBullets
            bullets={[
              "Co-supervised an MSc research project, named alongside Prof. Matthew Piggott, whose work became a co-authored paper in Energy.",
              "Guided three MSc and PhD students through using and extending PyVWF and PyPSA-Eur, with a weekly session and written updates.",
              "Teaching assistant for MSc scientific computing and numerical methods coursework sessions.",
            ]}
          />
        </Row>
      </Section>

      {/* —— Education —— */}
      <Section number="05" title="Education" kicker="2015 – 2026">
        <Row
          meta={
            <>
              <span className="eyebrow text-[var(--subtle)]">Oct 2021 – Jun 2026</span>
              <span className="eyebrow text-[var(--subtle)]">{phdStatus()}</span>
            </>
          }
        >
          <RowTitle
            title="PhD in Computational Science & Data Science"
            sub="Imperial College London · Earth Science & Engineering"
          />
          <p className="text-sm leading-relaxed text-[var(--muted)]">
            Thesis: <em>Data Science-Enhanced Wind Power Modelling: From Reanalysis Correction to
            Energy System Representation</em>.{" "}
            <Link href="/research" className="text-[var(--accent)] hover:underline">
              Findings
            </Link>
          </p>
        </Row>
        <Row
          meta={
            <>
              <span className="eyebrow text-[var(--subtle)]">2019 – 2020</span>
              <span className="eyebrow text-[var(--subtle)]">Distinction · DIC</span>
            </>
          }
        >
          <RowTitle
            title="MSc, Applied Computational Science and Engineering"
            sub="Imperial College London"
          />
          <p className="text-sm leading-relaxed text-[var(--muted)]">
            Top marks in Modern Programming Methods (92.4) and Inversion and Optimisation (82.2).
            Dissertation on Wasserstein GANs for multi-output regression, which led to a
            co-authored paper.
          </p>
        </Row>
        <Row
          meta={
            <>
              <span className="eyebrow text-[var(--subtle)]">2015 – 2018</span>
              <span className="eyebrow text-[var(--subtle)]">First Class Honours</span>
            </>
          }
        >
          <RowTitle title="BSc, Physics" sub="University of Surrey" />
        </Row>
      </Section>

      {/* —— Publications —— */}
      <Section number="06" title="Publications" kicker="Peer-reviewed">
        {publications.map((p) => (
          <Row
            key={p.url}
            meta={
              <>
                <span className="eyebrow text-[var(--subtle)]">{p.short}</span>
                <span className="eyebrow text-[var(--subtle)]">{p.role}</span>
              </>
            }
          >
            <h3 className="text-[17px] font-semibold leading-snug tracking-[-0.01em] text-[var(--text)]">
              {p.title}
            </h3>
            <p className="text-[13.5px] leading-relaxed text-[var(--muted)]">
              <Authors list={p.authors} />
            </p>
            <p className="text-xs italic text-[var(--subtle)]">{p.venue}</p>
            <a href={p.url} target="_blank" rel="noreferrer" className="link-arrow !mt-4">
              View publication
            </a>
          </Row>
        ))}
      </Section>

      {/* —— Stack —— */}
      <Section number="07" title="Technical stack" kicker="Working tools">
        <SpecRow label="Languages" value="Python (advanced) · SQL (DuckDB) · JavaScript · TypeScript · R" />
        <SpecRow label="Scientific data" value="NumPy · SciPy · Pandas · Xarray · Dask · NetCDF · Zarr · Matplotlib" />
        <SpecRow label="Machine learning" value="scikit-learn · PyTorch · TensorFlow / Keras · spatial cross-validation · GANs" />
        <SpecRow label="Weather & climate" value="ERA5 · MERRA-2 · CMIP6 · Copernicus CDS · ENTSO-E" />
        <SpecRow label="Geospatial" value="GeoPandas · Rasterio · Cartopy · Shapely · pyproj · Google Earth Engine · IDW / kriging" />
        <SpecRow label="Energy & risk" value="PyPSA-Eur · Atlite · Gurobi · wake modelling · Oasis LMF" />
        <SpecRow
          label="Software practice"
          value="pytest · GitHub Actions · ruff · mypy · Sphinx · Docker · pre-commit · semantic versioning"
        />
        <SpecRow label="Workflow" value="Snakemake · Conda · Git · Unix shell · Claude Code" />
        <SpecRow label="Certification" value="Microsoft Azure Fundamentals (AZ-900)" />
      </Section>

    </main>
  );
}

function Authors({ list }: { list: string[] }) {
  return (
    <>
      {list.map((a, i) => {
        const self = a.startsWith("**");
        const name = a.replaceAll("**", "");
        return (
          <span key={a}>
            {self ? <span className="font-medium text-[var(--text)]">{name}</span> : name}
            {i < list.length - 1 ? ", " : ""}
          </span>
        );
      })}
    </>
  );
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
