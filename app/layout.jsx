import "./globals.css";

// components
import Header from "@/components/Header";

export const metadata = {
  title: "Form Construction | Extensions, Refurbishments, Period Restoration",
  description:
    "Expert construction services. Form Construction creates beautiful homes with precision and care.",
  keywords: [
    "extensions",
    "refurbishments",
    "period restoration",
  ],
  openGraph: {
    title: "Form Construction",
    description:
      "Expert construction services. Form Construction creates beautiful homes with precision and care.",
    url: "https://www.formconstruction.ie",
    images: [
      {
        url: "https://www.formconstruction.ie/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Form Construction",
      },
    ],
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Form Construction | Extensions, Refurbishments, Period Restoration",
    description:
      "Expert construction services. Form Construction creates beautiful homes with precision and care.",
    images: ["https://www.formconstruction.ie/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Form Construction",
              url: "https://www.formconstruction.ie",
              telephone: "+353 (083) 313 1875",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dublin",
                addressCountry: "IE",
              },
              sameAs: [
                // "https://www.instagram.com/campbell.landscaping/"
              ],
            }),
          }}
        />
      </head>
      <body className={`antialiased`}>
      <Header />
        {children}
      </body>
    </html>
  );
}
