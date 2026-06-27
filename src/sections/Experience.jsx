import { motion } from "motion/react";
import { experience, education } from "../data/experience";

function TimelineItem({ item, index, type }) {
  const inProgress = item.status === "in-progress";
  const accentColor = type === "education" ? "var(--c-featured)" : "var(--color-accent)";

  return (
    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative pl-8 pb-10 border-l border-[var(--color-border)] last:pb-0">
      <div
        className={"absolute -left-1.5 top-1.5 w-3 h-3 rounded-full " + (inProgress ? "animate-pulse" : "border-2 border-[var(--color-bg)]")}
        style={{
          background: inProgress ? "var(--c-live)" : (type === "education" ? "var(--c-featured)" : "var(--color-accent)"),
        }}
      ></div>

      <div className="space-y-2">
        <p className="font-mono text-xs text-[var(--color-muted)]">{item.period}</p>
        <h3 className="text-lg font-semibold text-[var(--color-text-strong)]">{type === "experience" ? item.role : item.degree}</h3>
        <p className="text-sm font-mono" style={{ color: accentColor }}>{type === "experience" ? item.company + " . " + item.type : item.institution}</p>
        <p className="text-sm text-[var(--color-muted)] leading-relaxed pt-1">{item.description}</p>
        {item.stack && (
          <div className="flex flex-wrap gap-2 pt-2">
            {item.stack.map((s) => (
              <span key={s} className="px-2 py-0.5 text-xs font-mono rounded-full border border-[var(--color-border)] text-[var(--color-muted)]">{s}</span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="font-mono text-[var(--color-accent)] text-sm mb-2">
          <span className="text-[var(--color-muted)]">aftab@portfolio:~$</span> git log --oneline --graph
        </motion.p>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-5xl font-bold mb-16 text-[var(--color-text-strong)]">
          Journey<span className="text-[var(--color-accent)] glow">.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="font-mono text-sm text-[var(--color-accent)] mb-8 uppercase tracking-wider">// experience</motion.h3>
            {experience.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} type="experience" />
            ))}
          </div>

          <div>
            <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="font-mono text-sm text-[var(--c-featured)] mb-8 uppercase tracking-wider">// education</motion.h3>
            {education.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} type="education" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
