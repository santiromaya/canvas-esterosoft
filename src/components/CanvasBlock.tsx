import { motion, useReducedMotion } from "framer-motion";
import type { CanvasBlock as Block } from "@/data/canvas";
import { ArrowRight } from "lucide-react";

type Props = { block: Block; onClick: () => void; index: number };

const VALUE_BLOCK_ID = "value";
const BOTTOM_ROW_IDS = new Set(["costs", "revenue"]);

export function CanvasBlock({ block, onClick, index }: Props) {
  const Icon = block.icon;
  const isValue = block.id === VALUE_BLOCK_ID;
  const isBottomRow = BOTTOM_ROW_IDS.has(block.id);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      onClick={onClick}
      style={{ gridArea: block.area }}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
      whileTap={{ scale: 0.985 }}
      className={[
        "group relative cursor-pointer overflow-hidden rounded-xl border text-left",
        "flex flex-col gap-4 px-5 pt-4 pb-2 min-h-[10.5rem] w-full",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        "transition-all duration-200 hover:scale-[1.03]",
        isValue
          ? "gradient-orange border-transparent text-white shadow-[0_8px_32px_-8px_rgba(255,90,30,0.45)] hover:shadow-[0_14px_40px_-8px_rgba(255,90,30,0.6)]"
          : "border-primary/40 bg-card hover:border-primary hover:bg-orange-50/60 hover:shadow-[0_10px_30px_-12px_rgba(255,90,30,0.18)]",
      ].join(" ")}
    >
      {/* Número decorativo de fondo */}
      <span
        aria-hidden
        className={[
          "pointer-events-none absolute right-3 select-none font-display leading-none",
          isBottomRow ? "text-[8rem] top-1" : "text-[5.5rem] top-2",
          isValue ? "text-white/10" : "text-primary/10",
        ].join(" ")}
      >
        {String(block.bmcNumber).padStart(2, "0")}
      </span>

      {/* Ícono + label en una línea */}
      <div className="flex items-center gap-2.5">
        <span
          className={[
            "inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg shadow-sm",
            isValue ? "bg-white/20 text-white" : "gradient-orange text-white",
          ].join(" ")}
        >
          <Icon className="h-4.5 w-4.5" strokeWidth={2.25} />
        </span>
        <span
          className={[
            "text-[11px] font-semibold uppercase tracking-[0.12em]",
            isValue ? "text-white/70" : "text-muted-foreground",
          ].join(" ")}
        >
          {block.short}
        </span>
      </div>

      {/* Título + pregunta */}
      <div className="flex flex-col gap-2 text-center">
        <h3
          className={[
            "font-display text-3xl leading-none tracking-wide",
            isValue ? "text-white" : "[color:#2f3942]",
          ].join(" ")}
        >
          {block.title.toUpperCase()}
        </h3>

        <p
          className={[
            "text-[14px] leading-snug font-medium",
            isValue ? "text-white/70" : "text-muted-foreground",
          ].join(" ")}
        >
          {block.question}
        </p>

        {/* CTA en hover */}
        <span
          className={[
            "inline-flex items-center justify-center gap-1 text-[12px] font-semibold uppercase tracking-widest",
            "translate-y-1 opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100",
            isValue ? "text-white/80" : "text-primary",
          ].join(" ")}
        >
          Ver detalle
          <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </motion.button>
  );
}
