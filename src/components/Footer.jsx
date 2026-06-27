export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-sm text-[var(--color-muted)]">
          <span className="text-[var(--color-accent)]">$</span> built with passion
        </p>
        <p className="font-mono text-xs text-[var(--color-muted)]">
          &copy; 2026 Aftab Alam Mansoori � all rights reserved
        </p>
      </div>
    </footer>
  );
}
