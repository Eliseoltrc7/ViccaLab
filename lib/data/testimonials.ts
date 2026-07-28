export type Testimonial = {
  id: string;
  role: string;
  quote: string;
};

// Contenido de ejemplo (tono genérico, sin cita textual real) — reemplazar
// con las frases reales de cada cliente cuando estén disponibles.
export const testimonials: Testimonial[] = [
  {
    id: "suplementos-yerba-buena",
    role: "Dueño, Suplementos Yerba Buena",
    quote:
      "Desde que trabajamos con ViccaLab, nuestras redes y la tienda online se sienten mucho más profesionales. El acompañamiento es constante y eso se nota.",
  },
  {
    id: "ena-store",
    role: "Dueño, ENA Store",
    quote:
      "El contenido y la publicidad digital nos ayudaron a llegar a más clientes sin perder la esencia de la marca. Muy conformes con el trabajo del equipo.",
  },
  {
    id: "santex",
    role: "Dueño, Santex",
    quote:
      "Necesitábamos ordenar nuestra presencia digital y ViccaLab lo resolvió con un trabajo prolijo y una comunicación clara en todo momento.",
  },
  {
    id: "tucu-mascotas",
    role: "Dueño, Tucu Mascotas",
    quote:
      "Coordinar la comunicación de varias sucursales no es fácil, pero el equipo lo maneja con mucho criterio y siempre proponen ideas nuevas.",
  },
  {
    id: "energy-gym-fitness",
    role: "Dueño, Energy Gym y Fitness",
    quote:
      "Nuestras redes ganaron otro nivel de constancia y calidad. Se nota el compromiso del equipo con cada contenido que suben.",
  },
];
