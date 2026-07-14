import type { ComponentType, SVGProps } from "react";
import {
  Megaphone,
  Target,
  Palette,
  Camera,
  Code2,
} from "lucide-react";
import { InstagramIcon } from "@/components/shared/social-icons";

export type Service = {
  slug: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  includes: string[];
};

export const services: Service[] = [
  {
    slug: "redes-sociales",
    icon: InstagramIcon,
    title: "Gestión de Redes Sociales",
    shortDescription:
      "Estrategia de contenido y comunidad para que tu marca esté presente todos los días.",
    description:
      "Planificamos, creamos y gestionamos tus redes sociales con una estrategia a medida, cuidando cada detalle: estética, tono de voz y constancia para construir una comunidad real alrededor de tu marca.",
    benefits: [
      "Presencia constante y profesional",
      "Comunidad comprometida",
      "Identidad visual coherente",
      "Reportes mensuales de desempeño",
    ],
    includes: [
      "Calendario de contenido mensual",
      "Diseño de piezas para feed e historias",
      "Redacción de copies",
      "Community management",
    ],
  },
  {
    slug: "marketing-digital",
    icon: Megaphone,
    title: "Marketing Digital",
    shortDescription:
      "Estrategias integrales de Meta Ads y Google Ads para atraer y convertir clientes.",
    description:
      "Diseñamos embudos de conversión completos, desde la captación hasta la venta, optimizando cada etapa para maximizar el retorno de tu inversión publicitaria.",
    benefits: [
      "Mayor retorno de inversión",
      "Audiencias segmentadas con precisión",
      "Embudos de venta optimizados",
      "Decisiones basadas en datos",
    ],
    includes: [
      "Meta Ads (Instagram y Facebook)",
      "Google Ads (Search, Display, YouTube)",
      "Diseño de embudos de conversión",
      "Optimización continua de campañas",
    ],
  },
  {
    slug: "publicidad-digital",
    icon: Target,
    title: "Publicidad Digital",
    shortDescription:
      "Campañas de escalado, remarketing y segmentación de audiencias de alto impacto.",
    description:
      "Llevamos tus campañas al siguiente nivel con estrategias de remarketing, escalado inteligente y construcción de audiencias personalizadas para maximizar el alcance efectivo.",
    benefits: [
      "Escalado sostenido de resultados",
      "Recuperación de clientes potenciales",
      "Alcance efectivo y medible",
      "Optimización de presupuesto",
    ],
    includes: [
      "Campañas de remarketing",
      "Estrategias de escalado",
      "Construcción de audiencias personalizadas",
      "Testing A/B de creatividades",
    ],
  },
  {
    slug: "diseno-grafico",
    icon: Palette,
    title: "Diseño Gráfico",
    shortDescription:
      "Identidad visual y piezas gráficas que hacen que tu marca se vea premium.",
    description:
      "Creamos y fortalecemos identidades de marca con un diseño cuidado, coherente y memorable, aplicado a cada punto de contacto con tus clientes.",
    benefits: [
      "Marca reconocible y memorable",
      "Materiales listos para usar",
      "Coherencia visual en todos los canales",
      "Diseño con criterio estratégico",
    ],
    includes: [
      "Branding e identidad visual",
      "Flyers y piezas publicitarias",
      "Catálogos de producto",
      "Presentaciones corporativas",
    ],
  },
  {
    slug: "creacion-contenido",
    icon: Camera,
    title: "Creación de Contenido",
    shortDescription:
      "Fotografía, video y producción audiovisual con dirección creativa propia.",
    description:
      "Producimos contenido audiovisual de alto valor: fotografía profesional, video, reels y UGC, con cobertura de eventos y edición cuidada en cada detalle.",
    benefits: [
      "Contenido de calidad profesional",
      "Historias que conectan con tu audiencia",
      "Material versátil para todos tus canales",
      "Dirección creativa a medida",
    ],
    includes: [
      "Fotografía y video profesional",
      "Reels y contenido UGC",
      "Cobertura de eventos",
      "Edición y postproducción",
    ],
  },
  {
    slug: "desarrollo-web",
    icon: Code2,
    title: "Desarrollo Web",
    shortDescription:
      "Landing pages, sitios corporativos y tiendas online que convierten.",
    description:
      "Desarrollamos sitios web rápidos, optimizados para SEO y pensados para convertir visitas en clientes, incluyendo tiendas online completas en Tienda Nube.",
    benefits: [
      "Sitios rápidos y optimizados",
      "Mejor posicionamiento en buscadores",
      "Experiencia de compra fluida",
      "Integraciones de pago y envío",
    ],
    includes: [
      "Landing pages y sitios corporativos",
      "E-commerce y Tienda Nube",
      "Optimización SEO",
      "Integraciones con Mercado Pago y envíos",
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
