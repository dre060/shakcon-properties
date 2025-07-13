// app/layout.js
import Navbar from './components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Shakcon Properties - Florida Licensed Contractor | Roofing & Remodeling',
  description: 'Shakcon Properties is a Florida-licensed residential contractor serving Central Florida with quality roofing, remodeling, and restoration services. Get your free estimate today!',
  keywords: 'roofing contractor, home remodeling, restoration services, Florida contractor, Leesburg, Orlando, kitchen remodeling, storm damage repair, bathroom renovation, general contractor',
  openGraph: {
    title: 'Shakcon Properties - Central Florida\'s Trusted Contractor',
    description: 'Quality roofing, remodeling, and restoration services. Licensed & Insured. 24/7 Emergency Service. Free Estimates.',
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
    description: 'Quality roofing, remodeling, and restoration services in Central Florida',
    images: ['/hero.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        <main className="pt-16 md:pt-20">{children}</main>
      </body>
    </html>
  );
}