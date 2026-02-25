import { Section } from "@/components/Section";
import { projects } from "@/content/site";

export default function HomePage() {
  return (
    <main className="space-y-14">
      <header className="space-y-5 border-b border-[var(--line)] pb-10">
        <h1 className="max-w-3xl text-[var(--muted)] [font-family:var(--font-mono)] leading-tight md:text-4xl">
            Ellyess Benmoufok
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-[var(--muted)]">
            Research software engineer and applied scientist specialising in scientific Python,
            large-scale data pipelines, and simulation systems. PhD researcher at Imperial
            College London with strong experience in modular code design, reproducibility,
            and computational modelling. Proven ability to build maintainable open-source
        tools and integrate models into optimisation frameworks.
        </p>
      </header>

      <Section title="Education">
        <div className="space-y-3">
          <article className="border border-[var(--line)] bg-[var(--surface)] p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="text-base font-medium">PhD in Computational Science</h3>
              <span className="text-xs text-[var(--muted)] [font-family:var(--font-mono)]">Oct 2021 – Present</span>
            </div>
            <p className="mt-2 text-sm text-[var(--muted)]">Imperial College London</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
              <li>Architected modular scientific Python frameworks for wind farm simulation.</li>
              <li>Built scalable pipelines for large spatiotemporal datasets (ERA5).</li>
              <li>Implemented clustering, bias correction, and validation algorithms.</li>
              <li>Integrated simulation systems into PyPSA-based optimisation models.</li>
              <li>Emphasised reproducibility, performance, and maintainability.</li>
            </ul>
          </article>

        <article className="border border-[var(--line)] bg-[var(--surface)] p-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
            <h3 className="text-base font-medium">
            MSc in Applied Computational Science and Engineering
            </h3>
            <span className="text-xs text-[var(--muted)] [font-family:var(--font-mono)]">
            Oct 2019 – Oct 2020
            </span>
        </div>

        <p className="mt-2 text-sm text-[var(--muted)]">
            Imperial College London
        </p>

        <p className="mt-1 text-xs text-[var(--muted)] [font-family:var(--font-mono)]">
            Distinction
        </p>

        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
            <li>Developed numerical and optimisation algorithms in Python and C++ for scientific computing applications.</li>
            <li>Completed advanced coursework in dynamical systems, numerical methods, inversion, and parallel programming.</li>
            <li>Co-authored research on generative adversarial networks (MOR-GANs) for multi-output regression in scientific data.</li>
            <li>Built a foundation in high-performance and reproducible computational workflows.</li>
        </ul>
        </article>

        <article className="border border-[var(--line)] bg-[var(--surface)] p-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
            <h3 className="text-base font-medium">
            BSc in Physics
            </h3>
            <span className="text-xs text-[var(--muted)] [font-family:var(--font-mono)]">
            Sep 2015 – Jun 2018
            </span>
        </div>

        <p className="mt-2 text-sm text-[var(--muted)]">
            University of Surrey
        </p>

        <p className="mt-1 text-xs text-[var(--muted)] [font-family:var(--font-mono)]">
            First Class Honours
        </p>

        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
            <li>Built strong foundations in mathematical modelling, numerical analysis, and physical systems.</li>
            <li>Applied computational techniques (including Fortran and Python) to scientific problem-solving.</li>
            <li>Developed early interest in scientific computing and simulation-based research.</li>
        </ul>
        </article>
        </div>
      </Section>

      <Section title="Experience">
        <div className="space-y-3">
          <article className="border border-[var(--line)] bg-[var(--surface)] p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="text-base font-medium">Graduate Teaching Assistant</h3>
              <span className="text-xs text-[var(--muted)] [font-family:var(--font-mono)]">Oct 2020 – Oct 2024</span>
            </div>
            <p className="mt-2 text-sm text-[var(--muted)]">Imperial College London</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
              <li>Supported teaching of computational and numerical methods.</li>
              <li>Helped students with Python, modelling, and scientific computing.</li>
            </ul>
          </article>

          <article className="border border-[var(--line)] bg-[var(--surface)] p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="text-base font-medium">Data Science Intern</h3>
              <span className="text-xs text-[var(--muted)] [font-family:var(--font-mono)]">Jun 2021 – Sep 2021</span>
            </div>
            <p className="mt-2 text-sm text-[var(--muted)]">Shell</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
              <li>Built machine learning models for energy analytics.</li>
              <li>Processed large-scale geospatial and operational datasets.</li>
            </ul>
          </article>

          <article className="border border-[var(--line)] bg-[var(--surface)] p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="text-base font-medium">App Developer</h3>
              <span className="text-xs text-[var(--muted)] [font-family:var(--font-mono)]">Dec 2020 – Mar 2021</span>
            </div>
            <p className="mt-2 text-sm text-[var(--muted)]">Imperial College London</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
              <li>Built geospatial ML tools using Google Earth Engine.</li>
              <li>Designed spatial analytics pipelines in JavaScript.</li>
            </ul>
          </article>
        </div>
      </Section>

      <Section title="Publications">
        <div className="space-y-3">
        <article className="border border-[var(--line)] bg-[var(--surface)] p-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
            <h3 className="text-base font-medium">
            Geographic variability in reanalysis wind speed biases: A high-resolution bias correction approach for UK wind energy
            </h3>
            <span className="text-xs text-[var(--muted)]">Energy Conversion & Management · 2026</span>
        </div>

        <p className="mt-2 text-sm text-[var(--muted)]">
            Wang, Y., Warder, S., <span className="font-medium text-[var(--text)]">Benmoufok, E.F.</span>, 
            Wynn, A., Buxton, O.R.H., Staffell, I., & Piggott, M.D.
        </p>

        <p className="mt-1 text-sm text-[var(--muted)] italic">
            Energy Conversion and Management, 352, 121066.
        </p>
        
        <p className="mt-2 text-sm text-[var(--muted)]">
            Study further developing the multi-country high-resolution bias correction framework PyvWF. 
        </p>
        <p className="mt-2 text-sm">
            <a 
            href="https://doi.org/10.1016/j.enconman.2026.121066"
            target="_blank"
            className="text-[var(--accent)] hover:underline"
            >
            View publication →
            </a>
        </p>
        </article>

        <article className="border border-[var(--line)] bg-[var(--surface)] p-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
            <h3 className="text-base font-medium">
            Improving wind power modelling through granular spatial and temporal bias correction of reanalysis data
            </h3>
            <span className="text-xs text-[var(--muted)]">
            Energy · 2024
            </span>
        </div>

        <p className="mt-2 text-sm text-[var(--muted)]">
            <span className="font-medium text-[var(--text)]">
            Benmoufok, E.F.
            </span>, Warder, S., Zhu, E., Bhaskaran, B., Staffell, I., & Piggott, M.D.
        </p>

        <p className="mt-1 text-sm text-[var(--muted)] italic">
            Energy, 313, 133759.
        </p>

        <p className="mt-2 text-sm text-[var(--muted)]">
            Lead-author study developing a multi-country high-resolution bias correction framework 
            for reanalysis-driven wind power modelling, PyVWF.
        </p>

        <p className="mt-2 text-sm">
            <a 
            href="https://doi.org/10.1016/j.energy.2024.133759"
            target="_blank"
            className="text-[var(--accent)] hover:underline"
            >
            View publication →
            </a>
        </p>
        </article>

        <article className="border border-[var(--line)] bg-[var(--surface)] p-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
            <h3 className="text-base font-medium">
            Multi-Output Regression with Generative Adversarial Networks (MOR-GANs)
            </h3>
            <span className="text-xs text-[var(--muted)]">
            Applied Sciences · 2022
            </span>
        </div>

        <p className="mt-2 text-sm text-[var(--muted)]">
            Phillips, T.R.F., Heaney, C.E., 
            <span className="font-medium text-[var(--text)]">
            Benmoufok, E.
            </span>, 
            Li, Q., Hua, L., Porter, A.E., Chung, K.F., & Pain, C.C.
        </p>

        <p className="mt-1 text-sm text-[var(--muted)] italic">
            Applied Sciences, 12(18), 9209.
        </p>

        <p className="mt-2 text-sm text-[var(--muted)]">
            Co-authored study developing generative adversarial network (GAN) approaches 
            for multi-output regression in scientific modelling applications.
        </p>

        <p className="mt-2 text-sm">
            <a 
            href="https://doi.org/10.3390/app12189209"
            target="_blank"
            className="text-[var(--accent)] hover:underline"
            >
            View publication →
            </a>
        </p>
        </article>
        </div>
      </Section>

    <Section title="Technical Stack">
    <article className="border border-[var(--line)] bg-[var(--surface)] p-4">
        <div className="grid gap-2 text-sm text-[var(--muted)]">
        
        <p>
            <span className="text-[var(--text)]">Core Language:</span>{" "}
            Python
        </p>

        <p>
            <span className="text-[var(--text)]">Scientific Computing:</span>{" "}
            NumPy · Pandas · Xarray · SciPy · Dask
        </p>

        <p>
            <span className="text-[var(--text)]">Energy Systems & Optimisation:</span>{" "}
            PyPSA · Atlite · Gurobi · Large-scale LP optimisation
        </p>

        <p>
            <span className="text-[var(--text)]">Geospatial & Climate Data:</span>{" "}
            GeoPandas · Shapely · Rasterio · ERA5 workflows
        </p>

        <p>
            <span className="text-[var(--text)]">Workflow & Reproducibility:</span>{" "}
            Snakemake · Conda · Git · GitHub
        </p>

        <p>
            <span className="text-[var(--text)]">Visualisation & Reporting:</span>{" "}
            Matplotlib · LaTeX
        </p>

        </div>
    </article>
    </Section>

    <Section title="Beyond Research">
    <article className="border border-[var(--line)] bg-[var(--surface)] p-4">
        <p className="text-sm text-[var(--muted)] leading-relaxed">
        Outside of computational energy modelling, I explore real-time audio-visual systems and creative coding. 
        My work includes generative visual design using TouchDesigner and music production in Ableton Live, 
        focusing on interactive and performance-driven workflows.
        </p>
    </article>
    </Section>

      <Section title="Selected Work">
        <div className="space-y-3">
          {projects.map((project) => (
            <article key={project.title} className="border border-[var(--line)] bg-[var(--surface)] p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-lg font-medium">{project.title}</h3>
                <span className="text-xs text-[var(--muted)] [font-family:var(--font-mono)]">
                  {project.kind}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{project.summary}</p>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-xs text-[var(--accent)] [font-family:var(--font-mono)]"
                >
                  Open link ↗
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}