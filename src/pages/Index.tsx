import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TransferForm } from "@/components/TransferForm";
import { motion } from "framer-motion";
import { Shield, Clock, Star, ArrowRight } from "lucide-react";
import cleanSedan from "@/assets/clean-sedan.jpg";
import cleanInterior from "@/assets/clean-interior.jpg";
import cleanFleet from "@/assets/clean-fleet.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-14">
        <div className="absolute inset-0">
          <img src={cleanSedan} alt="Sedan premium" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative container mx-auto px-6"
        >
          <div className="max-w-lg">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Transfer Executivo</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-5 text-foreground italic" style={{ fontFamily: 'Playfair Display, serif' }}>
              Segurança,<br />
              pontualidade<br />
              e <span className="text-primary">estilo</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm">
              Cada trajeto planejado com precisão. Cada detalhe pensado para sua tranquilidade.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#cotacao" className="clean-btn inline-flex items-center gap-2">Solicitar Cotação <ArrowRight size={14} /></a>
              <a href="#frota" className="clean-btn-outline inline-block">Conhecer Frota</a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Pillars */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            {[
              { icon: Shield, title: "Segurança", desc: "Veículos rastreados, motoristas certificados e protocolos de proteção." },
              { icon: Clock, title: "Pontualidade", desc: "Compromisso absoluto com horários. Sem atrasos, sem surpresas." },
              { icon: Star, title: "Estilo", desc: "Veículos impecáveis, interior premium e presença que impressiona." },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="clean-card p-6"
              >
                <f.icon size={24} className="text-primary mb-4" strokeWidth={1.5} />
                <h3 className="text-lg text-foreground mb-2 italic" style={{ fontFamily: 'Playfair Display, serif' }}>{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet grid — clean */}
      <section id="frota" className="py-20">
        <div className="container mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Nossa Frota</p>
          <h2 className="text-3xl text-foreground mb-10 italic" style={{ fontFamily: 'Playfair Display, serif' }}>
            Veículos com <span className="text-primary">presença</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl">
            {[
              { img: cleanSedan, title: "Sedan Premium", desc: "Conforto e discrição para executivos exigentes." },
              { img: cleanInterior, title: "Interior Refinado", desc: "Detalhes que elevam cada momento do trajeto." },
              { img: cleanFleet, title: "Frota Coordenada", desc: "Logística impecável para eventos e grupos." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="clean-card overflow-hidden"
              >
                <img src={item.img} alt={item.title} className="w-full aspect-[4/3] object-cover" />
                <div className="p-5">
                  <h3 className="text-base text-foreground mb-1 italic" style={{ fontFamily: 'Playfair Display, serif' }}>{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="cotacao" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-xl">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <TransferForm />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
