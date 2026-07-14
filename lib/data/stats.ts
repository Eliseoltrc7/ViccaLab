export type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

export const stats: Stat[] = [
  { label: "Clientes atendidos", value: 80, suffix: "+" },
  { label: "Campañas gestionadas", value: 210, suffix: "+" },
  { label: "Piezas de contenido creadas", value: 4500, suffix: "+" },
  { label: "Sitios web desarrollados", value: 35, suffix: "+" },
  { label: "Proyectos finalizados", value: 150, suffix: "+" },
];
