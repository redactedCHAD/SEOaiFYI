import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export default function ServicesHub() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <SEO 
        title="SEO Services & Done-For-You Management"
        description="Professional AI-assisted SEO services. Let our experts implement the strategies from our playbooks."
        canonicalUrl="/services"
        schemaType="CollectionPage"
      />
      
      <Breadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' }
      ]} />
      
      <div className="mb-16">
        <h1 className="text-5xl font-display leading-[0.9] italic mb-4 tracking-tight">Direct <span className="text-[var(--color-accent)]">Services.</span></h1>
        <p className="text-[var(--color-text-muted)] text-sm max-w-sm font-sans">
          Done-for-you execution of our proven AI playbooks.
        </p>
      </div>
      
      <div className="grid sm:grid-cols-2 gap-8">
        <Link to="/services/local-seo-management" className="tag-box flex flex-col h-full group">
          <div className="flex justify-between items-start mb-6 border-b border-[var(--color-border-subtle)] pb-4">
            <span className="text-[10px] font-mono opacity-50 uppercase">Service / 01</span>
            <div className="text-xl opacity-0 group-hover:opacity-100 text-[var(--color-accent)] transition-opacity">→</div>
          </div>
          <h2 className="text-2xl font-display italic mb-3 group-hover:text-[var(--color-accent)] transition-colors">Local SEO Management</h2>
          <p className="text-[var(--color-text-muted)] text-xs mb-8 font-sans flex-1">
            Complete management of your Google Business Profile, local citations, and reputation.
          </p>
          <div className="text-[11px] text-[var(--color-accent)] font-mono uppercase tracking-widest mt-auto border border-[var(--color-border-subtle)] group-hover:border-[var(--color-accent)] p-3 text-center transition-colors">
            View Details
          </div>
        </Link>
        
        <div className="tag-box opacity-50 cursor-not-allowed flex flex-col h-full">
          <div className="flex justify-between items-start mb-6 border-b border-[var(--color-border-subtle)] pb-4">
            <span className="text-[10px] font-mono opacity-50 uppercase">Service / 02</span>
            <div className="w-2 h-2 border border-[var(--color-accent)] opacity-30"></div>
          </div>
          <h2 className="text-2xl font-display italic mb-3">AI Engine Authority</h2>
          <p className="text-[var(--color-text-muted)] text-xs mb-8 font-sans flex-1">
            GEO Implementation and entity relationship optimization. Coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
