"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Sparkles,
  Workflow,
  ShoppingBag,
  PanelsTopLeft,
  Fingerprint,
  Mail,
  Instagram,
  Linkedin,
  Github
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: PanelsTopLeft,
    title: "Web Design & Development",
    description:
      "Purposeful, responsive websites that make a strong first impression and turn visitors into customers.",
    tags: ["Business websites", "Landing pages", "UI / UX"]
  },
  {
    number: "02",
    icon: Workflow,
    title: "GoHighLevel & Automation",
    description:
      "Connected systems that organise leads, simplify follow-ups and give your business room to grow.",
    tags: ["CRM setup", "Workflows", "Funnels"]
  },
  {
    number: "03",
    icon: ShoppingBag,
    title: "Shopify & eCommerce",
    description:
      "Thoughtful online stores and customer journeys built to make shopping feel effortless.",
    tags: ["Shopify stores", "Store optimisation", "Integrations"]
  },
  {
    number: "04",
    icon: Fingerprint,
    title: "Branding & Visual Design",
    description:
      "Distinctive visual identities and creative assets that help your business look consistent and memorable.",
    tags: ["Brand identity", "Social graphics", "Creative direction"]
  }
];

const projects = [
  {
    index: "01",
    type: "WEBSITE DESIGN",
    name: "The Modern Edit",
    description: "A considered digital storefront concept for a contemporary lifestyle brand.",
    className: "project-art project-art--one",
    label: "A more considered online experience"
  },
  {
    index: "02",
    type: "CRM & AUTOMATION",
    name: "Leadflow System",
    description: "A sample lead management journey connecting enquiries, pipelines and follow-up.",
    className: "project-art project-art--two",
    label: "Less manual work. More momentum."
  },
  {
    index: "03",
    type: "BRAND IDENTITY",
    name: "Form & Function",
    description: "A visual identity direction exploring clarity, character and consistency.",
    className: "project-art project-art--three",
    label: "Built to be remembered"
  }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="announcement">
        <span className="status-dot" />
        Independent creative studio · Available for select projects
      </div>

      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Ayoeze Creatives home">
          <span className="wordmark-mark">A.</span>
          <span>AYOEZE<span className="wordmark-light">CREATIVES</span></span>
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? "main-nav main-nav--open" : "main-nav"}>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#services" onClick={closeMenu}>What I do</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span /> CREATIVE THINKING. PRACTICAL DIGITAL WORK.</div>
          <h1>Good ideas deserve <em>great</em> digital experiences.</h1>
          <p className="hero-description">
            I help ambitious businesses show up better, work smarter and build
            stronger connections with the people they serve.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              Explore my work <ArrowUpRight size={17} />
            </a>
            <a className="text-link" href="#services">
              Discover what I do <ArrowDownRight size={17} />
            </a>
          </div>
          <div className="hero-note">
            <span className="note-line" />
            <span>WEBSITE DESIGN <b>·</b> AUTOMATION <b>·</b> BRANDING</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Abstract editorial visual representing creative digital work">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-sun" />
          <div className="visual-card visual-card--top">
            <span className="mini-label">THE BIG PICTURE</span>
            <span className="mini-number">01<span>/04</span></span>
          </div>
          <div className="visual-center">
            <span className="center-kicker">IDEAS INTO</span>
            <span className="center-word">IMPACT<span>.</span></span>
            <span className="center-caption">Design with purpose.<br />Systems with intention.</span>
          </div>
          <div className="visual-card visual-card--bottom">
            <Sparkles size={17} />
            <span>Made to move<br />business forward.</span>
          </div>
          <span className="visual-index">AC—001 / DIGITAL STUDIO</span>
        </div>
        <div className="hero-bottom">
          <span>BASED IN NIGERIA · WORKING EVERYWHERE</span>
          <a href="#about">A little about the studio <ArrowDownRight size={15} /></a>
        </div>
      </section>

      <section className="intro-band">
        <div className="section-wrap intro-inner">
          <p className="eyebrow eyebrow-light">A CREATIVE PARTNER FOR WHAT’S NEXT</p>
          <p className="intro-statement">
            Not just a good-looking presence. <span>A better way to do business.</span>
          </p>
        </div>
      </section>

      <section className="work-section section-wrap" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A FEW DIRECTIONS I LOVE</p>
            <h2>Selected <em>work.</em></h2>
          </div>
          <p className="section-aside">
            A glimpse into the kind of digital experiences, systems and identities
            I create. Concept examples are labelled for clarity.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.index}>
              <div className={project.className}>
                <div className="art-topline"><span>AC / {project.index}</span><span>CONCEPT STUDY</span></div>
                {project.index === "01" && (
                  <div className="store-mock">
                    <span className="store-brand">FORME.</span>
                    <span className="store-small">OBJECTS FOR EVERYDAY LIVING</span>
                    <span className="store-headline">Live with<br /><i>intention.</i></span>
                    <span className="store-cta">DISCOVER THE COLLECTION ↗</span>
                  </div>
                )}
                {project.index === "02" && (
                  <div className="flow-mock">
                    <div className="flow-title">A clearer view<br />of every lead.</div>
                    <div className="flow-node flow-node--one"><span className="flow-dot" /> New enquiry <b>→</b></div>
                    <div className="flow-connector" />
                    <div className="flow-node flow-node--two"><span className="flow-dot" /> Follow-up <b>→</b></div>
                    <div className="flow-connector" />
                    <div className="flow-node flow-node--three"><span className="flow-dot" /> Opportunity <b>✓</b></div>
                  </div>
                )}
                {project.index === "03" && (
                  <div className="brand-mock">
                    <span className="brand-symbol">F<span>·</span>F</span>
                    <span className="brand-name">FORM & FUNCTION</span>
                    <span className="brand-rule" />
                    <span className="brand-sub">IDENTITY / 2026</span>
                  </div>
                )}
                <span className="art-caption">{project.label}</span>
              </div>
              <div className="project-meta">
                <div>
                  <span className="project-type">{project.type}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <span className="project-arrow"><ArrowUpRight size={19} /></span>
              </div>
            </article>
          ))}
        </div>
        <p className="work-disclaimer">Portfolio concepts shown for creative direction. More completed client work will be added here.</p>
      </section>

      <section className="services-section" id="services">
        <div className="section-wrap">
          <div className="section-heading services-heading">
            <div>
              <p className="eyebrow">WHAT I BRING TO THE TABLE</p>
              <h2>Creative work.<br /><em>Connected thinking.</em></h2>
            </div>
            <p className="section-aside">
              The right mix of design and digital systems to help your business
              look sharper, run smoother and grow with confidence.
            </p>
          </div>
          <div className="services-list">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-row" key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <div className="service-icon"><Icon size={23} strokeWidth={1.5} /></div>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="service-tags">
                      {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                  <ArrowUpRight className="service-arrow" size={21} />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-section section-wrap" id="about">
        <div className="about-art">
          <div className="about-art-inner">
            <span className="about-mark">A.</span>
            <span className="about-art-caption">THOUGHTFUL BY DESIGN<br />INTENTIONAL BY NATURE</span>
            <span className="about-big-type">MAKE<br /><i>IT</i><br />MATTER.</span>
            <span className="about-coordinate">06° 27' N / 03° 24' E</span>
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2>Good work starts with <em>understanding.</em></h2>
          <p>
            I’m the creative mind behind Ayoeze Creatives. I bring together
            thoughtful design, practical technology and a genuine interest in
            helping businesses do better online.
          </p>
          <p>
            From a website that tells your story to an automation that gives
            you back time, every project starts with the same question:
            what would make this work better for you and your customers?
          </p>
          <a className="text-link text-link-dark" href="#contact">Let’s make something meaningful <ArrowUpRight size={17} /></a>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <p className="eyebrow eyebrow-light">HAVE SOMETHING IN MIND?</p>
          <h2>Let’s make your<br /><em>next move</em> a good one.</h2>
          <p className="contact-description">
            Tell me what you’re building, what needs improving or where you’d
            like to go next. We can take it from there.
          </p>
          <a className="button button-light" href="mailto:ayoezesignatures@gmail.com?subject=Let%E2%80%99s%20work%20together">
            Start a conversation <ArrowUpRight size={18} />
          </a>
          <span className="contact-decoration">A.</span>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-wrap footer-top">
          <a className="wordmark wordmark-footer" href="#home">
            <span className="wordmark-mark">A.</span>
            <span>AYOEZE<span className="wordmark-light">CREATIVES</span></span>
          </a>
          <p>Web experiences. Intelligent automation. Powerful brands.</p>
          <a className="back-top" href="#home">BACK TO TOP ↑</a>
        </div>
        <div className="section-wrap footer-bottom">
          <span>© {new Date().getFullYear()} Ayoeze Creatives. All rights reserved.</span>
          <div className="footer-socials">
            <a href="mailto:ayoezesignatures@gmail.com" aria-label="Email"><Mail size={17} /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <a href="https://github.com/ayoezesignatures-jpg" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
          </div>
          <span>DESIGNED WITH INTENTION.</span>
        </div>
      </footer>
    </main>
  );
}