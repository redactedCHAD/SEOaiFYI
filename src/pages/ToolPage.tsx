import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export default function ToolPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <SEO 
        title="Free GBP Audit Tool"
        description="Instantly analyze your Google Business Profile for local SEO performance with our free AI audit tool."
        canonicalUrl="/tools/gbp-audit-tool"
        schemaType="WebApplication"
        schemaData={{
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        }}
      />
      
      <Breadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'Tools', url: '/tools' },
        { name: 'GBP Audit', url: '/tools/gbp-audit-tool' }
      ]} />
      
      <div className="mb-16">
        <h1 className="text-5xl font-display leading-[0.9] italic mb-4 tracking-tight">GBP AI Audit <span className="text-[var(--color-accent)] text-4xl">/ Tool</span></h1>
        <p className="text-[var(--color-text-muted)] text-sm max-w-2xl font-sans">
          Enter your business name below to generate an instant, AI-driven performance report.
        </p>
      </div>

      <div className="bg-[var(--color-surface)] p-8 border border-[var(--color-border)] max-w-2xl mx-auto mb-16 relative">
        <div className="absolute top-0 right-0 p-4">
          <span className="text-[10px] font-mono text-[var(--color-text-dim)] uppercase tracking-widest">Input Parameters</span>
        </div>
        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="border-b border-[var(--color-border-subtle)] pb-2">
            <label htmlFor="business" className="text-[10px] text-[var(--color-text-muted)] uppercase block font-mono mb-2">Business Name</label>
            <input 
              type="text" 
              id="business" 
              placeholder="e.g. Joe's Plumbing" 
              className="w-full bg-transparent border-none text-[var(--color-text-main)] text-sm focus:outline-none focus:ring-0 placeholder:text-[var(--color-text-dim)]"
            />
          </div>
          <button type="button" className="btn-outline w-full mt-4">
            Run AI SEO Scan
          </button>
        </form>
      </div>

      <div className="mt-auto p-5 border-t border-[var(--color-border)] flex gap-4 items-center bg-[var(--color-surface-alt)]">
        <div className="w-12 h-12 bg-[var(--color-accent)]/10 flex items-center justify-center border border-[var(--color-accent)]/20 shrink-0">
          <span className="text-[var(--color-accent)] text-xl font-display italic">→</span>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-1">Want us to fix the issues we find?</h3>
          <p className="text-[11px] text-[var(--color-text-dim)] italic leading-tight mb-2">
            Our team can implement these AI optimizations for you on a monthly basis.
          </p>
          <Link to="/services/local-seo-management" className="text-[10px] text-[var(--color-accent)] font-mono uppercase tracking-widest hover:underline">
            View Local SEO Management Services
          </Link>
        </div>
      </div>
    </div>
  );
}
