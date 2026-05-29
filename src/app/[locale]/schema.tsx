export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Fabtech Services Trading & Contracting",
    alternateName: "Fabtech Qatar",
    description:
      "Italian-engineered outdoor misting and cooling systems for villas, hotels, restaurants and commercial spaces in Qatar. Authorised Idrobase dealer.",
    url: "https://www.fabtechqatar.com",
    telephone: "+97455187619",
    email: "fms@fabtechqatar.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Building 138, Zone 34, Street 362, Al Rabiah Building 1, Second Floor S14",
      addressLocality: "Doha",
      addressCountry: "QA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.2854",
      longitude: "51.5310",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "17:30",
      },
    ],
    sameAs: [
      "https://www.instagram.com/fabtechqatar",
      "https://www.facebook.com/fabtechqatar",
      "https://www.linkedin.com/company/fabtechqatar",
    ],
    priceRange: "QAR 35,000–150,000",
    currenciesAccepted: "QAR",
    areaServed: {
      "@type": "Country",
      name: "Qatar",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Outdoor Cooling Systems",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Villa Outdoor Cooling" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hotel Pool Deck Cooling" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Restaurant Terrace Cooling" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Adiabatic Chiller Pre-cooling" } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
