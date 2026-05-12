import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Instagram, ArrowDown } from "lucide-react";
import logo from "@/assets/logo.svg";
import { BLOCKS, type CanvasBlock as Block } from "@/data/canvas";
import { CanvasBlock } from "@/components/CanvasBlock";
import { CanvasModal } from "@/components/CanvasModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Modelo de Negocio Canvas — Estero Software | PreIncubar 2026" },
      {
        name: "description",
        content:
          "Business Model Canvas de Estero Software para el programa PreIncubar 2026. Innovación tecnológica desde Santiago del Estero para sectores críticos.",
      },
      { property: "og:title", content: "Modelo de Negocio Canvas — Estero Software" },
      {
        property: "og:description",
        content:
          "Innovación tecnológica desde Santiago del Estero para sectores críticos.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M16.5 3a5.5 5.5 0 0 0 5.5 5.5v3a8.5 8.5 0 0 1-5.5-2v7.25a6.25 6.25 0 1 1-6.25-6.25c.43 0 .85.04 1.25.13v3.2a3.1 3.1 0 1 0 2 2.92V3h3z" />
  </svg>
);

function Index() {
  const [active, setActive] = useState<Block | null>(null);
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-black/10 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="Estero Software" className="h-9 w-9" />
            <span className="font-display text-xl tracking-wider">ESTERO SOFTWARE</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#canvas" className="text-foreground/70 transition-colors hover:text-foreground">Canvas</a>
            <a href="#contacto" className="text-foreground/70 transition-colors hover:text-foreground">Contacto</a>
            <a
              href="#canvas"
              className="rounded-full gradient-orange px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.03]"
            >
              Ver Lienzo
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full opacity-30 blur-3xl gradient-orange"
        />
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-card px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full gradient-orange" />
              PreIncubar 2026 · Nodo Tecnológico
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              MODELO DE NEGOCIO <br />
              <span className="text-gradient-orange">CANVAS</span> · ESTERO SOFTWARE
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Innovación tecnológica desde Santiago del Estero para sectores críticos.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#canvas"
                className="inline-flex items-center gap-2 rounded-full gradient-orange px-7 py-3.5 font-semibold text-primary-foreground shadow-[0_10px_30px_-12px_rgba(255,90,30,0.6)] transition-transform hover:scale-[1.03]"
              >
                Ver Lienzo
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-full border border-black px-7 py-3.5 font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Conocernos
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Canvas */}
      <section id="canvas" className="border-t border-black/10 bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gradient-orange">
                Lienzo interactivo
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-wide md:text-5xl">
                LOS 9 BLOQUES DEL NEGOCIO
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              Hacé clic en cualquier bloque para explorar el detalle de cada componente del modelo.
            </p>
          </div>

          <div
            className="grid gap-3 md:gap-4"
            style={{
              gridTemplateColumns: "repeat(10, minmax(0, 1fr))",
              gridTemplateRows: "auto auto auto",
              gridTemplateAreas: `
                "partners partners activities activities value value relationships relationships segments segments"
                "partners partners resources  resources  value value channels      channels      segments segments"
                "costs    costs    costs      costs      costs revenue revenue     revenue       revenue  revenue"
              `,
            }}
          >
            {BLOCKS.map((b, i) => (
              <CanvasBlock key={b.id} block={b} index={i} onClick={() => setActive(b)} />
            ))}
          </div>

          {/* Mobile fallback note: grid adapts because each block is button; let's add responsive override */}
        </div>
      </section>

      {/* Social / Contact */}
      <section id="contacto" className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="flex flex-col items-center text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-gradient-orange">
              Seguinos
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-wide md:text-5xl">
              CONSTRUYAMOS JUNTOS
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Compartimos nuestro proceso, casos y aprendizajes en redes.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://www.instagram.com/estero.soft/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Estero Software"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black bg-card transition-all hover:gradient-orange hover:text-primary-foreground hover:border-transparent"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@estero.soft"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok de Estero Software"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black bg-card transition-all hover:gradient-orange hover:text-primary-foreground hover:border-transparent"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 bg-card">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-8 text-center text-sm text-muted-foreground md:flex-row md:px-8 md:text-left">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="h-6 w-6" />
            <span>© {year} Estero Software — Programa Incubar, Nodo Tecnológico. Todos los derechos reservados.</span>
          </div>
        </div>
      </footer>

      <CanvasModal block={active} onClose={() => setActive(null)} />
    </div>
  );
}
