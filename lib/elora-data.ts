export type ServiceCategory = 'Hair' | 'Skin' | 'Makeup' | 'Nails' | 'Spa & Wellness';

export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: ServiceCategory;
  shortDescription: string;
  fullDescription: string;
  startingPrice: number;
  durationMinutes: number;
  durationLabel: string;
  image: string;
  secondaryImage: string;
  featured?: boolean;
  benefits: string[];
  included: string[];
  transformationNote: {
    beforeState: string;
    afterState: string;
    longevity: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface Specialist {
  id: string;
  name: string;
  role: string;
  specialtyCategory: ServiceCategory;
  specialties: string[];
  experienceYears: number;
  bio: string;
  philosophy: string;
  image: string;
  instagramHandle: string;
  featured?: boolean;
}

export type GalleryCategory =
  | 'Salon Interiors'
  | 'Hair Transformations'
  | 'Makeup Looks'
  | 'Bridal Makeup'
  | 'Skincare Treatments'
  | 'Nail Art'
  | 'Beauty Details';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  caption: string;
  specialist: string;
  image: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category:
    | 'Hair Care Tips'
    | 'Skincare Guides'
    | 'Bridal Beauty Inspiration'
    | 'Seasonal Beauty Trends'
    | 'Professional Beauty Advice';
  author: string;
  authorRole: string;
  publishedDate: string;
  readingTime: string;
  coverImage: string;
  featured?: boolean;
  excerpt: string;
  pullQuote: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  keyTakeaways: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientRole: string;
  serviceName: string;
  specialistName: string;
  quote: string;
  outcomeSummary: string;
  dateLabel: string;
}

export interface FAQItem {
  id: string;
  category:
    | 'Appointments'
    | 'Cancellations'
    | 'Services'
    | 'Payments'
    | 'Bridal Bookings'
    | 'Hygiene'
    | 'Consultation'
    | 'Product Recommendations';
  question: string;
  answer: string;
}

export interface PackageOffer {
  id: string;
  title: string;
  tier: 'Bridal Couture' | 'Signature Ritual' | 'Atelier Membership';
  subtitle: string;
  price: number;
  billingNote: string;
  durationLabel: string;
  includes: string[];
  idealFor: string;
}

export const BRAND_INFO = {
  name: 'ÉLORA BEAUTY ATELIER',
  shortName: 'ÉLORA',
  tagline: 'Where Beauty Becomes an Experience.',
  description:
    'ÉLORA is a contemporary beauty destination where expert artistry meets thoughtful self-care. Every detail is designed to make your beauty experience feel personal, effortless and exceptional.',
  demoNotice:
    'Demonstration Portfolio Notice: All pricing, specialist profiles, client testimonials, and contact details are fictional demonstration content created for ÉLORA Beauty Atelier.',
  address: {
    suite: ' Maison ÉLORA — Suite 400, The Travertine Pavilion',
    street: '428 Rue Saint-Honoré / 742 Madison Avenue (Demo Atelier)',
    city: 'New York, NY 10065',
    landmark: 'Private courtyard entrance beside the Botanical Conservatory',
  },
  contact: {
    phoneDisplay: '+1 (212) 555-0194 (Demo Line)',
    phoneHref: 'tel:+12125550194',
    whatsappDisplay: '+1 (212) 555-0198',
    whatsappUrl:
      'https://wa.me/12125550198?text=Hello%20%C3%89LORA%20Beauty%20Atelier%20Concierge%2C%20I%20would%20like%20to%20inquire%20about%20a%20private%20consultation.',
    email: 'concierge@elorabeautyatelier.demo',
    pressEmail: 'editorial@elorabeautyatelier.demo',
  },
  hours: [
    { days: 'Tuesday – Friday', time: '09:30 AM – 08:00 PM' },
    { days: 'Saturday', time: '09:00 AM – 07:00 PM' },
    { days: 'Sunday', time: '10:00 AM – 05:00 PM' },
    { days: 'Monday', time: 'Closed for Private Bridal & Editorial Bookings' },
  ],
  socials: [
    { name: 'Instagram', handle: '@elora.atelier', url: 'https://instagram.com' },
    { name: 'Pinterest', handle: '@elorabeautyatelier', url: 'https://pinterest.com' },
    { name: 'Journal RSS', handle: 'The ÉLORA Edit', url: '/journal' },
  ],
};

export const SERVICE_CATEGORIES: {
  id: ServiceCategory;
  label: string;
  tagline: string;
  heroImage: string;
}[] = [
  {
    id: 'Hair',
    label: 'Hair Artistry',
    tagline: 'Architectural cuts, seamless dimensional balayage, and restorative botanical hair couture.',
    heroImage: '/images/hair-artistry.jpg',
  },
  {
    id: 'Skin',
    label: 'Skin Rituals',
    tagline: 'Cellular sculpting facials, cryo-hydration infusions, and bespoke dermal rejuvenation.',
    heroImage: '/images/skin-ritual.jpg',
  },
  {
    id: 'Makeup',
    label: 'Bridal & Makeup',
    tagline: 'Haute couture bridal makeup, luminous skin-first artistry, and editorial evening glamour.',
    heroImage: '/images/bridal-couture.jpg',
  },
  {
    id: 'Nails',
    label: 'Nail Artistry',
    tagline: 'Botanical hand and foot rituals, sculpted silk extensions, and minimalist gold-leaf nail design.',
    heroImage: '/images/nail-spa.jpg',
  },
  {
    id: 'Spa & Wellness',
    label: 'Spa & Wellness',
    tagline: 'Holistic body polishing, warm amber aromatherapy massage, and tranquil sensory restoration.',
    heroImage: '/images/hero-atelier.jpg',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  // 1. HAIR
  {
    id: 'hair-1',
    slug: 'architectural-cut-silk-styling',
    name: 'Architectural Cut & Silk Styling',
    subtitle: 'Bespoke bone-structure tailoring and weightless blowout finish',
    category: 'Hair',
    shortDescription:
      'Precision dry and wet cutting tailored to your facial architecture, followed by a signature botanical steam bath and luminous silk blowout.',
    fullDescription:
      'Every ÉLORA haircut begins with an unhurried 20-minute diagnostic consultation examining hair density, natural growth patterns, collarbone proportions, and lifestyle movement. Using Japanese cobalt steel shears, our master stylists sculpt effortless silhouettes that retain their shape for months, finished with a weightless silk press or brushed wave.',
    startingPrice: 165,
    durationMinutes: 75,
    durationLabel: '75 Min',
    image: '/images/hair-artistry.jpg',
    secondaryImage: '/images/hero-atelier.jpg',
    featured: true,
    benefits: [
      'Tailored specifically to your bone structure and natural hair fall',
      'Includes scalp micro-circulation massage with cold-pressed camellia oil',
      'Effortless grow-out that maintains architectural balance for 10–12 weeks',
      'Thermal lipid shield for glass-like shine without heaviness',
    ],
    included: [
      'One-on-one facial proportion & texture consultation',
      'Aromatherapy purifying wash & warm towel scalp ritual',
      'Wet foundational cut & dry micro-texturizing refinement',
      'Signature round-brush blowout or soft editorial wave styling',
    ],
    transformationNote: {
      beforeState: 'Heavy, shapeless ends with compromised movement and dull surface cuticle.',
      afterState: 'Weightless movement, crisp perimeter framing, and mirror-like light reflection.',
      longevity: 'Maintains structural integrity for 10 to 12 weeks between studio visits.',
    },
    faqs: [
      {
        question: 'Should I arrive with freshly washed hair?',
        answer:
          'You may arrive with your hair styled as you normally wear it so your stylist can observe its natural fall before we perform our purifying botanical cleanse.',
      },
      {
        question: 'Is a fringe trim included between appointments?',
        answer:
          'Yes. All Architectural Cut guests enjoy complimentary 15-minute fringe and neck-line refinements within 6 weeks of their appointment.',
      },
    ],
  },
  {
    id: 'hair-2',
    slug: 'dimensional-balayage-gloss',
    name: 'Luminous Dimensional Balayage',
    subtitle: 'Hand-painted French sun-lit ribbons and bond-building pearl gloss',
    category: 'Hair',
    shortDescription:
      'Hand-swept open-air highlights crafted for seamless, ribbon-like dimension and soft root longevity, sealed with an amino-acid pearl toner.',
    fullDescription:
      'Inspired by natural Riviera light, our Dimensional Balayage avoids harsh foil lines in favor of artistic hand-painting. We formulate custom champagne, honey, espresso, or cool cashmere tones while protecting internal disulfide bonds at every stage. Finished with an acidic pH-sealing gloss and botanical hydration mask.',
    startingPrice: 340,
    durationMinutes: 180,
    durationLabel: '180 Min',
    image: '/images/hair-artistry.jpg',
    secondaryImage: '/images/bridal-couture.jpg',
    featured: true,
    benefits: [
      'Seamless root transition allowing 4–6 months of graceful grow-out',
      'Integrated tri-peptide bond builder preserves 98% of hair fiber elasticity',
      'Customized multi-tonal glaze eliminates brassiness and enhances luster',
      'Includes bespoke post-colour botanical lipid masque',
    ],
    included: [
      'Undertone & eye-colour harmony diagnostic',
      'Custom hand-painted balayage placement & face-framing money piece',
      'Multi-zone acidic demi-permanent pearl glossing',
      'Bond-multiplying treatment & signature blowout',
    ],
    transformationNote: {
      beforeState: 'Flat single-tone colour or harsh grown-out banding lacking depth.',
      afterState: 'Multi-dimensional ribbons of warm champagne or cool silk that catch every light.',
      longevity: '4 to 6 months with optional 45-minute gloss refresh at week 8.',
    },
    faqs: [
      {
        question: 'Will balayage damage fine or fragile hair?',
        answer:
          'Our colorists mix phyto-keratin bond protectors directly into our clay lighteners, lifting gently without swelling the hair cuticle.',
      },
      {
        question: 'Does this service include a full haircut?',
        answer:
          'It includes a precision dusting of the ends and full blowout styling. For a complete restyle cut, you may add our Architectural Cut during booking.',
      },
    ],
  },
  {
    id: 'hair-3',
    slug: 'botanical-caviar-hair-spa',
    name: 'Botanical Caviar & Steam Hair Spa',
    subtitle: 'Deep follicular detoxification and micro-mist cellular hair restoration',
    category: 'Hair',
    shortDescription:
      'An indulgent 60-minute scalp and fiber sanctuary combining ultrasonic ozone steam, black caviar proteins, and acupressure massage.',
    fullDescription:
      'Designed as a facial for your scalp and hair fiber, our Botanical Caviar Hair Spa begins with a trichology camera inspection to assess scalp hydration and barrier health. An exfoliating sea-mineral clay gently clears buildup before an ultrasonic warm mist infuses botanical caviar amino acids deep into the cortex.',
    startingPrice: 190,
    durationMinutes: 60,
    durationLabel: '60 Min',
    image: '/images/skin-ritual.jpg',
    secondaryImage: '/images/hair-artistry.jpg',
    benefits: [
      'Relieves scalp tension, dryness, and follicle congestion immediately',
      'Restores silkiness and tensile strength to colour-treated or heat-stressed strands',
      '25-minute cranial, neck, and shoulder meridian massage',
      'Leaves hair noticeably fuller, softer, and luminous',
    ],
    included: [
      'Micro-camera scalp & follicle analysis',
      'Mineral sea-silt scalp exfoliation & lymphatic brushing',
      'Ultrasonic micro-mist caviar & ceramide masque infusion',
      'Aromatic blow-dry finish & herbal infusion tea service',
    ],
    transformationNote: {
      beforeState: 'Dehydrated, brittle strands and tight, congested scalp barrier.',
      afterState: 'Supple, weightless hair with a calm, oxygenated scalp and velvet touch.',
      longevity: 'Immediate luster lasting 3–4 weeks; cumulative scalp renewal when performed monthly.',
    },
    faqs: [
      {
        question: 'Can I book the Hair Spa right after a colour service?',
        answer:
          'Yes, our pH-balanced caviar infusion locks in freshly deposited colour pigments while soothing the scalp.',
      },
    ],
  },
  {
    id: 'hair-4',
    slug: 'couture-colour-illumination',
    name: 'Couture Single-Process & Gloss Illumination',
    subtitle: 'Ammonia-free rich coverage and mirror-shine chromatic glaze',
    category: 'Hair',
    shortDescription:
      'Velvet-rich root-to-end colour formulated with botanical oils for 100% grey blending and luminous, multi-faceted depth.',
    fullDescription:
      'Our Couture Colour service utilizes micro-oil delivery technology rather than harsh ammonia, enveloping each strand in rich pigment and argan lipids. Whether deepening into espresso velvet or illuminating warm golden brunette, the finish is natural, healthy, and luminous.',
    startingPrice: 245,
    durationMinutes: 135,
    durationLabel: '135 Min',
    image: '/images/hair-artistry.jpg',
    secondaryImage: '/images/hero-atelier.jpg',
    benefits: [
      'Zero ammonia odor or scalp irritation',
      '100% natural-looking grey coverage without opaque helmet effect',
      'Seals split cuticles for high-definition shine',
    ],
    included: [
      'Custom shade alchemy consultation',
      'Scalp barrier protection oil application',
      'Root-to-tip chromatic colour & shine glaze',
      'Signature silk blowout finish',
    ],
    transformationNote: {
      beforeState: 'Faded mid-lengths and visible root regrowth.',
      afterState: 'Rich, uniform depth with translucent light reflection.',
      longevity: '6 to 8 weeks of vibrant tone.',
    },
    faqs: [
      {
        question: 'Is this formula safe for sensitive scalps?',
        answer: 'Yes, we apply a soothing sweet-almond and chamomile barrier serum prior to colour application.',
      },
    ],
  },
  {
    id: 'hair-5',
    slug: 'cashmere-keratin-infusion',
    name: 'Cashmere Keratin Silk Infusion',
    subtitle: 'Formaldehyde-free frizz elimination and humidity armor',
    category: 'Hair',
    shortDescription:
      'A smoothing bio-keratin infusion that tames unruly frizz, cuts daily styling time in half, and preserves natural volume.',
    fullDescription:
      'Formulated with organic glyoxylic amino acids, cashmere proteins, and acai polyphenols, our Keratin Silk Infusion smooths porous cuticles without flattening your natural movement. Walk out the same day with glass-smooth, humidity-resistant hair.',
    startingPrice: 380,
    durationMinutes: 150,
    durationLabel: '150 Min',
    image: '/images/hair-artistry.jpg',
    secondaryImage: '/images/hero-atelier.jpg',
    benefits: [
      '100% formaldehyde-free and aldehyde-free clean luxury formula',
      'Reduces blow-dry time by up to 60% in high humidity',
      'No waiting period—wash or pin your hair the very next day',
    ],
    included: [
      'Deep clarifying chelating wash',
      'Strand-by-strand cashmere protein thermal sealing',
      'Take-home travel-size sulfate-free silk shampoo',
    ],
    transformationNote: {
      beforeState: 'Porous, humidity-reactive texture requiring heavy daily flat-ironing.',
      afterState: 'Sleek, cashmere-soft strands that dry effortlessly smooth.',
      longevity: 'Lasts up to 4 months with sulfate-free home care.',
    },
    faqs: [
      {
        question: 'Will this make my curls completely pin-straight?',
        answer:
          'Unlike harsh chemical relaxers, our Cashmere Keratin softens curl frizz while keeping gentle body and movement.',
      },
    ],
  },
  {
    id: 'hair-6',
    slug: 'velvet-amino-smoothening',
    name: 'Velvet Amino Bio-Smoothening',
    subtitle: 'Botanical silk alignment for sleek, mirror-polished hair',
    category: 'Hair',
    shortDescription:
      'Advanced plant-derived amino realignment for guests seeking ultra-sleek, frizz-free hair with supreme softness and shine.',
    fullDescription:
      'Our Velvet Amino Bio-Smoothening treatment restructures coarse or unruly waves using sericin silk proteins and lotus root lipids. Ideal for guests who love a refined, liquid-hair finish with lasting moisture retention.',
    startingPrice: 320,
    durationMinutes: 150,
    durationLabel: '150 Min',
    image: '/images/hair-artistry.jpg',
    secondaryImage: '/images/skin-ritual.jpg',
    benefits: [
      'Creates a sleek, liquid-silk finish across coarse textures',
      'Infuses deep lotus and baobab lipid nourishment',
      'Protects against environmental UV and thermal styling damage',
    ],
    included: [
      'Porosity mapping & strand elasticity test',
      'Amino-silk thermal infusion & neutralizing moisture bath',
      'Polished glass-hair blowout',
    ],
    transformationNote: {
      beforeState: 'Coarse, rebellious texture resistant to smooth styling.',
      afterState: 'Fluid, mirror-gloss alignment with supple movement.',
      longevity: 'Lasts 4 to 5 months.',
    },
    faqs: [
      {
        question: 'Should I colour my hair before or after Amino Smoothening?',
        answer:
          'We recommend performing Velvet Amino Smoothening 10–14 days before your colour gloss for optimal tone accuracy.',
      },
    ],
  },

  // 2. SKIN
  {
    id: 'skin-1',
    slug: '24k-cellular-sculpting-facial',
    name: '24K Cellular Sculpting & Buccal Facial',
    subtitle: 'Architectural myofascial lifting and bio-gold peptide illumination',
    category: 'Skin',
    shortDescription:
      'Our signature red-carpet facial combining intra-oral buccal sculpting, micro-current contour lifting, and 24K gold leaf peptide infusion.',
    fullDescription:
      'Performed in our candlelit acoustic skin suites, this transformative 90-minute ritual visibly lifts the cheekbones, releases jaw tension, and floods the dermis with swiss bio-peptides and pure 24-karat gold leaf. Ideal before milestone events or as a monthly age-defying sanctuary.',
    startingPrice: 285,
    durationMinutes: 90,
    durationLabel: '90 Min',
    image: '/images/skin-ritual.jpg',
    secondaryImage: '/images/bridal-couture.jpg',
    featured: true,
    benefits: [
      'Visibly sculpts jawline and cheekbones via deep myofascial & buccal release',
      'Stimulates ATP cellular energy with gentle dual-wave micro-current',
      'Zero downtime—imparts an immediate "lit-from-within" glass-skin radiance',
      'Drains puffiness through rhythmic lymphatic drainage',
    ],
    included: [
      'Dermal moisture & barrier diagnostic',
      'Enzymatic pearl & lactic gentle resurfacing',
      '30-minute sculptural myofascial & buccal lifting massage',
      '24K gold leaf & tri-peptide hydrogel mask with LED red-light therapy',
    ],
    transformationNote: {
      beforeState: 'Fatigued complexion, fluid retention along the jawline, and dull surface tone.',
      afterState: 'Lifted facial contours, de-puffed eye contour, and luminous champagne glow.',
      longevity: 'Immediate sculptural lift lasting 10–14 days; cumulative collagen remodeling.',
    },
    faqs: [
      {
        question: 'Is there any redness after the 24K Cellular Sculpting Facial?',
        answer:
          'None at all. This ritual is specifically engineered for zero downtime, making it safe the day before a wedding or gala.',
      },
      {
        question: 'What is buccal massage?',
        answer:
          'Performed with sterile nitrile gloves, buccal massage gently works the internal and external cheek muscles to release TMJ tension and lift the mid-face naturally.',
      },
    ],
  },
  {
    id: 'skin-2',
    slug: 'hyaluronic-cryo-hydration-ritual',
    name: 'Hyaluronic Cryo-Hydration Ritual',
    subtitle: 'Multi-molecular moisture drench and sub-zero pore refinement',
    category: 'Skin',
    shortDescription:
      'Quench dehydrated, travel-weary skin with pressurized oxygen infusion, triple-weight hyaluronic serum, and sculpted cryo-globes.',
    fullDescription:
      'When skin feels tight, sensitized, or depleted by climate and travel, our Cryo-Hydration Ritual restores barrier serenity. Pure hyperbaric oxygen delivers low-molecular-weight hyaluronic acid and ectoin deep into the epidermis, followed by chilled porcelain cryo-wands to tighten pores and calm micro-inflammation.',
    startingPrice: 220,
    durationMinutes: 75,
    durationLabel: '75 Min',
    image: '/images/skin-ritual.jpg',
    secondaryImage: '/images/hero-atelier.jpg',
    benefits: [
      'Increases epidermal hydration levels by up to 180% in a single session',
      'Calms rosacea-prone, post-flight, or sun-exposed skin immediately',
      'Tightens pore appearance and smooths fine dehydration lines',
    ],
    included: [
      'Ultrasonic hydro-dermabrasion gentle cleanse',
      'Hyperbaric oxygen & triple-hyaluronic ampoule infusion',
      'Sub-zero cryo-porcelain lymphatic sculpting',
      'Ceramide barrier cocoon finish',
    ],
    transformationNote: {
      beforeState: 'Tight, flaky, or reactive skin with visible fine dehydration creases.',
      afterState: 'Plump, dewy, calm complexion with refined texture.',
      longevity: 'Deep barrier hydration lasts 3 to 4 weeks.',
    },
    faqs: [
      {
        question: 'Is this suitable for pregnancy?',
        answer:
          'Yes, every botanical and hyaluronic formulation in this ritual is 100% pregnancy and nursing safe.',
      },
    ],
  },
  {
    id: 'skin-3',
    slug: 'bio-luminance-skin-rejuvenation',
    name: 'Bio-LuminancePHA & Exosome Rejuvenation',
    subtitle: 'Cellular tone correction and glass-skin resurfacing',
    category: 'Skin',
    shortDescription:
      'Targeted phyto-exosome therapy and gentle polyhydroxy acid resurfacing to erase hyperpigmentation and refine skin texture.',
    fullDescription:
      'Combining next-generation plant exosomes with non-irritating polyhydroxy acids (PHAs) and niacinamide, this clinical-luxury facial targets sun spots, uneven tone, and rough texture while respecting your skin barrier.',
    startingPrice: 310,
    durationMinutes: 90,
    durationLabel: '90 Min',
    image: '/images/skin-ritual.jpg',
    secondaryImage: '/images/bridal-couture.jpg',
    benefits: [
      'Brightens stubborn pigment spots and post-blemish marks',
      'Refines pore architecture without harsh peeling or flaking',
      'Boosts natural elastin synthesis via botanical exosomes',
    ],
    included: [
      'PHA & white truffle enzymatic peel',
      'Ultrasonic painless pore extractions',
      'Plant-exosome & vitamin C ester iontophoresis',
      'Near-infrared & amber LED cellular phototherapy',
    ],
    transformationNote: {
      beforeState: 'Uneven pigmentation, congested pores, and lackluster tone.',
      afterState: 'Translucent, even-toned skin with refined porcelain smoothness.',
      longevity: 'Progressive brightening over 4 weeks.',
    },
    faqs: [
      {
        question: 'Should I pause retinol before this facial?',
        answer: 'We advise pausing prescription retinoids 72 hours prior to your appointment.',
      },
    ],
  },
  {
    id: 'skin-4',
    slug: 'botanical-detox-artisan-cleanup',
    name: 'Botanical Detox & Artisan Clean-Up',
    subtitle: 'Essential pore purification and balancing herbal compress',
    category: 'Skin',
    shortDescription:
      'An impeccably hygienic, soothing 60-minute purification ritual featuring ultrasonic extractions and a warm chamomile poultice.',
    fullDescription:
      'Ideal for regular monthly maintenance or younger complexions, our Artisan Clean-Up purifies congested pores using warm botanical steam, ultrasonic cavitation spatula, and a calming French green clay and rosewater mask.',
    startingPrice: 150,
    durationMinutes: 60,
    durationLabel: '60 Min',
    image: '/images/skin-ritual.jpg',
    secondaryImage: '/images/nail-spa.jpg',
    benefits: [
      'Clears blackheads and sebaceous congestion without trauma',
      'Balances T-zone oil production while hydrating dry cheeks',
      'Leaves skin fresh, breathable, and calm',
    ],
    included: [
      'Double botanical oil & micellar cleanse',
      'Ultrasonic cavitation pore purification',
      'High-frequency antibacterial ozone wand',
      'Rosehip & French clay soothing mask',
    ],
    transformationNote: {
      beforeState: 'Congested T-zone and dull surface buildup.',
      afterState: 'Clarified, matte-luminous complexion.',
      longevity: '3 to 4 weeks of clear pore balance.',
    },
    faqs: [
      {
        question: 'How often should I schedule an Artisan Clean-Up?',
        answer: 'Every 28 days aligns naturally with your epidermis cellular turnover cycle.',
      },
    ],
  },
  {
    id: 'skin-5',
    slug: 'haute-bespoke-dermal-ritual',
    name: 'Haute Bespoke Dermal Architecture Ritual',
    subtitle: '105 minutes of полностью customized master esthetician curation',
    category: 'Skin',
    shortDescription:
      'Our pinnacle skincare experience—every modality, serum, and massage technique custom-compounded in real time for your skin.',
    fullDescription:
      'No two skins are identical. In our Haute Bespoke Dermal Ritual, our Lead Esthetician reserves 105 uninterrupted minutes to blend custom raw botanical actives, cryo-sculpting, micro-current, oxygen infusion, and LED phototherapy tailored exclusively to what your skin asks for that day.',
    startingPrice: 350,
    durationMinutes: 105,
    durationLabel: '105 Min',
    image: '/images/skin-ritual.jpg',
    secondaryImage: '/images/hero-atelier.jpg',
    benefits: [
      'Unrestricted access to all non-invasive modalities in one session',
      'Includes décolleté, neck, and hand rejuvenation treatment',
      'Personalized seasonal home-care prescription',
    ],
    included: [
      'Comprehensive dermal mapping consultation',
      'Custom-blended active resurfacing & multi-modality lifting',
      'Décolleté & hand warm paraffin-free botanical wrap',
      'Bespoke serum layering & sun-veil finish',
    ],
    transformationNote: {
      beforeState: 'Complex combination concerns across face, neck, and décolleté.',
      afterState: 'Harmonized, deeply rested, and visibly lifted skin from brow to collarbone.',
      longevity: '4+ weeks of peak dermal vitality.',
    },
    faqs: [
      {
        question: 'Is this the best choice if I am unsure which facial I need?',
        answer:
          'Absolutely. You simply reserve the time, and your master esthetician designs the entire protocol upon examining your skin.',
      },
    ],
  },

  // 3. MAKEUP
  {
    id: 'makeup-1',
    slug: 'haute-couture-bridal-atelier',
    name: 'Haute Couture Bridal Makeup & Hair Atelier',
    subtitle: 'Timeless, editorial bridal beauty engineered for 16-hour luminosity',
    category: 'Makeup',
    shortDescription:
      'Bespoke bridal makeup and architectural bridal hair styling designed to look effortlessly breathtaking in natural light and high-definition film.',
    fullDescription:
      'At ÉLORA, bridal beauty is never a heavy mask—it is an elevated revelation of your most radiant self. Beginning with a luxury cryo-sculpting skin prep, our Bridal Director layers weightless silk pigments, custom individual lash clusters, and weather-proof veil setting so your look remains pristine from morning vows to midnight candlelit portraits.',
    startingPrice: 680,
    durationMinutes: 180,
    durationLabel: '180 Min',
    image: '/images/bridal-couture.jpg',
    secondaryImage: '/images/hair-artistry.jpg',
    featured: true,
    benefits: [
      'Includes 25-minute cryo-lymphatic skin preparation before makeup',
      'Custom-mapped individual silk lash clusters for weightless flutter',
      'Flash-photography and 4K cinema tested for zero flashback',
      'Deluxe bridal touch-up kit with full-size lip colour & blotting silk',
    ],
    included: [
      'Pre-event visual moodboard & dress neckline harmony planning',
      'Cryo-hydration skin prep & 24K gold eye mask',
      'Haute couture complexion, eye, and lip artistry',
      'Architectural bridal chignon or Hollywood wave styling + veil placement',
      'Curated luxury touch-up pochette',
    ],
    transformationNote: {
      beforeState: 'Natural bare skin and unstyled locks prior to ceremony.',
      afterState: 'Luminous glass skin, softly sculpted features, and timeless bridal hair architecture.',
      longevity: 'Water-resistant, tear-proof 16-hour wear.',
    },
    faqs: [
      {
        question: 'Do you offer a bridal preview trial session prior to the wedding day?',
        answer:
          'Yes, we strongly recommend scheduling a 2-hour Bridal Preview Session 6–8 weeks prior to your wedding date.',
      },
      {
        question: 'Can your Bridal Atelier team travel to my wedding venue?',
        answer:
          'Yes, private suite or on-location travel is available upon request through our Bridal Concierge.',
      },
    ],
  },
  {
    id: 'makeup-2',
    slug: 'luminous-engagement-soiree',
    name: 'Luminous Engagement & Soirée Artistry',
    subtitle: 'Soft-focus romantic glamour for engagement portraits and rehearsal dinners',
    category: 'Makeup',
    shortDescription:
      'Radiant, skin-enhancing makeup and soft editorial hair styling crafted for engagement shoots, civil ceremonies, and milestone soirées.',
    fullDescription:
      'Designed to harmonize with golden-hour outdoor photography and intimate candlelit dinners, our Engagement & Soirée service focuses on velvet-dewy skin, softly defined eyes in champagne and espresso tones, and effortless hair movement.',
    startingPrice: 360,
    durationMinutes: 120,
    durationLabel: '120 Min',
    image: '/images/bridal-couture.jpg',
    secondaryImage: '/images/skin-ritual.jpg',
    benefits: [
      'Complete makeup + soft hair styling in one seamless 2-hour session',
      'Tailored for golden-hour portrait photography',
      'Includes seamless individual lash accents',
    ],
    included: [
      'Botanical radiance primer & lymphatic facial prep',
      'Full complexion, eye, and lip artistry',
      'Polished waves or modern sleek bun styling',
    ],
    transformationNote: {
      beforeState: 'Everyday styling.',
      afterState: 'Polished, camera-ready romantic radiance.',
      longevity: '12+ hours of crease-free wear.',
    },
    faqs: [
      {
        question: 'Can I bring my engagement outfit to coordinate tones?',
        answer: 'Yes, we encourage bringing fabric swatches or photos of your ensemble.',
      },
    ],
  },
  {
    id: 'makeup-3',
    slug: 'red-carpet-evening-glamour',
    name: 'Red Carpet Evening Makeup',
    subtitle: 'Sophisticated sculptural glamour for galas and black-tie evenings',
    category: 'Makeup',
    shortDescription:
      'Elevated evening makeup artistry—from velvet smoky eyes to luminous satin skin and sculpted cheekbones.',
    fullDescription:
      'Whether attending a charity gala, opera opening, or milestone celebration, our Red Carpet Evening Makeup delivers unmistakable sophistication without caking or settling into fine lines.',
    startingPrice: 225,
    durationMinutes: 75,
    durationLabel: '75 Min',
    image: '/images/bridal-couture.jpg',
    secondaryImage: '/images/hero-atelier.jpg',
    benefits: [
      'Custom-blended foundation matched across face, neck, and décolleté',
      'Bespoke eye framing with knot-free individual silk lashes',
      'Collarbone and shoulder subtle champagne illumination',
    ],
    included: [
      'Express hydrating sheet-mask prep',
      'Full evening makeup application & lash placement',
      'Décolleté body luminizer finish',
    ],
    transformationNote: {
      beforeState: 'Daytime bare complexion.',
      afterState: 'Refined, editorial evening sophistication.',
      longevity: 'All-night wear.',
    },
    faqs: [
      {
        question: 'Do you use luxury clean and hypoallergenic cosmetics?',
        answer:
          'Yes, our kit is curated from Chanel, Westman Atelier, Victoria Beckham Beauty, and Koh Gen Do.',
      },
    ],
  },
  {
    id: 'makeup-4',
    slug: 'editorial-camera-ready-artistry',
    name: 'Editorial & Portrait Camera-Ready Artistry',
    subtitle: 'High-definition micro-perfection for brand shoots, press, and portraits',
    category: 'Makeup',
    shortDescription:
      'Ultra-refined skin texture perfection and expressive bone-structure shading engineered for studio strobes and 8K portrait lenses.',
    fullDescription:
      'Created for founders, executives, artists, and editorial campaigns, this session prioritizes undetectable micro-concealing, shine control in key studio zones, and authentic, commanding presence on camera.',
    startingPrice: 260,
    durationMinutes: 90,
    durationLabel: '90 Min',
    image: '/images/bridal-couture.jpg',
    secondaryImage: '/images/hair-artistry.jpg',
    benefits: [
      'HD macro-lens safe—zero visible powder texture',
      'Includes eyebrow architecture grooming and lip conditioning',
      'Designed specifically for studio strobe or natural daylight shoots',
    ],
    included: [
      'Skin-texture smoothing prep',
      'High-definition micro-concealing & contour balance',
      'Camera test check under adjustable Kelvin studio mirror',
    ],
    transformationNote: {
      beforeState: 'Uneven studio reflection and camera wash-out.',
      afterState: 'Crisp, dimensional facial features that command the lens.',
      longevity: '10–12 hours under studio lighting.',
    },
    faqs: [
      {
        question: 'Can you adjust the lighting temperature during application?',
        answer:
          'Yes, our makeup stations feature true-CRI Kelvin-adjustable mirrors simulating daylight, studio flash, and evening candlelight.',
      },
    ],
  },

  // 4. NAILS
  {
    id: 'nails-1',
    slug: 'champagne-botanical-manicure',
    name: 'Champagne & Botanical Hand Ritual Manicure',
    subtitle: 'Russian-precision cuticle care, warm oil compress, and sheer couture polish',
    category: 'Nails',
    shortDescription:
      'Meticulous waterless e-file cuticle refinement, organic rosehip scrub, warm travertine stone hand massage, and sheer luminous gel or lacquer.',
    fullDescription:
      'More than a manicure, this 60-minute hand sanctuary restores youthful softness to hands and impeccable precision to nails. Using sterile diamond bits for gentle dry cuticle care, we shape the nail plate to elongate the fingers before applying breathable Japanese gel or high-gloss vegan lacquer.',
    startingPrice: 95,
    durationMinutes: 60,
    durationLabel: '60 Min',
    image: '/images/nail-spa.jpg',
    secondaryImage: '/images/hero-atelier.jpg',
    featured: true,
    benefits: [
      'Waterless precision cuticle care prevents premature gel lifting',
      'Includes exfoliating botanical sugar polish & warm basalt stone massage',
      'Hospital-grade autoclave sterilization for every single instrument',
      'Curated wardrobe of sheer ivories, espresso noir, and champagne nudes',
    ],
    included: [
      'Architectural nail shaping & gentle diamond-bit cuticle refinement',
      'Botanical oil exfoliation & warm towel wrap',
      'Forearm & hand acupressure massage',
      'Japanese structured base + gel colour or breathable luxury lacquer',
    ],
    transformationNote: {
      beforeState: 'Dry cuticles, uneven nail lengths, and fatigued hands.',
      afterState: 'Impeccably contoured nail beds with a cushiony, glass-smooth finish.',
      longevity: '3 to 4 weeks of chip-free brilliance.',
    },
    faqs: [
      {
        question: 'How do you remove existing gel polish?',
        answer:
          'We use a gentle ceramic removal technique followed by a nourishing keratin nail bath—never harsh scraping that thins your natural nail.',
      },
    ],
  },
  {
    id: 'nails-2',
    slug: 'travertine-mineral-spa-pedicure',
    name: 'Travertine Mineral & Botanical Spa Pedicure',
    subtitle: ' Copper-bowl aromatic soak, volcanic pumice resurfacing, and reflexology',
    category: 'Nails',
    shortDescription:
      'Performed in private reclined bouclé suites with hammered copper foot basins, dead-sea mineral salts, callus resurfacing, and lower-leg massage.',
    fullDescription:
      'Sink into quiet serenity while your feet soak in warm infusion of crushed eucalyptus, chamomile, and magnesium salts. We gently resurface heels with enzymatic fruit acids and volcanic stone before performing a 20-minute reflexology massage and flawless polish application.',
    startingPrice: 135,
    durationMinutes: 75,
    durationLabel: '75 Min',
    image: '/images/nail-spa.jpg',
    secondaryImage: '/images/skin-ritual.jpg',
    benefits: [
      'Pipe-free hammered copper basins ensure 100% clinical hygiene',
      'Enzymatic heel resurfacing leaves skin baby-soft without blades',
      'Relieves lower-leg swelling and foot fatigue',
    ],
    included: [
      'Warm magnesium & botanical flower foot bath',
      'Precision nail & cuticle detailing',
      'Enzymatic heel peel & volcanic mineral buff',
      '20-minute lower leg & foot reflexology + gel or lacquer finish',
    ],
    transformationNote: {
      beforeState: 'Tired, heavy legs and dry heels.',
      afterState: 'Velvet-smooth heels and jewel-like toe polish.',
      longevity: '4 to 6 weeks of pristine pedicure wear.',
    },
    faqs: [
      {
        question: 'Can I book a manicure and pedicure simultaneously?',
        answer:
          'Yes, two nail artists can coordinate in our private suite upon request to complete both rituals in 75 minutes.',
      },
    ],
  },
  {
    id: 'nails-3',
    slug: 'sculpted-silk-gel-extensions',
    name: 'Sculpted Silk Builder Gel Extensions',
    subtitle: 'Featherlight architectural length with natural-nail flexibility',
    category: 'Nails',
    shortDescription:
      'Custom paper-form sculpted extensions using odorless Japanese soft builder gel—ultra-thin, durable, and indistinguishable from natural nails.',
    fullDescription:
      'We never use bulky plastic glue-on tips or harsh monomer acrylics. Each extension is custom-sculpted on tailored forms to match your natural C-curve, creating slender, graceful almond, oval, or squoval silhouettes that protect natural nail growth underneath.',
    startingPrice: 175,
    durationMinutes: 90,
    durationLabel: '90 Min',
    image: '/images/nail-spa.jpg',
    secondaryImage: '/images/bridal-couture.jpg',
    benefits: [
      'Zero acrylic monomer fumes or nail-bed dehydration',
      'Slender, natural-looking apex that feels weightless',
      'Soaks off or infills cleanly while your natural nails grow beneath',
    ],
    included: [
      'Custom form tailoring & cuticle preparation',
      'Japanese builder-gel architectural sculpting',
      'Custom sheer nude or solid shade + nourishing cuticle elixir',
    ],
    transformationNote: {
      beforeState: 'Short, brittle, or bitten nails.',
      afterState: 'Elegant, elongated fingers with natural-looking strength.',
      longevity: '3 to 4 weeks before recommended rebalance.',
    },
    faqs: [
      {
        question: 'Will these extensions damage my natural nails?',
        answer:
          'No—our builder gel is flexible and HEMA-free, acting as a protective shield over weak nails.',
      },
    ],
  },
  {
    id: 'nails-4',
    slug: 'bespoke-micro-french-gold-leaf-art',
    name: 'Bespoke Micro-French & 24K Gold Leaf Nail Art',
    subtitle: 'Minimalist haute nail couture, pearl chrome, and hand-gilded details',
    category: 'Nails',
    shortDescription:
      'Fine-line editorial nail artistry including whisper-thin French tips, glazed pearl finishes, tortoise-shell accents, and genuine gold leaf.',
    fullDescription:
      'Designed for the minimalist connoisseur, our Nail Artistry celebrates restraint and exquisite detail. Using 5mm sable detail brushes, our artists hand-paint micro-French crescents, delicate negative-space geometry, and genuine 24-karat gold leaf encapsulation over sheer milky bases.',
    startingPrice: 145,
    durationMinutes: 75,
    durationLabel: '75 Min',
    image: '/images/nail-spa.jpg',
    secondaryImage: '/images/hero-atelier.jpg',
    benefits: [
      'Includes full structured gel manicure base',
      'Hand-painted micro-details tailored to your hand proportions and jewelry',
      'Encapsulated in high-clarity diamond top coat',
    ],
    included: [
      'Full Russian-precision cuticle care & structured base',
      'Bespoke nail art across all 10 nails (micro-French, pearl glaze, or gold leaf)',
      'Botanical hand balm massage',
    ],
    transformationNote: {
      beforeState: 'Plain nails.',
      afterState: 'Subtle, jewelry-like nail couture.',
      longevity: '3+ weeks of non-yellowing clarity.',
    },
    faqs: [
      {
        question: 'Is this popular for bridal manicure bookings?',
        answer:
          'Yes, our sheer ivory base with a whisper of champagne gold leaf is our most requested bridal manicure.',
      },
    ],
  },

  // 5. SPA & WELLNESS
  {
    id: 'spa-1',
    slug: 'warm-amber-aromatherapy-massage',
    name: 'Warm Amber & Neroli Deep Serenity Massage',
    subtitle: 'Full-body myofascial release with melted botanical amber candle oil',
    category: 'Spa & Wellness',
    shortDescription:
      'A 90-minute full-body choreography blending Swedish long strokes, deep myofascial trigger release, and warm melted shea-amber elixir.',
    fullDescription:
      'Step out of city tempo into a heated linen sanctuary scented with Corsican neroli, sandalwood, and warm amber resin. Your therapist customizes pressure across back, shoulders, legs, and cranial points using warm botanical elixir poured directly from a hand-thrown ceramic vessel.',
    startingPrice: 230,
    durationMinutes: 90,
    durationLabel: '90 Min',
    image: '/images/skin-ritual.jpg',
    secondaryImage: '/images/hero-atelier.jpg',
    featured: true,
    benefits: [
      'Melts chronic shoulder, neck, and lower-back muscular tension',
      'Lowers cortisol and promotes deep parasympathetic nervous system rest',
      'Nourishes dry skin with warm organic shea, jojoba, and amber oil',
    ],
    included: [
      'Sensory inhalation & pressure customization consultation',
      'Warm foot-cleansing ritual with neroli blossom water',
      '90-minute full-body & cranial massage on heated memory-linen table',
      'Post-ritual private lounge rest with organic saffron-chamomile tea',
    ],
    transformationNote: {
      beforeState: 'Physical stiffness, mental fatigue, and elevated stress.',
      afterState: 'Deeply grounded calm, fluid posture, and supple skin.',
      longevity: 'Profound nervous system reset and muscular relief.',
    },
    faqs: [
      {
        question: 'Can I request firm or deep-tissue pressure?',
        answer:
          'Yes, your therapist calibrates pressure zone-by-zone according to your preference.',
      },
    ],
  },
  {
    id: 'spa-2',
    slug: 'crushed-pearl-silk-body-polish',
    name: 'Crushed Pearl & Camellia Silk Body Polish',
    subtitle: 'Full-body exfoliation, warm linen cocoon, and velvet body butter infusion',
    category: 'Spa & Wellness',
    shortDescription:
      'Reveal luminous, satin-smooth skin from neck to toe with micronized freshwater pearl powder, camellia oil, and a warm mineral wrap.',
    fullDescription:
      'The ultimate pre-vacation or bridal body preparation. Dry lymphatic brushing awakens circulation before a warm emulsion of crushed freshwater pearl and apricot kernel buffs away dullness. After a warm rain-shower rinse, your skin is drenched in whipped camellia and vanilla bean body soufflé.',
    startingPrice: 265,
    durationMinutes: 90,
    durationLabel: '90 Min',
    image: '/images/nail-spa.jpg',
    secondaryImage: '/images/skin-ritual.jpg',
    benefits: [
      'Transforms dry, winter-dull skin into uniform satin radiance',
      'Stimulates full-body lymphatic drainage via dry silk brushing',
      'Leaves skin delicately scented and deeply moisturized for days',
    ],
    included: [
      'Full-body lymphatic dry brushing',
      'Crushed pearl & botanical oil exfoliation',
      'Warm thermal linen wrap & scalp acupressure',
      '30-minute hydrating camellia body butter effleurage',
    ],
    transformationNote: {
      beforeState: 'Rough elbows, knees, and dehydrated body skin.',
      afterState: 'Glowing, cashmere-soft skin across the entire body.',
      longevity: '3 to 4 weeks of silky skin texture.',
    },
    faqs: [
      {
        question: 'Is a private shower included inside the treatment suite?',
        answer:
          'Yes, our Spa Sanctuary suites feature private rain showers with heated marble floors.',
      },
    ],
  },
  {
    id: 'spa-3',
    slug: 'sound-bath-ayurvedic-head-ritual',
    name: 'Tibetan Sound Bath & Shirodhara Sensory Ritual',
    subtitle: 'Warm herbal oil third-eye stream, marma-point massage, and acoustic resonance',
    category: 'Spa & Wellness',
    shortDescription:
      'An ancient Ayurvedic nervous-system sanctuary pairing a continuous warm sesame-brahmi oil stream over the forehead with harmonic singing bowls.',
    fullDescription:
      'Created for guests experiencing mental overload or sleeplessness, this transcendent 105-minute ritual quiets the mind within minutes. Harmonic bronze singing bowls attune brainwaves to alpha-theta states while warm, herb-infused botanical oil flows rhythmically across the forehead and scalp.',
    startingPrice: 295,
    durationMinutes: 105,
    durationLabel: '105 Min',
    image: '/images/hero-atelier.jpg',
    secondaryImage: '/images/skin-ritual.jpg',
    benefits: [
      'Induces deep meditative calm and restores sleep quality',
      'Deeply conditions scalp and hair roots with warm Ayurvedic botanicals',
      'Releases ocular, jaw, and cervical spine tension',
    ],
    included: [
      'Harmonic bronze bowl acoustic grounding',
      'Back, neck & shoulder warm oil marma-point release',
      '35-minute continuous warm botanical Shirodhara oil stream',
      'Gentle cleansing wash & effortless blow-dry finish',
    ],
    transformationNote: {
      beforeState: 'Overstimulated mind, screen fatigue, and restless sleep.',
      afterState: 'Profound stillness, clear gaze, and deeply nourished hair.',
      longevity: 'Lasting mental clarity and improved sleep cycles.',
    },
    faqs: [
      {
        question: 'Will I walk out with oily hair?',
        answer:
          'Never—we conclude your ritual at our spa wash lounge with a gentle purifying wash and complimentary blow-dry.',
      },
    ],
  },
];

export const SPECIALISTS_DATA: Specialist[] = [
  {
    id: 'spec-1',
    name: 'Céleste Vance',
    role: 'Founder & Creative Hair Director',
    specialtyCategory: 'Hair',
    specialties: ['Architectural Cutting', 'French Editorial Balayage', 'Runway Hair Direction'],
    experienceYears: 16,
    bio: 'Trained in Paris and Milan before founding ÉLORA Beauty Atelier, Céleste spent a decade backstage at haute couture collections. She is renowned for her sculptural dry-cutting technique and effortless, sun-lit hair colour that grows out with imperceptible grace.',
    philosophy: 'True luxury hair never looks overworked; it moves like silk and belongs entirely to the woman wearing it.',
    image: '/images/hair-artistry.jpg',
    instagramHandle: '@celestevance.elora',
    featured: true,
  },
  {
    id: 'spec-2',
    name: 'Dr. Soraya Rostami',
    role: 'Lead Dermal Aesthetician & Facial Sculptor',
    specialtyCategory: 'Skin',
    specialties: ['Buccal Myofascial Lifting', '24K Cellular Facials', 'Barrier Restoration'],
    experienceYears: 14,
    bio: 'With a background in cellular biochemistry and holistic esthetics in Geneva, Soraya pioneered ÉLORA’s signature 24K Cellular Sculpting Facial. Her hands combine clinical precision with deeply restorative lymphatic choreography.',
    philosophy: 'When we respect the skin barrier and release deep muscular tension, radiance becomes inevitable.',
    image: '/images/skin-ritual.jpg',
    instagramHandle: '@soraya.skin.elora',
    featured: true,
  },
  {
    id: 'spec-3',
    name: 'Amélie Laurent',
    role: 'Principal Bridal & Editorial Makeup Artist',
    specialtyCategory: 'Makeup',
    specialties: ['Haute Couture Bridal', 'Luminous Glass Skin', 'Red Carpet Artistry'],
    experienceYears: 12,
    bio: 'Amélie’s work has graced international bridal publications and film festivals. Specializing in luminous, skin-first complexion work, she transforms brides with timeless elegance that looks equally extraordinary in intimate candlelight and high-resolution editorial photography.',
    philosophy: 'Makeup should reveal your bone structure and spirit—never conceal the woman beneath.',
    image: '/images/bridal-couture.jpg',
    instagramHandle: '@amelielaurent.mua',
    featured: true,
  },
  {
    id: 'spec-4',
    name: 'Elena Kováč',
    role: 'Master Colourist & Hair Spa Trichologist',
    specialtyCategory: 'Hair',
    specialties: ['Dimensional Brunettes & Blondes', 'Botanical Caviar Hair Spa', 'Cashmere Keratin'],
    experienceYears: 11,
    bio: 'Certified in holistic trichology and bespoke pigment alchemy, Elena approaches hair colour through the lens of fiber health. She crafts rich espresso, warm honey, and cool champagne tones while restoring compromised hair to virgin-like softness.',
    philosophy: 'Luminous colour cannot exist without healthy, deeply hydrated hair fiber.',
    image: '/images/hair-artistry.jpg',
    instagramHandle: '@elenakovac.colour',
    featured: false,
  },
  {
    id: 'spec-5',
    name: 'Mei-Ling Lin',
    role: 'Director of Nail Couture & Hand Spa',
    specialtyCategory: 'Nails',
    specialties: ['Russian Precision Manicure', '24K Gold Leaf Micro-Art', 'Japanese Silk Gel'],
    experienceYears: 10,
    bio: 'Trained in Tokyo and Seoul in minimalist nail architecture, Mei-Ling elevates nail care to fine jewelry. Her featherlight Japanese gel extensions and whisper-thin micro-French designs are sought after by brides and editors alike.',
    philosophy: 'Refinement lives in the millimeter details—cuticle health, apex harmony, and sheer translucent tone.',
    image: '/images/nail-spa.jpg',
    instagramHandle: '@meiling.nailatelier',
    featured: true,
  },
  {
    id: 'spec-6',
    name: 'Sienna Moreau',
    role: 'Holistic Spa & Ayurvedic Wellness Director',
    specialtyCategory: 'Spa & Wellness',
    specialties: ['Warm Amber Myofascial Massage', 'Shirodhara & Sound Healing', 'Lymphatic Body Polish'],
    experienceYears: 13,
    bio: 'Combining French thalassotherapy training with traditional Ayurvedic marma-point mastery, Sienna curates ÉLORA’s sensory wellness rituals. Her sessions are designed to quiet the modern nervous system and restore physical equipoise.',
    philosophy: 'Stillness is the most potent beauty treatment in the world.',
    image: '/images/hero-atelier.jpg',
    instagramHandle: '@siennamoreau.wellness',
    featured: false,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Travertine Archway Sanctuary',
    category: 'Salon Interiors',
    caption: 'Honed Roman travertine arches, custom champagne brass mirrors, and warm ivory bouclé seating bathed in morning sunlight.',
    specialist: 'Maison ÉLORA Architecture',
    image: '/images/hero-atelier.jpg',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-2',
    title: 'Riviera Champagne Balayage',
    category: 'Hair Transformations',
    caption: 'Hand-swept dimensional honey and champagne ribbons with a silk round-brush wave finish.',
    specialist: 'Céleste Vance',
    image: '/images/hair-artistry.jpg',
    aspectRatio: 'portrait',
  },
  {
    id: 'gal-3',
    title: 'Pearl & Chignon Bridal Couture',
    category: 'Bridal Makeup',
    caption: 'Luminous glass-skin bridal complexion paired with a low architectural chignon and freshwater pearl hairpin.',
    specialist: 'Amélie Laurent',
    image: '/images/bridal-couture.jpg',
    aspectRatio: 'portrait',
  },
  {
    id: 'gal-4',
    title: '24K Cellular Facial Sanctuary',
    category: 'Skincare Treatments',
    caption: 'Myofascial sculptural lifting and cold-pressed botanical serum infusion in our acoustic candlelit suite.',
    specialist: 'Dr. Soraya Rostami',
    image: '/images/skin-ritual.jpg',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-5',
    title: 'Gilded Micro-French Manicure',
    category: 'Nail Art',
    caption: 'Sheer warm ivory Japanese gel finished with hand-placed 24K champagne gold leaf tips on honed travertine.',
    specialist: 'Mei-Ling Lin',
    image: '/images/nail-spa.jpg',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-6',
    title: 'Golden Hour Editorial Glow',
    category: 'Makeup Looks',
    caption: 'Soft-focus satin complexion, brushed feathered brows, and warm rose-champagne lip tint for editorial portraits.',
    specialist: 'Amélie Laurent',
    image: '/images/bridal-couture.jpg',
    aspectRatio: 'square',
  },
  {
    id: 'gal-7',
    title: 'Botanical Apothecary & Elixir Bar',
    category: 'Beauty Details',
    caption: 'Small-batch amber glass serums, ceramic mortar vessels, and organic linen compress rituals prepared fresh for every guest.',
    specialist: 'Sienna Moreau',
    image: '/images/nail-spa.jpg',
    aspectRatio: 'square',
  },
  {
    id: 'gal-8',
    title: 'Architectural Dry Cut & Gloss',
    category: 'Hair Transformations',
    caption: 'Collarbone-grazing layers with an amino-acid pearl gloss for effortless natural movement.',
    specialist: 'Elena Kováč',
    image: '/images/hair-artistry.jpg',
    aspectRatio: 'portrait',
  },
  {
    id: 'gal-9',
    title: 'Private Styling & Mirror Gallery',
    category: 'Salon Interiors',
    caption: 'Custom Kelvin-calibrated brass vanity mirrors engineered to flatter natural skin tones.',
    specialist: 'Maison ÉLORA Architecture',
    image: '/images/hero-atelier.jpg',
    aspectRatio: 'landscape',
  },
];

export const PRICING_PACKAGES: PackageOffer[] = [
  {
    id: 'pkg-bridal-1',
    title: 'The ÉLORA Royal Bridal Suite Experience',
    tier: 'Bridal Couture',
    subtitle: 'Complete pre-wedding dermal sculpting, hair preparation, and wedding-day couture artistry',
    price: 1450,
    billingNote: 'Demonstration Package Price · Complete 3-Visit Bridal Curation',
    durationLabel: 'Multi-Day Curation',
    idealFor: 'Brides seeking a seamless, unhurried countdown from 2 weeks prior through wedding morning.',
    includes: [
      '2-Hour Bridal Makeup & Hair Architecture Preview Session (6 weeks prior)',
      '24K Cellular Sculpting & Buccal Facial + Botanical Caviar Hair Spa (4 days prior)',
      'Champagne Botanical Manicure & Travertine Mineral Spa Pedicure (2 days prior)',
      'Wedding Day Haute Couture Bridal Makeup, Hair Styling, Veil Placement & Deluxe Touch-Up Pochette',
    ],
  },
  {
    id: 'pkg-ritual-1',
    title: 'A Day at Maison ÉLORA — Complete Sanctuary',
    tier: 'Signature Ritual',
    subtitle: 'Four hours of head-to-toe sensory restoration and luminous styling',
    price: 690,
    billingNote: 'Demonstration Package Price · Half-Day Private Suite',
    durationLabel: '4.5 Hours',
    idealFor: 'Milestone celebrations, restorative self-care days, or luxury gifting.',
    includes: [
      'Warm Amber & Neroli Deep Serenity Massage (60 Min)',
      'Hyaluronic Cryo-Hydration Facial Ritual (75 Min)',
      'Botanical Caviar Hair Spa & Architectural Silk Blowout (75 Min)',
      'Champagne Botanical Manicure + Artisan Herbal Tea & Artisanal Pastry Service',
    ],
  },
  {
    id: 'pkg-member-1',
    title: 'Atelier Privé — Monthly Beauty Membership',
    tier: 'Atelier Membership',
    subtitle: 'Effortless year-round radiance with priority concierge access',
    price: 395,
    billingNote: 'Demonstration Monthly Membership · Cancel Anytime',
    durationLabel: 'Monthly Curation',
    idealFor: 'Guests who value consistent dermal vitality, impeccable hair luster, and priority seasonal booking.',
    includes: [
      'One Monthly Signature Facial (24K Cellular Sculpting or Cryo-Hydration)',
      'Two Monthly Silk Blowouts or One Botanical Caviar Hair Spa',
      'One Monthly Champagne Botanical Manicure',
      '15% Privilege on all colour, bridal, and retail botanical formulations',
    ],
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Camille De la Fontaine',
    clientRole: 'Architectural Interior Designer',
    serviceName: 'Luminous Dimensional Balayage & Cut',
    specialistName: 'Céleste Vance',
    quote:
      'From the moment you step beneath the travertine arches, the city noise vanishes. Céleste studied my bone structure for twenty minutes before picking up her shears. Four months later, my balayage still looks like natural Riviera sunlight.',
    outcomeSummary: '16-week seamless colour longevity with zero brassiness',
    dateLabel: 'Autumn Portfolio Demo',
  },
  {
    id: 'test-2',
    clientName: 'Victoria Sterling-Hayes',
    clientRole: 'Autumn Bride at The Conservatory',
    serviceName: 'Haute Couture Bridal Makeup & Hair Atelier',
    specialistName: 'Amélie Laurent',
    quote:
      'I wanted to look like myself on my wedding day—only infinitely more rested and luminous. Amélie’s cryo-skin prep and featherlight complexion work lasted through sixteen hours of happy tears, rain, and candlelit portraits.',
    outcomeSummary: '16-hour tear-proof bridal radiance across 4K film & daylight',
    dateLabel: 'Bridal Showcase Demo',
  },
  {
    id: 'test-3',
    clientName: 'Nadia Al-Mansoor',
    clientRole: 'Art Gallery Director',
    serviceName: '24K Cellular Sculpting & Buccal Facial',
    specialistName: 'Dr. Soraya Rostami',
    quote:
      'Soraya’s buccal sculpting facial is the closest thing to non-surgical architecture I have ever experienced. The chronic tension in my jaw melted away, and my cheekbones looked visibly lifted before my gallery opening that evening.',
    outcomeSummary: 'Immediate myofascial jawline lift with zero post-facial redness',
    dateLabel: 'Skincare Sanctuary Demo',
  },
  {
    id: 'test-4',
    clientName: 'Geneviève Chen',
    clientRole: 'Classical Cellist',
    serviceName: 'Champagne Botanical Manicure & Gold Leaf Art',
    specialistName: 'Mei-Ling Lin',
    quote:
      'As a musician, my hands are always in focus and my nails must remain strong yet natural. Mei-Ling’s waterless cuticle precision and whisper-thin champagne gold micro-French lasted three full weeks of concert performances.',
    outcomeSummary: '24 days of chip-free structured gel wear',
    dateLabel: 'Nail Couture Demo',
  },
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'art-1',
    slug: 'the-architecture-of-luminous-bridal-skin',
    title: 'The Architecture of Luminous Bridal Skin: A 90-Day Countdown',
    subtitle: 'Why unforgettable bridal makeup begins ninety days before the ceremony inside the dermal barrier.',
    category: 'Bridal Beauty Inspiration',
    author: 'Dr. Soraya Rostami & Amélie Laurent',
    authorRole: 'Lead Dermal Aesthetician & Principal Bridal Artist',
    publishedDate: 'October 24, 2026',
    readingTime: '6 Min Read',
    coverImage: '/images/bridal-couture.jpg',
    featured: true,
    excerpt:
      'Discover how pairing cellular myofascial sculpting with barrier-first hydration creates a glass-skin canvas that requires half the foundation weight on your wedding morning.',
    pullQuote:
      'The secret to timeless bridal photography is never heavier coverage—it is skin so deeply hydrated and sculpted that light bounces off the high points of the face naturally.',
    sections: [
      {
        heading: '01. Ninety Days Out: Cellular Barrier Rehabilitation',
        paragraphs: [
          'Three months before your wedding day is the moment to replace aggressive at-home acid exfoliation with lipid-rich barrier nourishment. When the stratum corneum is intact and plumped with ceramides and multi-molecular hyaluronic acid, pigment glides across the skin like silk rather than clinging to microscopic dry patches.',
          'At ÉLORA, we begin every bridal journey with a dermal mapping consultation and our Bio-Luminance PHA & Exosome facial to gently unify tone across the face, neck, and décolleté.',
        ],
      },
      {
        heading: '02. Thirty Days Out: Sculptural Buccal & Lymphatic Release',
        paragraphs: [
          'Wedding planning inevitably invites subtle jaw clenching and fluid retention around the orbital bone. By introducing intra-oral buccal massage four weeks prior—and repeating it 72 hours before the ceremony—we release the masseter and zygomatic muscles, allowing your natural cheekbones and jawline to emerge with serene clarity.',
        ],
      },
      {
        heading: '03. Wedding Morning: Cryo-Prep and Micro-Layering',
        paragraphs: [
          'Before a single drop of foundation touches the skin, we spend twenty-five minutes performing chilled cryo-porcelain lymphatic drainage and applying a 24K gold peptide eye mask. This lowers skin surface temperature, tightens pores, and guarantees sixteen hours of crease-free luminosity.',
        ],
      },
    ],
    keyTakeaways: [
      'Pause all new active retinoids or aggressive peels 45 days before the wedding.',
      'Extend your evening serums and SPF down to the collarbone and shoulders.',
      'Schedule your final 24K Cellular Sculpting Facial 3 to 5 days prior to the ceremony.',
    ],
  },
  {
    id: 'art-2',
    slug: 'french-balayage-vs-traditional-foils',
    title: 'The Quiet Luxury of French Balayage: Why Seamless Grow-Out Matters',
    subtitle: 'How open-air hand painting mimics natural golden-hour reflection while preserving hair fiber integrity.',
    category: 'Hair Care Tips',
    author: 'Céleste Vance',
    authorRole: 'Founder & Creative Hair Director',
    publishedDate: 'October 12, 2026',
    readingTime: '5 Min Read',
    coverImage: '/images/hair-artistry.jpg',
    excerpt:
      'Explore the artistic philosophy behind open-air balayage, acidic pearl glossing, and how to maintain cashmere-soft dimension for six months between appointments.',
    pullQuote:
      'Great hair colour should whisper, never shout. When painted by hand in open air, each ribbon transitions so softly at the root that time only makes it more beautiful.',
    sections: [
      {
        heading: '01. Open-Air Clay Lightening vs. Thermal Foil Stripping',
        paragraphs: [
          'Traditional metal foils trap heat, swelling the hair cuticle rapidly and creating a rigid line of demarcation at the scalp. Within four weeks, regrowth appears stark and requires urgent maintenance.',
          'In contrast, French open-air balayage uses kaolin-clay lighteners that form a breathable outer shell while keeping the interior moist. This lifts pigment gently by two to three levels, mimicking how summer light naturally kisses the exterior curves of a wave.',
        ],
      },
      {
        heading: '02. The Acidic Pearl Gloss Secret',
        paragraphs: [
          'The true magic of dimensional colour happens at the shampoo lounge. By applying an ammonia-free, acidic pH demi-permanent glaze enriched with silk amino acids, we close the cuticle scales flat so light reflects like a mirror.',
        ],
      },
    ],
    keyTakeaways: [
      'Book a 45-minute pearl gloss & botanical caviar spa treatment at week 8 to revive tone.',
      'Always apply a cold-pressed camellia or argan thermal shield before blow-drying.',
      'Filter shower water to prevent copper and mineral buildup from dulling blonde and honey tones.',
    ],
  },
  {
    id: 'art-3',
    slug: 'buccal-massage-and-cellular-lymphatics',
    title: 'Inside the Buccal Sculpting Ritual: Releasing Facial Architecture',
    subtitle: 'Understanding the anatomy of deep myofascial release and why stress ages the lower face first.',
    category: 'Skincare Guides',
    author: 'Dr. Soraya Rostami',
    authorRole: 'Lead Dermal Aesthetician',
    publishedDate: 'September 29, 2026',
    readingTime: '7 Min Read',
    coverImage: '/images/skin-ritual.jpg',
    excerpt:
      'We hold unspoken tension inside the muscles of the jaw and cheeks. Discover how intra-oral buccal sculpting restores lifted contours and oxygenates tired skin.',
    pullQuote:
      'When tightened fascia lets go, lymphatic stagnation drains immediately and the face regains the soft, lifted openness of deep rest.',
    sections: [
      {
        heading: '01. Why Topical Creams Cannot Reach Muscle Tension',
        paragraphs: [
          'While peptides and retinoids transform epidermal texture, structural sagging around the nasolabial folds and jawline is frequently driven by hypertonic, shortened facial muscles pulling downward.',
          'By working both outside the cheek and intra-orally with sterile gloves, buccal sculpting accesses the full thickness of the masseter, buccinator, and orbicularis oris muscles.',
        ],
      },
      {
        heading: '02. The Lymphatic Glow Response',
        paragraphs: [
          'Once muscular constriction is released, micro-circulation surges by up to 300%, delivering fresh oxygen and nutrients to fibroblasts while clearing puffiness under the eyes and along the mandible.',
        ],
      },
    ],
    keyTakeaways: [
      'Ideal every 3–4 weeks as a holistic alternative or complement to clinical injectables.',
      'Relieves nocturnal jaw clenching (bruxism) and tension headaches.',
      'Requires zero recovery time—skin looks immediately lifted and rosy.',
    ],
  },
  {
    id: 'art-4',
    slug: 'minimalist-nail-couture-autumn-winter-edit',
    title: 'Sheer Ivory, Espresso Noir & Gold Leaf: The Autumn Nail Edit',
    subtitle: 'Why healthiest natural nail architecture and translucent neutral palettes define modern elegance.',
    category: 'Seasonal Beauty Trends',
    author: 'Mei-Ling Lin',
    authorRole: 'Director of Nail Couture',
    publishedDate: 'September 14, 2026',
    readingTime: '4 Min Read',
    coverImage: '/images/nail-spa.jpg',
    excerpt:
      'From milky travertine sheers to deep roasted espresso and micro-gilded French crescents, explore the colours and cuticle rituals shaping the season.',
    pullQuote:
      'A truly luxurious manicure looks effortless from across the room and reveals extraordinary precision up close.',
    sections: [
      {
        heading: '01. The Rise of Translucent Milky Neutrals',
        paragraphs: [
          'Opaque chalky whites have given way to custom-blended sheer ivories calibrated to your skin’s warm or cool undertone. Layered in two gossamer coats over a Japanese structured gel base, the effect is clean, elongating, and timeless.',
        ],
      },
      {
        heading: '02. Waterless E-File Cuticle Care',
        paragraphs: [
          'Soaking hands in water prior to gel application causes the porous nail plate to expand and later contract, leading to chipping within days. Our dry diamond-bit exfoliation removes only non-living cuticle tissue, ensuring three to four weeks of seamless adhesion.',
        ],
      },
    ],
    keyTakeaways: [
      'Apply warm botanical jojoba oil to cuticles nightly to maintain gel flexibility.',
      'Choose soft almond or short squoval shapes for maximum structural durability.',
      'Never peel gel polish—always schedule a gentle ceramic steam removal.',
    ],
  },
  {
    id: 'art-5',
    slug: 'the-ayurvedic-art-of-shirodhara-and-sound',
    title: 'Stillness as Beauty: How Shirodhara & Acoustic Resonance Reset Cortisol',
    subtitle: 'Exploring the connection between nervous system equilibrium, sleep quality, and cellular radiance.',
    category: 'Professional Beauty Advice',
    author: 'Sienna Moreau',
    authorRole: 'Holistic Spa & Wellness Director',
    publishedDate: 'August 30, 2026',
    readingTime: '6 Min Read',
    coverImage: '/images/hero-atelier.jpg',
    excerpt:
      'Chronic cortisol elevation breaks down dermal collagen and disrupts hair growth cycles. Discover how ancient warm-oil Shirodhara and harmonic sound baths restore equilibrium.',
    pullQuote:
      'You cannot topical-serum your way out of nervous system exhaustion. When the mind drops into theta rest, the entire body remembers how to repair itself.',
    sections: [
      {
        heading: '01. The Cortisol-Collagen Connection',
        paragraphs: [
          'Elevated stress hormones trigger matrix metalloproteinases (MMPs)—enzymes that degrade collagen and elastin while constricting blood flow to hair follicles. True beauty care must therefore address the vagus nerve.',
        ],
      },
      {
        heading: '02. Warm Oil & Harmonic Vibration',
        paragraphs: [
          'During Shirodhara, a gentle stream of warm sesame and brahmi oil flows rhythmically across the forehead, creating a subtle tactile somatosensory reflex that quiets racing thoughts within minutes.',
        ],
      },
    ],
    keyTakeaways: [
      'Schedule sensory spa rituals at the transition of seasons or after long-haul travel.',
      'Pair warm oil scalp treatments with 10 minutes of evening breathwork.',
      'Hydrate with warm herbal infusions rather than iced beverages post-massage.',
    ],
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Appointments',
    question: 'How far in advance should I reserve my appointment at ÉLORA?',
    answer:
      'For weekday rituals, we recommend reserving 1 to 2 weeks in advance. For Saturday appointments or bookings with our Founder Céleste Vance and Lead Aesthetician Dr. Soraya Rostami, we advise booking 3 to 4 weeks ahead. Bridal Couture inquiries are best initiated 3 to 9 months prior to your wedding date.',
  },
  {
    id: 'faq-2',
    category: 'Appointments',
    question: 'When should I arrive for my scheduled ritual?',
    answer:
      'We invite you to arrive 15 minutes prior to your appointment so you may unwind in our Travertine Lounge with a warm botanical tea infusion, complete your sensory consultation, and transition out of city pace without haste.',
  },
  {
    id: 'faq-3',
    category: 'Cancellations',
    question: 'What is your rescheduling and cancellation policy?',
    answer:
      'Because each ritual reserves dedicated time and bespoke preparation with your specialist, we kindly request at least 24 hours notice for any rescheduling or cancellation (48 hours for multi-service packages). Late cancellations within 24 hours incur a 50% reservation fee.',
  },
  {
    id: 'faq-4',
    category: 'Services',
    question: 'Can I combine multiple services—such as hair colour, facial, and manicure—in a single visit?',
    answer:
      'Yes. Our concierge frequently choreographs multi-service visits. For instance, our Champagne Botanical Manicure can be performed seamlessly while your dimensional colour gloss processes, saving you valuable time.',
  },
  {
    id: 'faq-5',
    category: 'Payments',
    question: 'Are the prices listed on this website final, and what payment methods are accepted?',
    answer:
      'Please note that all prices displayed on this live showcase website are demonstration prices for portfolio presentation. In a live studio setting, final hair colour pricing is confirmed during your pre-service consultation based on hair length and density. All major credit cards, Apple Pay, and ÉLORA Gift Cards are accepted.',
  },
  {
    id: 'faq-6',
    category: 'Bridal Bookings',
    question: 'How do Bridal Couture trials and wedding-day bookings work?',
    answer:
      'Every bridal journey begins with a private consultation and a 2-hour Bridal Preview Session in our studio 6–8 weeks before the wedding. We document every formula, hairpin placement, and lighting test so your wedding morning unfolds with effortless calm—either in our private Bridal Suite or at your venue.',
  },
  {
    id: 'faq-7',
    category: 'Hygiene',
    question: 'What clinical hygiene and sterilization standards do you follow?',
    answer:
      'ÉLORA adheres to hospital-grade sterilization protocols. All metal manicure, pedicure, and facial instruments are ultrasonically cleaned and sterilized in medical-grade Class-B autoclaves sealed in dated pouches opened in your presence. Porous files and buffers are single-use and gifted to you or recycled.',
  },
  {
    id: 'faq-8',
    category: 'Consultation',
    question: 'Can I book a complimentary consultation before committing to a major transformation?',
    answer:
      'Absolutely. We offer complimentary 20-minute in-studio or virtual diagnostic consultations for hair colour transformations, dermal sculpting plans, and bridal curations.',
  },
  {
    id: 'faq-9',
    category: 'Product Recommendations',
    question: 'Are your hair, skin, and nail formulations clean, cruelty-free, and safe for sensitive skin?',
    answer:
      'Every formulation in our apothecary is vetted for clinical efficacy and sensory purity—free from formaldehyde, harsh sulfates, parabens, and HEMA monomers. We proudly offer pregnancy-safe and fragrance-free protocols across all categories.',
  },
];

export const AVAILABLE_TIME_SLOTS = [
  '09:30 AM',
  '10:30 AM',
  '11:30 AM',
  '01:00 PM',
  '02:30 PM',
  '04:00 PM',
  '05:30 PM',
  '06:30 PM',
];
