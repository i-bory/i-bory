import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#030407",
        borderTop: "1px solid var(--border-subtle)",
        marginTop: "auto",
        position: "relative",
      }}
    >
      <div className="container py-10">
        <div
          className="grid gap-8"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          {/* Col 1: Brand Info */}
          <div className="flex flex-col gap-3">
            <Link to="/" className="flex items-center gap-2">
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(105, 134, 245, 0.12)",
                  border: "1.5px solid var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--primary)",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                }}
              >
                I
              </div>
              <span
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 800,
                  color: "var(--white)",
                  letterSpacing: "-0.02em",
                }}
              >
                I-BORY
              </span>
            </Link>
            <p
              className="text-paragraph"
              style={{
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "var(--primary)",
              }}
            >
              "Vous rendre la vie plus facile"
            </p>
            <p className="text-paragraph" style={{ fontSize: "0.88rem", maxWidth: "300px" }}>
              Nous créons des solutions informatiques à vos problèmes : applications web, mobiles et automatisation sur-mesure.
            </p>
          </div>

          {/* Col 2: Navigation rapide */}
          <div>
            <h4
              style={{
                color: "var(--white)",
                fontSize: "0.95rem",
                fontWeight: 700,
                marginBottom: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Navigation
            </h4>
            <ul className="flex flex-col gap-2" style={{ listStyle: "none" }}>
              <li>
                <Link
                  to="/"
                  className="text-paragraph"
                  style={{ fontSize: "0.9rem", transition: "color var(--transition-fast)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-paragraph"
                  style={{ fontSize: "0.9rem", transition: "color var(--transition-fast)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  Ce que nous faisons
                </a>
              </li>
              <li>
                <a
                  href="/#projets"
                  className="text-paragraph"
                  style={{ fontSize: "0.9rem", transition: "color var(--transition-fast)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  Nos projets
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-paragraph"
                  style={{ fontSize: "0.9rem", transition: "color var(--transition-fast)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  Page Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Nos Domaines */}
          <div>
            <h4
              style={{
                color: "var(--white)",
                fontSize: "0.95rem",
                fontWeight: 700,
                marginBottom: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Nos Expertises
            </h4>
            <ul className="flex flex-col gap-2" style={{ listStyle: "none" }}>
              <li className="text-paragraph" style={{ fontSize: "0.88rem" }}>
                Développement Web & SaaS
              </li>
              <li className="text-paragraph" style={{ fontSize: "0.88rem" }}>
                Applications Mobiles iOS & Android
              </li>
              <li className="text-paragraph" style={{ fontSize: "0.88rem" }}>
                Automatisation & Outils Métiers
              </li>
              <li className="text-paragraph" style={{ fontSize: "0.88rem" }}>
                Intelligence Artificielle & Data
              </li>
              <li className="text-paragraph" style={{ fontSize: "0.88rem" }}>
                Infrastructures Cloud & Sécurité
              </li>
            </ul>
          </div>

          {/* Col 4: Contact direct */}
          <div>
            <h4
              style={{
                color: "var(--white)",
                fontSize: "0.95rem",
                fontWeight: 700,
                marginBottom: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Contact Direct
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/2250151324099?text=Bonjour%20I-BORY,%20je%20souhaite%20des%20renseignements%20sur%20vos%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: "0.55rem 1rem", fontSize: "0.88rem", width: "fit-content" }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.679-.702c.971.558 1.77.816 2.78.816 3.18 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.768-5.766-5.768zm0 10.377c-.901 0-1.637-.253-2.453-.699l-.176-.096-1.585.416.423-1.545-.112-.178c-.516-.821-.789-1.614-.788-2.509 0-2.535 2.062-4.597 4.604-4.597 2.54 0 4.602 2.062 4.602 4.597 0 2.536-2.062 4.611-4.508 4.611zm7.127-14.737C17.069.654 14.654.004 12.035 0 5.435 0 .07 5.365.067 11.966c-.001 2.11.551 4.168 1.599 5.981L0 24l6.216-1.631c1.742.951 3.705 1.453 5.814 1.454h.005c6.598 0 11.964-5.366 11.967-11.967 0-3.199-1.246-6.206-3.513-8.473z" />
                </svg>
                <span>WhatsApp Instantané</span>
              </a>

              <a
                href="mailto:iboryci@gmail.com"
                className="text-paragraph flex items-center gap-2"
                style={{ fontSize: "0.88rem", transition: "color var(--transition-fast)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>iboryci@gmail.com</span>
              </a>

              <p className="text-caption" style={{ marginTop: "0.25rem" }}>
                Réponse sous 24h ouvrées garantie.
              </p>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="divider" style={{ marginTop: "2.5rem", marginBottom: "1.5rem" }} />

        {/* Bottom bar */}
        <div className="flex flex-col sm-flex-row items-center justify-between gap-4 text-center">
          <p className="text-caption">
            © {new Date().getFullYear()} <strong style={{ color: "var(--white)" }}>I-BORY</strong>. Tous droits réservés.
          </p>
          <p className="text-caption" style={{ color: "var(--text-dim)" }}>
            Conçu pour vous rendre la vie plus facile • Palette Charm
          </p>
        </div>
      </div>
    </footer>
  );
}
