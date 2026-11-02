import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#" className="brand">
          <span className="brand-mark">A</span> alex
          <span className="brand-dot">.</span>
        </a>
        <p>© {new Date().getFullYear()} Alex Morgan. Crafted with care.</p>
        <div className="socials">
          <a href="https://github.com" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <Twitter size={18} />
          </a>
          <a href="#top" aria-label="Back to top">
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
