import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import type { CanvasBlock } from "@/data/canvas";
import { X } from "lucide-react";

type Props = { block: CanvasBlock | null; onClose: () => void };

export function CanvasModal({ block, onClose }: Props) {
  const open = !!block;
  return (
    <Dialog.Root open={open} onOpenChange={(o) => !o && onClose()}>
      <AnimatePresence>
        {block && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                className="fixed left-1/2 top-1/2 z-50 w-[calc(100vw-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-black bg-card shadow-2xl focus:outline-none"
                initial={{ opacity: 0, scale: 0.96, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: 6 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <div className="flex items-start justify-between gap-4 border-b border-black/10 p-6">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-orange text-primary-foreground">
                      <block.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <Dialog.Title className="font-display text-3xl leading-none tracking-wide">
                        {block.title.toUpperCase()}
                      </Dialog.Title>
                      <Dialog.Description className="mt-1 text-sm text-muted-foreground">
                        {block.short}
                      </Dialog.Description>
                    </div>
                  </div>
                  <Dialog.Close className="cursor-pointer rounded-full p-1.5 text-foreground/60 transition-colors hover:bg-muted hover:text-foreground">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Cerrar</span>
                  </Dialog.Close>
                </div>
                <div className="max-h-[65vh] space-y-5 overflow-y-auto p-6">
                  {block.content.map((sec, i) => (
                    <div key={i}>
                      {sec.heading && (
                        <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-gradient-orange">
                          {sec.heading}
                        </h4>
                      )}
                      <ul className="space-y-2">
                        {sec.items.map((item, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.04 * j + 0.05 * i, duration: 0.25 }}
                            className="flex items-start gap-3 text-[14px] leading-snug font-medium text-muted-foreground"
                          >
                            <span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full gradient-orange" />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
