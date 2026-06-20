import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import { motion } from "motion/react";
import { cars } from "../data/cars";
import {
  Users, Gauge, Fuel, Check, Phone, MapPin, Star,
  ArrowRight, ChevronDown, Shield, Clock, Award, Headphones,
} from "lucide-react";

const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const CATEGORIES = ["Tous", "Citadine", "SUV", "Berline", "Luxe"];

function filterCars(list: typeof cars, cat: string) {
  if (cat === "Tous") return list;
  if (cat === "Citadine") return list.filter((c) => c.category.toLowerCase().includes("citadine"));
  if (cat === "SUV") return list.filter((c) => c.category.toLowerCase().includes("suv"));
  if (cat === "Berline") return list.filter((c) => c.category.toLowerCase().includes("berline"));
  if (cat === "Luxe") return list.filter((c) => c.price >= 700);
  return list;
}

export function Home() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filteredCars = filterCars(cars, activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── NAVBAR ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-[#1C1008]/97 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span
            className="font-display text-2xl font-bold text-white tracking-tight cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ESA <span className="text-[#C9902E]">CAR</span>
          </span>

          <div className="hidden md:flex items-center gap-8 text-sm text-white/75">
            <a href="#flotte" className="hover:text-white transition-colors">Notre Flotte</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#comment" className="hover:text-white transition-colors">Comment ça marche</a>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          <a
            href="tel:+212600000000"
            className="hidden md:flex items-center gap-2 bg-[#B84C21] hover:bg-[#A03D19] text-white text-sm font-medium px-4 py-2 rounded transition-colors"
          >
            <Phone className="w-4 h-4" />
            +212 6XX XXX XXX
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&h=1080&fit=crop&auto=format)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1008]/93 via-[#1C1008]/65 to-[#1C1008]/25" />

        <div className="relative max-w-7xl mx-auto px-6 pt-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-mono text-[#C9902E] text-xs tracking-[0.25em] uppercase mb-5"
          >
            Location de voitures — Marrakech, Maroc
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl md:text-7xl lg:text-[5.5rem] text-white font-bold leading-[1.05] mb-6 max-w-3xl"
          >
            Explorez le<br />
            <em className="text-[#C9902E] not-italic">Maroc</em> à<br />
            votre rythme
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-white/70 text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
          >
            Flotte de 10 véhicules premium disponibles à Marrakech. Citadines,
            SUV, berlines de luxe — votre voiture idéale vous attend.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#flotte"
              className="inline-flex items-center gap-2 bg-[#B84C21] hover:bg-[#A03D19] text-white font-semibold px-8 py-4 rounded transition-colors text-sm tracking-wide"
            >
              Voir notre flotte
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/35 hover:border-white/70 hover:bg-white/5 text-white font-medium px-8 py-4 rounded transition-all text-sm tracking-wide"
            >
              Réserver maintenant
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 pointer-events-none"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Défiler</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#B84C21]">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "10", label: "Véhicules disponibles" },
            { value: "5+", label: "Années d'expérience" },
            { value: "500+", label: "Clients satisfaits" },
            { value: "24h/7j", label: "Assistance client" },
          ].map((stat, i) => (
            <FadeIn key={i} delay={i * 0.07} className="text-center">
              <div className="font-display text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-white/65 text-sm mt-1">{stat.label}</div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── FLEET ── */}
      <section id="flotte" className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-3">
            <p className="font-mono text-[#C9902E] text-xs tracking-[0.25em] uppercase">
              Notre Flotte
            </p>
          </FadeIn>
          <FadeIn delay={0.08} className="text-center mb-4">
            <h2 className="font-display text-5xl font-bold text-foreground">
              Choisissez votre véhicule
            </h2>
          </FadeIn>
          <FadeIn delay={0.14} className="text-center mb-12">
            <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Des voitures récentes et parfaitement entretenues pour tous vos
              déplacements à Marrakech et ses environs.
            </p>
          </FadeIn>

          {/* Filter tabs */}
          <FadeIn delay={0.18} className="flex flex-wrap justify-center gap-3 mb-14">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#B84C21] text-white shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-[#B84C21]/10 hover:text-[#B84C21]"
                }`}
              >
                {cat}
              </button>
            ))}
          </FadeIn>

          {/* Cars grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredCars.map((car, i) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: (i % 3) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-2xl hover:shadow-[#1C1008]/12 transition-shadow duration-500"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-muted">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1008]/50 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#B84C21] text-white text-[11px] font-semibold px-3 py-1 rounded-full tracking-wide">
                    {car.category}
                  </span>
                  <div className="absolute bottom-3 right-3 bg-[#1C1008]/80 backdrop-blur-sm text-white px-3 py-1.5 rounded text-sm font-bold">
                    {car.price} MAD
                    <span className="font-normal opacity-60 text-xs"> /j</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    {car.name}
                  </h3>

                  {/* Specs */}
                  <div className="flex items-center gap-4 text-muted-foreground text-xs mb-4 pb-4 border-b border-border">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      {car.seats} places
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Gauge className="w-3.5 h-3.5" />
                      {car.transmission}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Fuel className="w-3.5 h-3.5" />
                      {car.fuel}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {car.features.slice(0, 3).map((f, idx) => (
                      <span
                        key={idx}
                        className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full"
                      >
                        <Check className="w-3 h-3 text-[#B84C21]" />
                        {f}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => navigate("/contact", { state: { carId: car.id } })}
                    className="w-full bg-[#1C1008] hover:bg-[#B84C21] text-white text-sm font-medium py-3 rounded transition-colors duration-300"
                  >
                    Réserver ce véhicule
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section id="services" className="py-28 bg-[#1C1008]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-3">
            <p className="font-mono text-[#C9902E] text-xs tracking-[0.25em] uppercase">
              Pourquoi nous choisir
            </p>
          </FadeIn>
          <FadeIn delay={0.08} className="text-center mb-16">
            <h2 className="font-display text-5xl font-bold text-white">
              L&apos;excellence à chaque trajet
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                Icon: Shield,
                title: "Assurance complète",
                desc: "Tous nos véhicules sont couverts par une assurance tous risques pour votre tranquillité d'esprit.",
              },
              {
                Icon: Clock,
                title: "Disponible 24h/24",
                desc: "Notre équipe est joignable à toute heure pour vous assister pendant toute la durée de votre location.",
              },
              {
                Icon: Award,
                title: "Flotte premium",
                desc: "Des véhicules récents et irréprochables, de la citadine économique au SUV de luxe.",
              },
              {
                Icon: Headphones,
                title: "Livraison à domicile",
                desc: "Nous livrons votre véhicule à l'hôtel, à l'aéroport ou à toute adresse de votre choix à Marrakech.",
              },
            ].map(({ Icon, title, desc }, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="text-center px-4">
                  <div className="w-14 h-14 rounded-full bg-[#B84C21]/20 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-6 h-6 text-[#C9902E]" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white mb-3">
                    {title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="comment" className="py-28 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-3">
            <p className="font-mono text-[#C9902E] text-xs tracking-[0.25em] uppercase">
              Processus simple
            </p>
          </FadeIn>
          <FadeIn delay={0.08} className="text-center mb-20">
            <h2 className="font-display text-5xl font-bold text-foreground">
              Comment ça marche
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            <div className="hidden md:block absolute top-11 left-[calc(33.33%+2rem)] right-[calc(33.33%+2rem)] h-px bg-[#B84C21]/25" />

            {[
              {
                step: "01",
                title: "Choisissez votre voiture",
                desc: "Parcourez notre flotte et sélectionnez le véhicule qui correspond à vos besoins et à votre budget.",
              },
              {
                step: "02",
                title: "Remplissez le formulaire",
                desc: "Indiquez vos dates de location, vos coordonnées et tout besoin particulier.",
              },
              {
                step: "03",
                title: "Profitez du voyage",
                desc: "Notre équipe confirme votre réservation et livre le véhicule à l'adresse de votre choix.",
              },
            ].map(({ step, title, desc }, i) => (
              <FadeIn key={i} delay={i * 0.15} className="text-center px-6">
                <div className="w-[5.5rem] h-[5.5rem] rounded-full bg-background border-2 border-[#B84C21] flex items-center justify-center mx-auto mb-6 relative z-10 shadow-sm">
                  <span className="font-display text-2xl font-bold text-[#B84C21]">
                    {step}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-3">
            <p className="font-mono text-[#C9902E] text-xs tracking-[0.25em] uppercase">
              Avis clients
            </p>
          </FadeIn>
          <FadeIn delay={0.08} className="text-center mb-16">
            <h2 className="font-display text-5xl font-bold text-foreground">
              Ils nous font confiance
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              {
                name: "Karim Benali",
                origin: "Casablanca",
                text: "Service exceptionnel ! La voiture était impeccable et livrée directement à notre hôtel. Je recommande vivement ESA Car pour explorer Marrakech.",
              },
              {
                name: "Sophie Martín",
                origin: "Paris, France",
                text: "Nous avons loué un SUV pour visiter les montagnes de l'Atlas. Prix transparent, voiture en parfait état, équipe très professionnelle.",
              },
              {
                name: "Ahmed Fassi",
                origin: "Fès, Maroc",
                text: "Quatrième fois que je loue chez ESA Car. La qualité est toujours au rendez-vous et le service client est disponible en permanence.",
              },
            ].map(({ name, origin, text }, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-lg p-7 hover:shadow-lg hover:shadow-[#1C1008]/6 transition-shadow h-full flex flex-col">
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-[#C9902E] text-[#C9902E]" />
                    ))}
                  </div>
                  <p className="text-foreground/75 text-sm leading-relaxed mb-6 italic flex-1">
                    &ldquo;{text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#B84C21]/15 flex items-center justify-center text-[#B84C21] font-display font-bold text-sm">
                      {name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{name}</div>
                      <div className="text-muted-foreground text-xs">{origin}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARRAKECH HIGHLIGHT BAND ── */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1549918864-48ac978761a4?w=1920&h=600&fit=crop&auto=format)",
          }}
        />
        <div className="absolute inset-0 bg-[#1C1008]/80" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h2 className="font-display text-5xl font-bold text-white leading-tight mb-6">
              Marrakech &amp; ses<br />
              <em className="text-[#C9902E] not-italic">merveilles</em> vous attendent
            </h2>
            <p className="text-white/65 leading-relaxed mb-8">
              Des ruelles de la Médina aux sommets enneigés de l'Atlas, en passant
              par les dunes du désert d'Agafay — explorez le Maroc en toute
              liberté avec un véhicule fiable et confortable.
            </p>
            <a
              href="#flotte"
              className="inline-flex items-center gap-2 bg-[#C9902E] hover:bg-[#B07820] text-[#1C1008] font-semibold px-7 py-3.5 rounded transition-colors text-sm"
            >
              Découvrir la flotte
              <ArrowRight className="w-4 h-4" />
            </a>
          </FadeIn>

          <FadeIn delay={0.15} className="grid grid-cols-2 gap-4">
            {[
              { label: "Médina de Marrakech", km: "0 km" },
              { label: "Montagne de l'Atlas", km: "60 km" },
              { label: "Désert d'Agafay", km: "40 km" },
              { label: "Essaouira", km: "180 km" },
            ].map(({ label, km }) => (
              <div
                key={label}
                className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-lg p-4 hover:bg-white/12 transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#C9902E] mb-2" />
                <div className="text-white font-medium text-sm">{label}</div>
                <div className="text-white/45 text-xs mt-0.5">à {km}</div>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-24 overflow-hidden bg-[#B84C21]">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 50%, #fff 0%, transparent 55%), radial-gradient(circle at 85% 50%, #C9902E 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Prêt pour votre<br />prochaine aventure ?
            </h2>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="text-white/70 text-lg mb-10">
              Réservez dès maintenant et bénéficiez d'un service de qualité à
              prix transparent.
            </p>
          </FadeIn>
          <FadeIn delay={0.22}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#B84C21] font-semibold px-10 py-4 rounded hover:bg-[#F7F1E8] transition-colors text-sm tracking-wide"
            >
              Réserver maintenant
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1C1008] text-white">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="font-display text-2xl font-bold mb-4">
              ESA <span className="text-[#C9902E]">CAR</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              Votre partenaire mobilité à Marrakech. Location de voitures de
              qualité pour professionnels et touristes depuis plus de 5 ans.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-[0.18em] text-white/35 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href="#flotte" className="hover:text-white transition-colors">
                  Notre flotte
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Nos services
                </a>
              </li>
              <li>
                <a href="#comment" className="hover:text-white transition-colors">
                  Comment ça marche
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Réserver un véhicule
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-[0.18em] text-white/35 mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9902E] mt-0.5 shrink-0" />
                Avenue Mohammed VI, Marrakech, Maroc
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9902E] shrink-0" />
                +212 6XX XXX XXX
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#C9902E] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                contact@esacar.ma
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/30">
            <span>© 2026 ESA CAR. Tous droits réservés.</span>
            <span>Marrakech, Maroc</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
