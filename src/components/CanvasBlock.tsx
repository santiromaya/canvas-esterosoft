import { motion } from "framer-motion";
import type { CanvasBlock as Block } from "@/data/canvas";
import { Plus } from "lucide-react";

type Props = { block: Block; onClick: () => void; index: number };

export function CanvasBlock({ block, onClick, index }: Props) {
  const Icon = block.icon;
  return (
    <motion.button
      type="button"
      onClick={onClick}
      style={{ gridArea: block.area }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.985 }}
      className="group relative flex flex-col items-start gap-3 rounded-xl border border-black bg-card p-5 text-left transition-shadow hover:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="flex w-full items-start justify-between">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg gradient-orange text-primary-foreground shadow-sm">
          <Icon className="h-5 w-5" strokeWidth={2.25} />
        </span>
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-black/15 text-foreground/60 transition-colors group-hover:border-primary group-hover:text-primary">
          <Plus className="h-4 w-4" />
        </span>
      </div>
      <div>
        <h3 className="font-display text-2xl leading-none tracking-wide">
          {block.title.toUpperCase()}
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground">{block.short}</p>
      </div>
    </motion.button>
  );
}
