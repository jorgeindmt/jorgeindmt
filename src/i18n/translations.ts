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
    amenities: {
      oceanFront: "Frente al Mar",
      golfView: "Vista al Golf",
      pool: "Piscina",
      infinityPool: "Piscina Infinita",
      jacuzzi: "Jacuzzi",
      privateDock: "Muelle Privado",
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
    amenities: {
      oceanFront: "Ocean Front",
      golfView: "Golf View",
      pool: "Pool",
      infinityPool: "Infinity Pool",
      jacuzzi: "Jacuzzi",
      privateDock: "Private Dock",
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
