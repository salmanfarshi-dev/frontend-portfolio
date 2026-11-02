import { ArrowLeft, Code2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function AuthLayout({ children, title, subtitle, mode }) {
  return (
    <main className="auth-shell">
      <section className="auth-art">
        <Link to="/" className="brand auth-brand">
          <span className="brand-mark">
            <Code2 size={19} />
          </span>{" "}
          alex<span className="brand-dot">.</span>
        </Link>
        <div className="auth-art-content">
          <div className="eyebrow">
            <Sparkles size={14} /> BUILD SOMETHING MEANINGFUL
          </div>
          <h1>
            Ideas become
            <br />
            <span>impact.</span>
          </h1>
          <p>
            A little space for ambitious ideas, thoughtful design, and digital
            experiences that make a difference.
          </p>
          <div className="art-orbit">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit-core">
              <Code2 size={34} />
            </div>
            <span className="orbit-star star-one">✳</span>
            <span className="orbit-star star-two">✦</span>
          </div>
        </div>
        <div className="art-bottom">
          <span>DESIGN · DEVELOP · DELIVER</span>
          <span>01 / 03</span>
        </div>
      </section>
      <section className="auth-panel">
        <Link to="/" className="back-home">
          <ArrowLeft size={16} /> Back to website
        </Link>
        <div className="auth-card">
          <div className="auth-mobile-brand">
            <span className="brand-mark">
              <Code2 size={18} />
            </span>{" "}
            alex<span className="brand-dot">.</span>
          </div>
          <div className="auth-heading">
            <div className="eyebrow">
              {mode === "login" ? "WELCOME BACK" : "YOUR NEXT CHAPTER"}
            </div>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          {children}
        </div>
        <div className="auth-legal">
          By continuing, you agree to our <a href="#terms">Terms</a> and{" "}
          <a href="#privacy">Privacy Policy</a>.
        </div>
      </section>
    </main>
  );
}
