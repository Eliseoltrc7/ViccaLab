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

// Los primeros 4 son contenido de ejemplo — reemplazar con casos reales y capturas del cliente.
// "suplementos-yerba-buena" es un caso real (@suplementosybtuc).
export const caseStudies: CaseStudy[] = [
  {
    id: "aurora-cosmetica",
    client: "Aurora Cosmética",
    category: "E-commerce · Belleza",
    objective:
      "Escalar las ventas online durante el lanzamiento de una nueva línea de productos.",
    results: [
      "Campaña de Meta Ads con segmentación por intereses y remarketing",
      "Rediseño de tienda online con checkout optimizado",
      "Producción de contenido de producto y UGC",
    ],
    metrics: [
      { label: "ROAS", value: "5.4x" },
      { label: "Alcance", value: "480K" },
      { label: "Compras", value: "+312%" },
    ],
  },
  {
    id: "nortestudio-arquitectura",
    client: "Norte Estudio de Arquitectura",
    category: "Branding · Sitio Corporativo",
    objective:
      "Construir una identidad visual premium y un sitio web que refleje la calidad de sus proyectos.",
    results: [
      "Rediseño completo de marca e identidad visual",
      "Desarrollo de sitio corporativo con portfolio interactivo",
      "Estrategia de contenido para LinkedIn e Instagram",
    ],
    metrics: [
      { label: "Leads calificados", value: "+180%" },
      { label: "Tiempo en sitio", value: "+3.2min" },
      { label: "Proyectos cerrados", value: "+8" },
    ],
  },
  {
    id: "sabor-nativo",
    client: "Sabor Nativo",
    category: "Redes Sociales · Publicidad",
    objective:
      "Posicionar una cadena gastronómica local y aumentar las reservas mediante redes sociales.",
    results: [
      "Gestión integral de redes con contenido diario",
      "Campañas de publicidad geolocalizadas",
      "Cobertura audiovisual de eventos y lanzamientos de menú",
    ],
    metrics: [
      { label: "Seguidores", value: "+65%" },
      { label: "Reservas", value: "+240%" },
      { label: "Alcance mensual", value: "310K" },
    ],
  },
  {
    id: "fit-lab-indumentaria",
    client: "Fit Lab Indumentaria",
    category: "Marketing Digital · E-commerce",
    objective:
      "Lanzar una tienda online de indumentaria deportiva y generar ventas desde el primer mes.",
    results: [
      "Configuración completa de Tienda Nube con Mercado Pago",
      "Embudo de conversión con Meta Ads y Google Ads",
      "Estrategia de email marketing de recuperación de carritos",
    ],
    metrics: [
      { label: "ROAS", value: "4.8x" },
      { label: "Ventas primer mes", value: "+520" },
      { label: "CAC", value: "-38%" },
    ],
  },
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
    logo: "/brand/clients/suplementos-yerba-buena.png",
  },
];
