import { ArrowUpRight, Menu, X, Code2 } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isAuth = location.pathname !== "/";
  return (
    <header className="nav-wrap">
      <nav className="container nav">
        <Link to="/" className="brand">
          <span className="brand-mark">
            <Code2 size={19} />
          </span>{" "}
          alex<span className="brand-dot">.</span>
        </Link>
        <button
          className="mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
        <div className={`nav-links ${open ? "nav-open" : ""}`}>
          {isAuth ? (
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          ) : (
            <>
              <a href="#about" onClick={() => setOpen(false)}>
                About
              </a>
              <a href="#work" onClick={() => setOpen(false)}>
                Work
              </a>
              <a href="#services" onClick={() => setOpen(false)}>
                Services
              </a>
              <a href="#contact" onClick={() => setOpen(false)}>
                Contact
              </a>
            </>
          )}
          <div className="nav-actions">
            <Link className="login-link" to="/login">
              Log in
            </Link>
            <Link className="button button-small" to="/register">
              Let’s talk <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
