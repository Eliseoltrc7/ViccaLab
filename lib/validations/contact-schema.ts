import { z } from "zod";

export const SERVICE_OPTIONS = [
  { value: "redes-sociales", label: "Gestión de Redes Sociales" },
  { value: "marketing-digital", label: "Marketing Digital" },
  { value: "publicidad-digital", label: "Publicidad Digital" },
  { value: "diseno-grafico", label: "Diseño Gráfico" },
  { value: "creacion-contenido", label: "Creación de Contenido" },
  { value: "desarrollo-web", label: "Desarrollo Web" },
  { value: "otro", label: "Otro / No estoy seguro" },
] as const;

export const GOAL_OPTIONS = [
  { value: "aumentar-ventas", label: "Aumentar ventas" },
  { value: "dar-a-conocer-marca", label: "Dar a conocer la marca" },
  { value: "conseguir-clientes", label: "Conseguir más clientes / leads" },
  { value: "presencia-redes", label: "Mejorar presencia en redes sociales" },
  { value: "lanzar-producto", label: "Lanzar un producto o servicio nuevo" },
  { value: "otro", label: "Otro" },
] as const;

// TODO: ajustar los rangos si no reflejan los presupuestos reales de ViccaLab.
export const BUDGET_OPTIONS = [
  { value: "menos-150k", label: "Menos de $150.000" },
  { value: "150k-400k", label: "$150.000 – $400.000" },
  { value: "400k-800k", label: "$400.000 – $800.000" },
  { value: "mas-800k", label: "Más de $800.000" },
  { value: "prefiero-conversarlo", label: "Prefiero conversarlo" },
] as const;

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ingresá tu nombre completo.")
    .max(80, "Ese nombre es demasiado largo."),
  company: z
    .string()
    .trim()
    .max(100, "Ese nombre de empresa es demasiado largo.")
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .trim()
    .min(1, "Ingresá tu email.")
    .email("Ingresá un email válido."),
  phone: z
    .string()
    .trim()
    .min(6, "Ingresá un teléfono válido.")
    .max(20, "Ese teléfono es demasiado largo."),
  service: z.string().min(1, "Elegí un servicio."),
  goal: z.string().min(1, "Elegí un objetivo."),
  budget: z.string().min(1, "Elegí un rango de presupuesto."),
  message: z
    .string()
    .trim()
    .min(10, "Contanos un poco más (mínimo 10 caracteres).")
    .max(1000, "Mensaje demasiado largo (máximo 1000 caracteres)."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
