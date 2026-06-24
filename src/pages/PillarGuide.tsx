import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export default function PillarGuide() {
  const faqSchema = {
    mainEntity: [
      {
        "@type": "Question",
        "name": "How does AI improve GBP optimization?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI helps analyze competitor profiles, generate keyword-rich descriptions, and create engaging weekly posts at scale."
        }
      }
    ]
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <SEO 
        title="GBP Optimization AI Playbook"
        description="The ultimate pillar guide to optimizing your Google Business Profile using modern AI tools and strategies."
        canonicalUrl="/learn/local-seo/gbp-optimization-ai-playbook"
        schemaType="ArticleFAQ"
        schemaData={faqSchema}
      />
      
      <Breadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'Learn', url: '/learn' },
        { name: 'Local SEO', url: '/learn/local-seo' },
        { name: 'GBP AI Playbook', url: '/learn/local-seo/gbp-optimization-ai-playbook' }
      ]} />
      
      <article className="prose prose-invert prose-orange max-w-none prose-headings:font-display prose-headings:italic prose-a:text-[var(--color-accent)] prose-a:no-underline hover:prose-a:underline">
        <header className="mb-12 border-b border-[var(--color-border)] pb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[9px] px-2 py-0.5 border border-[var(--color-border-subtle)] text-[var(--color-text-muted)] font-mono">ARTICLE</span>
            <span className="text-[9px] px-2 py-0.5 border border-[var(--color-border-subtle)] text-[var(--color-text-muted)] font-mono">FAQ</span>
          </div>
          <h1 className="text-5xl font-display leading-[0.9] italic mb-4 tracking-tight">GBP Optimization<br/><span className="text-[var(--color-accent)]">AI Playbook.</span></h1>
          <p className="text-sm text-[var(--color-text-muted)] font-mono uppercase tracking-widest">
            The definitive guide to local ranking
          </p>
        </header>

        <p className="text-[var(--color-text-main)] text-lg leading-relaxed mb-10">
          Your Google Business Profile (GBP) is the most critical asset for local search. 
          Here's how to supercharge it using AI.
        </p>

        <h2 className="text-3xl">Phase 1: The Audit</h2>
        <p className="text-[var(--color-text-muted)] mb-8">
          Before you can improve, you need a baseline. AI can analyze your current standing against top competitors in minutes.
        </p>

        <div className="convert-block flex flex-col sm:flex-row gap-6 items-center justify-between not-prose mb-12">
          <div>
            <h3 className="text-lg font-display italic mb-2">Want a shortcut?</h3>
            <p className="text-xs text-[var(--color-text-dim)] font-sans">
              Use our free AI-powered audit tool to get a customized roadmap instantly.
            </p>
          </div>
          <Link to="/tools/gbp-audit-tool" className="btn-outline whitespace-nowrap">
            Run Free GBP Audit
          </Link>
        </div>

        <h2 className="text-3xl">Phase 2: Ongoing Optimization</h2>
        <p className="text-[var(--color-text-muted)] mb-8">
          Consistency is key. We recommend posting weekly. See our detailed guide on <Link to="/learn/local-seo/ai-prompts-gbp-posts" className="text-[var(--color-accent)] border-b border-[var(--color-accent)]/30 hover:border-[var(--color-accent)] transition-colors pb-0.5">AI prompts for GBP posts</Link> for exact templates.
        </p>

        <hr className="my-12 border-[var(--color-border)]" />
        
        <div className="tag-box mt-16 not-prose">
          <div className="absolute top-0 right-0 p-4">
            <span className="text-[10px] font-mono text-[var(--color-text-dim)] uppercase tracking-widest">Service Callout</span>
          </div>
          <h3 className="text-2xl font-display italic mb-3">Need this done for you?</h3>
          <p className="text-[var(--color-text-muted)] text-sm mb-6 font-sans max-w-lg">
            Our expert team handles the AI strategy, posting schedule, and review management so you can focus on your business.
          </p>
          <Link to="/services/local-seo-management" className="text-[11px] font-mono text-[var(--color-accent)] uppercase tracking-widest hover:underline flex items-center gap-2">
            Explore Local SEO Management <span>→</span>
          </Link>
        </div>
      </article>
    </div>
  );
}
