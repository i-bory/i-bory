import React, { useState } from "react";
import { Link } from "react-router-dom";

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  benefit: string;
}

interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: "web" | "mobile" | "automation";
  categoryLabel: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  badgeColor?: string;
}

export function Home() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const services: ServiceItem[] = [
    {
      id: "web",
      title: "Développement Web & SaaS sur mesure",
      description:
        "Création d'applications web réactives, intuitives et scalables. Nous transformons vos processus complexes en plateformes claires et performantes.",
      tags: ["React", "TypeScript", "Node.js", "APIs REST / GraphQL", "Cloud"],
      benefit: "Des interfaces rapides et accessibles pour booster votre activité.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
    },
    {
      id: "mobile",
      title: "Applications Mobiles iOS & Android",
      description:
        "Développement d'applications pour smartphones et tablettes offrant une expérience utilisateur fluide, des notifications push et un mode hors-ligne optimisé.",
      tags: ["iOS", "Android", "React Native", "Flutter", "Offline-first"],
      benefit: "Restez dans la poche de vos clients et collaborateurs.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      ),
    },
    {
      id: "automation",
      title: "Automatisation & Outils Métiers",
      description:
        "Élimination des tâches manuelles répétitives. Nous synchronisons vos logiciels, automatisons vos flux de travail et connectons vos bases de données.",
      tags: ["Workflows", "Webhooks", "Scripts Bun / Python", "Intégration CRM"],
      benefit: "Économisez des dizaines d'heures chaque semaine.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
    },
    {
      id: "ai",
      title: "Intelligence Artificielle & Traitement de Données",
      description:
        "Intégration d'assistants intelligents, automatisation de la lecture de documents et génération d'analyses prédictives adaptées à votre domaine.",
      tags: ["LLM & IA Générative", "OCR", "Traitement de données", "Dashboards"],
      benefit: "Passez de la donnée brute à des décisions éclairées.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        </svg>
      ),
    },
    {
      id: "cloud",
      title: "Infrastructure Cloud & Sécurité",
      description:
        "Déploiement haute disponibilité, sauvegarde automatisée et audit de sécurité pour garantir la résilience et la continuité de vos outils informatiques.",
      tags: ["Docker", "Serveurs Linux", "CI/CD", "SSL / TLS", "Backup auto"],
      benefit: "Vos applications fonctionnent 24h/24 en toute sécurité.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        </svg>
      ),
    },
    {
      id: "consulting",
      title: "Conseil & Audit Technologique",
      description:
        "Diagnostic complet de vos outils existants, identification des goulets d'étranglement et feuille de route pragmatique pour moderniser votre SI.",
      tags: ["Architecture logicielle", "Audit de performance", "Accompagnement agile"],
      benefit: "Des choix techniques pérennes, sans jargon inutile.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="16" x2="12" y2="12"/>
          <line x1="12" y1="8" x2="12.01" y2="8"/>
        </svg>
      ),
    },
  ];

  const projects: ProjectItem[] = [
    {
      id: "p1",
      title: "BoryPay - Passerelle de Paiement & Facturation",
      client: "Fintech & Commerce B2B",
      category: "web",
      categoryLabel: "Web & SaaS",
      problem:
        "Processus de facturation morcelé entre plusieurs outils avec des retards de règlement fréquents.",
      solution:
        "Conception d'une application unifiée avec génération automatique de factures et rappels multicanaux.",
      impact: "+140% de rapidité de paiement et zéro facture égarée.",
      technologies: ["React 19", "TypeScript", "Bun", "PostgreSQL", "Stripe API"],
    },
    {
      id: "p2",
      title: "HealthFlow - Gestion de Clinique & Télémédecine",
      client: "Réseau de Santé & Cabinets",
      category: "mobile",
      categoryLabel: "Application Mobile",
      problem:
        "Salles d'attente saturées et difficultés d'accès aux dossiers médicaux lors des déplacements.",
      solution:
        "Application mobile multiplateforme pour les praticiens et patients avec rappels SMS et agenda temps réel.",
      impact: "-65% de temps d'attente et diminution de 80% des rendez-vous manqués.",
      technologies: ["React Native", "WebRTC", "FastAPI", "Cloud Sécurisé Santé"],
    },
    {
      id: "p3",
      title: "LogiTrack Pro - Gestion de Flotte & Tournées",
      client: "Entreprise de Transport & Logistique",
      category: "automation",
      categoryLabel: "Automatisation & Métier",
      problem:
        "Planification manuelle des tournées sur feuilles Excel et retards imprévus sur les livraisons.",
      solution:
        "Outil d'optimisation d'itinéraires avec géolocalisation en direct et répartition intelligente des commandes.",
      impact: "28% de carburant économisé et 2h30 gagnées par chauffeur et par jour.",
      technologies: ["Algorithme d'optimisation", "WebSockets", "Leaflet Maps", "Node.js"],
    },
    {
      id: "p4",
      title: "EduPulse - Plateforme d'Apprentissage Hybride",
      client: "Institut Supérieur de Formation",
      category: "web",
      categoryLabel: "Web & SaaS",
      problem:
        "Manque de suivi individuel des apprenants et gestion administrative complexe des évaluations.",
      solution:
        "Portail étudiant et formateur avec tableau de bord analytique, quiz interactifs et correction instantanée.",
      impact: "98% d'engagement apprenants et administration divisée par trois.",
      technologies: ["React", "Tailwind/Custom CSS", "Docker", "REST API"],
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div>
      {/* ====================================================================
          HERO SECTION
          ==================================================================== */}
      <section
        className="section"
        style={{
          paddingTop: "clamp(4.5rem, 8vw, 7.5rem)",
          paddingBottom: "clamp(3.5rem, 6vw, 6rem)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow ambient background lights */}
        <div
          className="glow-ambient glow-primary animate-pulse-glow"
          style={{
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "400px",
          }}
        />

        <div className="container relative" style={{ zIndex: 1 }}>
          <div className="flex flex-col items-center text-center mx-auto" style={{ maxWidth: "900px" }}>
            {/* Tag / Badge */}
            <div className="badge mb-4">
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "var(--primary)",
                  boxShadow: "0 0 8px var(--primary)",
                }}
              />
              <span>Agence d'ingénierie & solutions logicielles</span>
            </div>

            {/* Main Slogan / Title */}
            <h1 className="text-hero mb-4">
              <span className="gradient-text-primary">I-BORY :</span>
              <br />
              <span style={{ color: "var(--white)" }}>"Vous rendre la vie plus facile"</span>
            </h1>

            {/* Description */}
            <p
              className="text-lead mb-6"
              style={{
                fontSize: "clamp(1.15rem, 2.2vw, 1.45rem)",
                maxWidth: "740px",
                color: "var(--text-main)",
                fontWeight: 400,
              }}
            >
              <strong style={{ color: "var(--primary)", fontWeight: 600 }}>
                "Nous créons des solutions informatiques à vos problèmes."
              </strong>{" "}
              De la conception d'applications web et mobiles à l'automatisation intégrale de vos processus métier, nous développons la technologie qui propulse votre entreprise.
            </p>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <Link to="/contact" className="btn btn-primary" style={{ padding: "0.95rem 2rem", fontSize: "1.05rem" }}>
                <span>Démarrer un projet</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>

              <a
                href="#services"
                className="btn btn-outline"
                style={{ padding: "0.95rem 2rem", fontSize: "1.05rem" }}
              >
                <span>Ce que nous faisons</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </a>
            </div>

            {/* Proof Numbers / Key Metrics */}
            <div
              className="grid grid-cols-2 tablet-cols-2 gap-4 w-full"
              style={{
                maxWidth: "880px",
                background: "rgba(14, 17, 24, 0.7)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-xl)",
                padding: "1.5rem",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex flex-col items-center justify-center p-2">
                <span
                  style={{
                    fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
                    fontWeight: 800,
                    color: "var(--primary)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  99.4%
                </span>
                <span className="text-caption" style={{ color: "var(--text-muted)", textAlign: "center" }}>
                  Satisfaction client mesurée
                </span>
              </div>

              <div className="flex flex-col items-center justify-center p-2">
                <span
                  style={{
                    fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
                    fontWeight: 800,
                    color: "var(--white)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  +50
                </span>
                <span className="text-caption" style={{ color: "var(--text-muted)", textAlign: "center" }}>
                  Solutions & Projets déployés
                </span>
              </div>

              <div className="flex flex-col items-center justify-center p-2">
                <span
                  style={{
                    fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
                    fontWeight: 800,
                    color: "var(--primary)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  &lt; 2h
                </span>
                <span className="text-caption" style={{ color: "var(--text-muted)", textAlign: "center" }}>
                  Temps de prise en charge
                </span>
              </div>

              <div className="flex flex-col items-center justify-center p-2">
                <span
                  style={{
                    fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
                    fontWeight: 800,
                    color: "var(--white)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  24/7
                </span>
                <span className="text-caption" style={{ color: "var(--text-muted)", textAlign: "center" }}>
                  Disponibilité & Support technique
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Tech Preview / Hero Visual */}
          <div className="mt-8 flex justify-center">
            <div
              className="card animate-float"
              style={{
                width: "100%",
                maxWidth: "880px",
                background: "linear-gradient(180deg, #0e121a 0%, #06080d 100%)",
                borderColor: "rgba(105, 134, 245, 0.25)",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 35px rgba(105, 134, 245, 0.15)",
                padding: "1.5rem",
              }}
            >
              {/* Window Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-subtle" style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
                <div className="flex items-center gap-2">
                  <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#ef4444" }} />
                  <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#f59e0b" }} />
                  <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#10b981" }} />
                  <span className="text-caption" style={{ marginLeft: "0.5rem", color: "var(--text-dim)" }}>
                    ibory-architecture-core.ts
                  </span>
                </div>
                <span className="badge" style={{ fontSize: "0.72rem", padding: "0.2rem 0.6rem" }}>
                  Système Opérationnel
                </span>
              </div>

              {/* Code / Visual representation */}
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: "0.88rem",
                  lineHeight: 1.6,
                  color: "#cbd5e1",
                  textAlign: "left",
                  overflowX: "auto",
                }}
              >
                <p><span style={{ color: "var(--primary)" }}>const</span> agency = <span style={{ color: "#a5b7fc" }}>new</span> <span style={{ color: "#ffffff", fontWeight: 700 }}>IBorySolutions</span>();</p>
                <p style={{ margin: "0.25rem 0" }}>
                  agency.<span style={{ color: "#6986F5" }}>solveProblem</span>({"{"}
                </p>
                <p style={{ paddingLeft: "1.5rem" }}>
                  mission: <span style={{ color: "#34d399" }}>"Vous rendre la vie plus facile"</span>,
                </p>
                <p style={{ paddingLeft: "1.5rem" }}>
                  promise: <span style={{ color: "#34d399" }}>"Nous créons des solutions informatiques à vos problèmes"</span>,
                </p>
                <p style={{ paddingLeft: "1.5rem" }}>
                  capabilities: [<span style={{ color: "#fcd34d" }}>"Web & SaaS"</span>, <span style={{ color: "#fcd34d" }}>"Mobile iOS/Android"</span>, <span style={{ color: "#fcd34d" }}>"Automatisation"</span>, <span style={{ color: "#fcd34d" }}>"IA"</span>],
                </p>
                <p style={{ paddingLeft: "1.5rem" }}>
                  delivery: <span style={{ color: "#6986F5" }}>"Clé en main, rapide et pérenne"</span>
                </p>
                <p>{"}"});</p>
                <p style={{ marginTop: "0.5rem", color: "#34d399" }}>
                  ✓ Prêt à déployer votre vision dès aujourd'hui.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION: CE QUE NOUS FAISONS
          ==================================================================== */}
      <section
        id="services"
        className="section"
        style={{
          backgroundColor: "rgba(8, 10, 15, 0.6)",
          borderTop: "1px solid var(--border-subtle)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div className="container">
          <div className="flex flex-col items-center text-center mx-auto mb-10" style={{ maxWidth: "700px" }}>
            <span className="badge mb-3">Nos Domaines d'Intervention</span>
            <h2 className="text-title mb-3">Ce que nous faisons</h2>
            <p className="text-paragraph">
              Des compétences pointues mises au service de vos objectifs. Nous analysons vos difficultés actuelles pour concevoir des logiciels ergonomiques, puissants et simples à utiliser.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="card card-hover flex flex-col justify-between">
                <div>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "12px",
                      backgroundColor: "var(--primary-subtle)",
                      border: "1px solid var(--primary-border)",
                      color: "var(--primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-subtitle mb-2" style={{ fontSize: "1.25rem" }}>
                    {service.title}
                  </h3>
                  <p className="text-paragraph mb-4" style={{ fontSize: "0.93rem" }}>
                    {service.description}
                  </p>
                </div>

                <div>
                  <div
                    style={{
                      backgroundColor: "rgba(105, 134, 245, 0.06)",
                      borderLeft: "3px solid var(--primary)",
                      padding: "0.6rem 0.8rem",
                      borderRadius: "0 var(--radius-sm) var(--radius-sm) 0",
                      marginBottom: "1rem",
                    }}
                  >
                    <p style={{ fontSize: "0.83rem", color: "var(--white)", fontWeight: 500 }}>
                      💡 {service.benefit}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 500,
                          backgroundColor: "rgba(255, 255, 255, 0.05)",
                          color: "var(--text-muted)",
                          padding: "0.2rem 0.55rem",
                          borderRadius: "var(--radius-full)",
                          border: "1px solid rgba(255, 255, 255, 0.05)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION: NOS PROJETS
          ==================================================================== */}
      <section id="projets" className="section">
        <div className="container">
          <div className="flex flex-col items-center text-center mx-auto mb-8" style={{ maxWidth: "720px" }}>
            <span className="badge mb-3">Études de Cas & Réalisations</span>
            <h2 className="text-title mb-3">Nos projets</h2>
            <p className="text-paragraph">
              Découvrez comment nos solutions informatiques ont résolu des problématiques concrètes et transformé l'activité de nos clients partenaires.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <button
              onClick={() => setActiveFilter("all")}
              className={`btn ${activeFilter === "all" ? "btn-primary" : "btn-outline"}`}
              style={{ padding: "0.55rem 1.25rem", fontSize: "0.88rem" }}
            >
              Tous les projets
            </button>
            <button
              onClick={() => setActiveFilter("web")}
              className={`btn ${activeFilter === "web" ? "btn-primary" : "btn-outline"}`}
              style={{ padding: "0.55rem 1.25rem", fontSize: "0.88rem" }}
            >
              Web & SaaS
            </button>
            <button
              onClick={() => setActiveFilter("mobile")}
              className={`btn ${activeFilter === "mobile" ? "btn-primary" : "btn-outline"}`}
              style={{ padding: "0.55rem 1.25rem", fontSize: "0.88rem" }}
            >
              Applications Mobiles
            </button>
            <button
              onClick={() => setActiveFilter("automation")}
              className={`btn ${activeFilter === "automation" ? "btn-primary" : "btn-outline"}`}
              style={{ padding: "0.55rem 1.25rem", fontSize: "0.88rem" }}
            >
              Automatisation
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="card card-hover flex flex-col justify-between"
                style={{
                  background: "linear-gradient(180deg, #0e111a 0%, #080a0f 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="badge" style={{ fontSize: "0.75rem", padding: "0.25rem 0.65rem" }}>
                      {project.categoryLabel}
                    </span>
                    <span className="text-caption" style={{ color: "var(--text-dim)" }}>
                      {project.client}
                    </span>
                  </div>

                  <h3 className="text-subtitle mb-3" style={{ fontSize: "1.35rem", color: "var(--white)" }}>
                    {project.title}
                  </h3>

                  <div className="flex flex-col gap-3 mb-4">
                    <div style={{ backgroundColor: "rgba(255, 255, 255, 0.02)", padding: "0.75rem", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
                      <p style={{ fontSize: "0.85rem", color: "var(--text-dim)", fontWeight: 600, marginBottom: "0.2rem" }}>
                        LE PROBLÈME :
                      </p>
                      <p className="text-paragraph" style={{ fontSize: "0.9rem", margin: 0 }}>
                        {project.problem}
                      </p>
                    </div>

                    <div style={{ backgroundColor: "rgba(105, 134, 245, 0.04)", padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--primary-border)" }}>
                      <p style={{ fontSize: "0.85rem", color: "var(--primary)", fontWeight: 600, marginBottom: "0.2rem" }}>
                        LA SOLUTION I-BORY :
                      </p>
                      <p className="text-paragraph" style={{ fontSize: "0.9rem", margin: 0, color: "var(--text-main)" }}>
                        {project.solution}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  {/* Impact highlight */}
                  <div
                    className="flex items-center gap-2 p-3 rounded-md mb-4"
                    style={{
                      backgroundColor: "rgba(16, 185, 129, 0.1)",
                      border: "1px solid rgba(16, 185, 129, 0.3)",
                      color: "#34d399",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                      <polyline points="17 6 23 6 23 12"></polyline>
                    </svg>
                    <span>Résultat : {project.impact}</span>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 500,
                          backgroundColor: "#161b26",
                          color: "var(--white)",
                          padding: "0.25rem 0.6rem",
                          borderRadius: "6px",
                          border: "1px solid rgba(105, 134, 245, 0.2)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION: VALEURS & APPROCHE (POURQUOI I-BORY)
          ==================================================================== */}
      <section
        id="valeurs"
        className="section"
        style={{
          backgroundColor: "#080a0f",
          borderTop: "1px solid var(--border-subtle)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div className="container">
          <div className="flex flex-col items-center text-center mx-auto mb-10" style={{ maxWidth: "700px" }}>
            <span className="badge mb-3">Notre Méthode</span>
            <h2 className="text-title mb-3">Pourquoi choisir I-BORY ?</h2>
            <p className="text-paragraph">
              Nous refusons la complexité inutile. Notre ambition quotidienne est d'apporter de la clarté et de la rentabilité grâce au digital.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            <div className="card text-center flex flex-col items-center p-5">
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "var(--primary-subtle)",
                  color: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                ⚡
              </div>
              <h4 className="text-subtitle mb-2" style={{ fontSize: "1.1rem" }}>
                Rapidité d'exécution
              </h4>
              <p className="text-paragraph" style={{ fontSize: "0.88rem" }}>
                Méthodes itératives courtes. Vos premières versions sont fonctionnelles en quelques semaines.
              </p>
            </div>

            <div className="card text-center flex flex-col items-center p-5">
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "var(--primary-subtle)",
                  color: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                🎯
              </div>
              <h4 className="text-subtitle mb-2" style={{ fontSize: "1.1rem" }}>
                Simplicité d'usage
              </h4>
              <p className="text-paragraph" style={{ fontSize: "0.88rem" }}>
                Fidèle à notre slogan : nous rendons la vie plus facile à vous et à vos utilisateurs finaux.
              </p>
            </div>

            <div className="card text-center flex flex-col items-center p-5">
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "var(--primary-subtle)",
                  color: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                🛡️
              </div>
              <h4 className="text-subtitle mb-2" style={{ fontSize: "1.1rem" }}>
                Fiabilité & Sécurité
              </h4>
              <p className="text-paragraph" style={{ fontSize: "0.88rem" }}>
                Code maintenable, architectures éprouvées et protection rigoureuse de vos données sensibles.
              </p>
            </div>

            <div className="card text-center flex flex-col items-center p-5">
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "var(--primary-subtle)",
                  color: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                🤝
              </div>
              <h4 className="text-subtitle mb-2" style={{ fontSize: "1.1rem" }}>
                Support & Proximité
              </h4>
              <p className="text-paragraph" style={{ fontSize: "0.88rem" }}>
                Un interlocuteur dédié réactif sur WhatsApp et email à chaque étape de votre croissance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION: CALL TO ACTION BANNER
          ==================================================================== */}
      <section className="section">
        <div className="container">
          <div
            className="card"
            style={{
              background: "linear-gradient(135deg, #0e121c 0%, #151a28 50%, #0a0d14 100%)",
              borderColor: "var(--primary-border)",
              boxShadow: "0 20px 60px rgba(105, 134, 245, 0.18)",
              padding: "clamp(2.5rem, 5vw, 4rem)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Ambient inner glow */}
            <div
              className="glow-ambient glow-primary"
              style={{
                top: "-50%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "400px",
                height: "300px",
              }}
            />

            <div style={{ position: "relative", zIndex: 1, maxWidth: "750px", margin: "0 auto" }}>
              <span className="badge mb-4">Passez à la vitesse supérieure</span>
              <h2 className="text-title mb-4">
                Prêt à résoudre vos défis informatiques ?
              </h2>
              <p className="text-lead mb-6" style={{ color: "var(--text-main)" }}>
                Contactez notre équipe dès aujourd'hui. Nous analysons votre besoin sans engagement et vous proposons un plan d'action concret en moins de 24h.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact" className="btn btn-primary" style={{ padding: "0.95rem 2.2rem", fontSize: "1.05rem" }}>
                  <span>Discuter de votre projet</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>

                <a
                  href="https://wa.me/33700000000?text=Bonjour%20I-BORY,%20je%20souhaite%20un%20devis%20pour%20mon%20projet."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ padding: "0.95rem 2rem", fontSize: "1.05rem" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.679-.702c.971.558 1.77.816 2.78.816 3.18 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.768-5.766-5.768zm0 10.377c-.901 0-1.637-.253-2.453-.699l-.176-.096-1.585.416.423-1.545-.112-.178c-.516-.821-.789-1.614-.788-2.509 0-2.535 2.062-4.597 4.604-4.597 2.54 0 4.602 2.062 4.602 4.597 0 2.536-2.062 4.611-4.508 4.611zm7.127-14.737C17.069.654 14.654.004 12.035 0 5.435 0 .07 5.365.067 11.966c-.001 2.11.551 4.168 1.599 5.981L0 24l6.216-1.631c1.742.951 3.705 1.453 5.814 1.454h.005c6.598 0 11.964-5.366 11.967-11.967 0-3.199-1.246-6.206-3.513-8.473z"/>
                  </svg>
                  <span>WhatsApp direct</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
