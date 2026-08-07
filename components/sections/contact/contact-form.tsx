"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "@/components/shared/reveal";
import {
  contactFormSchema,
  SERVICE_OPTIONS,
  GOAL_OPTIONS,
  BUDGET_OPTIONS,
  type ContactFormValues,
} from "@/lib/validations/contact-schema";

export function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("servicio") ?? "";
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      service: preselectedService,
      goal: "",
      budget: "",
      message: "",
    },
  });

  useEffect(() => {
    if (preselectedService) {
      reset((values) => ({ ...values, service: preselectedService }));
    }
  }, [preselectedService, reset]);

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "No se pudo enviar el mensaje.");
      }

      toast.success("¡Mensaje enviado! Te vamos a responder a la brevedad.");
      setSubmitted(true);
      reset();
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "No se pudo enviar el mensaje. Probá de nuevo en unos minutos."
      );
    }
  };

  return (
    <div className="rounded-3xl border border-brand-charcoal/8 bg-white p-8 md:p-10">
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 rounded-2xl bg-brand-lime/20 px-5 py-4 text-sm text-brand-charcoal"
        >
          Gracias por escribirnos. Recibimos tu mensaje y te vamos a contactar
          muy pronto.
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" placeholder="Tu nombre completo" {...register("name")} />
            {errors.name && (
              <p className="text-xs text-destructive">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Empresa</Label>
            <Input id="company" placeholder="Nombre de tu empresa (opcional)" {...register("company")} />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="tu@email.com" {...register("email")} />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input id="phone" placeholder="+54 9 ..." {...register("phone")} />
            {errors.phone && (
              <p className="text-xs text-destructive">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="service">Servicio</Label>
          <Controller
            control={control}
            name="service"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="service" className="w-full">
                  <SelectValue placeholder="Elegí un servicio" />
                </SelectTrigger>
                <SelectContent>
                  {SERVICE_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.service && (
            <p className="text-xs text-destructive">{errors.service.message}</p>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="goal">Objetivo</Label>
            <Controller
              control={control}
              name="goal"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger id="goal" className="w-full">
                    <SelectValue placeholder="¿Qué querés lograr?" />
                  </SelectTrigger>
                  <SelectContent>
                    {GOAL_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.goal && (
              <p className="text-xs text-destructive">{errors.goal.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="budget">Presupuesto</Label>
            <Controller
              control={control}
              name="budget"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger id="budget" className="w-full">
                    <SelectValue placeholder="Rango estimado" />
                  </SelectTrigger>
                  <SelectContent>
                    {BUDGET_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.budget && (
              <p className="text-xs text-destructive">{errors.budget.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Mensaje</Label>
          <Textarea
            id="message"
            rows={5}
            placeholder="Contanos sobre tu proyecto..."
            {...register("message")}
          />
          {errors.message && (
            <p className="text-xs text-destructive">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-brand-charcoal py-6 text-sm font-semibold text-brand-cream hover:bg-brand-primary"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Enviar mensaje
            </>
          )}
        </Button>
      </form>
    </div>
  );
}

export function ContactFormWithReveal() {
  return (
    <Reveal>
      <ContactForm />
    </Reveal>
  );
}
