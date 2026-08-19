export type Language = "es" | "en";

export const LANGUAGE_STORAGE_KEY = "casaindr_lang";

const es = {
  nav: {
    howItWorks: "Cómo Funciona",
    portfolio: "Portafolio",
    concierge: "Conserjería",
    cta: "Consulta Personalizada",
  },
  hero: {
    badge: "Villas & Conserjería VIP · Casa de Campo",
    title: "Encontramos tu villa ideal en Casa de Campo",
    subtitle:
      "Un servicio de curaduría personalizada. Cuéntanos tus criterios y nuestro equipo selecciona, de nuestro portafolio exclusivo, las propiedades que se ajustan exactamente a tu estancia — con conserjería dedicada de principio a fin.",
    statVillas: "Villas Curadas",
    statConcierge: "Conserjería",
    statTailored: "A Medida",
  },
  steps: {
    badge: "Cómo Funciona",
    title: "Un proceso simple, pensado para tu tiempo",
    items: [
      {
        title: "Envías tus criterios",
        description:
          "Completa la consulta personalizada con tu presupuesto, fechas y preferencias de conserjería.",
      },
      {
        title: "Curamos las mejores opciones",
        description:
          "Nuestro equipo compara tu solicitud contra el portafolio disponible y te presenta propuestas a medida.",
      },
      {
        title: "Reservas y disfrutas",
        description:
          "Confirmamos tu estancia y coordinamos cada detalle de conserjería, desde tu llegada hasta la salida.",
      },
    ],
  },
  gallery: {
    badge: "Muestra de Portafolio",
    title: "Una selección de nuestras villas",
    note: "Solo una muestra — cada consulta recibe propuestas curadas según tus criterios exactos.",
    bedrooms: "habitaciones",
    guests: "huéspedes",
    viewGallery: "Ver galería",
    checkAvailability: "Consultar Disponibilidad",
    reserve: "Reservar",
    close: "Cerrar",
    noResults: "No hay villas que coincidan con estos filtros.",
    clearFilters: "Limpiar filtros",
    filters: {
      all: "Todas",
      capacity: "Capacidad",
      type: "Tipo de Villa",
      location: "Ubicación",
    },
    capacityTiers: {
      "4-6": "4–6 huéspedes",
      "6-8": "6–8 huéspedes",
      "8plus": "8+ huéspedes",
    },
    types: {
      oceanfront: "Frente al Mar",
      golf: "Vista al Golf",
      family: "Familiar",
      estate: "Hacienda",
    },
    locations: {
      puntaAguila: "Punta Aguila",
      puntaMinitas: "Punta Minitas",
      canas: "Cañas",
      golf: "Campo de Golf",
      elValle: "El Valle",
      batey: "Batey",
      mango: "Mango",
    },
    amenities: {
      oceanFront: "Frente al Mar",
      golfView: "Vista al Golf",
      pool: "Piscina",
      infinityPool: "Piscina Infinita",
      jacuzzi: "Jacuzzi",
      privateDock: "Muelle Privado",
    },
    villas: {
      cahoba: {
        tagline: "Elegancia junto al fairway en Cañas",
        description:
          "Amplia villa con vistas al campo de golf, piscina privada y espacios ideales para grupos que buscan privacidad y confort.",
      },
      anacaona: {
        tagline: "Exclusividad frente al mar en Punta Aguila",
        description:
          "Residencia de lujo con acceso directo al océano, piscina infinita y muelle privado — la expresión máxima del estilo Casa de Campo.",
      },
      batey: {
        tagline: "Calidez familiar en el corazón del resort",
        description:
          "Villa acogedora con piscina y vistas al golf, perfecta para familias que valoran la comodidad y la cercanía a las amenidades.",
      },
      guanin: {
        tagline: "Retiro privado entre colinas y fairways",
        description:
          "Hacienda en El Valle con amplios jardines, piscina climatizada y vistas panorámicas — un refugio sereno para estancias prolongadas.",
      },
      cayo: {
        tagline: "Horizonte infinito sobre Punta Minitas",
        description:
          "Villa frente al mar con terrazas amplias, piscina infinita y acceso a muelle privado para experiencias náuticas exclusivas.",
      },
      atabey: {
        tagline: "Serenidad oceánica con alma caribeña",
        description:
          "Propiedad emblemática en Punta Minitas con diseño contemporáneo, piscina privada y acceso directo a la costa.",
      },
      cacique: {
        tagline: "Maestría arquitectónica sobre el green",
        description:
          "Villa de golf con piscina de borde infinito y espacios generosos para quienes viven el resort desde el tee.",
      },
      yucahu: {
        tagline: "Encanto íntimo entre jardines tropicales",
        description:
          "Refugio familiar con piscina privada y ambiente relajado, ideal para escapadas en pareja o grupos pequeños.",
      },
    },
  },
  conciergeSection: {
    badge: "Servicios de Conserjería",
    title: "Cada detalle, atendido con discreción",
    services: [
      {
        title: "Chef Privado",
        description: "Menús personalizados y experiencias gastronómicas dentro de tu villa.",
      },
      {
        title: "Carritos de Golf",
        description: "Movilidad inmediata dentro de Casa de Campo, disponible durante toda tu estancia.",
      },
      {
        title: "Embarcaciones",
        description: "Yates y salidas privadas al mar, coordinadas por nuestro equipo de conserjería.",
      },
    ],
  },
  form: {
    title: "Consulta Personalizada",
    responseTime: "Respuesta en 24h",
    budgetLabel: "Presupuesto por noche",
    bedroomsLabel: "Habitaciones",
    adultsLabel: "Adultos",
    childrenLabel: "Niños",
    checkIn: "Check-in",
    checkOut: "Check-out",
    stayDuration: "Duración de la estancia",
    night: "noche",
    nights: "noches",
    conciergeLabel: "Servicios de conserjería adicionales",
    fullName: "Nombre completo",
    fullNamePlaceholder: "Nombre y apellido",
    email: "Correo electrónico",
    emailPlaceholder: "tucorreo@ejemplo.com",
    phone: "Teléfono / WhatsApp",
    phonePlaceholder: "809 555 1234",
    submit: "Solicitar Propuestas de Villas",
    submitting: "Preparando solicitud…",
    sent: "Tu solicitud fue preparada. Continúa la conversación en WhatsApp para recibir tus propuestas.",
    errors: {
      dates: "Selecciona fecha de entrada y salida.",
      nightsInvalid: "La fecha de salida debe ser posterior a la de entrada.",
      name: "Ingresa tu nombre completo.",
      email: "Ingresa un correo electrónico válido.",
      phone: "Ingresa tu número de teléfono.",
    },
  },
  budget: {
    "1000-2500": "US$1,000 – 2,500 / noche",
    "2500-5000": "US$2,500 – 5,000 / noche",
    "5000-10000": "US$5,000 – 10,000 / noche",
    "10000+": "US$10,000+ / noche",
  },
  conciergeOptions: {
    chef: "Chef privado",
    golfCart: "Alquiler de carrito de golf",
    yacht: "Alquiler de yate",
    vipTransfer: "Traslado VIP",
  },
  footer: {
    tagline: "Gestión de villas y conserjería VIP en Casa de Campo, República Dominicana.",
    contactLabel: "Contacto",
    address: "Casa de Campo, La Romana, RD",
    whatsappCta: "Asistencia inmediata por WhatsApp",
    legalLabel: "Legal",
    legal1: "CASAINDR opera como intermediario de gestión y conserjería.",
    legal2: "Las tarifas finales dependen de disponibilidad y temporada.",
    rights: "Todos los derechos reservados.",
  },
  summary: {
    title: "Nueva Consulta de Villa — CASAINDR",
    budget: "Presupuesto",
    bedrooms: "Habitaciones",
    guests: "Huéspedes",
    adultsWord: "adultos",
    childrenWord: "niños",
    checkIn: "Check-in",
    checkOut: "Check-out",
    nightsTotal: "Noches totales",
    concierge: "Conserjería",
    none: "Ninguno seleccionado",
    name: "Nombre",
    email: "Email",
    phone: "Teléfono",
    dateLocale: "es-DO",
  },
};

const en = {
  nav: {
    howItWorks: "How It Works",
    portfolio: "Portfolio",
    concierge: "Concierge",
    cta: "Personalized Inquiry",
  },
  hero: {
    badge: "Villas & VIP Concierge · Casa de Campo",
    title: "We find your ideal villa in Casa de Campo",
    subtitle:
      "A personalized curation service. Tell us your criteria and our team selects, from our exclusive portfolio, the properties that match your stay exactly — with dedicated concierge from start to finish.",
    statVillas: "Curated Villas",
    statConcierge: "Concierge",
    statTailored: "Tailored",
  },
  steps: {
    badge: "How It Works",
    title: "A simple process, designed for your time",
    items: [
      {
        title: "You send your criteria",
        description:
          "Complete the personalized inquiry with your budget, dates and concierge preferences.",
      },
      {
        title: "We curate the best options",
        description:
          "Our team matches your request against the available portfolio and presents tailored proposals.",
      },
      {
        title: "You book and enjoy",
        description:
          "We confirm your stay and coordinate every concierge detail, from arrival to departure.",
      },
    ],
  },
  gallery: {
    badge: "Portfolio Preview",
    title: "A selection of our villas",
    note: "Just a preview — every inquiry receives curated proposals based on your exact criteria.",
    bedrooms: "bedrooms",
    guests: "guests",
    viewGallery: "View gallery",
    checkAvailability: "Check Availability",
    reserve: "Reserve",
    close: "Close",
    noResults: "No villas match these filters.",
    clearFilters: "Clear filters",
    filters: {
      all: "All",
      capacity: "Capacity",
      type: "Villa Type",
      location: "Location",
    },
    capacityTiers: {
      "4-6": "4–6 guests",
      "6-8": "6–8 guests",
      "8plus": "8+ guests",
    },
    types: {
      oceanfront: "Oceanfront",
      golf: "Golf View",
      family: "Family",
      estate: "Estate",
    },
    locations: {
      puntaAguila: "Punta Aguila",
      puntaMinitas: "Punta Minitas",
      canas: "Cañas",
      golf: "Golf Course",
      elValle: "El Valle",
      batey: "Batey",
      mango: "Mango",
    },
    amenities: {
      oceanFront: "Ocean Front",
      golfView: "Golf View",
      pool: "Pool",
      infinityPool: "Infinity Pool",
      jacuzzi: "Jacuzzi",
      privateDock: "Private Dock",
    },
    villas: {
      cahoba: {
        tagline: "Fairway elegance in Cañas",
        description:
          "Spacious villa with golf course views, private pool and generous living areas — ideal for groups seeking privacy and comfort.",
      },
      anacaona: {
        tagline: "Oceanfront exclusivity in Punta Aguila",
        description:
          "Luxury residence with direct ocean access, infinity pool and private dock — the ultimate Casa de Campo experience.",
      },
      batey: {
        tagline: "Family warmth at the heart of the resort",
        description:
          "Welcoming villa with pool and golf views, perfect for families who value comfort and proximity to resort amenities.",
      },
      guanin: {
        tagline: "Private retreat among hills and fairways",
        description:
          "Estate in El Valle with expansive gardens, heated pool and panoramic views — a serene haven for extended stays.",
      },
      cayo: {
        tagline: "Infinite horizon over Punta Minitas",
        description:
          "Oceanfront villa with wide terraces, infinity pool and private dock access for exclusive nautical experiences.",
      },
      atabey: {
        tagline: "Ocean serenity with Caribbean soul",
        description:
          "Landmark property in Punta Minitas with contemporary design, private pool and direct coastal access.",
      },
      cacique: {
        tagline: "Architectural mastery over the green",
        description:
          "Golf villa with infinity-edge pool and generous spaces for those who live the resort from the tee.",
      },
      yucahu: {
        tagline: "Intimate charm among tropical gardens",
        description:
          "Family retreat with private pool and relaxed atmosphere, ideal for couples or small groups.",
      },
    },
  },
  conciergeSection: {
    badge: "Concierge Services",
    title: "Every detail, handled with discretion",
    services: [
      {
        title: "Private Chef",
        description: "Personalized menus and dining experiences within your villa.",
      },
      {
        title: "Golf Carts",
        description: "Immediate mobility within Casa de Campo, available throughout your stay.",
      },
      {
        title: "Boats & Yachts",
        description: "Yachts and private outings at sea, coordinated by our concierge team.",
      },
    ],
  },
  form: {
    title: "Personalized Inquiry",
    responseTime: "Response within 24h",
    budgetLabel: "Budget per night",
    bedroomsLabel: "Bedrooms",
    adultsLabel: "Adults",
    childrenLabel: "Children",
    checkIn: "Check-in",
    checkOut: "Check-out",
    stayDuration: "Length of stay",
    night: "night",
    nights: "nights",
    conciergeLabel: "Additional concierge services",
    fullName: "Full name",
    fullNamePlaceholder: "First and last name",
    email: "Email address",
    emailPlaceholder: "youremail@example.com",
    phone: "Phone / WhatsApp",
    phonePlaceholder: "809 555 1234",
    submit: "Request Villa Proposals",
    submitting: "Preparing request…",
    sent: "Your request is ready. Continue the conversation on WhatsApp to receive your proposals.",
    errors: {
      dates: "Select check-in and check-out dates.",
      nightsInvalid: "The check-out date must be after the check-in date.",
      name: "Enter your full name.",
      email: "Enter a valid email address.",
      phone: "Enter your phone number.",
    },
  },
  budget: {
    "1000-2500": "US$1,000 – 2,500 / night",
    "2500-5000": "US$2,500 – 5,000 / night",
    "5000-10000": "US$5,000 – 10,000 / night",
    "10000+": "US$10,000+ / night",
  },
  conciergeOptions: {
    chef: "Private chef",
    golfCart: "Golf cart rental",
    yacht: "Yacht rental",
    vipTransfer: "VIP transfer",
  },
  footer: {
    tagline: "Villa management and VIP concierge in Casa de Campo, Dominican Republic.",
    contactLabel: "Contact",
    address: "Casa de Campo, La Romana, DR",
    whatsappCta: "Instant assistance via WhatsApp",
    legalLabel: "Legal",
    legal1: "CASAINDR operates as a management and concierge intermediary.",
    legal2: "Final rates depend on availability and season.",
    rights: "All rights reserved.",
  },
  summary: {
    title: "New Villa Inquiry — CASAINDR",
    budget: "Budget",
    bedrooms: "Bedrooms",
    guests: "Guests",
    adultsWord: "adults",
    childrenWord: "children",
    checkIn: "Check-in",
    checkOut: "Check-out",
    nightsTotal: "Total nights",
    concierge: "Concierge",
    none: "None selected",
    name: "Name",
    email: "Email",
    phone: "Phone",
    dateLocale: "en-US",
  },
} satisfies typeof es;

export const translations: Record<Language, typeof es> = { es, en };
