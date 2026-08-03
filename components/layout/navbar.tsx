"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrolled } from "@/hooks/use-scroll-direction";
import { NAV_LINKS } from "@/lib/constants";
import { Logo } from "@/components/shared/logo";

export function Navbar() {
  const scrolled = useScrolled(60);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "bg-brand-cream/80 shadow-[0_1px_0_0_rgba(45,46,40,0.06)] backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="container-page flex h-20 items-center justify-between">
        <Link
          href="/"
          className="relative z-10 flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <Logo className="h-9" light={!solid} />
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "group relative text-sm font-medium tracking-wide transition-colors",
                solid
                  ? "text-brand-charcoal hover:text-brand-primary"
                  : "text-white/90 hover:text-white",
                pathname === link.href && (solid ? "text-brand-primary" : "text-white")
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full",
                  solid ? "bg-brand-primary" : "bg-white"
                )}
              />
            </Link>
          ))}
        </div>

        <Link
          href="/contacto"
          className={cn(
            "hidden items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 md:inline-flex",
            solid
              ? "bg-brand-charcoal text-brand-cream hover:bg-brand-primary"
              : "bg-white text-brand-charcoal hover:bg-brand-lime"
          )}
        >
          Empecemos
          <ArrowUpRight className="h-4 w-4" />
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "relative z-10 -mr-2 flex h-10 w-10 items-center justify-center rounded-full md:hidden",
            solid ? "text-brand-charcoal" : "text-white"
          )}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-brand-cream md:hidden"
          >
            <div className="container-page flex flex-col gap-1 pb-8 pt-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-brand-charcoal/10 py-4 text-lg font-medium text-brand-charcoal"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                onClick={() => setOpen(false)}
                className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-charcoal px-5 py-3 text-sm font-medium text-brand-cream"
              >
                Empecemos
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
