import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GroupForm } from "@/components/GroupForm";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import cleanFleet from "@/assets/clean-fleet.jpg";
import cleanSedan from "@/assets/clean-sedan.jpg";
import cleanInterior from "@/assets/clean-interior.jpg";

const grid = [
  { img: cleanSedan, title: "Sedan Premium", pax: "1-3 passageiros" },
  { img: cleanInterior, title: "SUV Executivo", pax: "1-5 passageiros" },
  { img: cleanFleet, title: "Van VIP", pax: "6-14 passageiros" },
];

const Grupos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Frota</p>
            <h1 className="text-4xl md:text-5xl text-foreground max-w-md italic" style={{ fontFamily: 'Playfair Display, serif' }}>
              Opções para cada <span className="text-primary">ocasião</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Clean grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl">
            {grid.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="clean-card overflow-hidden"
              >
                <img src={v.img} alt={v.title} className="w-full aspect-[4/3] object-cover" />
                <div className="p-5">
                  <h3 className="text-base text-foreground mb-1 italic" style={{ fontFamily: 'Playfair Display, serif' }}>{v.title}</h3>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Users size={14} />
                    <span className="text-sm">{v.pax}</span>
                  </div>
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
            <GroupForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Grupos;
