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
  message: z
    .string()
    .trim()
    .min(10, "Contanos un poco más (mínimo 10 caracteres).")
    .max(1000, "Mensaje demasiado largo (máximo 1000 caracteres)."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
