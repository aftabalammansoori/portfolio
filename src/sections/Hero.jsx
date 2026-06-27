import { Mail, ArrowRight, FileDown } from "lucide-react";
import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";

function GithubIcon({ size = 22 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  );
}

function LinkedinIcon({ size = 22 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="relative max-w-6xl mx-auto px-6 w-full z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">

          {/* LEFT: text content */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="font-mono text-[var(--color-accent)] text-sm mb-6 flex items-center gap-2 flex-wrap">
              <span className="text-[var(--color-muted)]">aftab@portfolio</span>
              <span className="text-[var(--color-muted)]">:~$</span>
              <TypeAnimation
                sequence={["whoami", 2000, "cat profile.json", 2000, "./hire-me.sh", 3000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="cursor-blink"
              />
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-[var(--color-text-strong)]">
              Aftab Alam Mansoori<span className="text-[var(--color-accent)] glow">.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg md:text-xl text-[var(--color-muted)] mb-3">
              Full-stack developer building things with <span className="text-[var(--color-text-strong)]">MERN</span>, <span className="text-[var(--color-text-strong)]">Java</span>, and <span className="text-[var(--color-text-strong)]">Spring Boot</span>.
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="font-mono text-sm text-[var(--color-muted)] mb-10 flex items-center gap-2 flex-wrap">
              <span className="text-[var(--color-accent)]">// </span>
              <span>CDAC PGCP-AC 2026 . B.Tech CSE . shipping BreakBite,</span>
              <span className="text-[var(--c-live)] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--c-live)] animate-pulse"></span>
                currently
              </span>
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-wrap gap-4 mb-12">
              <a href="#projects" className="group inline-flex items-center gap-2 bg-[var(--color-accent)] text-[var(--color-bg)] font-medium px-6 py-3 rounded-md hover:bg-[var(--color-accent-dim)] transition-colors btn-accent">
                View projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-[var(--color-border)] text-[var(--color-text)] font-medium px-6 py-3 rounded-md hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">
                <FileDown size={18} /> Resume
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex gap-5">
              <a href="https://github.com/aftabalammansoori" target="_blank" rel="noreferrer" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors" aria-label="GitHub"><GithubIcon /></a>
              <a href="https://linkedin.com/in/aftabalammansoori" target="_blank" rel="noreferrer" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors" aria-label="LinkedIn"><LinkedinIcon /></a>
              <a href="mailto:aftabalammansoorii@gmail.com" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors" aria-label="Email"><Mail size={22} /></a>
            </motion.div>
          </div>

          {/* RIGHT: photo with frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Decorative glow blobs */}
              <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full bg-[var(--c-featured)]/20 blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full bg-[var(--color-accent)]/20 blur-3xl pointer-events-none"></div>

              {/* Photo frame */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border border-[var(--color-border)] card-elevated">
                {/* Photo */}
                <img
                  src="/me.jpg"
                  alt="Aftab Alam"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Top tab bar � IDE style */}
                <div className="absolute top-0 left-0 right-0 flex items-center gap-2 px-4 py-3 bg-gradient-to-b from-[var(--color-bg)]/80 to-transparent backdrop-blur-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--c-live)]/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--c-featured)]/80"></div>
                  <span className="ml-auto font-mono text-xs text-white/70">aftab.jpg</span>
                </div>

                {/* Bottom badge */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-gradient-to-t from-[var(--color-bg)]/95 to-transparent backdrop-blur-sm">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="w-2 h-2 rounded-full bg-[var(--c-live)] animate-pulse"></span>
                    <span className="text-white/90">available for hire</span>
                  </div>
                  <span className="font-mono text-xs text-[var(--color-accent)]">~/me</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
