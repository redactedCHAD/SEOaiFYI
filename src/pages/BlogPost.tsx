import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export default function BlogPost() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <SEO 
        title="AI Prompts for GBP Posts"
        description="Copy and paste these proven AI prompts to generate high-converting weekly Google Business Profile posts."
        canonicalUrl="/learn/local-seo/ai-prompts-gbp-posts"
        schemaType="Article"
      />
      
      <Breadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'Learn', url: '/learn' },
        { name: 'Local SEO', url: '/learn/local-seo' },
        { name: 'AI Prompts for GBP', url: '/learn/local-seo/ai-prompts-gbp-posts' }
      ]} />
      
      <article className="prose prose-invert prose-orange max-w-none prose-headings:font-display prose-headings:italic prose-a:text-[var(--color-accent)] prose-a:no-underline hover:prose-a:underline">
        <header className="mb-12 border-b border-[var(--color-border)] pb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[9px] px-2 py-0.5 border border-[var(--color-border-subtle)] text-[var(--color-text-muted)] font-mono">RESOURCE</span>
          </div>
          <h1 className="text-5xl font-display leading-[0.9] italic mb-4 tracking-tight">AI Prompts for<br/><span className="text-[var(--color-accent)]">GBP Posts.</span></h1>
          <p className="text-sm text-[var(--color-text-muted)] font-mono uppercase tracking-widest">
            High-fidelity prompts for SEO content production
          </p>
        </header>

        <p className="text-[var(--color-text-main)] text-lg leading-relaxed mb-10">
          Generating weekly content for your Google Business Profile doesn't have to take hours. Use these prompts.
        </p>

        <div className="bg-[var(--color-surface)] p-6 border border-[var(--color-border)] mb-10 relative not-prose">
          <div className="absolute top-0 right-0 p-3">
            <span className="text-[9px] font-mono text-[var(--color-text-dim)] uppercase tracking-widest">Prompt: Local Copywriter</span>
          </div>
          <code className="block font-mono text-xs text-[var(--color-text-main)] leading-relaxed mt-4">
            "Act as an expert local SEO copywriter. Write a 100-word Google Business Profile post about [Service/Product] that highlights our unique value proposition. Include a strong call to action to [Action] and use 2-3 relevant emojis."
          </code>
        </div>

        <p className="text-[var(--color-text-muted)] mb-10">
          This is just one tactic in our comprehensive strategy.
        </p>

        <div className="convert-block flex flex-col sm:flex-row gap-6 items-center justify-between not-prose">
          <div>
            <h3 className="text-lg font-display italic mb-2">Master the Full Strategy</h3>
            <p className="text-xs text-[var(--color-text-dim)] font-sans">
              Read our complete playbook to learn how these posts fit into the broader local SEO picture.
            </p>
          </div>
          <Link to="/learn/local-seo/gbp-optimization-ai-playbook" className="btn-outline whitespace-nowrap">
            Read AI Playbook
          </Link>
        </div>
      </article>
    </div>
  );
}
