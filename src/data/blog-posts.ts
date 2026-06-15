export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  sections: Array<{ heading?: string; body: string }>;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-high-pressure-misting-works-qatar",
    title: "How High-Pressure Misting Works — And Why Pressure Matters in Qatar",
    category: "Technology Guide",
    date: "2026-05-20",
    readTime: "6 min read",
    excerpt:
      "High-pressure misting is not the same as a garden hose with a spray head. The physics are different, the equipment is different, and the results are very different. Here is what happens inside a properly engineered system.",
    sections: [
      {
        body: "High-pressure misting is not the same as a garden hose with a spray head. The physics are different, the equipment is different, and the results are very different. Here is what happens inside a properly engineered system — and why getting the pressure wrong is the single most common mistake in Qatar misting installations.",
      },
      {
        heading: "The Physics: Flash Evaporation",
        body: "When water is forced through a 0.2mm ceramic nozzle at 60–70 bar of pressure, it exits as a mist of droplets approximately 5–10 microns in diameter. At that size, the droplets have a surface-area-to-volume ratio so high that they absorb heat from the surrounding air and evaporate almost instantly — before they can reach your skin, your furniture, or your guests.\n\nThis is flash evaporation, and it is responsible for the 5–15°C temperature reduction* that high-pressure misting delivers. The key word is 'high pressure.' At lower pressures — say, 30 bar — droplets are larger (50–100 microns), they fall before evaporating, and they make everything wet. This is why cheap pump units from hardware stores leave guests damp and disappointed.",
      },
      {
        heading: "Why 60–70 Bar Is the Right Operating Pressure",
        body: "Idrobase engineers their systems at 60–70 bar because this range reliably produces droplets in the 5–10 micron range across a wide variety of nozzle types, ambient temperatures, and humidity levels. Below 40 bar, droplet size increases significantly. Above 80 bar, system wear accelerates without proportional performance gain.\n\nIn Qatar's summer, ambient temperature regularly reaches 42–45°C with humidity varying from 15% (inland) to 70%+ (coastal Doha). A 60-bar system operating at these extremes still produces fine enough droplets to evaporate before contact. A 30-bar system does not.",
      },
      {
        heading: "The Role of Anti-Drip Nozzles",
        body: "Every Idrobase nozzle used in Qatar installations includes a stainless steel anti-drip valve. When the pump shuts off, a spring-loaded pin closes the nozzle orifice within milliseconds, preventing residual water in the pipe from dripping onto surfaces below. This matters particularly in restaurant and hospitality settings where drips on guests, food, or furniture are unacceptable.\n\nNozzles are rated by flow rate in litres per minute. A standard 0.2 l/min nozzle produces appropriate mist for residential terraces. A 0.4 l/min nozzle delivers heavier coverage for industrial or event settings. Nozzle selection is one of the key decisions in system design.",
      },
      {
        heading: "UV Sterilisation — Why Fabtech Fits It as Standard",
        body: "Water at 60–70 bar produces extremely fine aerosol. That aerosol is breathed directly by anyone in the misted area. This means water quality matters in a way it does not for sprinkler irrigation or drip systems.\n\nFabtech fits an inline UV steriliser as standard on every installation. The UV unit eliminates bacteria — including Legionella — before the water reaches the nozzles. In Qatar's summer heat, standing water in pipes can reach temperatures that promote bacterial growth if the system is not designed correctly. Our installation standard includes UV sterilisation, regular flushing of the stainless lines, and 750-hour maintenance intervals per Idrobase specification.",
      },
      {
        heading: "Choosing the Right Pump for Your Space",
        body: "The pump is the heart of the system. It is sized by the number of nozzles it needs to feed at operating pressure. Fabtech sizes pumps conservatively — we would rather recommend a Fog Extra 2.0 (72-nozzle capacity) for a 50-nozzle system than push a Fog App to its rated maximum.\n\nFor residential villas and small café terraces: Fog App 2.0 (60 bar, 2 l/min, up to 40 nozzles, smartphone control). For mid-commercial — restaurant terraces, hotel suite terraces: Fog Extra 2.0 (70 bar, 3.6 l/min, up to 72 nozzles, WiFi thermostat). For large commercial — hotel pool decks, multi-zone compounds: Fog 70 Var3 Touch (variable 30–70 bar, up to 15 l/min, 200 nozzles, 16 zones).\n\nRequest our free site survey and we will specify the right pump for your space, based on measured area and ambient conditions.",
      },
      {
        body: "*Temperature reduction varies with ambient humidity. 5–8°C typical in humid coastal Doha; 8–15°C in drier inland conditions.",
      },
    ],
  },
  {
    slug: "cool-roof-coatings-vs-ac-qatar",
    title: "Cool Roof Coatings vs More AC: The Right Answer for Qatar Properties",
    category: "Coatings Guide",
    date: "2026-05-05",
    readTime: "5 min read",
    excerpt:
      "When a building is too hot, the instinct is to add more air conditioning. But the problem is often not insufficient AC — it is a roof absorbing 90% of Qatar's solar radiation and conducting that heat directly into your living space.",
    sections: [
      {
        body: "When a building is too hot, the instinct is to add more air conditioning. But the problem is often not insufficient AC — it is a roof absorbing 90% of Qatar's solar radiation and conducting that heat directly into your living space. Cool roof coatings address the source of the heat, not just the symptom.",
      },
      {
        heading: "The Problem: Your Roof Is a Heat Collector",
        body: "An uncoated concrete or metal roof in Qatar summer reaches 75–80°C surface temperature by mid-afternoon. That heat conducts downward into the top floor of the building and radiates upward into any outdoor space above it. Your AC system is sized to overcome this heat load — which means it runs harder, consumes more electricity, and ages faster when roofs are uncoated.",
      },
      {
        heading: "What Nano-Ceramic Coatings Do",
        body: "Nano-ceramic reflective coatings contain microscopic ceramic particles that reflect up to 90% of solar radiation — including near-infrared, which accounts for the majority of solar heat gain. Instead of absorbing that energy as heat, the coating reflects it back.\n\nThe result: a coated roof surface reaches only 55–65°C instead of 75–80°C. That 15–20°C difference at the roof surface translates directly to reduced heat conduction into the building and reduced heat radiated into outdoor areas.",
      },
      {
        heading: "Cost Comparison: Coating vs Upgraded AC",
        body: "A cool roof coating application on a typical 200m² villa roof costs a fraction of upgrading to a larger AC system. More importantly, it reduces the running cost of your existing AC — in comparable climates (Dubai, Abu Dhabi), property owners report 15–25% reductions in AC electricity consumption after cool roof coating application.\n\nAC units also have a capital cost and ongoing maintenance cost. A cool roof coating applied once lasts 5–7 years in Qatar's climate — UV stable, waterproof, and maintenance-free in that window.",
      },
      {
        heading: "When to Use Coatings Alongside Misting",
        body: "Cool roof coatings address heat entering the building from above. Misting systems cool the outdoor air around the building. They are complementary, not competing, solutions.\n\nFor hotel pool decks and resort terraces: cool pavement treatment on the deck surface (the same ceramic technology applied to horizontal walking surfaces) reduces ground-radiated heat at foot level. A misting system cools the air above. Together, they create a complete outdoor comfort environment.\n\nFabtech assesses both in a single free site survey. We recommend what your specific space actually needs.",
      },
    ],
  },
  {
    slug: "outdoor-restaurant-cooling-qatar-guide",
    title: "The Complete Guide to Outdoor Restaurant Cooling in Qatar",
    category: "Restaurant Guide",
    date: "2026-04-18",
    readTime: "7 min read",
    excerpt:
      "An outdoor terrace that is comfortable at 7pm in July is one of the most valuable assets a Qatar restaurant can have. Here is how to specify, design, and install a system that actually delivers it.",
    sections: [
      {
        body: "An outdoor terrace that is comfortable at 7pm in July is one of the most valuable assets a Qatar restaurant can have — and one of the most commonly specced wrong. Here is how to approach outdoor cooling for a restaurant or café context, from design through to Civil Defence approval.",
      },
      {
        heading: "Why Restaurants Have Different Requirements Than Villas",
        body: "A residential terrace misting system serves the same household for years. A restaurant terrace serves rotating guests, multiple sittings per day, and has food and drink on every table. This changes several design priorities:\n\n1. Anti-drip nozzles are mandatory, not optional — a guest finding water droplets in their food is a catastrophic service failure.\n2. Coverage must be uniform — hot spots at table edges make some seats uncomfortable while others are pleasant.\n3. Control must be responsive — the system should respond to ambient temperature and humidity automatically, not require staff intervention to adjust.\n4. Maintenance intervals must align with your cleaning schedule — nozzle blockages need to be caught before service.",
      },
      {
        heading: "Recommended System for a Typical Restaurant Terrace",
        body: "For a 100–150m² covered restaurant terrace with up to 60 seats:\n\n- Pump: Fog Extra 2.0 (ZX.FX-3.6) — 70 bar, WiFi temperature and humidity control, UV steriliser included.\n- Distribution: Linea Kit 30 (ZX.KL30) — 30 nozzles on stainless steel line installed along pergola beams or overhead structure.\n- Nozzle spacing: every 70cm, positioned to avoid direct coverage of dining zones while maximising peripheral misting.\n- Control: Thermostat activation at 28°C, humidity cutoff above 75% to avoid wetness in high-humidity conditions.\n- UV sterilisation: Inline UV unit on water inlet, standard on Fog Extra 2.0.",
      },
      {
        heading: "Civil Defence Approval in Qatar",
        body: "Any fixed misting installation in Qatar that uses a pressurised water system requires Civil Defence approval as part of the building permit process. Fabtech manages the Civil Defence documentation, system drawings, and inspection process for all commercial installations.\n\nKey requirements for approval: the system must be installed by a licensed contractor, all electrical components must be IP-rated for outdoor use, water supply must meet drinking water standards, and the installation must not interfere with fire suppression systems.\n\nFor new restaurant fit-outs: include the misting system in the fit-out permit application from the outset — retrofitting after occupancy adds delay and cost.",
      },
      {
        heading: "Shade Structures: The Missing Half",
        body: "A misting system without shade overhead is cooling air that is being continuously heated by direct solar radiation. A shade structure without misting keeps sun off but doesn't address the 38–40°C ambient air temperature in the shaded space.\n\nThe optimal restaurant terrace solution is a properly specified shade canopy (HDPE UV-blocking fabric, 95% shade factor) with Idrobase misting lines installed along the structural frame during fabrication — one project, one contractor, one Civil Defence application.\n\nFabtech designs and installs both. We do not subcontract the shade structure to another party — this is one of the most common causes of poor integration and post-installation problems.",
      },
    ],
  },
  {
    slug: "adiabatic-pre-cooling-chiller-qatar",
    title: "Adiabatic Pre-Cooling for Air-Cooled Chillers: What Qatar Facilities Managers Need to Know",
    category: "Industrial",
    date: "2026-03-30",
    readTime: "8 min read",
    excerpt:
      "Air-cooled chillers lose significant efficiency as ambient temperature rises. In Qatar summer, this means your chiller is operating at 70–80% of its rated capacity during peak demand — the exact hours when you need it most.",
    sections: [
      {
        body: "Air-cooled chillers lose significant efficiency as ambient temperature rises. In Qatar summer, this means your chiller is operating at 70–80% of its rated capacity during peak demand — the exact hours when you need it most. Adiabatic pre-cooling is one of the most cost-effective interventions available for facility managers operating large air-cooled systems.",
      },
      {
        heading: "How Efficiency Loss Happens",
        body: "Air-cooled chillers reject heat by blowing ambient air over condensing coils. The warmer the incoming air, the harder the refrigeration cycle has to work to reject heat at the same rate. The performance curve is roughly linear: for every 1°C rise in ambient temperature, a typical air-cooled chiller loses 2–3% of its rated cooling capacity.\n\nAt 45°C ambient — a common midday temperature in Doha — a chiller rated at 500kW at design conditions may deliver only 350–380kW. This 'summer shortfall' forces facilities managers to either accept reduced cooling performance or run additional backup capacity, which is expensive and often not available.",
      },
      {
        heading: "What Adiabatic Pre-Cooling Does",
        body: "Adiabatic pre-cooling uses high-pressure misting to reduce the temperature of the air entering the chiller's condenser coils. By lowering the inlet air temperature by 6–10°C, the refrigeration cycle operates under conditions closer to design specification, recovering the lost capacity.\n\nThe thermodynamic term 'adiabatic' refers to the cooling process occurring without heat exchange with the environment — the water absorbs heat from the air as it evaporates, cooling the air mass itself rather than removing heat via a separate refrigerant circuit.\n\nIdrobase's Fog Adiabatico systems are packaged specifically for installation on air-cooled chillers and dry coolers. They include: 70-bar stainless steel distribution manifold, nozzle arrays sized to the condenser coil face area, Fog Extra 2.0 or Fog 70 Var3 pump unit, and temperature probes for inlet and outlet measurement.",
      },
      {
        heading: "The Economics",
        body: "The business case for adiabatic pre-cooling depends on three variables: the size of your chiller(s), your electricity tariff, and how many hours per year the system operates. In a Gulf context:\n\n- A 500kW air-cooled chiller operating under-capacity by 20% for 1,500 hours per year (June–September) wastes a significant amount of electricity compared to design performance.\n- Restoring even 10% of that lost capacity through pre-cooling generates measurable electricity savings.\n- Adiabatic systems use a small amount of water, but their electricity consumption is minimal — just the pre-cooling pump, typically 2–5kW for a single chiller application.\n\nContact Fabtech for a site-specific analysis of your chiller specifications and summer operating data.",
      },
      {
        heading: "Installation Considerations",
        body: "Adiabatic pre-cooling installation requires: assessment of chiller manufacturer's warranty terms (some manufacturers have specific requirements for pre-cooling systems), review of water quality and treatment requirements, integration with BMS (building management systems) for temperature-triggered operation, and Qatar Civil Defence approval for pressurised water systems.\n\nFabtech manages the full process from site assessment through to commissioning. We provide system performance documentation and can assist with integration into existing BMS infrastructure.",
      },
    ],
  },
  {
    slug: "5-questions-misting-system-qatar",
    title: "5 Questions to Ask Any Misting Supplier Before You Commit in Qatar",
    category: "Buying Guide",
    date: "2026-03-12",
    readTime: "5 min read",
    excerpt:
      "Qatar's misting market includes a wide range of suppliers, from authorised Italian-engineered dealers to importers of generic Asian-manufactured components sold under European-sounding brand names. Here are five questions that separate serious suppliers from the rest.",
    sections: [
      {
        body: "Qatar's misting market includes a wide range of suppliers, from authorised Italian-engineered dealers to importers of generic Asian-manufactured components sold under European-sounding brand names. The difference matters — not just for performance, but for safety in a food-service or hospitality setting. Here are five questions that quickly separate serious suppliers from the rest.",
      },
      {
        heading: "1. What is the operating pressure of your system, and can you show me documentation?",
        body: "The answer you want to hear is 60–70 bar minimum for a high-pressure system. Sub-40 bar systems produce large droplets that wet surfaces and guests. If the supplier quotes bar figures without being able to show you a pump specification sheet or CE documentation, that is a concern.\n\nLow-pressure systems are typically much cheaper to purchase. They look similar in a quotation. They do not perform the same outdoors in Qatar at 42°C.",
      },
      {
        heading: "2. Does the system include UV sterilisation, and is it fitted as standard?",
        body: "Mist is an aerosol that users breathe directly. Water in outdoor pipework in Qatar summer heat can reach temperatures that promote bacterial growth — including Legionella — if not properly treated.\n\nAny responsible supplier fits UV sterilisation as standard. If it is offered as an optional extra at additional cost, that tells you something about how seriously the supplier takes water safety.",
      },
      {
        heading: "3. Who is the manufacturer, and are they able to provide you with a spare parts supply?",
        body: "This question matters because misting systems require periodic maintenance — nozzle replacement, filter changes, pump servicing. Generic components often have no established spare parts supply in Qatar. When a nozzle clogs or a pump seal fails 18 months after installation, you need parts available locally.\n\nFabtech stocks Idrobase spare parts in Qatar. We carry the most common nozzle sizes, seals, filter elements, and UV lamps. For any serious commercial installation, ask your supplier to show you their spare parts inventory and their response time for out-of-stock items.",
      },
      {
        heading: "4. Will you manage Civil Defence approval for my installation?",
        body: "Any pressurised water installation in Qatar requires Civil Defence approval. This is not optional, and many suppliers in Qatar supply systems without managing the approval process — leaving the client to deal with it, or simply installing without it (which creates liability exposure).\n\nFabtech manages Civil Defence documentation and the approval process for all commercial installations. Ask any supplier whether this is included in their scope or is an additional service.",
      },
      {
        heading: "5. What does your after-sales service look like?",
        body: "Ask: Who do I call when something goes wrong? What is your response time? Do you stock spare parts locally?\n\nFor hospitality and restaurant clients, a misting system failure on a Friday evening in August is a significant business event. Your supplier needs to be reachable and able to respond. Ask for references from clients in Qatar who have needed post-installation support.",
      },
      {
        heading: "A Note on Price",
        body: "A properly specified 60-bar system with Italian-engineered components, UV sterilisation, anti-drip nozzles, and professional installation will cost more than a 30-bar system with generic components. The difference is typically 30–50% in initial cost. The difference in performance, safety, longevity, and after-sales support is much larger.\n\nFabtech's site survey is free. We will give you a specification and price that you can compare like-for-like against any other supplier.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
