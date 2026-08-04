export const SITE_NAME = "ViccaLab";
export const SITE_TAGLINE = "Estudio Creativo";
export const SITE_URL = "https://www.viccalab.com";
export const SITE_DESCRIPTION =
  "Agencia de marketing digital. Transformamos marcas en experiencias digitales que venden: redes sociales, publicidad, branding, contenido y desarrollo web.";

// TODO: reemplazar por el número real si difiere. Formato internacional sin espacios para wa.me.
const WHATSAPP_NUMBER = "5493816115381";

export const CONTACT = {
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappDisplay: "+54 9 3816 115381",
  whatsappLink: (message?: string) =>
    `https://wa.me/${WHATSAPP_NUMBER}${
      message ? `?text=${encodeURIComponent(message)}` : ""
    }`,
  email: "Vicoemailwork@gmail.com",
  // TODO: confirmar ciudad/ubicación exacta para el mapa y el footer.
  location: "Tucumán, Argentina",
  social: {
    instagram: {
      handle: "@vicca.lab",
      url: "https://instagram.com/vicca.lab",
    },
    tiktok: { handle: "@viccalab", url: "https://www.tiktok.com/@viccalab" },
  },
} as const;

export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Contacto", href: "/contacto" },
] as const;
