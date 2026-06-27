import { motion } from "motion/react";
import { techStack } from "../data/techStack";

export default function Stack() {
  const doubled = [...techStack, ...techStack];

  return (
    <section id="stack" className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="font-mono text-[var(--color-accent)] text-sm mb-2">
          <span className="text-[var(--color-muted)]">aftab@portfolio:~$</span> ls -la ./skills
        </motion.p>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-text-strong)]">
          Skills<span className="text-[var(--c-featured)] glow-featured">.</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.2 }} className="text-[var(--color-muted)] max-w-2xl">
          The tools I reach for daily. The animated row below is just for fun, but the categorized list is what really matters.
        </motion.p>
      </div>

      <div className="marquee-container relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-[var(--color-bg)] to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-[var(--color-bg)] to-transparent"></div>

        <div className="marquee-track flex gap-4 w-max">
          {doubled.map((tech, i) => (
            <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] whitespace-nowrap hover:border-[var(--color-accent)] transition-colors">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: tech.color, boxShadow: "0 0 12px " + tech.color }}></div>
              <span className="font-mono text-sm text-[var(--color-text)]">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="relative group border border-[var(--color-border)] rounded-xl bg-[var(--color-surface)] overflow-hidden card-elevated hover:border-[var(--c-featured)]/40 transition-all duration-500">

          <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-[var(--c-featured)]/10 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-[var(--color-accent)]/8 blur-3xl pointer-events-none"></div>

          <div className="relative flex items-center justify-between px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg)]/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[var(--c-live)]/70"></div>
              <div className="w-3 h-3 rounded-full bg-[var(--color-accent)]/70"></div>
              <div className="w-3 h-3 rounded-full bg-[var(--c-featured)]/70"></div>
            </div>
            <div className="font-mono text-xs text-[var(--color-muted)]">skills.json</div>
            <div className="w-12"></div>
          </div>

          <div className="relative p-6 md:p-8 font-mono text-sm leading-relaxed line-numbers space-y-1.5">
            <div><span className="text-[var(--color-muted)]">{"{"}</span></div>

            <div className="pl-4"><span className="text-blue-400">&quot;languages&quot;</span><span className="text-[var(--color-muted)]">:</span> <span className="text-[var(--color-muted)]">[</span></div>
            <div className="pl-8">
              <span className="text-green-400">&quot;Java&quot;</span><span className="text-[var(--color-muted)]">, </span>
              <span className="text-green-400">&quot;JavaScript&quot;</span><span className="text-[var(--color-muted)]">, </span>
              <span className="text-green-400">&quot;Python&quot;</span><span className="text-[var(--color-muted)]">, </span>
              <span className="text-green-400">&quot;C++&quot;</span><span className="text-[var(--color-muted)]">, </span>
              <span className="text-green-400">&quot;SQL&quot;</span>
            </div>
            <div className="pl-4"><span className="text-[var(--color-muted)]">]</span><span className="text-[var(--color-muted)]">,</span></div>

            <div className="pl-4"><span className="text-blue-400">&quot;frontend&quot;</span><span className="text-[var(--color-muted)]">:</span> <span className="text-[var(--color-muted)]">[</span></div>
            <div className="pl-8">
              <span className="text-green-400">&quot;React&quot;</span><span className="text-[var(--color-muted)]">, </span>
              <span className="text-green-400">&quot;Tailwind CSS&quot;</span><span className="text-[var(--color-muted)]">, </span>
              <span className="text-green-400">&quot;HTML5&quot;</span><span className="text-[var(--color-muted)]">, </span>
              <span className="text-green-400">&quot;CSS3&quot;</span>
            </div>
            <div className="pl-4"><span className="text-[var(--color-muted)]">]</span><span className="text-[var(--color-muted)]">,</span></div>

            <div className="pl-4"><span className="text-blue-400">&quot;backend&quot;</span><span className="text-[var(--color-muted)]">:</span> <span className="text-[var(--color-muted)]">[</span></div>
            <div className="pl-8">
              <span className="text-green-400">&quot;Node.js&quot;</span><span className="text-[var(--color-muted)]">, </span>
              <span className="text-green-400">&quot;Express&quot;</span><span className="text-[var(--color-muted)]">, </span>
              <span className="text-green-400">&quot;Spring Boot&quot;</span><span className="text-[var(--color-muted)]">, </span>
              <span className="text-green-400">&quot;REST APIs&quot;</span>
            </div>
            <div className="pl-4"><span className="text-[var(--color-muted)]">]</span><span className="text-[var(--color-muted)]">,</span></div>

            <div className="pl-4"><span className="text-blue-400">&quot;databases&quot;</span><span className="text-[var(--color-muted)]">:</span> <span className="text-[var(--color-muted)]">[</span></div>
            <div className="pl-8">
              <span className="text-green-400">&quot;MongoDB&quot;</span><span className="text-[var(--color-muted)]">, </span>
              <span className="text-green-400">&quot;MySQL&quot;</span><span className="text-[var(--color-muted)]">, </span>
              <span className="text-green-400">&quot;Oracle&quot;</span>
            </div>
            <div className="pl-4"><span className="text-[var(--color-muted)]">]</span><span className="text-[var(--color-muted)]">,</span></div>

            <div className="pl-4"><span className="text-blue-400">&quot;tools&quot;</span><span className="text-[var(--color-muted)]">:</span> <span className="text-[var(--color-muted)]">[</span></div>
            <div className="pl-8">
              <span className="text-green-400">&quot;Git&quot;</span><span className="text-[var(--color-muted)]">, </span>
              <span className="text-green-400">&quot;VS Code&quot;</span><span className="text-[var(--color-muted)]">, </span>
              <span className="text-green-400">&quot;Postman&quot;</span><span className="text-[var(--color-muted)]">, </span>
              <span className="text-green-400">&quot;Vite&quot;</span>
            </div>
            <div className="pl-4"><span className="text-[var(--color-muted)]">]</span></div>

            <div><span className="text-[var(--color-muted)]">{"}"}</span></div>
          </div>

          <div className="relative px-4 py-2 border-t border-[var(--color-border)] bg-[var(--color-bg)]/50 flex items-center justify-between font-mono text-xs text-[var(--color-muted)]">
            <div className="flex gap-4">
              <span className="text-[var(--color-accent)]">? main</span>
              <span>Ln 1, Col 1</span>
              <span>UTF-8</span>
            </div>
            <div className="flex gap-4">
              <span className="text-[var(--c-featured)]">JSON</span>
              <span>Spaces: 2</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
