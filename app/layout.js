// app/layout.js
import Navbar from './components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Shakcon Properties - Florida Licensed Contractor | Remodeling & Restoration',
  description: 'Shakcon Properties is a Florida-licensed residential contractor serving Central Florida with quality remodeling and restoration services. 203k Certified. Get your free estimate today!',
  keywords: 'home remodeling, restoration services, Florida contractor, Leesburg, Orlando, kitchen remodeling, storm damage repair, bathroom renovation, general contractor, 203k contractor',
  openGraph: {
    title: "Shakcon Properties - Central Florida's Trusted Contractor",
    description: 'Quality remodeling and restoration services. Licensed & Insured. 24/7 Emergency Service. Free Estimates.',
    url: 'https://shakcon.com',
    siteName: 'Shakcon Properties',
    images: [
      {
        url: '/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Shakcon Properties - Quality Home Improvements',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shakcon Properties - Florida Licensed Contractor',
    description: 'Quality remodeling and restoration services in Central Florida',
    images: ['/hero.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Shakcon Properties",
  "image": "https://www.shakcon.com/_next/image?url=%2Flogo.jpg&w=256&q=75",
  "url": "https://shakcon.com",
  "telephone": "352-693-7691",
  "email": "Shakconproperties@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Fruitland Park",
    "addressRegion": "FL",
    "postalCode": "34731",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.8642,
    "longitude": -81.9087
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "09:00",
      "closes": "16:00"
    }
  ],
  "priceRange": "$$",
  "description": "Shakcon Properties is a Florida-licensed residential contractor (CRC1334828) serving Central Florida with quality kitchen remodeling, bathroom renovation, storm damage restoration, and general contracting services. 203k Renovation Specialist. Serving Fruitland Park, Leesburg, The Villages, Orlando, and surrounding areas.",
  "areaServed": [
    "Fruitland Park, FL",
    "Leesburg, FL",
    "The Villages, FL",
    "Orlando, FL",
    "Winter Park, FL",
    "Mount Dora, FL",
    "Eustis, FL",
    "Clermont, FL",
    "Lake Mary, FL",
    "Windermere, FL"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Home Improvement Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kitchen Remodeling" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bathroom Renovation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Storm Damage Restoration" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "203k Renovation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cabinet Sales & Installation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "General Contracting" } }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "6",
    "bestRating": "5"
  },
  "sameAs": [
    "https://www.facebook.com/share/1DG8x132zd/",
    "https://www.instagram.com/shakconproperties",
    "https://youtube.com/@shakconproperties",
    "https://www.bbb.org/us/fl/fruitland-park/profile/remodel-contractors/shakcon-properties-llc-0733-235970271/"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="min-h-screen">
        <Navbar />
        <main className="pt-16 md:pt-20">{children}</main>
      </body>
    </html>
  );
}