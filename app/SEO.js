// app/components/SEO.js
import Head from 'next/head';

export default function SEO({ 
  title = 'Shakcon Properties - Florida Licensed Contractor',
  description = 'Quality roofing, remodeling, and restoration services in Central Florida. Licensed & Insured. Free Estimates.',
  image = '/hero.jpg',
  url = 'https://shakcon.com'
}) {
  const fullTitle = title.includes('Shakcon') ? title : `${title} | Shakcon Properties`;
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />
    </Head>
  );
}