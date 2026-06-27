import { useState, useEffect } from "react";
import { motion } from "motion/react";
import ThemeToggle from "./ThemeToggle";

function MenuIcon({ size = 24 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
  );
}

function CloseIcon({ size = 24 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  );
}

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = scrolled ? "bg-[var(--color-bg)]/70 backdrop-blur-lg border-b border-[var(--color-border)]" : "bg-transparent";
  const pillClass = "px-4 py-2 rounded-full text-base font-medium text-[var(--color-text)] hover:bg-[var(--color-accent)]/15 hover:text-[var(--color-accent)] transition-all duration-200";
  const mobileLinkClass = "block px-4 py-3 rounded-lg text-base font-medium text-[var(--color-text)] hover:bg-[var(--color-accent)]/15 hover:text-[var(--color-accent)] transition-all";

  return (
    <motion.nav initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 " + navBg}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-mono text-[var(--color-accent)] text-xl hover:glow transition-all">~/aftab</a>

        <div className="hidden md:flex items-center gap-2 p-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/60 backdrop-blur-md">
          {links.map((link) => <a key={link.href} href={link.href} className={pillClass}>{link.label}</a>)}
        </div>

        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button className="text-[var(--color-text)]" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-[var(--color-bg)] border-t border-[var(--color-border)]">
          <ul className="flex flex-col gap-2 px-6 py-6">
            {links.map((link) => <li key={link.href}><a href={link.href} onClick={() => setOpen(false)} className={mobileLinkClass}>{link.label}</a></li>)}
          </ul>
        </div>
      )}
    </motion.nav>
  );
}
