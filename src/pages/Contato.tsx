import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";

const Contato = () => {
  const info = [
    { icon: Mail, label: "E-mail", value: "hello@rosetransfer.com.br", href: "mailto:hello@rosetransfer.com.br" },
    { icon: Phone, label: "Telefone", value: "+55 11 99999-9999", href: "tel:+5511999999999" },
    { icon: MessageCircle, label: "WhatsApp", value: "+55 11 99999-9999", href: "https://wa.me/5511999999999" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Fale Conosco</p>
            <h1 className="text-4xl md:text-5xl text-foreground italic" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span className="text-primary">Contato</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6 max-w-md">
          <div className="clean-card p-8 md:p-10">
            <div className="space-y-3">
              {info.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-md border border-border hover:border-primary/40 transition-all"
                  style={{ textDecoration: 'none' }}
                >
                  <item.icon size={18} className="text-primary flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    <p className="text-foreground text-sm">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="rose-line my-6" />

            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="clean-btn block text-center w-full"
            >
              WhatsApp Direto
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
