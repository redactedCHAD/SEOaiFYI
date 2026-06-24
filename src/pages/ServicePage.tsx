import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export default function ServicePage() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <SEO 
        title="Local SEO Management Services"
        description="Comprehensive local SEO management including GBP optimization, AI content generation, and citation building."
        canonicalUrl="/services/local-seo-management"
        schemaType="Service"
      />
      
      <Breadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Local SEO Management', url: '/services/local-seo-management' }
      ]} />
      
      <article className="prose prose-invert prose-orange max-w-none prose-headings:font-display prose-headings:italic prose-a:text-[var(--color-accent)] prose-a:no-underline hover:prose-a:underline">
        <header className="mb-12 border-b border-[var(--color-border)] pb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[9px] px-2 py-0.5 border border-[var(--color-border-subtle)] text-[var(--color-text-muted)] font-mono">SERVICE SCHEMA / OFFERING</span>
          </div>
          <h1 className="text-5xl font-display leading-[0.9] italic mb-4 tracking-tight">Local SEO<br/><span className="text-[var(--color-accent)]">Management.</span></h1>
          <p className="text-sm text-[var(--color-text-muted)] font-mono uppercase tracking-widest">
            Done-for-you execution of our AI playbooks
          </p>
        </header>

        <p className="text-[var(--color-text-main)] text-lg leading-relaxed mb-10">
          We handle the heavy lifting of local search optimization, applying the exact methods outlined in our industry-leading playbooks.
        </p>

        <div className="bg-[var(--color-surface)] p-8 border border-[var(--color-border)] mb-12 relative not-prose">
          <div className="absolute top-0 right-0 p-4">
            <span className="text-[10px] font-mono text-[var(--color-text-dim)] uppercase tracking-widest">Transparency</span>
          </div>
          <h3 className="text-xl font-display italic mb-2">Our Process is Transparent</h3>
          <p className="text-sm text-[var(--color-text-muted)] font-sans mb-4">
            We don't hide behind a black box. You can see exactly how we operate by reading our <Link to="/learn/local-seo/gbp-optimization-ai-playbook" className="text-[var(--color-accent)] border-b border-[var(--color-accent)]/30 hover:border-[var(--color-accent)] transition-colors pb-0.5">GBP Optimization AI Playbook</Link>. We just execute it flawlessly for you.
          </p>
        </div>

        <h2 className="text-3xl">What's Included</h2>
        <ul className="space-y-4 text-[var(--color-text-muted)] mb-16 list-disc pl-6 marker:text-[var(--color-accent)]">
          <li>Initial AI-driven competitor audit</li>
          <li>Weekly GBP posts using proven prompt frameworks</li>
          <li>Review response management</li>
          <li>Citation building and consistency checks</li>
        </ul>

        <div className="tag-box flex flex-col md:flex-row items-center justify-between gap-8 not-prose">
          <div>
            <h2 className="text-2xl font-display italic mb-2">Ready to dominate local search?</h2>
            <p className="text-[var(--color-text-muted)] text-sm font-sans max-w-sm">
              Schedule a free consultation to discuss your campaign and see if we're a fit.
            </p>
          </div>
          <button className="btn-primary whitespace-nowrap w-full md:w-auto">
            BOOK CONSULTATION
          </button>
        </div>
      </article>
    </div>
  );
}
