import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export default function LearnHub() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <SEO 
        title="SEO Learning Hub & Playbooks"
        description="Master Local SEO, AI Content, and GEO with our comprehensive playbooks and guides."
        canonicalUrl="/learn"
        schemaType="CollectionPage"
      />
      
      <Breadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'Learn', url: '/learn' }
      ]} />
      
      <div className="mb-16">
        <h1 className="text-5xl font-display leading-[0.9] italic mb-4 tracking-tight">The <span className="text-[var(--color-accent)]">Learn</span> Hub.</h1>
        <p className="text-[var(--color-text-muted)] text-sm max-w-sm font-sans">
          Four pillars of modern SEO. Choose your path below.
        </p>
      </div>
      
      <div className="grid sm:grid-cols-2 gap-8">
        <div className="tag-box flex flex-col h-full">
          <div className="flex justify-between items-start mb-6 border-b border-[var(--color-border-subtle)] pb-4">
            <span className="text-[10px] font-mono opacity-50 uppercase">Pillar / 01</span>
            <div className="w-2 h-2 bg-[var(--color-accent)]"></div>
          </div>
          <h2 className="text-2xl font-display italic mb-3">Local SEO Cluster</h2>
          <p className="text-[var(--color-text-muted)] text-xs mb-8 font-sans flex-1">
            Dominate the map pack and optimize your Google Business Profile using AI.
          </p>
          <div className="space-y-3">
            <Link to="/learn/local-seo/gbp-optimization-ai-playbook" className="block text-[11px] text-[var(--color-accent)] font-mono uppercase tracking-widest hover:underline bg-[var(--color-surface-alt)] p-3 border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors">
              <span className="opacity-50 mr-2">→</span> GBP Optimization AI Playbook
            </Link>
            <Link to="/learn/local-seo/ai-prompts-gbp-posts" className="block text-[11px] text-[var(--color-text-main)] font-mono uppercase tracking-widest hover:text-[var(--color-accent)] transition-colors p-2">
              <span className="opacity-50 mr-2">→</span> AI Prompts for GBP Posts
            </Link>
          </div>
        </div>
        
        <div className="tag-box opacity-50 cursor-not-allowed flex flex-col h-full">
          <div className="flex justify-between items-start mb-6 border-b border-[var(--color-border-subtle)] pb-4">
            <span className="text-[10px] font-mono opacity-50 uppercase">Pillar / 02</span>
            <div className="w-2 h-2 border border-[var(--color-accent)] opacity-30"></div>
          </div>
          <h2 className="text-2xl font-display italic mb-3">GEO</h2>
          <p className="text-[var(--color-text-muted)] text-xs mb-8 font-sans flex-1">
            Generative Engine Optimization strategies. Coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
