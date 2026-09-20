import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  const handleNavClick = (anchorId: string) => {
    setIsOpen(false);
    if (isHome) {
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        backgroundColor: "rgba(6, 7, 10, 0.8)",
        borderBottom: "1px solid var(--border-subtle)",
        transition: "all var(--transition-normal)",
      }}
    >
      <div className="container flex items-center justify-between py-3">
        {/* Logo I-BORY */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setIsOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{ textDecoration: "none" }}
        >
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              backgroundColor: "rgba(105, 134, 245, 0.12)",
              border: "1.5px solid var(--primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--primary)",
              fontWeight: 800,
              fontSize: "1.2rem",
              boxShadow: "0 0 16px rgba(105, 134, 245, 0.3)",
            }}
          >
            I
          </div>
          <div className="flex flex-col">
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1.35rem",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "var(--white)",
                lineHeight: 1.1,
              }}
            >
              I-BORY
            </span>
            <span
              style={{
                fontSize: "0.68rem",
                fontWeight: 500,
                color: "var(--primary)",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Digital Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden-mobile flex items-center gap-6"
          style={{ display: "none" }}
        >
          {/* Will use CSS media queries below for responsiveness */}
        </nav>

        <div className="desktop-nav-container flex items-center gap-8">
          <ul
            className="flex items-center gap-6"
            style={{ listStyle: "none", margin: 0, padding: 0 }}
          >
            <li>
              <Link
                to="/"
                onClick={() => {
                  if (isHome) window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: isHome && !location.hash ? "var(--primary)" : "var(--text-muted)",
                  transition: "color var(--transition-fast)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  isHome && !location.hash ? "var(--primary)" : "var(--text-muted)")
                }
              >
                Accueil
              </Link>
            </li>
            <li>
              {isHome ? (
                <a
                  href="#services"
                  onClick={() => handleNavClick("services")}
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color: "var(--text-muted)",
                    transition: "color var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  Ce que nous faisons
                </a>
              ) : (
                <Link
                  to="/#services"
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color: "var(--text-muted)",
                    transition: "color var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  Ce que nous faisons
                </Link>
              )}
            </li>
            <li>
              {isHome ? (
                <a
                  href="#projets"
                  onClick={() => handleNavClick("projets")}
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color: "var(--text-muted)",
                    transition: "color var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  Nos projets
                </a>
              ) : (
                <Link
                  to="/#projets"
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color: "var(--text-muted)",
                    transition: "color var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  Nos projets
                </Link>
              )}
            </li>
            <li>
              <Link
                to="/contact"
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: location.pathname === "/contact" ? "var(--primary)" : "var(--text-muted)",
                  transition: "color var(--transition-fast)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  location.pathname === "/contact" ? "var(--primary)" : "var(--text-muted)")
                }
              >
                Nous contacter
              </Link>
            </li>
          </ul>

          <Link to="/contact" className="btn btn-primary" style={{ padding: "0.6rem 1.25rem", fontSize: "0.9rem" }}>
            <span>Demander un devis</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-toggle-btn"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: "none",
            border: "none",
            color: "var(--white)",
            cursor: "pointer",
            padding: "0.5rem",
            display: "none",
          }}
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div
          className="mobile-drawer"
          style={{
            backgroundColor: "#0a0c12",
            borderBottom: "1px solid var(--border-subtle)",
            padding: "1.5rem",
          }}
        >
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              onClick={() => {
                setIsOpen(false);
                if (isHome) window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{
                fontSize: "1.05rem",
                fontWeight: 600,
                color: isHome && !location.hash ? "var(--primary)" : "var(--white)",
              }}
            >
              Accueil
            </Link>
            <a
              href={isHome ? "#services" : "/#services"}
              onClick={() => handleNavClick("services")}
              style={{
                fontSize: "1.05rem",
                fontWeight: 600,
                color: "var(--white)",
              }}
            >
              Ce que nous faisons
            </a>
            <a
              href={isHome ? "#projets" : "/#projets"}
              onClick={() => handleNavClick("projets")}
              style={{
                fontSize: "1.05rem",
                fontWeight: 600,
                color: "var(--white)",
              }}
            >
              Nos projets
            </a>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              style={{
                fontSize: "1.05rem",
                fontWeight: 600,
                color: location.pathname === "/contact" ? "var(--primary)" : "var(--white)",
              }}
            >
              Nous contacter
            </Link>
            <div className="pt-2">
              <Link
                to="/contact"
                className="btn btn-primary w-full"
                onClick={() => setIsOpen(false)}
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Embedded CSS for responsive toggle */}
      <style>{`
        @media (max-width: 820px) {
          .desktop-nav-container {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
