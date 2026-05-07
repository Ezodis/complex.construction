import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eliseo Carron - Complex Construction Midland TX | Concrete & Remodeling",
  description: "Eliseo Carron's Complex Construction offers professional construction services in Midland, TX. Specializing in concrete foundations, driveways, patios, home remodeling, and commercial construction. Licensed, insured, and trusted in West Texas. Call (817) 841-5269 for a free quote!",
  keywords: [
    "Eliseo Carron",
    "Eliseo Carron Midland",
    "Eliseo Carron construction",
    "Eliseo Carron contractor",
    "Complex Construction",
    "construction Midland TX",
    "concrete contractor Midland",
    "foundation repair Midland",
    "home remodeling Midland Texas",
    "commercial construction Midland",
    "driveway installation Midland",
    "patio construction Midland",
    "concrete work Midland",
    "residential construction Midland",
    "West Texas construction",
    "Midland contractor",
    "Odessa construction",
    "Permian Basin contractor"
  ],
  authors: [{ name: "Eliseo Carron - Complex Construction" }],
  creator: "Eliseo Carron",
  publisher: "Complex Construction",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://complex.construction'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Eliseo Carron - Complex Construction Midland TX | Professional Construction",
    description: "Expert construction services in Midland, TX by Eliseo Carron. Concrete foundations, driveways, remodeling, and commercial projects. Licensed & insured. Free quotes!",
    url: 'https://complex.construction',
    siteName: 'Complex Construction - Eliseo Carron',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Eliseo Carron - Complex Construction Midland TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Eliseo Carron - Complex Construction Midland TX",
    description: "Professional construction services in Midland, TX by Eliseo Carron. Concrete, remodeling, and commercial projects. Call (817) 841-5269!",
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code-here',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Complex Construction',
    image: 'https://complex.construction/logo.jpg',
    '@id': 'https://complex.construction',
    url: 'https://complex.construction',
    telephone: '+1-817-841-5269',
    email: 'EC71061@email.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '706 N. Terrell',
      addressLocality: 'Midland',
      addressRegion: 'TX',
      postalCode: '79701',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 31.9973,
      longitude: -102.0779,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Midland',
        '@id': 'https://en.wikipedia.org/wiki/Midland,_Texas',
      },
      {
        '@type': 'City',
        name: 'Odessa',
      },
      {
        '@type': 'State',
        name: 'Texas',
      },
    ],
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '14:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/complexconstruction',
      'https://www.instagram.com/complexconstruction',
    ],
    founder: {
      '@type': 'Person',
      name: 'Eliseo Carron',
      jobTitle: 'Owner & Contractor',
      url: 'https://complex.construction',
    },
    employee: {
      '@type': 'Person',
      name: 'Eliseo Carron',
      jobTitle: 'Owner & Lead Contractor',
    },
    description: 'Professional construction services in Midland, TX by Eliseo Carron. Specializing in concrete foundations, driveways, patios, home remodeling, and commercial construction projects.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Construction Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Concrete Foundations',
            description: 'Residential and commercial concrete foundation installation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Driveways & Patios',
            description: 'Custom concrete driveways, patios, and walkways',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Remodeling',
            description: 'Complete home renovation and remodeling services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Construction',
            description: 'Large-scale commercial construction projects',
          },
        },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="Midland" />
        <meta name="geo.position" content="31.9973;-102.0779" />
        <meta name="ICBM" content="31.9973, -102.0779" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
