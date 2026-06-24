import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const location = useLocation();
  const fullUrl = `https://seoai.fyi${location.pathname}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://seoai.fyi${item.url}`
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <nav aria-label="breadcrumb" className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-text-dim)] mb-12">
        <ol className="flex flex-wrap space-x-2">
          {items.map((item, index) => (
            <li key={item.url} className="flex items-center">
              {index > 0 && <span className="mx-2 text-[var(--color-border-subtle)]">/</span>}
              <Link 
                to={item.url} 
                className={`hover:text-white transition-colors ${index === items.length - 1 ? 'text-[var(--color-accent)]' : ''}`}
                aria-current={index === items.length - 1 ? 'page' : undefined}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
