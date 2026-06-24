import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  schemaType: 'Organization' | 'CollectionPage' | 'Article' | 'WebApplication' | 'Service' | 'ArticleFAQ';
  schemaData?: any;
}

export function SEO({ title, description, canonicalUrl, schemaType, schemaData }: SEOProps) {
  const fullUrl = `https://seoai.fyi${canonicalUrl}`;
  
  let jsonLd: any = {
    '@context': 'https://schema.org',
    '@type': schemaType === 'ArticleFAQ' ? ['Article', 'FAQPage'] : schemaType,
    url: fullUrl,
    name: title,
    description: description,
    ...schemaData
  };

  return (
    <Helmet>
      <title>{title} | SEOai.FYI</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}
