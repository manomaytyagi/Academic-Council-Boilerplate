import { Link, NavLink } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import "../styles/navigation.css";
import ugacLogo from "../UGAC_logo.png";

export default function Navigation() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const resources = useMemo(
    () => [
      {
        title: "Ordinances (PDF)",
        description: "Academic ordinances and regulations.",
        href: "/docs/ordinances.pdf",
        external: false,
      },
      {
        title: "IIT Mandi Insight",
        description: "Institute news, stories, and updates.",
        href: "https://www.iitmandi.ac.in/",
        external: true,
      },
      {
        title: "Institute Website",
        description: "Official IIT Mandi homepage.",
        href: "https://www.iitmandi.ac.in/",
        external: true,
      },
      {
        title: "Academic Email",
        description: "Write to the Academic Council office.",
        href: "mailto:academic.council@iitmandi.ac.in",
        external: true,
      },
      {
        title: "Emergency / Helpdesk",
        description: "General institute contact page.",
        href: "https://www.iitmandi.ac.in/",
        external: true,
      },
    ],
    [],
  );

  useEffect(() => {
    if (!isSidePanelOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsSidePanelOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isSidePanelOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <img className="nav-logo-img" src={ugacLogo} alt="UGAC logo" />
            <span className="logo-text-group">
              <span className="logo-text">Academic Council</span>
              <span className="logo-subtitle">IIT Mandi</span>
            </span>
          </Link>

          <ul className="nav-menu">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link${isActive ? " nav-link-active" : ""}`
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  `nav-link${isActive ? " nav-link-active" : ""}`
                }
              >
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  `nav-link${isActive ? " nav-link-active" : ""}`
                }
              >
                Courses & Degree
              </NavLink>
            </li>
            <li className="nav-item nav-item-aux">
              <button
                type="button"
                className="nav-aux-btn"
                onClick={() => setIsSidePanelOpen(true)}
              >
                Resources
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <button
        type="button"
        className="sidepanel-fab"
        onClick={() => setIsSidePanelOpen(true)}
        aria-label="Open resources panel"
      >
        Resources
      </button>

      {isSidePanelOpen && (
        <div
          className="sidepanel-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Resources"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setIsSidePanelOpen(false);
          }}
        >
          <aside className="sidepanel">
            <div className="sidepanel-header">
              <div>
                <div className="sidepanel-title">Quick Links</div>
                <div className="sidepanel-subtitle">
                  Important resources outside this site
                </div>
              </div>
              <button
                type="button"
                className="sidepanel-close"
                onClick={() => setIsSidePanelOpen(false)}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="sidepanel-body">
              <div className="sidepanel-section">
                <div className="sidepanel-section-title">Contact</div>
                <div className="sidepanel-card">
                  <div className="sidepanel-card-title">Academic Council</div>
                  <div className="sidepanel-card-text">
                    Email:{" "}
                    <a href="mailto:academic.council@iitmandi.ac.in">
                      academic.council@iitmandi.ac.in
                    </a>
                  </div>
                  <div className="sidepanel-card-text">
                    Phone: <a href="tel:+911905123456">+91 1905 123456</a>
                  </div>
                </div>
              </div>

              <div className="sidepanel-section">
                <div className="sidepanel-section-title">Resources</div>
                <div className="sidepanel-links">
                  {resources.map((item) => (
                    <a
                      key={item.title}
                      className="sidepanel-link"
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                    >
                      <div className="sidepanel-link-title">{item.title}</div>
                      <div className="sidepanel-link-text">
                        {item.description}
                      </div>
                    </a>
                  ))}
                </div>

                <div className="sidepanel-hint">
                  Place the ordinance PDF at{" "}
                  <code>public/docs/ordinances.pdf</code>.
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
