import { useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { Mail, ArrowRight } from "lucide-react";

function GithubLinkIcon({ size = 20 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  );
}

function LinkedinLinkIcon({ size = 20 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  );
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("All fields are required.");
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setError("Email form is not configured yet. Reach out via email or LinkedIn for now.");
      return;
    }

    try {
      setStatus("sending");
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { name: form.name, email: form.email, message: form.message },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setError("Something went wrong. Try again or email me directly.");
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="font-mono text-[var(--color-accent)] text-sm mb-2">
          <span className="text-[var(--color-muted)]">aftab@portfolio:~$</span> ./send-message.sh
        </motion.p>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-text-strong)]">
          Contact<span className="text-[var(--color-accent)] glow">.</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.2 }} className="text-[var(--color-muted)] max-w-2xl mb-12">
          Looking for a fresher who ships? Building something interesting? Send a message or hit any of the links below.
        </motion.p>

        <div className="grid md:grid-cols-5 gap-10">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-[var(--color-muted)] mb-2">
                <span className="text-[var(--color-accent)]">name</span> =
              </label>
              <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-md px-4 py-3 text-[var(--color-text)] placeholder-[var(--color-muted)]/50 focus:outline-none focus:border-[var(--color-accent)] transition-colors" />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono text-[var(--color-muted)] mb-2">
                <span className="text-[var(--color-accent)]">email</span> =
              </label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-md px-4 py-3 text-[var(--color-text)] placeholder-[var(--color-muted)]/50 focus:outline-none focus:border-[var(--color-accent)] transition-colors" />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono text-[var(--color-muted)] mb-2">
                <span className="text-[var(--color-accent)]">message</span> =
              </label>
              <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} placeholder="What is on your mind?" className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-md px-4 py-3 text-[var(--color-text)] placeholder-[var(--color-muted)]/50 focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none" />
            </div>

            {error && (<p className="font-mono text-sm text-red-400">// {error}</p>)}
            {status === "success" && (<p className="font-mono text-sm text-[var(--color-accent)]">// Message sent. Talk soon.</p>)}

            <button type="submit" disabled={status === "sending"} className="group inline-flex items-center gap-2 bg-[var(--color-accent)] text-[var(--color-bg)] font-medium px-6 py-3 rounded-md hover:bg-[var(--color-accent-dim)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed btn-accent">
              {status === "sending" ? "Sending..." : "Send message"}
              {status !== "sending" && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
            </button>
          </motion.form>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.4 }} className="md:col-span-2 space-y-4">
            <p className="font-mono text-xs text-[var(--color-muted)] uppercase tracking-wider mb-4">// reach out directly</p>

            <a href="mailto:aftabalammansoorii@gmail.com" className="flex items-center gap-3 p-4 border border-[var(--color-border)] bg-[var(--color-surface)] rounded-lg hover:border-[var(--color-accent)] transition-colors group">
              <Mail size={20} className="text-[var(--color-accent)]" />
              <div className="text-sm">
                <p className="text-[var(--color-text)]">Email</p>
                <p className="text-[var(--color-muted)] text-xs">aftabalammansoorii@gmail.com</p>
              </div>
            </a>

            <a href="https://github.com/aftabalammansoori" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 border border-[var(--color-border)] bg-[var(--color-surface)] rounded-lg hover:border-[var(--color-accent)] transition-colors group">
              <GithubLinkIcon />
              <div className="text-sm">
                <p className="text-[var(--color-text)]">GitHub</p>
                <p className="text-[var(--color-muted)] text-xs">@aftabalammansoori</p>
              </div>
            </a>

            <a href="https://linkedin.com/in/aftabalammansoori" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 border border-[var(--color-border)] bg-[var(--color-surface)] rounded-lg hover:border-[var(--color-accent)] transition-colors group">
              <LinkedinLinkIcon />
              <div className="text-sm">
                <p className="text-[var(--color-text)]">LinkedIn</p>
                <p className="text-[var(--color-muted)] text-xs">/in/aftabalammansoori</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
