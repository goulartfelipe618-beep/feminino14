import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Clock, Star, Eye, Heart, Award } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Sobre Nós</p>
            <h1 className="text-4xl md:text-5xl text-foreground max-w-md italic" style={{ fontFamily: 'Playfair Display, serif' }}>
              Estilo é <span className="text-primary">atitude</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-xl">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="clean-card p-8 md:p-10">
              <div className="space-y-5">
                <p className="text-muted-foreground leading-[1.8]">
                  A Rosé Transfer acredita que transporte executivo vai além do deslocamento. É sobre segurança impecável, pontualidade absoluta e um estilo que fala por si.
                </p>
                <p className="text-muted-foreground leading-[1.8]">
                  Cada veículo é preparado com rigor. Cada motorista é treinado para oferecer discrição e excelência. Cada rota é planejada para otimizar seu tempo.
                </p>
                <p className="text-muted-foreground leading-[1.8]">
                  De reuniões de última hora a eventos de grande porte — estamos prontos para superar suas expectativas.
                </p>
              </div>

              <div className="rose-line my-8" />

              <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
                {[
                  { icon: Shield, label: "Segurança" },
                  { icon: Clock, label: "Pontualidade" },
                  { icon: Star, label: "Estilo" },
                  { icon: Eye, label: "Atenção" },
                  { icon: Heart, label: "Cuidado" },
                  { icon: Award, label: "Excelência" },
                ].map((d) => (
                  <div key={d.label} className="text-center">
                    <d.icon size={20} className="text-primary mx-auto mb-2" strokeWidth={1.5} />
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{d.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
