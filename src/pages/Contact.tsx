import React, { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "Application Web / SaaS",
    budget: "2 500 € - 5 000 €",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = "contact@i-bory.com";
  const whatsappNumber = "+33 7 00 00 00 00";
  const whatsappUrl =
    "https://wa.me/33700000000?text=Bonjour%20I-BORY,%20je%20vous%20contacte%20concernant%20un%20projet%20informatique.";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate interactive submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 750);
  };

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* Background glow */}
      <div
        className="glow-ambient glow-primary animate-pulse-glow"
        style={{
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "550px",
          height: "350px",
        }}
      />

      <section className="section" style={{ paddingTop: "clamp(3.5rem, 6vw, 5.5rem)" }}>
        <div className="container relative" style={{ zIndex: 1 }}>
          {/* Header Title */}
          <div className="flex flex-col items-center text-center mx-auto mb-10" style={{ maxWidth: "750px" }}>
            <span className="badge mb-3">Une équipe à votre écoute</span>
            <h1 className="text-title mb-4">Parlons de votre prochain projet</h1>
            <p className="text-lead" style={{ maxWidth: "640px" }}>
              Vous avez un problème informatique à résoudre ou une idée d'application ? Écrivez-nous directement sur WhatsApp, par email ou via le formulaire ci-dessous.
            </p>
          </div>

          {/* Quick Contact Cards (WhatsApp & Mail) */}
          <div
            className="grid grid-cols-2 gap-6 mb-10 mx-auto"
            style={{ maxWidth: "900px" }}
          >
            {/* WhatsApp Card */}
            <div
              className="card card-hover flex flex-col justify-between"
              style={{
                background: "linear-gradient(180deg, #0e1612 0%, #090e0c 100%)",
                borderColor: "rgba(37, 211, 102, 0.25)",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(37, 211, 102, 0.15)",
                      color: "var(--whatsapp)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.679-.702c.971.558 1.77.816 2.78.816 3.18 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.768-5.766-5.768zm0 10.377c-.901 0-1.637-.253-2.453-.699l-.176-.096-1.585.416.423-1.545-.112-.178c-.516-.821-.789-1.614-.788-2.509 0-2.535 2.062-4.597 4.604-4.597 2.54 0 4.602 2.062 4.602 4.597 0 2.536-2.062 4.611-4.508 4.611zm7.127-14.737C17.069.654 14.654.004 12.035 0 5.435 0 .07 5.365.067 11.966c-.001 2.11.551 4.168 1.599 5.981L0 24l6.216-1.631c1.742.951 3.705 1.453 5.814 1.454h.005c6.598 0 11.964-5.366 11.967-11.967 0-3.199-1.246-6.206-3.513-8.473z"/>
                    </svg>
                  </div>
                  <span className="badge badge-whatsapp">En ligne</span>
                </div>

                <h3 className="text-subtitle mb-1">WhatsApp Instantané</h3>
                <p className="text-paragraph mb-3" style={{ fontSize: "0.9rem" }}>
                  Discutez en direct avec l'équipe technique I-BORY pour une réponse ultra-rapide.
                </p>
                <p
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--white)",
                    marginBottom: "1.25rem",
                    fontFamily: "monospace",
                  }}
                >
                  {whatsappNumber}
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp w-full"
              >
                <span>Ouvrir la discussion WhatsApp</span>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>

            {/* Email Card */}
            <div
              className="card card-hover flex flex-col justify-between"
              style={{
                background: "linear-gradient(180deg, #0e121d 0%, #090c13 100%)",
                borderColor: "var(--primary-border)",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      backgroundColor: "var(--primary-subtle)",
                      color: "var(--primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <span className="badge">Réponse &lt; 24h</span>
                </div>

                <h3 className="text-subtitle mb-1">Contact par Email</h3>
                <p className="text-paragraph mb-3" style={{ fontSize: "0.9rem" }}>
                  Transmettez-nous votre cahier des charges, vos maquettes ou décrivez votre problématique.
                </p>
                <p
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--primary)",
                    marginBottom: "1.25rem",
                    fontFamily: "monospace",
                  }}
                >
                  {emailAddress}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${emailAddress}?subject=Demande%20de%20contact%20I-BORY`}
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  <span>Écrire un e-mail</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn btn-outline"
                  title="Copier l'adresse email"
                  style={{ padding: "0.8rem 1rem" }}
                >
                  {copied ? (
                    <span style={{ fontSize: "0.85rem", color: "#34d399", fontWeight: 700 }}>✓ Copié</span>
                  ) : (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div
            className="card mx-auto"
            style={{
              maxWidth: "900px",
              padding: "clamp(1.75rem, 4vw, 3rem)",
              background: "#0a0c13",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <div className="mb-6">
              <h2 className="text-title" style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>
                Formulaire de demande de devis & contact
              </h2>
              <p className="text-paragraph">
                Remplissez ce formulaire court pour recevoir une estimation budgétaire et un premier diagnostic technique gratuit.
              </p>
            </div>

            {submitted ? (
              <div
                className="p-6 text-center"
                style={{
                  backgroundColor: "rgba(16, 185, 129, 0.08)",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                  borderRadius: "var(--radius-lg)",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    color: "#34d399",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1rem auto",
                    fontSize: "1.75rem",
                  }}
                >
                  ✓
                </div>
                <h3 className="text-subtitle mb-2" style={{ color: "var(--white)" }}>
                  Merci pour votre message !
                </h3>
                <p className="text-paragraph mb-4" style={{ maxWidth: "500px", margin: "0 auto 1.5rem auto" }}>
                  Nous avons bien reçu votre demande concernant votre projet d'informatique. Un ingénieur de l'équipe I-BORY vous contactera d'ici quelques heures.
                </p>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      serviceType: "Application Web / SaaS",
                      budget: "2 500 € - 5 000 €",
                      message: "",
                    });
                  }}
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="form-label" htmlFor="contact-name">
                      Votre nom complet *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Ex. Sarah Kouamé"
                      className="input-control"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label" htmlFor="contact-email">
                      Votre adresse email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      autoComplete="email"
                      inputMode="email"
                      placeholder="sarah@entreprise.com"
                      className="input-control"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="form-label" htmlFor="contact-phone">
                      Numéro de téléphone / WhatsApp (optionnel)
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="+33 6 12 34 56 78"
                      className="input-control"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label" htmlFor="contact-service">
                      Type de besoin informatique
                    </label>
                    <select
                      id="contact-service"
                      className="input-control"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      style={{ cursor: "pointer" }}
                    >
                      <option value="Application Web / SaaS">Application Web / Plateforme SaaS</option>
                      <option value="Application Mobile iOS / Android">Application Mobile (iOS & Android)</option>
                      <option value="Automatisation de processus métier">Automatisation de processus métier</option>
                      <option value="Refonte & Modernisation de logiciel">Refonte & Modernisation de logiciel existant</option>
                      <option value="Intelligence Artificielle & Data">Intelligence Artificielle & Traitement de données</option>
                      <option value="Conseil & Audit de système">Conseil, Sécurité & Audit de système</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="form-label">
                    Budget indicatif envisagé
                  </label>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {[
                      "< 2 500 €",
                      "2 500 € - 5 000 €",
                      "5 000 € - 15 000 €",
                      "+ 15 000 €",
                      "À définir ensemble",
                    ].map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: b })}
                        style={{
                          padding: "0.5rem 0.9rem",
                          borderRadius: "8px",
                          fontSize: "0.85rem",
                          fontWeight: 500,
                          cursor: "pointer",
                          backgroundColor:
                            formData.budget === b
                              ? "var(--primary)"
                              : "rgba(255, 255, 255, 0.04)",
                          color: formData.budget === b ? "var(--white)" : "var(--text-muted)",
                          border:
                            formData.budget === b
                              ? "1px solid var(--primary)"
                              : "1px solid rgba(255, 255, 255, 0.08)",
                          transition: "all var(--transition-fast)",
                        }}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="form-label" htmlFor="contact-message">
                    Décrivez votre problème ou votre besoin *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Ex: Nous perdons beaucoup de temps chaque jour à saisir les commandes manuellement, nous aimerions automatiser ce processus et le connecter à notre CRM..."
                    className="input-control"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{
                    padding: "0.95rem",
                    fontSize: "1.05rem",
                    width: "100%",
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                >
                  {isSubmitting ? (
                    <span>Envoi en cours...</span>
                  ) : (
                    <>
                      <span>Envoyer ma demande de projet</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Reassurance process */}
          <div
            className="grid grid-cols-3 gap-6 mt-10 mx-auto"
            style={{ maxWidth: "900px" }}
          >
            <div className="card p-4 text-center">
              <span style={{ fontSize: "1.5rem", display: "block", marginBottom: "0.5rem" }}>⏱️</span>
              <h4 className="text-subtitle" style={{ fontSize: "1rem", marginBottom: "0.25rem" }}>
                1. Analyse rapide
              </h4>
              <p className="text-caption">
                Lecture approfondie de votre demande par un ingénieur sous 2 à 4 heures.
              </p>
            </div>

            <div className="card p-4 text-center">
              <span style={{ fontSize: "1.5rem", display: "block", marginBottom: "0.5rem" }}>☕</span>
              <h4 className="text-subtitle" style={{ fontSize: "1rem", marginBottom: "0.25rem" }}>
                2. Échange de 20 min
              </h4>
              <p className="text-caption">
                Discussion informelle par visio ou WhatsApp pour clarifier les enjeux et fonctionnalités.
              </p>
            </div>

            <div className="card p-4 text-center">
              <span style={{ fontSize: "1.5rem", display: "block", marginBottom: "0.5rem" }}>📋</span>
              <h4 className="text-subtitle" style={{ fontSize: "1rem", marginBottom: "0.25rem" }}>
                3. Proposition & Devis
              </h4>
              <p className="text-caption">
                Envoi d'une estimation budgétaire transparente, planning et jalons de livraison.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
