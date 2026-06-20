import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowLeft, Phone, Mail, MapPin, CheckCircle, Clock, ChevronRight,
} from "lucide-react";
import { cars } from "../data/cars";

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
    initial={{ opacity: 0, y: 22 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export function Contact() {
  const navigate = useNavigate();
  const location = useLocation();
  const carId = location.state?.carId as number | undefined;
  const selectedCar = carId ? cars.find((c) => c.id === carId) : null;

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    dateDebut: "",
    dateFin: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md w-full text-center"
        >
          <div className="w-20 h-20 rounded-full bg-[#B84C21]/15 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-[#B84C21]" />
          </div>
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            Demande envoyée !
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Merci pour votre demande de réservation. Notre équipe vous
            contactera dans les plus brefs délais pour confirmer votre
            réservation.
          </p>
          {selectedCar && (
            <div className="bg-card border border-border rounded-lg px-5 py-4 mb-8 text-left">
              <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-1">
                Véhicule sélectionné
              </p>
              <p className="font-display text-lg font-semibold text-foreground">
                {selectedCar.name}
              </p>
              <p className="text-[#B84C21] text-sm font-medium">
                {selectedCar.price} MAD / jour
              </p>
            </div>
          )}
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 bg-[#B84C21] hover:bg-[#A03D19] text-white font-medium px-8 py-3.5 rounded transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="bg-[#1C1008] h-16 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
          <Link to="/" className="font-display text-2xl font-bold text-white tracking-tight">
            ESA <span className="text-[#C9902E]">CAR</span>
          </Link>
          <div className="flex items-center gap-1 text-white/50 text-sm">
            <Link to="/" className="hover:text-white/80 transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/80">Réservation</span>
          </div>
        </div>
      </nav>

      {/* Hero bar */}
      <div className="bg-[#1C1008] border-b border-white/8 pb-10 pt-8">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <p className="font-mono text-[#C9902E] text-xs tracking-[0.25em] uppercase mb-3">
              Formulaire de réservation
            </p>
            <h1 className="font-display text-5xl font-bold text-white">
              Réservez votre véhicule
            </h1>
          </FadeIn>
          {selectedCar && (
            <FadeIn delay={0.1} className="mt-5">
              <div className="inline-flex items-center gap-3 bg-white/8 border border-white/15 rounded-lg px-4 py-3">
                <div className="w-10 h-10 rounded overflow-hidden bg-muted shrink-0">
                  <img
                    src={selectedCar.image}
                    alt={selectedCar.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{selectedCar.name}</p>
                  <p className="text-[#C9902E] text-xs">{selectedCar.price} MAD / jour</p>
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Form */}
          <FadeIn delay={0.05} className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-7">
                Vos informations
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Nom *" id="nom">
                    <input
                      id="nom"
                      name="nom"
                      type="text"
                      required
                      value={formData.nom}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="field-input"
                    />
                  </Field>
                  <Field label="Prénom *" id="prenom">
                    <input
                      id="prenom"
                      name="prenom"
                      type="text"
                      required
                      value={formData.prenom}
                      onChange={handleChange}
                      placeholder="Votre prénom"
                      className="field-input"
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Email *" id="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre.email@exemple.com"
                      className="field-input"
                    />
                  </Field>
                  <Field label="Téléphone *" id="telephone">
                    <input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      required
                      value={formData.telephone}
                      onChange={handleChange}
                      placeholder="+212 6XX XXX XXX"
                      className="field-input"
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Date de début *" id="dateDebut">
                    <input
                      id="dateDebut"
                      name="dateDebut"
                      type="date"
                      required
                      value={formData.dateDebut}
                      onChange={handleChange}
                      className="field-input"
                    />
                  </Field>
                  <Field label="Date de fin *" id="dateFin">
                    <input
                      id="dateFin"
                      name="dateFin"
                      type="date"
                      required
                      value={formData.dateFin}
                      onChange={handleChange}
                      className="field-input"
                    />
                  </Field>
                </div>

                {formData.dateDebut && formData.dateFin && new Date(formData.dateFin) > new Date(formData.dateDebut) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="bg-[#B84C21]/8 border border-[#B84C21]/20 rounded-lg px-4 py-3"
                  >
                    {(() => {
                      const days = Math.round(
                        (new Date(formData.dateFin).getTime() - new Date(formData.dateDebut).getTime()) /
                          (1000 * 60 * 60 * 24)
                      );
                      const total = selectedCar ? days * selectedCar.price : null;
                      return (
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            Durée :{" "}
                            <strong className="text-foreground">{days} jour{days > 1 ? "s" : ""}</strong>
                          </span>
                          {total && (
                            <span className="text-muted-foreground">
                              Estimation :{" "}
                              <strong className="text-[#B84C21]">{total.toLocaleString()} MAD</strong>
                            </span>
                          )}
                        </div>
                      );
                    })()}
                  </motion.div>
                )}

                <Field label="Message (optionnel)" id="message">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Informations complémentaires, besoins spécifiques, lieu de livraison..."
                    rows={4}
                    className="field-input resize-none"
                  />
                </Field>

                <button
                  type="submit"
                  className="w-full bg-[#B84C21] hover:bg-[#A03D19] text-white font-semibold py-4 rounded transition-colors text-sm tracking-wide"
                >
                  Envoyer la demande de réservation
                </button>
              </form>
            </div>
          </FadeIn>

          {/* Sidebar */}
          <FadeIn delay={0.12} className="space-y-5">
            {/* Contact info */}
            <div className="bg-[#1C1008] rounded-lg p-6">
              <h3 className="font-display text-lg font-semibold text-white mb-5">
                Nos coordonnées
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#B84C21]/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-[#C9902E]" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Adresse</p>
                    <p className="text-white/50 text-sm leading-relaxed">
                      Avenue Mohammed VI<br />Marrakech, Maroc
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#B84C21]/20 flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5 text-[#C9902E]" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Téléphone</p>
                    <a
                      href="tel:+212600000000"
                      className="text-white/50 text-sm hover:text-[#C9902E] transition-colors"
                    >
                      +212 6XX XXX XXX
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#B84C21]/20 flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5 text-[#C9902E]" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Email</p>
                    <a
                      href="mailto:contact@esacar.ma"
                      className="text-white/50 text-sm hover:text-[#C9902E] transition-colors"
                    >
                      contact@esacar.ma
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-5">
                <Clock className="w-4 h-4 text-[#B84C21]" />
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Horaires d'ouverture
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  { day: "Lundi — Vendredi", hours: "8h00 – 19h00" },
                  { day: "Samedi", hours: "9h00 – 18h00" },
                  { day: "Dimanche", hours: "10h00 – 16h00" },
                ].map(({ day, hours }) => (
                  <li key={day} className="flex items-center justify-between text-sm border-b border-border last:border-0 pb-3 last:pb-0">
                    <span className="text-muted-foreground">{day}</span>
                    <span className="font-medium text-foreground">{hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why book CTA */}
            <div className="bg-[#B84C21]/10 border border-[#B84C21]/20 rounded-lg p-5">
              <p className="text-foreground text-sm font-medium mb-2">
                Réservation rapide &amp; gratuite
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Aucun frais de réservation. Confirmation sous 2h. Annulation
                flexible jusqu'à 24h avant la prise en charge.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1C1008] border-t border-white/8 mt-8">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <span className="font-display font-bold text-white/50">
            ESA <span className="text-[#C9902E]/70">CAR</span>
          </span>
          <span>© 2026 ESA CAR · Marrakech, Maroc</span>
        </div>
      </footer>

      <style>{`
        .field-input {
          width: 100%;
          background: var(--input-background);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 0.625rem 0.875rem;
          font-size: 0.875rem;
          color: var(--foreground);
          transition: border-color 0.2s, box-shadow 0.2s;
          font-family: inherit;
          outline: none;
        }
        .field-input::placeholder {
          color: var(--muted-foreground);
          opacity: 0.7;
        }
        .field-input:focus {
          border-color: #B84C21;
          box-shadow: 0 0 0 3px rgba(184, 76, 33, 0.12);
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
