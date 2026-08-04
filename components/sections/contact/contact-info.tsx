import { Mail, MapPin, MessageCircle } from "lucide-react";
import { InstagramIcon, TiktokIcon } from "@/components/shared/social-icons";
import { Reveal } from "@/components/shared/reveal";
import { CONTACT } from "@/lib/constants";

const socialLinks = [
  { id: "instagram", icon: InstagramIcon, label: CONTACT.social.instagram.handle, href: CONTACT.social.instagram.url },
  { id: "tiktok", icon: TiktokIcon, label: CONTACT.social.tiktok.handle, href: CONTACT.social.tiktok.url },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Reveal>
        <div className="rounded-3xl border border-brand-charcoal/8 bg-white p-8">
          <h3 className="font-display text-lg font-bold text-brand-charcoal">
            Datos de contacto
          </h3>
          <div className="mt-5 space-y-4">
            <a
              href={CONTACT.whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-brand-charcoal/75 transition-colors hover:text-brand-primary"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                <MessageCircle className="h-4.5 w-4.5" />
              </span>
              {CONTACT.whatsappDisplay}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-3 text-sm text-brand-charcoal/75 transition-colors hover:text-brand-primary"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                <Mail className="h-4.5 w-4.5" />
              </span>
              {CONTACT.email}
            </a>
            <div className="flex items-center gap-3 text-sm text-brand-charcoal/75">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                <MapPin className="h-4.5 w-4.5" />
              </span>
              {CONTACT.location}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="rounded-3xl border border-brand-charcoal/8 bg-white p-8">
          <h3 className="font-display text-lg font-bold text-brand-charcoal">
            Seguinos
          </h3>
          <div className="mt-5 flex gap-3">
            {socialLinks.map(({ id, icon: Icon, label, href }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-cream text-brand-charcoal transition-colors hover:bg-brand-primary hover:text-white"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="overflow-hidden rounded-3xl border border-brand-charcoal/8">
          <iframe
            title="Ubicación ViccaLab"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              CONTACT.location
            )}&z=12&output=embed`}
            className="h-64 w-full grayscale"
            loading="lazy"
          />
        </div>
      </Reveal>
    </div>
  );
}
