import ContactForm from "../components/ContactForm";
import ScrollProgress from "../components/ScrollProgress";

const profile = {
  name: "Samarpan Tamang",
  role: "Full-Stack Developer",
  email: "tamangsamarpan555@gmail.com",
  phone: "9869526879",
  location: "Available for Remote & Local Projects",
  github: "#",
  linkedin: "#",
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const capabilities = [
  {
    title: "Frontend Development",
    description:
      "Modern, responsive, and accessible interfaces built with React, Next.js, TypeScript, and Tailwind CSS.",
    items: ["Landing pages", "Dashboards", "Admin panels", "Reusable UI"],
    progress: 95,
  },
  {
    title: "Backend Development",
    description:
      "Clean server-side logic, API routes, authentication, CRUD systems, and third-party integrations.",
    items: ["REST APIs", "Auth systems", "Server logic", "Payment flow"],
    progress: 90,
  },
  {
    title: "Database & Deployment",
    description:
      "Database-backed applications with clean structure, environment setup, deployment, and maintainable architecture.",
    items: ["MongoDB", "PostgreSQL", "Prisma", "Vercel"],
    progress: 86,
  },
];

const skills = [
  { name: "Next.js / React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Tailwind CSS", level: 94 },
  { name: "Node.js / Express", level: 88 },
  { name: "REST API Development", level: 90 },
  { name: "MongoDB / PostgreSQL", level: 84 },
  { name: "Authentication", level: 86 },
  { name: "Deployment & Debugging", level: 88 },
];

const projects = [
  {
    title: "SaaS Client Dashboard",
    type: "Full-stack web app",
    year: "2026",
    description:
      "A modern dashboard where users can manage analytics, account activity, invoices, and project status from one secure interface.",
    impact:
      "Built the frontend interface, API structure, authentication flow, and database-backed dashboard modules.",
    stack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "Prisma"],
    metrics: ["Auth", "Dashboard", "REST API"],
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "E-Commerce Admin System",
    type: "Backend + admin panel",
    year: "2025",
    description:
      "A product and order management system with inventory control, protected admin routes, order status tracking, and payment-ready architecture.",
    impact:
      "Created a maintainable admin workflow for managing products, users, orders, and payment states.",
    stack: ["React", "Node.js", "MongoDB", "JWT", "Stripe"],
    metrics: ["Orders", "Payments", "Inventory"],
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Real-Time Task Platform",
    type: "Productivity application",
    year: "2025",
    description:
      "A collaborative task management platform with boards, activity history, responsive UI, and API-driven updates.",
    impact:
      "Designed the full application flow from database structure to frontend interactions and deployment.",
    stack: ["Next.js", "Socket.io", "Tailwind", "Express", "MongoDB"],
    metrics: ["Realtime", "Teams", "CRUD"],
    liveUrl: "#",
    sourceUrl: "#",
  },
];

const experience = [
  {
    role: "Full-Stack Developer",
    company: "Freelance & Personal Projects",
    period: "2024 - Present",
    description:
      "Building production-focused websites, dashboards, APIs, admin panels, and database-backed applications.",
    highlights: [
      "Developed responsive interfaces with reusable React components.",
      "Built API endpoints, authentication flows, and database models.",
      "Deployed applications with clean environment configuration.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Client & Practice Projects",
    period: "2023 - 2024",
    description:
      "Created modern web interfaces, landing pages, and application screens with attention to performance and user experience.",
    highlights: [
      "Converted design ideas into polished responsive pages.",
      "Improved layout consistency across desktop and mobile.",
      "Connected frontend interfaces with REST APIs.",
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden text-slate-100">
      <ScrollProgress />
      <BackgroundGlow />
      <Navbar />
      <Hero />
      <About />
      <Capabilities />
      <Projects />
      <Stack />
      <Experience />
      <Contact />
    </main>
  );
}

function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute left-[8%] top-20 h-72 w-72 animate-[floatSoft_9s_ease-in-out_infinite] rounded-full bg-cyan-400/10 blur-[90px]" />
      <div className="absolute right-[10%] top-32 h-80 w-80 animate-[floatReverse_11s_ease-in-out_infinite] rounded-full bg-violet-500/10 blur-[100px]" />
      <div className="absolute bottom-10 left-1/3 h-96 w-96 animate-[floatSoft_13s_ease-in-out_infinite] rounded-full bg-sky-500/10 blur-[120px]" />
    </div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-1 z-50 mx-auto mt-3 max-w-7xl px-6">
      <nav className="flex items-center justify-between rounded-full border border-white/10 bg-slate-950/75 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <a href="#" className="group flex items-center gap-3">
          <LogoMark />

          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-black tracking-tight text-white">
              Samarpan Tamang
            </span>
            <span className="block text-xs font-semibold text-cyan-300">
              Full-Stack Developer
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href=""
          className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}

function LogoMark() {
  return (
    <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-cyan-300 via-sky-500 to-violet-500 shadow-lg shadow-cyan-500/20 transition group-hover:scale-105">
      <span className="absolute h-20 w-5 animate-[logoShine_4s_ease-in-out_infinite] bg-white/45 blur-sm" />
      <span className="relative text-sm font-black tracking-tight text-slate-950">
        ST
      </span>
    </span>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-12 px-6 pb-24 pt-20 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="animate-[fadeUp_0.9s_ease-out_both]">
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 shadow-lg shadow-cyan-500/10">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
          Available for full-stack projects
        </div>

        <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
          Full-stack developer building{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-[length:200%_200%] bg-clip-text text-transparent animate-[gradientMove_6s_ease_infinite]">
            scalable web apps.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Hi, I&apos;m{" "}
          <span className="font-semibold text-white">Samarpan Tamang</span>. I
          build complete digital products — from polished frontend interfaces to
          backend APIs, databases, authentication, dashboards, and deployment.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:-translate-y-0.5 hover:bg-cyan-300"
          >
            View Case Studies
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-300"
          >
            Start a Project
          </a>
        </div>

        <div className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
          <MetricCard value="Frontend" label="React / Next.js" />
          <MetricCard value="Backend" label="APIs / Auth" />
          <MetricCard value="Database" label="MongoDB / SQL" />
        </div>
      </div>

      <AnimatedHomeVisual />
    </section>
  );
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-xl shadow-black/10 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/30">
      <p className="text-xl font-black text-white">{value}</p>
      <p className="mt-1 text-sm text-slate-400">{label}</p>
    </div>
  );
}

function AnimatedHomeVisual() {
  return (
    <div className="relative mx-auto h-[520px] w-full max-w-[540px] animate-[fadeUp_1s_ease-out_0.15s_both]">
      <div className="absolute inset-8 rounded-full border border-cyan-300/10" />
      <div className="absolute inset-16 animate-[spinSlow_26s_linear_infinite] rounded-full border border-dashed border-cyan-300/20" />
      <div className="absolute inset-28 animate-[spinSlow_18s_linear_infinite_reverse] rounded-full border border-violet-300/10" />

      <div className="absolute left-1/2 top-1/2 z-20 grid h-40 w-40 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[2rem] border border-white/10 bg-slate-950/85 p-5 shadow-2xl backdrop-blur-xl animate-[pulseGlow_3.5s_ease-in-out_infinite]">
        <div className="text-center">
          <div className="mx-auto mb-3 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 via-sky-500 to-violet-500 text-xl font-black text-slate-950">
            ST
          </div>
          <p className="text-sm font-black text-white">Full-Stack</p>
          <p className="text-xs font-semibold text-cyan-300">Developer</p>
        </div>
      </div>

      <OrbitCard
        label="Frontend"
        value="Next.js UI"
        position="left-0 top-16"
        animation="animate-[floatSoft_6s_ease-in-out_infinite]"
      />

      <OrbitCard
        label="Backend"
        value="API Routes"
        position="right-0 top-20"
        animation="animate-[floatReverse_7s_ease-in-out_infinite]"
      />

      <OrbitCard
        label="Database"
        value="MongoDB / SQL"
        position="bottom-16 left-4"
        animation="animate-[floatReverse_8s_ease-in-out_infinite]"
      />

      <OrbitCard
        label="Deploy"
        value="Vercel Ready"
        position="bottom-20 right-4"
        animation="animate-[floatSoft_7s_ease-in-out_infinite]"
      />

      <div className="absolute left-1/2 top-8 w-[82%] -translate-x-1/2 rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-4 shadow-2xl shadow-black/20 backdrop-blur-xl animate-[floatSoft_9s_ease-in-out_infinite]">
        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-2 text-xs font-semibold text-slate-400">
            samarpan.dev
          </span>
        </div>

        <div className="space-y-3 pt-4 font-mono text-xs">
          <p>
            <span className="text-violet-300">const</span>{" "}
            <span className="text-cyan-300">developer</span>{" "}
            <span className="text-white">=</span>{" "}
            <span className="text-emerald-300">&quot;Samarpan&quot;</span>
          </p>
          <p>
            <span className="text-violet-300">build</span>
            <span className="text-white">.</span>
            <span className="text-cyan-300">stack</span>
            <span className="text-white">()</span>{" "}
            <span className="text-slate-500">{"// UI + API + DB"}</span>
          </p>
          <p>
            <span className="text-violet-300">deploy</span>
            <span className="text-white">.</span>
            <span className="text-cyan-300">production</span>
            <span className="text-white">()</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function OrbitCard({
  label,
  value,
  position,
  animation,
}: {
  label: string;
  value: string;
  position: string;
  animation: string;
}) {
  return (
    <div
      className={`absolute z-10 ${position} ${animation} rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-xl`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
        {label}
      </p>
      <p className="mt-1 text-sm font-black text-white">{value}</p>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <SectionTitle eyebrow="About" title="I build more than websites." />

        <div className="space-y-6 text-lg leading-8 text-slate-300">
          <p>
            I work across the full stack to build web applications that are
            fast, maintainable, and useful. My focus is clean UI, strong backend
            structure, secure user flows, and smooth user experience.
          </p>
          <p>
            I can take a product idea from planning to launch: designing the
            interface, creating reusable components, building APIs, connecting a
            database, handling authentication, and deploying the application.
          </p>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title="Full-stack development capabilities"
          description="I focus on complete product delivery, not just isolated screens. From UI to backend logic, I build practical applications that are ready to use."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <h3 className="text-2xl font-black text-white">
                {capability.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {capability.description}
              </p>

              <div className="mt-6">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-semibold text-slate-300">
                    Confidence
                  </span>
                  <span className="text-cyan-300">
                    {capability.progress}%
                  </span>
                </div>

                <div className="h-2 rounded-full bg-slate-800">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400"
                    style={{ width: `${capability.progress}%` }}
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {capability.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-950 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Selected Work"
          title="Featured full-stack projects"
          description="Each project is presented like a case study: what was built, what stack was used, and what problem it solved."
        />

        <div className="mt-12 grid gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-5">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">
                    0{index + 1}
                  </span>
                  <span className="text-sm text-slate-500">
                    {project.year}
                  </span>
                </div>

                <div className="mt-16">
                  <p className="text-sm font-semibold text-cyan-300">
                    {project.type}
                  </p>
                  <h3 className="mt-3 text-3xl font-black tracking-tight text-white">
                    {project.title}
                  </h3>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-3">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center text-xs font-bold text-slate-300"
                    >
                      {metric}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-lg leading-8 text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-6 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                      Impact
                    </p>
                    <p className="mt-3 leading-7 text-cyan-50">
                      {project.impact}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="text-sm font-bold text-cyan-300 hover:text-cyan-200"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.sourceUrl}
                    className="text-sm font-bold text-slate-300 hover:text-white"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionTitle
            eyebrow="Technical Stack"
            title="A practical stack for real product development."
          />

          <p className="mt-6 leading-8 text-slate-300">
            My stack is focused on building real-world applications with strong
            frontend experience, reliable backend logic, database integration,
            and smooth deployment.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
          <div className="grid gap-5">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-semibold text-white">{skill.name}</span>
                  <span className="text-sm font-bold text-cyan-300">
                    {skill.level}%
                  </span>
                </div>

                <div
                  className="h-2.5 rounded-full bg-slate-800"
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={skill.name}
                >
                  <div
                    className="h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Experience"
          title="Developer background"
          description="Focused on full-stack delivery, practical application development, clean UI, API integration, and production-ready project structure."
        />

        <div className="mt-12 space-y-6">
          {experience.map((item) => (
            <article
              key={`${item.role}-${item.company}`}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <p className="text-sm font-bold text-cyan-300">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-white">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-slate-400">{item.company}</p>
                </div>

                <div>
                  <p className="leading-8 text-slate-300">
                    {item.description}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm text-slate-300"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionTitle
            eyebrow="Contact"
            title="Have a full-stack project in mind?"
          />

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Send me the details. I can help with dashboards, SaaS applications,
            APIs, admin panels, database-backed apps, landing pages, and
            deployment.
          </p>

          <div className="mt-8 space-y-4">
            <ContactLink
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />

            <ContactLink
              label="Mobile"
              value={profile.phone}
              href={`tel:${profile.phone}`}
            />

            <ContactLink
              label="GitHub"
              value="Add your GitHub link"
              href={profile.github}
            />

            <ContactLink
              label="LinkedIn"
              value="Add your LinkedIn link"
              href={profile.linkedin}
            />
          </div>
        </div>

        <ContactForm />
      </div>

      <footer className="mx-auto max-w-7xl px-6 pt-16 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name}. Full-Stack Developer
        Portfolio.
      </footer>
    </section>
  );
}

function ContactLink({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="block rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
    >
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-1 font-bold text-white">{value}</p>
    </a>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <SectionTitle eyebrow={eyebrow} title={title} />
      <p className="max-w-xl leading-7 text-slate-400">{description}</p>
    </div>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight text-white md:text-5xl">
        {title}
      </h2>
    </div>
  );
}