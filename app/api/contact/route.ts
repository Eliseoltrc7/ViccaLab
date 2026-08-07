import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  contactFormSchema,
  SERVICE_OPTIONS,
  GOAL_OPTIONS,
  BUDGET_OPTIONS,
} from "@/lib/validations/contact-schema";
import { CONTACT } from "@/lib/constants";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Datos inválidos", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY no está configurada.");
    return NextResponse.json(
      { error: "El envío de email no está configurado todavía." },
      { status: 500 }
    );
  }

  const { name, company, email, phone, service, goal, budget, message } = parsed.data;
  const serviceLabel =
    SERVICE_OPTIONS.find((option) => option.value === service)?.label ?? service;
  const goalLabel = GOAL_OPTIONS.find((option) => option.value === goal)?.label ?? goal;
  const budgetLabel =
    BUDGET_OPTIONS.find((option) => option.value === budget)?.label ?? budget;

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "ViccaLab Web <onboarding@resend.dev>",
    to: CONTACT.email,
    replyTo: email,
    subject: `Nuevo contacto: ${name}${company ? ` (${company})` : ""}`,
    text: [
      `Nombre: ${name}`,
      company ? `Empresa: ${company}` : null,
      `Email: ${email}`,
      `Teléfono: ${phone}`,
      `Servicio: ${serviceLabel}`,
      `Objetivo: ${goalLabel}`,
      `Presupuesto: ${budgetLabel}`,
      "",
      "Mensaje:",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    console.error("Error enviando email vía Resend:", error);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Probá de nuevo en unos minutos." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
