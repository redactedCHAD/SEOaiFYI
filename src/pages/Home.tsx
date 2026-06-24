import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-full h-full border-t border-[#222]">
      <SEO 
        title="AI-Powered SEO Strategies & Tools"
        description="Learn modern, AI-driven SEO strategies and leverage our free tools to dominate local and global search rankings."
        canonicalUrl="/"
        schemaType="Organization"
      />
      
      {/* LEFT: LEARN (Education Hub) */}
      <section className="w-full md:w-[55%] border-b md:border-b-0 md:border-r border-[var(--color-border)] p-8 flex flex-col gap-6">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-5xl font-display leading-[0.9] italic mb-2 tracking-tight">Knowledge<br/>Architecture.</h1>
            <p className="text-[var(--color-text-muted)] text-sm max-w-sm font-sans">High-authority content pillars optimized for LLM retrieval and search intent.</p>
          </div>
          <div className="text-right hidden sm:block">
            <span className="text-[10px] font-mono opacity-40 block mb-1 uppercase">CollectionPage Schema</span>
            <div className="text-xs text-[var(--color-accent)] font-mono">v1.0.42_STABLE</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
          {/* Pillar 1 */}
          <Link to="/learn/local-seo/gbp-optimization-ai-playbook" className="tag-box block group">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-mono opacity-50">01 / LOCAL SEO</span>
              <div className="w-4 h-4 border border-[var(--color-accent)] opacity-30 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h3 className="text-lg font-display mb-2 group-hover:text-[var(--color-accent)] transition-colors">GBP AI Playbook</h3>
            <p className="text-xs text-[var(--color-text-dim)] leading-relaxed mb-4">The definitive guide to local ranking in the era of Generative Search.</p>
            <div className="flex gap-2">
              <span className="text-[9px] px-2 py-0.5 border border-[var(--color-border-subtle)] text-[var(--color-text-muted)]">ARTICLE</span>
              <span className="text-[9px] px-2 py-0.5 border border-[var(--color-border-subtle)] text-[var(--color-text-muted)]">FAQ</span>
            </div>
          </Link>

          {/* Pillar 2 */}
          <div className="tag-box opacity-60 cursor-not-allowed">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-mono opacity-50">02 / GEO</span>
              <div className="w-4 h-4 border border-[var(--color-accent)] opacity-30"></div>
            </div>
            <h3 className="text-lg font-display mb-2">Generative Engine Optimization</h3>
            <p className="text-xs text-[var(--color-text-dim)] leading-relaxed mb-4">How to surface your brand in Perplexity and ChatGPT results.</p>
            <div className="flex gap-2">
              <span className="text-[9px] px-2 py-0.5 border border-[var(--color-border-subtle)] text-[var(--color-text-muted)]">STRATEGY</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <Link to="/learn/local-seo/ai-prompts-gbp-posts" className="tag-box block group">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-mono opacity-50">03 / AI CONTENT</span>
              <div className="w-4 h-4 border border-[var(--color-accent)] opacity-30 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h3 className="text-lg font-display mb-2 group-hover:text-[var(--color-accent)] transition-colors">The Prompt Library</h3>
            <p className="text-xs text-[var(--color-text-dim)] leading-relaxed mb-4">High-fidelity prompts for SEO content production and GBP updates.</p>
            <div className="flex gap-2">
              <span className="text-[9px] px-2 py-0.5 border border-[var(--color-border-subtle)] text-[var(--color-text-muted)]">RESOURCE</span>
            </div>
          </Link>

          {/* Pillar 4 */}
          <div className="tag-box opacity-60 cursor-not-allowed">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-mono opacity-50">04 / AEO</span>
              <div className="w-4 h-4 border border-[var(--color-accent)] opacity-30"></div>
            </div>
            <h3 className="text-lg font-display mb-2">Answer Engine Optimization</h3>
            <p className="text-xs text-[var(--color-text-dim)] leading-relaxed mb-4">Structured data frameworks for the zero-click landscape.</p>
            <div className="flex gap-2">
              <span className="text-[9px] px-2 py-0.5 border border-[var(--color-border-subtle)] text-[var(--color-text-muted)]">TECH</span>
            </div>
          </div>
        </div>
      </section>

      {/* RIGHT: SERVICES & CONVERSION */}
      <section className="w-full md:w-[45%] bg-[var(--color-surface-alt)] p-8 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-display italic">The Engine.</h2>
          <div className="bg-[var(--color-surface)] p-6 border border-[var(--color-border)]">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-[var(--color-accent)] uppercase tracking-tighter">Free WebApp: GBP Audit Tool</span>
            </div>
            <div className="space-y-4">
              <div className="border-b border-[var(--color-border-subtle)] pb-2">
                <label className="text-[10px] text-[var(--color-text-muted)] uppercase block font-mono">Business Name / URL</label>
                <div className="text-sm text-[#AAA] py-1">https://yourbrand.com</div>
              </div>
              <Link to="/tools/gbp-audit-tool" className="w-full block py-3 bg-[#1a1a1a] border border-[var(--color-accent)] text-[var(--color-accent)] text-[11px] font-mono tracking-widest uppercase hover:bg-[var(--color-accent)] hover:text-white transition-all text-center">
                Run AI SEO Scan
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-display italic">Direct Services.</h2>
          <div className="space-y-2">
            <Link to="/services/local-seo-management" className="p-4 border border-[var(--color-border)] bg-[var(--color-surface)] flex justify-between items-center group cursor-pointer hover:border-[var(--color-accent)]/50 transition-colors">
              <div>
                <div className="text-sm font-semibold group-hover:text-[var(--color-accent)] transition-colors">Local SEO Management</div>
                <div className="text-[10px] opacity-40 font-mono">SERVICE SCHEMA / OFFERING</div>
              </div>
              <div className="text-xl opacity-0 group-hover:opacity-100 text-[var(--color-accent)] transition-opacity">→</div>
            </Link>
            <div className="p-4 border border-[var(--color-border)] bg-[var(--color-surface)] flex justify-between items-center group opacity-60 cursor-not-allowed">
              <div>
                <div className="text-sm font-semibold">AI Engine Authority</div>
                <div className="text-[10px] opacity-40 font-mono">GEO IMPLEMENTATION</div>
              </div>
              <div className="text-xl opacity-0 group-hover:opacity-100 text-[var(--color-accent)] transition-opacity">→</div>
            </div>
          </div>
        </div>

        {/* Micro Conversion Block */}
        <div className="mt-auto p-5 border-t border-[var(--color-border)] flex gap-4 items-center">
          <div className="w-12 h-12 bg-[var(--color-accent)]/10 flex items-center justify-center border border-[var(--color-accent)]/20 shrink-0">
            <span className="text-[var(--color-accent)] text-xs font-mono font-bold">!</span>
          </div>
          <p className="text-[11px] text-[var(--color-text-dim)] italic leading-tight">
            "SEO is no longer about keywords; it's about entities, relationships, and proving authority to machines."
          </p>
        </div>
      </section>
    </div>
  );
}
