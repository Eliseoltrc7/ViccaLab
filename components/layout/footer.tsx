import Link from "next/link";
import {
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
  TiktokIcon,
} from "@/components/shared/social-icons";
import { Logo } from "@/components/shared/logo";
import { CONTACT, NAV_LINKS, SITE_DESCRIPTION } from "@/lib/constants";
import { services } from "@/lib/data/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-charcoal/10 bg-brand-charcoal text-brand-cream">
      <div className="container-page grid gap-12 py-16 md:grid-cols-4 md:gap-8 md:py-24">
        <div className="md:col-span-2">
          <Logo className="h-11" light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-brand-cream/60">
            {SITE_DESCRIPTION}
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[
              { icon: InstagramIcon, href: CONTACT.social.instagram.url, label: "Instagram" },
              { icon: FacebookIcon, href: CONTACT.social.facebook.url, label: "Facebook" },
              { icon: LinkedinIcon, href: CONTACT.social.linkedin.url, label: "LinkedIn" },
              { icon: TiktokIcon, href: CONTACT.social.tiktok.url, label: "TikTok" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-cream/15 text-brand-cream/80 transition-colors hover:border-brand-lime hover:text-brand-lime"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-brand-cream/50">
            Navegación
          </h3>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-brand-cream/80 transition-colors hover:text-brand-lime"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-brand-cream/50">
            Servicios
          </h3>
          <ul className="mt-5 space-y-3">
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/servicios#${service.slug}`}
                  className="text-sm text-brand-cream/80 transition-colors hover:text-brand-lime"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-cream/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-brand-cream/50 md:flex-row">
          <p>
            © {year} ViccaLab. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-5">
            <a href={`mailto:${CONTACT.email}`} className="hover:text-brand-lime">
              {CONTACT.email}
            </a>
            <span>{CONTACT.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
