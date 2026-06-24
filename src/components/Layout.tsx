import { Link, Outlet, useLocation } from 'react-router-dom';

export function Layout() {
  const location = useLocation();

  // Determine current path for breadcrumb-like nav in header
  const isLearn = location.pathname.includes('/learn');
  const isServices = location.pathname.includes('/services');
  const isTools = location.pathname.includes('/tools');

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[var(--color-bg)] text-[var(--color-text-main)] font-sans select-none">
      {/* Top Nav / SEO Breadcrumbs */}
      <header className="h-16 border-b border-[var(--color-border)] flex items-center justify-between px-8 glass shrink-0">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-2xl font-display font-bold flex items-center">
            SEO<span className="text-[var(--color-accent)]">ai</span>.FYI
          </Link>
          <nav className="hidden md:flex gap-4 text-[11px] uppercase tracking-[0.2em] opacity-60 font-mono">
            <Link to="/" className={location.pathname === '/' ? "text-[var(--color-accent)]" : "hover:text-white transition-colors"}>Index</Link>
            <span>/</span>
            <Link to="/learn" className={isLearn ? "text-[var(--color-accent)]" : "hover:text-white transition-colors"}>Learn Hub</Link>
            <span>/</span>
            <Link to="/services" className={isServices ? "text-[var(--color-accent)]" : "hover:text-white transition-colors"}>Solutions</Link>
            <span>/</span>
            <Link to="/tools" className={isTools ? "text-[var(--color-accent)]" : "hover:text-white transition-colors"}>Tools</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex px-3 py-1 border border-[var(--color-border-subtle)] text-[10px] font-mono text-[var(--color-text-dim)] items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            CRAWLABLE_STATUS: OK
          </div>
          <Link to="/tools/gbp-audit-tool" className="btn-primary">
            Get Audit
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        <div className="w-full">
          <Outlet />
        </div>
      </main>

      {/* Bottom Status Bar */}
      <footer className="h-12 bg-[var(--color-bg)] border-t border-[var(--color-border)] px-8 hidden md:flex items-center justify-between font-mono text-[10px] text-[var(--color-text-dim)] shrink-0">
        <div className="flex gap-6 uppercase tracking-wider">
          <span><span className="text-[var(--color-accent)]">JSON-LD:</span> Enabled</span>
          <span><span className="text-[var(--color-accent)]">CANONICAL:</span> auto</span>
          <span><span className="text-[var(--color-accent)]">ROBOTS:</span> index, follow</span>
        </div>
        <div className="flex gap-4">
          <span>EN_US</span>
          <span>&copy; {new Date().getFullYear()} SEOai.FYI</span>
        </div>
      </footer>
    </div>
  );
}
