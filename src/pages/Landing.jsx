import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Figma,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MoveUpRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const projects = [
  {
    no: "01",
    type: "WEB DESIGN · DEVELOPMENT",
    name: "NOVA Finance",
    desc: "A clear, confident digital experience for the next generation of finance.",
    tags: ["React", "UI Design"],
    tone: "project-violet",
    icon: "N",
  },
  {
    no: "02",
    type: "E-COMMERCE · FRONTEND",
    name: "Forma Studio",
    desc: "A refined storefront built to make product discovery feel effortless.",
    tags: ["React", "Tailwind"],
    tone: "project-orange",
    icon: "F",
  },
  {
    no: "03",
    type: "PRODUCT · DASHBOARD",
    name: "Orbit Workspace",
    desc: "A focused workspace that helps teams turn complex work into progress.",
    tags: ["Dashboard", "UX"],
    tone: "project-blue",
    icon: "O",
  },
];

export default function Landing() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <section className="hero container">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" /> AVAILABLE FOR SELECT PROJECTS
            </div>
            <h1>
              Crafting digital
              <br />
              experiences with
              <br />
              <span>purpose & passion.</span>
            </h1>
            <p className="hero-description">
              Hey, I’m Alex — a frontend developer and creative problem solver
              turning thoughtful ideas into beautiful, functional experiences.
            </p>
            <div className="hero-actions">
              <a href="#work" className="button">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a href="#contact" className="text-link">
                Let’s connect <ArrowRight size={16} />
              </a>
            </div>
            <div className="hero-meta">
              <span>BASED IN NEW YORK, USA</span>
              <span>
                SCROLL TO EXPLORE <ArrowDown size={13} />
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-glow" />
            <div className="portrait-card">
              <div className="portrait-top">
                <span>CREATIVE DEVELOPER</span>
                <span>2025 — 26</span>
              </div>
              <div className="portrait-abstract">
                <div className="abstract-ring ring-a" />
                <div className="abstract-ring ring-b" />
                <div className="abstract-shape">
                  A<span>.</span>
                </div>
                <div className="abstract-cross">✳</div>
                <div className="abstract-label">
                  THINK
                  <br />
                  MAKE
                  <br />
                  REFINE
                </div>
              </div>
              <div className="portrait-bottom">
                <div>
                  <strong>Alex Morgan</strong>
                  <span>Frontend Developer</span>
                </div>
                <div className="portrait-arrow">
                  <MoveUpRight size={20} />
                </div>
              </div>
            </div>
            <div className="floating-note">
              <Sparkles size={15} />
              <span>
                Curiosity-led
                <br />
                <b>by design.</b>
              </span>
            </div>
            <div className="hero-index">AM — 001</div>
          </div>
        </section>

        <section className="marquee">
          <div className="marquee-track">
            DESIGN MINDED <span>✳</span> DETAIL OBSESSED <span>✳</span> BUILT
            FOR PEOPLE <span>✳</span> ALWAYS LEARNING <span>✳</span> DESIGN
            MINDED <span>✳</span>
          </div>
        </section>

        <section className="section container" id="about">
          <div className="section-kicker">
            <span>01 / A LITTLE ABOUT ME</span>
            <span>THE PERSON BEHIND THE PIXELS</span>
          </div>
          <div className="about-grid">
            <h2>
              Good design is
              <br />
              more than how it
              <br />
              <em>looks.</em>
            </h2>
            <div className="about-copy">
              <p className="lead">
                It’s how it works, how it feels, and how it makes someone’s day
                a little easier.
              </p>
              <p>
                I’m a developer who loves the intersection of design and
                technology. I enjoy building accessible, responsive interfaces,
                sweating the small details, and collaborating with people who
                care about making great things.
              </p>
              <div className="skill-list">
                <span>
                  <Code2 size={16} /> Frontend development
                </span>
                <span>
                  <Figma size={16} /> UI & visual design
                </span>
                <span>
                  <Layers3 size={16} /> Design systems
                </span>
              </div>
              <a className="text-link" href="#contact">
                A little more about me <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="container">
            <div className="section-kicker">
              <span>02 / SELECTED WORK</span>
              <span>A FEW THINGS I’VE MADE</span>
            </div>
            <div className="work-heading">
              <h2>
                Made with intention.
                <br />
                <em>Built to matter.</em>
              </h2>
              <p>
                A selection of projects where thoughtful design meets purposeful
                development.
              </p>
            </div>
            <div className="project-grid">
              {projects.map((p) => (
                <article className="project-card" key={p.no}>
                  <div className={`project-art ${p.tone}`}>
                    <span className="project-number">{p.no} / 03</span>
                    <div className="project-symbol">
                      {p.icon}
                      <i>.</i>
                    </div>
                    <span className="project-art-caption">
                      DIGITAL EXPERIENCE
                    </span>
                    <a
                      href="#contact"
                      className="project-open"
                      aria-label={`Ask about ${p.name}`}
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  </div>
                  <div className="project-info">
                    <div>
                      <span className="project-type">{p.type}</span>
                      <h3>{p.name}</h3>
                      <p>{p.desc}</p>
                    </div>
                    <div className="tag-row">
                      {p.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="services">
          <div className="section-kicker">
            <span>03 / WHAT I DO</span>
            <span>FROM FIRST SKETCH TO FINAL PIXEL</span>
          </div>
          <div className="services-grid">
            <h2>
              Small details.
              <br />
              <em>Big picture.</em>
            </h2>
            <div className="service-list">
              <div className="service-item">
                <span>01</span>
                <div>
                  <h3>Frontend development</h3>
                  <p>
                    Responsive, accessible websites built with clean and
                    maintainable code.
                  </p>
                </div>
                <ArrowUpRight size={19} />
              </div>
              <div className="service-item">
                <span>02</span>
                <div>
                  <h3>Interface design</h3>
                  <p>
                    Simple, considered interfaces that balance clarity,
                    character, and usability.
                  </p>
                </div>
                <ArrowUpRight size={19} />
              </div>
              <div className="service-item">
                <span>03</span>
                <div>
                  <h3>Creative collaboration</h3>
                  <p>
                    Working together to shape early ideas into polished digital
                    products.
                  </p>
                </div>
                <ArrowUpRight size={19} />
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <div className="eyebrow">
              <span className="status-dot" /> HAVE A PROJECT IN MIND?
            </div>
            <h2>
              Let’s make
              <br />
              <em>something great.</em>
            </h2>
            <p>
              Have an idea, a question, or just want to say hello? My inbox is
              always open.
            </p>
            <a className="button button-light" href="mailto:hello@example.com">
              Start a conversation <ArrowUpRight size={17} />
            </a>
            <div className="contact-decoration">
              A<span>.</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
