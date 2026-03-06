import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export const InvitePopup = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 1.5 }}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-background/50 backdrop-blur-sm"
        onClick={() => setVisible(false)}
      >
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4, delay: 1.7 }}
          className="clean-card p-10 md:p-14 max-w-sm mx-6 relative text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Bem-vinda</p>
          <h3 className="text-3xl text-foreground mb-3 italic" style={{ fontFamily: 'Playfair Display, serif' }}>
            Rosé Transfer
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            Segurança, pontualidade e estilo impecável em cada trajeto.
          </p>
          <button onClick={() => setVisible(false)} className="clean-btn w-full">
            Explorar
          </button>
          <button onClick={() => setVisible(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
            <X size={16} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
