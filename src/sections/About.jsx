import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="font-mono text-[var(--color-accent)] text-sm mb-2">
          <span className="text-[var(--color-muted)]">aftab@portfolio:~$</span> cat about.md
        </motion.p>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-5xl font-bold mb-12 text-[var(--color-text-strong)]">
          About<span className="text-[var(--c-featured)] glow-featured">.</span>
        </motion.h2>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.2 }} className="relative group border border-[var(--color-border)] rounded-xl bg-[var(--color-surface)] overflow-hidden card-elevated hover:border-[var(--c-featured)]/40 transition-all duration-500">

          <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-[var(--c-featured)]/10 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-[var(--color-accent)]/8 blur-3xl pointer-events-none"></div>

          <div className="relative flex items-center justify-between px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg)]/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[var(--c-live)]/70"></div>
              <div className="w-3 h-3 rounded-full bg-[var(--color-accent)]/70"></div>
              <div className="w-3 h-3 rounded-full bg-[var(--c-featured)]/70"></div>
            </div>
            <div className="font-mono text-xs text-[var(--color-muted)]">about.js</div>
            <div className="w-12"></div>
          </div>

          <div className="relative grid md:grid-cols-5 gap-0">
            <div className="md:col-span-3 p-6 md:p-8 font-mono text-sm leading-relaxed line-numbers space-y-1.5 border-r border-[var(--color-border)]">
              <div><span className="text-purple-400">const</span> <span className="text-[var(--color-accent)]">aftab</span> <span className="text-[var(--color-muted)]">=</span> <span className="text-[var(--color-muted)]">{"{"}</span></div>
              <div className="pl-4"><span className="text-blue-400">name</span><span className="text-[var(--color-muted)]">:</span> <span className="text-green-400">&quot;Aftab Alam Mansoori&quot;</span><span className="text-[var(--color-muted)]">,</span></div>
              <div className="pl-4"><span className="text-blue-400">role</span><span className="text-[var(--color-muted)]">:</span> <span className="text-green-400">&quot;Full-stack Developer&quot;</span><span className="text-[var(--color-muted)]">,</span></div>
              <div className="pl-4"><span className="text-blue-400">education</span><span className="text-[var(--color-muted)]">:</span> <span className="text-green-400">&quot;B.Tech CSE + CDAC PG-DAC 2026&quot;</span><span className="text-[var(--color-muted)]">,</span></div>
              <div className="pl-4"><span className="text-blue-400">location</span><span className="text-[var(--color-muted)]">:</span> <span className="text-green-400">&quot;Bengaluru, India&quot;</span><span className="text-[var(--color-muted)]">,</span></div>
              <div className="pl-4"><span className="text-blue-400">currentProject</span><span className="text-[var(--color-muted)]">:</span> <span className="text-green-400">&quot;BreakBite - a booking app for CDAC students&quot;</span><span className="text-[var(--color-muted)]">,</span></div>
              <div className="pl-4"><span className="text-blue-400">passionateAbout</span><span className="text-[var(--color-muted)]">:</span> <span className="text-[var(--color-muted)]">[</span></div>
              <div className="pl-8"><span className="text-green-400">&quot;building things people use&quot;</span><span className="text-[var(--color-muted)]">,</span></div>
              <div className="pl-8"><span className="text-green-400">&quot;writing clean, reliable code&quot;</span><span className="text-[var(--color-muted)]">,</span></div>
              <div className="pl-8"><span className="text-green-400">&quot;solving real problems&quot;</span></div>
              <div className="pl-4"><span className="text-[var(--color-muted)]">]</span><span className="text-[var(--color-muted)]">,</span></div>
              <div className="pl-4"><span className="text-blue-400">availableFrom</span><span className="text-[var(--color-muted)]">:</span> <span className="text-green-400">&quot;August 2026&quot;</span><span className="text-[var(--color-muted)]">,</span></div>
              <div className="pl-4"><span className="text-blue-400">openToWork</span><span className="text-[var(--color-muted)]">:</span> <span className="text-green-400">true</span><span className="text-[var(--color-muted)]">,</span></div>
              <div><span className="text-[var(--color-muted)]">{"}"}</span><span className="text-[var(--color-muted)]">;</span></div>
              <div>&nbsp;</div>
              <div><span className="text-[var(--color-muted)]">// scroll to read more</span></div>
              <div><span className="text-purple-400">return</span> <span className="text-[var(--color-accent)]">aftab</span><span className="text-[var(--color-muted)]">.</span><span className="text-yellow-300">tellYourStory</span><span className="text-[var(--color-muted)]">();</span></div>
            </div>

            <div className="md:col-span-2 p-6 md:p-8 space-y-4 text-[var(--color-muted)] leading-relaxed text-sm">
              <p>
                <span className="font-mono text-xs text-[var(--c-featured)]">// the longer version</span>
              </p>
              <p>
                Six months into CDAC&apos;s advanced computing program in Bengaluru, building real systems with Java, Spring Boot, and the same modern web technologies used at companies like Netflix and Uber.
              </p>
              <p>
                Right now my main project is <span className="text-[var(--color-accent)]">BreakBite</span> - a slot-booking app I am building solo for CDAC students. It is the difference between &quot;I learned React in a tutorial&quot; and &quot;I have built and deployed something real people use.&quot;
              </p>
              <p>
                I write code that ships, debug like it is a sport, and care more about working software than impressive talk.
              </p>
            </div>
          </div>

          <div className="relative px-4 py-2 border-t border-[var(--color-border)] bg-[var(--color-bg)]/50 flex items-center justify-between font-mono text-xs text-[var(--color-muted)]">
            <div className="flex gap-4">
              <span className="text-[var(--color-accent)]">? main</span>
              <span>Ln 13, Col 24</span>
              <span>UTF-8</span>
            </div>
            <div className="flex gap-4">
              <span className="text-[var(--c-featured)]">JavaScript</span>
              <span>Spaces: 2</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
