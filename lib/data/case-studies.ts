export type CaseStudy = {
  id: string;
  client: string;
  category: string;
  objective: string;
  results: string[];
  metrics: { label: string; value: string }[];
  link?: string;
  logo?: string;
};

// Todos los casos son clientes reales de ViccaLab. Las métricas usan solo datos
// públicos (seguidores y datos que las propias marcas comunican en su perfil).
export const caseStudies: CaseStudy[] = [
  {
    id: "suplementos-yerba-buena",
    client: "Suplementos Yerba Buena",
    category: "Redes Sociales · E-commerce",
    objective:
      "Profesionalizar el perfil de Instagram de una tienda de suplementos y convertir seguidores en clientes con una tienda online propia.",
    results: [
      "Optimización integral del perfil y creación de contenido constante",
      "Configuración de tienda online en Tienda Nube con envíos a todo el país",
      "Campañas de Meta Ads enfocadas en captación de nuevos seguidores",
    ],
    metrics: [
      { label: "Seguidores", value: "35.1K" },
      { label: "Envíos", value: "Todo el país" },
      { label: "Canal", value: "Tienda Nube" },
    ],
    link: "https://www.instagram.com/suplementosybtuc/",
  },
  {
    id: "ena-store",
    client: "ENA Store",
    category: "Redes Sociales · E-commerce",
    objective:
      "Potenciar la presencia digital de una tienda de tecnología y acompañar el crecimiento de sus ventas de iPhones.",
    results: [
      "Gestión y optimización del perfil de Instagram",
      "Producción constante de contenido de producto",
      "Estrategia de publicidad digital para captar nuevos clientes",
    ],
    metrics: [
      { label: "Seguidores", value: "96.3K" },
      { label: "Ventas", value: "+5000" },
      { label: "Trayectoria", value: "+6 años" },
    ],
    link: "https://www.instagram.com/ena.storetuc/",
  },
  {
    id: "santex",
    client: "Santex",
    category: "Redes Sociales · Seguridad e Industria",
    objective:
      "Dar visibilidad digital a una empresa de soluciones de seguridad y agro, conectando su catálogo con nuevos clientes.",
    results: [
      "Gestión de redes sociales y creación de contenido",
      "Comunicación clara de las líneas de producto (EPP y Agro)",
      "Estrategia digital para fortalecer la marca en el rubro",
    ],
    metrics: [
      { label: "Seguidores", value: "1.6K" },
      { label: "Rubros", value: "EPP y Agro" },
      { label: "Presencia", value: "Digital" },
    ],
    link: "https://www.instagram.com/santex.sa/",
  },
  {
    id: "tucu-mascotas",
    client: "Tucu Mascotas",
    category: "Redes Sociales · Salud Animal",
    objective:
      "Acompañar la comunicación digital de una clínica veterinaria con varias sucursales y distintos servicios para mascotas.",
    results: [
      "Gestión integral de redes sociales",
      "Contenido para promociones, farmacia y peluquería",
      "Comunicación diferenciada por sucursal",
    ],
    metrics: [
      { label: "Seguidores", value: "12.3K" },
      { label: "Sucursales", value: "3" },
      { label: "Servicios", value: "Multi-rubro" },
    ],
    link: "https://www.instagram.com/tucumascotasok/",
  },
  {
    id: "energy-gym-fitness",
    client: "Energy Gym y Fitness",
    category: "Redes Sociales · Fitness",
    objective:
      "Fortalecer la comunidad digital de un gimnasio y comunicar sus clases y horarios de forma constante.",
    results: [
      "Gestión de redes sociales con contenido regular",
      "Difusión de clases, horarios y eventos especiales",
      "Construcción de comunidad e identidad de marca",
    ],
    metrics: [
      { label: "Seguidores", value: "8.4K" },
      { label: "Clases", value: "Acrofit y más" },
      { label: "Horario", value: "Extendido" },
    ],
    link: "https://www.instagram.com/energyfit_tuc/",
  },
];
