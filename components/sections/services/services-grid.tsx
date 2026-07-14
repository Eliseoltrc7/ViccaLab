import { services } from "@/lib/data/services";
import { ServiceCard } from "@/components/sections/services/service-card";

export function ServicesGrid() {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="space-y-8">
        {services.map((service, index) => (
          <ServiceCard
            key={service.slug}
            service={service}
            reversed={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}
