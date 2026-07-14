export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
};

// Contenido de ejemplo — reemplazar con testimonios reales de clientes.
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Marina Gómez",
    role: "Fundadora, Aurora Cosmética",
    quote:
      "ViccaLab entendió nuestra marca desde el primer día. Los resultados en ventas superaron lo que esperábamos y el acompañamiento fue constante.",
  },
  {
    id: "t2",
    name: "Fernando Ruiz",
    role: "Director, Norte Estudio de Arquitectura",
    quote:
      "El nuevo sitio y la identidad visual nos posicionaron como un estudio de otro nivel. Se nota el criterio profesional en cada detalle.",
  },
  {
    id: "t3",
    name: "Lucía Fernández",
    role: "Dueña, Sabor Nativo",
    quote:
      "Nuestras redes pasaron de estar abandonadas a ser una herramienta real de ventas. El equipo es creativo, prolijo y muy comprometido.",
  },
  {
    id: "t4",
    name: "Tomás Ibarra",
    role: "Co-fundador, Fit Lab Indumentaria",
    quote:
      "Lanzamos la tienda online y en el primer mes ya teníamos ventas rentables. La comunicación con el equipo de ViccaLab es excelente.",
  },
];
