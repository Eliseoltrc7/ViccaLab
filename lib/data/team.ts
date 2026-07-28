export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  image: string;
};

export const team: TeamMember[] = [
  {
    id: "ximena-castellano",
    name: "Ximena Castellano",
    role: "Co-fundadora",
    bio: "Especialista en creación de contenido, fotografía y producción audiovisual. Ximena le da a cada marca una voz visual propia, cuidando cada detalle creativo desde la idea hasta la edición final.",
    specialties: [
      "Creación de contenido",
      "Fotografía",
      "Video",
      "Producción audiovisual",
      "Creatividad",
    ],
    image: "/team/ximena-castellano.png",
  },
  {
    id: "victoria-felipe",
    name: "Victoria Felipe",
    role: "Co-fundadora",
    bio: "Licenciada en Comercialización, especialista en marketing, publicidad y estrategia de ventas. Victoria diseña los planes que convierten la creatividad en resultados medibles.",
    specialties: [
      "Marketing",
      "Publicidad",
      "Estrategia",
      "Ventas",
      "Branding",
    ],
    image: "/team/victoria-felipe.jpg",
  },
];
