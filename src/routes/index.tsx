import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check, Copy, Heart, Menu, X } from "lucide-react";

const InstagramLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <defs>
      <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect x="0" y="0" width="24" height="24" rx="6" fill="url(#ig-grad)" />
    <rect x="2.5" y="2.5" width="19" height="19" rx="6" fill="none" stroke="white" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.8" fill="none" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
  </svg>
);
import logo from "@/assets/logo.svg";
import qr from "@/assets/QR.svg";
import equipoImg from "@/assets/equipo.svg";
import { BLOCKS, type CanvasBlock as Block } from "@/data/canvas";
import { CanvasBlock } from "@/components/CanvasBlock";
import { CanvasModal } from "@/components/CanvasModal";

export const Route = createFileRoute("/")({
  component: Index,
});

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="-3 -3 30 30" fill="none" {...props}>
    <rect x="-3" y="-3" width="30" height="30" rx="7" fill="black" />
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.79 1.52V6.75a4.85 4.85 0 0 1-1.02-.06z" fill="#69C9D0" transform="translate(-0.5,0.5)" />
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.79 1.52V6.75a4.85 4.85 0 0 1-1.02-.06z" fill="#EE1D52" transform="translate(0.5,-0.5)" />
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.79 1.52V6.75a4.85 4.85 0 0 1-1.02-.06z" fill="white" />
  </svg>
);

function Index() {
  const [active, setActive] = useState<Block | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const siteUrl = window.location.origin;
  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(siteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const year = new Date().getFullYear();
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = shouldReduceMotion
    ? {}
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: "easeOut" as const } };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">

      {/* ── Navbar flotante ── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden
        />
      )}
      <header className="fixed inset-x-2 top-2 z-50 md:inset-x-4 md:top-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-black/10 bg-white/85 px-2 py-1 shadow-[0_4px_28px_-4px_rgba(0,0,0,0.10)] backdrop-blur-xl md:px-5 md:py-3">
          <a href="/" className="flex items-center gap-2.5">
            <img src={logo} alt="Estero Software" className="h-14 w-14" />
            <span className="font-display text-2xl tracking-wider"><span style={{ color: "#2f3942" }}>ESTERO</span> <span className="text-gradient-orange">SOFTWARE</span></span>
          </a>
          <nav className="hidden items-center gap-5 text-sm md:flex">
            <a href="#contacto" className="text-foreground/60 transition-colors duration-200 hover:text-foreground">Contacto</a>
            <a
              href="#canvas"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full gradient-orange px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:shadow-[0_6px_20px_-6px_rgba(255,90,30,0.6)] hover:scale-[1.03]"
            >
              Ver Canvas
              <ArrowDown className="h-4 w-4" />
            </a>
          </nav>

          {/* Hamburguesa mobile */}
          <button
            className="inline-flex items-center justify-center rounded-xl p-2 transition-colors duration-200 hover:bg-black/5 md:hidden"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menú"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Menú mobile desplegable */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-black/10 bg-white/95 px-4 py-4 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-3">
                <a
                  href="#contacto"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-foreground/70 transition-colors hover:bg-black/5 hover:text-foreground text-center"
                >
                  Contacto
                </a>
                <a
                  href="#canvas"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-full gradient-orange px-4 py-3 text-sm font-semibold text-white shadow-sm"
                >
                  Ver Canvas
                  <ArrowDown className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Hero ── */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-32 md:pt-36">
        {/* Blob naranja principal */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-[-10%] h-[600px] w-[600px] rounded-full opacity-35 blur-[100px] gradient-orange"
        />
        {/* Blob secundario bottom-left */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-[-10%] left-[-8%] h-[380px] w-[380px] rounded-full opacity-15 blur-[80px] gradient-orange"
        />

        <div className="mx-auto max-w-7xl px-5 pb-24 md:px-8 md:pb-36 xl:mx-0 xl:pl-100">
          {/* Etiqueta editorial superior */}
          <motion.div {...fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-black/12 bg-card px-2.5 py-1 text-[9px] min-[380px]:text-[10px] min-[420px]:text-[11px] font-semibold uppercase tracking-[0.08em] min-[380px]:tracking-[0.12em] min-[420px]:tracking-[0.15em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full gradient-orange" />
              Programa Incubar 2026 · Nodo Tecnológico
            </span>
          </motion.div>

          {/* Título exagerado */}
          <motion.h1
            {...(shouldReduceMotion ? {} : {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, ease: "easeOut", delay: 0.1 },
            })}
            className="font-display leading-[0.88] tracking-[-0.01em] text-[2.6rem] min-[380px]:text-[3.5rem] md:text-[clamp(3.5rem,6vw,6.5rem)]"
          >
            MODELO DE NEGOCIO<br />
            <span className="text-gradient-orange">CANVAS</span>
            <br />
            <span className="text-[0.6em] tracking-wide opacity-60">ESTERO SOFTWARE</span>
          </motion.h1>

          <motion.p
            {...(shouldReduceMotion ? {} : {
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, ease: "easeOut", delay: 0.25 },
            })}
            className="mt-8 max-w-xl text-[17px] leading-relaxed text-muted-foreground"
          >
            Innovación tecnológica desde Santiago del Estero para sectores críticos.
          </motion.p>

          <motion.div
            {...(shouldReduceMotion ? {} : {
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, ease: "easeOut", delay: 0.38 },
            })}
            className="mt-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-start"
          >
            <a
              href="#canvas"
              className="btn-shimmer inline-flex cursor-pointer items-center justify-center gap-2 rounded-full gradient-orange px-7 py-3.5 font-semibold text-white shadow-[0_10px_30px_-12px_rgba(255,90,30,0.55)] transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_14px_36px_-10px_rgba(255,90,30,0.65)] flex-1 md:flex-none"
            >
              Ver Canvas
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#contacto"
              className="btn-shimmer inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white shadow-[0_10px_30px_-12px_rgba(47,57,66,0.55)] transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_14px_36px_-10px_rgba(47,57,66,0.65)] flex-1 md:flex-none" style={{ backgroundColor: "#2f3942" }}
            >
              Conocenos
              <Heart className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Canvas ── */}
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
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Hacé clic en cualquier bloque para explorar el detalle de cada componente del modelo.
            </p>
          </div>

          <div className="canvas-grid grid grid-cols-1 gap-3 md:gap-4">
            {BLOCKS.map((b, i) => (
              <CanvasBlock key={b.id} block={b} index={i} onClick={() => setActive(b)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="border-t border-black/10 bg-card">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-center">
            {/* Left — foto (solo visible en desktop) */}
            <div className="hidden md:block">
              <img
                src={equipoImg}
                alt="Equipo Estero"
                className="w-full rounded-3xl shadow-md"
              />
            </div>

            {/* Right — texto + redes */}
            <div className="flex flex-col justify-center gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gradient-orange">
                  Seguinos
                </p>
                <h2
                  className="mt-4 font-display leading-[0.9]"
                  style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
                >
                  CONSTRUYAMOS<br />
                  <span className="text-gradient-orange">JUNTOS</span>
                </h2>
                <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-muted-foreground">
                  Compartimos nuestro proceso, casos y aprendizajes en redes. Seguinos y sumate a la comunidad.
                </p>
              </div>

              {/* Social cards */}
              <div className="flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-gradient-orange mt-10">
                  Redes sociales
                </p>
                <a
                  href="https://www.instagram.com/estero.soft/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex cursor-pointer items-center justify-between rounded-2xl border border-black/10 bg-background px-6 py-5 transition-all duration-200 hover:border-black/30 hover:shadow-[0_8px_28px_-8px_rgba(0,0,0,0.12)]"
                >
                  <div className="flex items-center gap-4">
                    <InstagramLogo className="h-12 w-12 rounded-xl shadow-sm flex-none" />
                    <div>
                      <p className="text-[13px] font-medium uppercase tracking-widest text-muted-foreground">Instagram</p>
                      <p className="font-display text-2xl leading-none tracking-wide">@ESTERO.SOFT</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </a>

                <a
                  href="https://www.tiktok.com/@estero.soft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex cursor-pointer items-center justify-between rounded-2xl border border-black/10 bg-background px-6 py-5 transition-all duration-200 hover:border-black/30 hover:shadow-[0_8px_28px_-8px_rgba(0,0,0,0.12)]"
                >
                  <div className="flex items-center gap-4">
                    <TikTokIcon className="h-12 w-12 rounded-xl shadow-sm flex-none" />
                    <div>
                      <p className="text-[13px] font-medium uppercase tracking-widest text-muted-foreground">TikTok</p>
                      <p className="font-display text-2xl leading-none tracking-wide">@ESTERO.SOFT</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </a>
                <div className="group flex items-center justify-between rounded-2xl border border-black/10 bg-background px-6 py-5 transition-all duration-200 hover:border-black/30 hover:shadow-[0_8px_28px_-8px_rgba(0,0,0,0.12)]">
                  <div className="flex items-center gap-4">
                    <img src={qr} alt="QR del sitio" className="h-12 w-12 flex-none" />
                    <div>
                      <p className="text-[13px] font-medium uppercase tracking-widest text-muted-foreground">Compartí el sitio</p>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="font-mono text-sm font-medium leading-none text-foreground/70">{siteUrl}</p>
                        <button
                          onClick={handleCopy}
                          className="cursor-pointer rounded-md p-1 transition-colors hover:bg-black/5"
                          aria-label="Copiar link"
                        >
                          {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5 text-muted-foreground" />}
                        </button>
                      </div>
                    </div>
                  </div>
                  <a
                    href={qr}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md p-1 transition-colors hover:bg-black/5"
                    aria-label="Ver QR"
                  >
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                  </a>
                </div>
              </div>
            </div>

            {/* Foto en mobile — debajo del contenido */}
            <div className="md:hidden">
              <img
                src={equipoImg}
                alt="Equipo Estero"
                className="w-full rounded-3xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-black/10 bg-background">
        <div className="mx-auto max-w-7xl px-5 py-7 text-sm text-muted-foreground md:px-8">
          {/* Mobile */}
          <div className="flex flex-col items-center gap-1 text-center md:hidden">
            <span>© {year} Estero Software · Todos los derechos reservados.</span>
          </div>
          {/* Desktop */}
          <div className="hidden md:flex md:items-center md:justify-center md:gap-3">
            <div className="flex items-center gap-2">
              <img src={logo} alt="" className="h-10 w-10 opacity-60" />
              <span>© {year} Estero Software · Todos los derechos reservados.</span>
            </div>
          </div>
        </div>
      </footer>

      <CanvasModal block={active} onClose={() => setActive(null)} />
    </div>
  );
}
