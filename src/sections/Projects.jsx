import { motion } from "motion/react";
import { projects } from "../data/projects";

function ExternalLinkIcon({ size = 16 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
  );
}

function GithubLinkIcon({ size = 16 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  );
}

function StackPill({ name }) {
  return (
    <span className="px-2.5 py-1 text-xs font-mono rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/50 text-[var(--color-muted)] hover:border-[var(--c-featured)] hover:text-[var(--c-featured)] transition-colors">{name}</span>
  );
}

function FileHeader({ name }) {
  return (
    <div className="font-mono text-xs text-[var(--color-muted)] mb-3 flex items-center gap-1">
      <span className="text-[var(--color-accent)]">~/projects</span>
      <span>/</span>
      <span className="text-[var(--color-text)]">{name}</span>
      <span className="text-[var(--color-muted)]">/</span>
      <span>README.md</span>
    </div>
  );
}

function FeaturedCard({ project }) {
  return (
    <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="group relative border border-[var(--color-border)] bg-[var(--color-surface)] rounded-xl p-8 md:p-10 mb-12 overflow-hidden hover:border-[var(--c-featured)]/40 transition-all duration-500 card-elevated">
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-[var(--c-featured)]/10 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-[var(--color-accent)]/8 blur-3xl pointer-events-none"></div>

      <FileHeader name={project.id} />

      <div className="relative grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3 space-y-5">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-mono text-xs text-[var(--c-featured)] px-2 py-1 rounded border border-[var(--c-featured)]/40 bg-[var(--c-featured)]/10">FEATURED</span>
            {project.status === "in-progress" && (
              <span className="font-mono text-xs text-[var(--c-live)] px-2 py-1 rounded border border-[var(--c-live)]/40 bg-[var(--c-live)]/10 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--c-live)] animate-pulse"></span>
                in-progress
              </span>
            )}
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-text-strong)] mb-2">{project.title}</h3>
            <p className="text-[var(--color-muted)]">{project.tagline}</p>
          </div>

          <p className="text-[var(--color-muted)] leading-relaxed">{project.description}</p>

          <ul className="space-y-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-muted)]">
                <span className="text-[var(--color-accent)] mt-1">›</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => <StackPill key={s} name={s} />)}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-[var(--color-bg)] font-medium px-5 py-2.5 rounded-md hover:bg-[var(--color-accent-dim)] transition-colors text-sm btn-accent">
              <GithubLinkIcon size={16} /> View code
            </a>
            {project.live ? (
              <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-[var(--c-live)]/50 text-[var(--c-live)] px-5 py-2.5 rounded-md hover:bg-[var(--c-live)]/10 transition-colors text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--c-live)] animate-pulse"></span>
                <ExternalLinkIcon size={16} /> Live demo
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 border border-[var(--color-border)] px-5 py-2.5 rounded-md text-sm text-[var(--color-muted)]">Live demo . soon</span>
            )}
          </div>
        </div>

        <div className="md:col-span-2 border border-[var(--color-border)] rounded-lg bg-[var(--color-bg)] p-5 font-mono text-xs h-fit">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[var(--color-border)]">
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--c-live)]/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--c-featured)]/80"></div>
            <span className="text-[var(--color-muted)] ml-2">breakbite.json</span>
          </div>
          <pre className="text-[var(--color-muted)] leading-relaxed whitespace-pre-wrap">
{`{
  "stack": "MERN",
  "auth": "JWT + bcrypt",
  "db": "MongoDB Atlas",
  "slots": 6,
  "capacity": 30,
  "status": "shipping"
}`}
          </pre>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: index * 0.08 }} className="group border border-[var(--color-border)] bg-[var(--color-surface)] rounded-lg p-6 hover:border-[var(--color-accent)]/40 hover:-translate-y-1 transition-all duration-300 card-elevated">
      <FileHeader name={project.id} />

      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-[var(--color-text-strong)]">{project.title}</h3>
        <a href={project.github} target="_blank" rel="noreferrer" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors" aria-label="GitHub">
          <GithubLinkIcon size={18} />
        </a>
      </div>

      <p className="text-sm text-[var(--color-muted)] mb-4">{project.tagline}</p>
      <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((s) => <StackPill key={s} name={s} />)}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="font-mono text-[var(--color-accent)] text-sm mb-2">
          <span className="text-[var(--color-muted)]">aftab@portfolio:~$</span> ls -la ./projects
        </motion.p>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-text-strong)]">
          Projects<span className="text-[var(--c-featured)] glow-featured">.</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.2 }} className="text-[var(--color-muted)] max-w-2xl mb-16">
          Stuff I actually built. Each one taught me something I will keep using.
        </motion.p>

        {featured && <FeaturedCard project={featured} />}

        <div className="grid md:grid-cols-2 gap-6">
          {others.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
