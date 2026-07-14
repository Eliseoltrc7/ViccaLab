import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactHero } from "@/components/sections/contact/contact-hero";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { ContactInfo } from "@/components/sections/contact/contact-info";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contanos sobre tu proyecto. Escribinos por WhatsApp, email o completá el formulario y te respondemos a la brevedad.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      <ContactHero />
      <section className="container-page py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
          <ContactInfo />
        </div>
      </section>
    </>
  );
}
