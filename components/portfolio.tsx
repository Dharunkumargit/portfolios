"use client";

import Image from "next/image";
import {
  type FormEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

const RESUME_URL =
  "https://drive.google.com/file/d/1_OJhSR0c8rEF1U-7erFbAVqEYVSL1xlS/view?usp=drive_link";

const navItems = [
  { label: "Resume", href: RESUME_URL, isExternal: true },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const experience = [
  {
    role: "Software Engineer",
    company: "TervPro",
    period: "April 2026 – October 2026",
    responsibilities: [
      "Designed, developed, tested, and maintained Java-based applications using Java and Spring Boot.",
      "Developed scalable, high-performance RESTful APIs and implemented backend business logic.",
      "Integrated third-party applications and external services through REST API integrations.",
      "Contributed to the complete Software Development Life Cycle (SDLC), including requirement analysis, development, testing, deployment, and maintenance.",
      "Applied Object-Oriented Programming (OOP), clean code principles, and industry-standard development practices to build maintainable applications.",
      "Optimized backend performance, database operations, and application scalability.",
      "Identified, troubleshot, and resolved application issues to improve system reliability.",
      "Collaborated with frontend developers, QA engineers, and business stakeholders to deliver application features.",
      "Participated in peer code reviews and followed development best practices to maintain code quality.",
    ],
  },
  {
    role: "Software Engineer – Junior",
    company: "HackgeniX Tech Private Limited",
    period: "February 2025 – March 2026",
    location: "Chennai, Tamil Nadu",
    responsibilities: [
      "Designed, developed, and maintained responsive, user-friendly web applications using React.js, JavaScript (ES6+), and modern frontend development practices, ensuring consistent functionality across different devices and screen sizes.",
      "Developed reusable, modular, and maintainable React components using component-based architecture, React Hooks, props, and state management to improve code reusability, maintainability, and application consistency.",
      "Built scalable backend services and RESTful APIs using Node.js and Express.js, implementing business logic, request handling, API routing, middleware, and server-side functionality to support application requirements.",
      "Integrated frontend applications with backend REST APIs, managing asynchronous requests, data exchange, API responses, error handling, and application state to ensure seamless communication between client-side and server-side components.",
      "Translated UI/UX wireframes and functional requirements into interactive frontend interfaces, focusing on usability, responsive layouts, accessibility, and consistent user experiences.",
      "Collaborated closely with UI/UX designers, Product Managers, QA engineers, and DevOps teams to understand requirements, coordinate development activities, resolve technical issues, and deliver features aligned with business objectives.",
      "Identified and resolved frontend and backend defects through debugging, root-cause analysis, and functional testing, improving application stability, reliability, and overall performance.",
      "Optimized application performance by improving component rendering, refining API interactions, reducing unnecessary processing, and following efficient coding practices to support scalable application development.",
      "Followed secure development practices, including input validation, appropriate error handling, and reliable API implementation to improve application security and data integrity.",
      "Participated in code reviews, technical discussions, and Agile/Scrum activities, including sprint planning, daily stand-ups, and retrospectives, while following coding standards and software development best practices.",
    ],
  },
];

const skillGroups = [
  {
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "React Router",
    ],
  },
  {
    label: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "Node.js",
      "Express.js",
      "REST API Design",
      "MVC Architecture",
    ],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQL"],
  },
  {
    label: "Engineering",
    items: [
      "Object-Oriented Programming",
      "JWT Authentication",
      "Role-Based Access Control",
      "API Integration",
      "SDLC",
      "Code Reviews",
    ],
  },
  {
    label: "Tools",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Claude",
      "Cursor",
      "GitHub Copilot",
    ],
  },
];

const projects = [
  {
    number: "01",
    name: "PREPBUDDY",
    category: "Learning & Preparation Platform",
    stack: ["Next.js", "TypeScript", "Java", "Spring Boot", "PostgreSQL", "SQL"],
    description:
      "A web-based learning and preparation platform that provides learners with structured preparation content and learning resources.",
    contributions: [
      "Developed reusable frontend components using Next.js and TypeScript.",
      "Built responsive learner-facing interfaces.",
      "Designed and integrated RESTful APIs using Java and Spring Boot.",
      "Implemented application workflows and backend business logic.",
      "Worked with relational database structures and PostgreSQL queries.",
    ],
    previewType: "prepbuddy",
    url: "#",
    linkLabel: "Explore project",
  },
  {
    number: "02",
    name: "MADURAI CORPORATION MANAGEMENT SYSTEM",
    category: "RBAC-Based Waste Management Platform",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    description:
      "A city-wide waste management platform designed to support multiple administrative roles and operational workflows.",
    contributions: [
      "Engineered role-based access control for Admin, Zonal Officers, Ward Officers, and Employees.",
      "Developed secure REST APIs with JWT authentication.",
      "Built dynamic analytics dashboards with zone, ward, date, and employee-level reporting.",
      "Implemented real-time bin-full event tracking.",
      "Developed automated multi-level escalation workflows.",
    ],
    previewType: "madurai",
    url: "#",
    linkLabel: "Explore project",
  },
  {
    number: "03",
    name: "PLAYMATCH",
    category: "Turf Booking Dashboard",
    stack: ["React.js", "React Router", "Axios", "REST APIs"],
    description:
      "A responsive turf booking management dashboard with separate experiences for Admin and User roles.",
    contributions: [
      "Built role-based UI rendering.",
      "Implemented dynamic routing.",
      "Integrated REST APIs through Axios.",
      "Developed booking management interfaces.",
    ],
    previewType: "playmatch",
    url: "#",
    linkLabel: "Explore project",
  },
  {
    number: "04",
    name: "KAAPI STOP",
    category: "Cafe Management Web Application",
    stack: ["React.js", "REST APIs", "Tailwind CSS"],
    description:
      "A cafe management application supporting product management, order processing, and inventory tracking.",
    contributions: [
      "Developed reusable functional components.",
      "Implemented search and filtering.",
      "Built responsive layouts.",
      "Integrated REST APIs for application functionality.",
    ],
    previewType: "kaapi",
    url: "#",
    linkLabel: "Explore project",
  },
];

function SectionLabel({ children }: { children: ReactNode }) {
  return <div className="section-kicker">{children}</div>;
}

/* 3D Interactive Tilt Card with Dynamic Warm Specular Glare */
function TiltCard({
  children,
  className = "",
  maxTilt = 12,
  scale = 1.02,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  glare?: boolean;
}) {
  const [transform, setTransform] = useState("");
  const [glareStyle, setGlareStyle] = useState({ opacity: 0, x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = Number((((y - centerY) / centerY) * -maxTilt).toFixed(2));
    const rotateY = Number((((x - centerX) / centerX) * maxTilt).toFixed(2));

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
    );

    if (glare) {
      setGlareStyle({
        opacity: 0.45,
        x: Math.round((x / rect.width) * 100),
        y: Math.round((y / rect.height) * 100),
      });
    }
  };

  const handleMouseLeave = () => {
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    );
    setGlareStyle({ opacity: 0, x: 50, y: 50 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: "transform 0.38s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`tilt-card-wrapper ${className}`}
    >
      {children}
      {glare && (
        <div
          className="tilt-glare"
          style={{
            opacity: glareStyle.opacity,
            background: `radial-gradient(circle 340px at ${glareStyle.x}% ${glareStyle.y}%, rgba(255, 255, 255, 0.42), transparent 70%)`,
          }}
        />
      )}
    </div>
  );
}

/* Domain-Specific Editorial UI Visuals */
function ProjectVisualPreview({ type }: { type: string }) {
  if (type === "prepbuddy") {
    return (
      <div className="visual-preview-box">
        <div className="preview-top-bar">
          <div className="preview-bullets">
            <span />
            <span />
            <span />
          </div>
          <span className="preview-label">Assessment Module</span>
          <span className="preview-badge badge-warm-accent">Score 94%</span>
        </div>
        <div className="preview-body-content">
          <div className="preview-tile-row">
            <span>System Design: Distributed Cache</span>
            <span className="preview-badge badge-ink">Solved</span>
          </div>
          <div className="preview-bar-track">
            <div className="preview-bar-fill" style={{ width: "82%" }} />
          </div>
          <div className="preview-tile-row">
            <span>Progress: 18 / 22 Modules Completed</span>
            <span className="preview-badge badge-warm-accent">Active</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "madurai") {
    return (
      <div className="visual-preview-box">
        <div className="preview-top-bar">
          <div className="preview-bullets">
            <span />
            <span />
            <span />
          </div>
          <span className="preview-label">Zone 04 Logistics</span>
          <span className="preview-badge badge-warm-accent">Telemetry Live</span>
        </div>
        <div className="preview-body-content">
          <div className="preview-tile-row">
            <span>Ward 14 Smart Compactor</span>
            <span className="preview-badge badge-warm-accent">88% Capacity</span>
          </div>
          <div className="preview-bar-track">
            <div className="preview-bar-fill" style={{ width: "88%" }} />
          </div>
          <div className="preview-tile-row">
            <span>Auto-Escalation Protocol</span>
            <span className="preview-badge badge-ink">Dispatched</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "playmatch") {
    return (
      <div className="visual-preview-box">
        <div className="preview-top-bar">
          <div className="preview-bullets">
            <span />
            <span />
            <span />
          </div>
          <span className="preview-label">Turf Arena 1</span>
          <span className="preview-badge badge-warm-accent">Today</span>
        </div>
        <div className="preview-body-content">
          <div className="preview-tile-row">
            <span>Prime Evening Schedule</span>
            <span className="preview-badge badge-ink">7v7 Football</span>
          </div>
          <div className="preview-chips-row">
            <span className="preview-mini-chip">06:00 PM</span>
            <span className="preview-mini-chip active">07:00 PM (Selected)</span>
            <span className="preview-mini-chip">08:00 PM</span>
          </div>
          <div className="preview-tile-row">
            <span>Instant Reservation: ₹1,200/hr</span>
            <span className="preview-badge badge-warm-accent">Confirmed</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="visual-preview-box">
      <div className="preview-top-bar">
        <div className="preview-bullets">
          <span />
          <span />
          <span />
        </div>
        <span className="preview-label">Order Stream</span>
        <span className="preview-badge badge-warm-accent">POS Online</span>
      </div>
      <div className="preview-body-content">
        <div className="preview-tile-row">
          <span>2x Hazelnut Cold Brew + Croissant</span>
          <span className="preview-badge badge-ink">Brewing</span>
        </div>
        <div className="preview-tile-row">
          <span>Arabica House Blend Stock</span>
          <span className="preview-badge badge-warm-accent">92% Healthy</span>
        </div>
        <div className="preview-bar-track">
          <div className="preview-bar-fill" style={{ width: "92%" }} />
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [status, setStatus] = useState<string | null>(null);

  const submitter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: { name?: string; email?: string; message?: string } = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.message.trim())
      nextErrors.message = "Please share a brief message.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("Kindly correct the highlighted fields and try again.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${values.name}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`
    );

    window.location.href = `mailto:dharunkumarvaradharaj@gmail.com?subject=${subject}&body=${body}`;
    setStatus("Your mail app should open with a pre-filled message.");
    setValues({ name: "", email: "", message: "" });
  };

  return (
    <form className="contact-form" onSubmit={submitter} noValidate>
      <label className="field">
        <span>Name</span>
        <input
          value={values.name}
          onChange={(event) =>
            setValues((current) => ({ ...current, name: event.target.value }))
          }
          placeholder="Your name"
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name ? <small>{errors.name}</small> : null}
      </label>

      <label className="field">
        <span>Email</span>
        <input
          type="email"
          value={values.email}
          onChange={(event) =>
            setValues((current) => ({ ...current, email: event.target.value }))
          }
          placeholder="you@example.com"
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email ? <small>{errors.email}</small> : null}
      </label>

      <label className="field">
        <span>Message</span>
        <textarea
          value={values.message}
          onChange={(event) =>
            setValues((current) => ({
              ...current,
              message: event.target.value,
            }))
          }
          placeholder="Tell me about your project or opportunity."
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? <small>{errors.message}</small> : null}
      </label>

      <button type="submit" className="primary-button wide-button">
        Send Message
      </button>
      {status ? <p className="form-status">{status}</p> : null}
    </form>
  );
}

export function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Subtle ambient mouse light coordinates
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${e.clientX}px`
      );
      document.documentElement.style.setProperty(
        "--mouse-y",
        `${e.clientY}px`
      );
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const sectionIds = navItems
      .filter((item) => item.href.startsWith("#"))
      .map((item) => item.href.slice(1));

    const observedSections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (!observedSections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-15% 0px -50% 0px",
      }
    );

    observedSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      {/* Ambient Light Texture */}
      <div className="ambient-lighting" aria-hidden="true">
        <div className="ambient-spotlight" />
      </div>

      <header className="topbar">
        <div className="topbar-inner">
          <a href="#home" className="brand-name" aria-label="Dharunkumar V home">
            DHARUNKUMAR V<span className="brand-dot">.</span>
          </a>

          <nav
            className={`site-nav ${menuOpen ? "nav-open" : ""}`}
            aria-label="Main navigation"
          >
            {navItems.map((item) => {
              const isExternal = Boolean(
                item.isExternal || !item.href.startsWith("#")
              );
              const isActive =
                !isExternal && activeSection === item.href.slice(1);

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className={`nav-link ${isActive ? "is-active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <a
            href={RESUME_URL}
            className="resume-pill"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>

          <button
            type="button"
            className="menu-button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="section hero-section">
          <div className="hero-copy">
            <div className="eyebrow-row">
              <span className="eyebrow-dot" />
              <p>Full-stack software engineer</p>
            </div>

            <div className="hero-title-wrap">
              <p className="intro-label">Fig. 01 — Dharunkumar V, Software Engineer</p>
              <h1>
                Hello, I&apos;m <span>Dharunkumar.</span>
              </h1>
            </div>

            <p className="lede">
              I build scalable digital products, intuitive web experiences, and
              reliable backend systems.
            </p>
            <p className="sub-lede">
              I work across frontend and backend technologies, transforming
              product requirements into maintainable, production-ready
              applications.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                Explore My Work
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                Download Resume
              </a>
            </div>

            <div className="hero-meta">
              <div>
                <span className="meta-label">Location</span>
                <strong>Salem, Tamil Nadu</strong>
              </div>
              <div>
                <span className="meta-label">Focus</span>
                <strong>Java • Spring Boot • React • MERN</strong>
              </div>
            </div>
          </div>

          {/* 3D Motion Identity Frame */}
          <div
            className="hero-art"
            aria-label="Stylized 3D personal identity artwork"
          >
            <TiltCard className="art-frame" maxTilt={13} scale={1.025}>
              <div className="art-ribbon">Available for impactful work</div>

              <div className="monogram-wrap">
                <div className="photo-halo-warm" />

                {/* Profile Portrait */}
                <div className="hero-photo-wrap">
                  <Image
                    src="/profile.jpg"
                    alt="Dharunkumar Varadharaj"
                    width={320}
                    height={320}
                    priority
                    className="hero-photo"
                  />
                </div>
              </div>

              <div className="art-details">
                <div>
                  <span>Core stack</span>
                  <strong>Java / React / Node</strong>
                </div>
                <div>
                  <span>Delivery</span>
                  <strong>Frontend + Backend</strong>
                </div>
              </div>
            </TiltCard>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <div className="section-heading">
            <SectionLabel>01 — Experience</SectionLabel>
            <h2>Where I&apos;ve worked</h2>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="timeline-item"
              >
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-card">
                  <div className="timeline-topline">
                    <div>
                      <p className="role-name">{item.role}</p>
                      <p className="company-name">{item.company}</p>
                    </div>
                    <div className="timeline-meta">
                      <span>{item.period}</span>
                      {item.location ? <span>{item.location}</span> : null}
                    </div>
                  </div>
                  <ul>
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section">
          <div className="section-heading compact-heading">
            <SectionLabel>02 — Education</SectionLabel>
            <h2>Academic foundation</h2>
          </div>

          <div className="education-card">
            <div className="education-text">
              <p className="education-degree">Bachelor of Engineering</p>
              <p className="education-major">
                Computer Science and Engineering
              </p>
            </div>
            <div className="education-meta">
              <p>Hindusthan College of Engineering and Technology, Coimbatore</p>
              <p>2021 – 2025</p>
              <div className="cgpa-pill">
                <span>CGPA:</span>
                <strong>8.1 / 10</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="section">
          <div className="section-heading">
            <SectionLabel>03 — Expertise</SectionLabel>
            <h2>Technologies I work with</h2>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div key={group.label} className="skill-group">
                <h3>{group.label}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section with 3D Tilt Cards */}
        <section id="projects" className="section">
          <div className="section-heading">
            <SectionLabel>04 — Selected Work</SectionLabel>
            <h2>Products I&apos;ve helped build</h2>
            <p className="section-summary">
              A selection of applications and engineering projects demonstrating
              my approach to frontend development, backend architecture, and
              solving practical problems.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <TiltCard
                key={project.name}
                className="project-card"
                maxTilt={10}
                scale={1.02}
              >
                <div className="project-topline">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                </div>

                <div className="project-visual">
                  <ProjectVisualPreview type={project.previewType} />
                </div>

                <div className="project-copy">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>

                  <div className="tech-stack">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <div className="project-contributions">
                    <h4>My contribution</h4>
                    <ul>
                      {project.contributions.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <a href={project.url} className="project-link">
                    {project.linkLabel} →
                  </a>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <div className="section-heading">
            <SectionLabel>05 — Contact</SectionLabel>
            <h2>Let&apos;s build something meaningful.</h2>
          </div>

          <div className="contact-layout">
            <div className="contact-copy">
              <p>
                I&apos;m interested in software engineering opportunities where I
                can contribute to building scalable applications, solving
                engineering challenges, and creating meaningful digital
                experiences.
              </p>

              <ul className="contact-list">
                <li>
                  <span>Email</span>
                  <a href="mailto:dharunkumarvaradharaj@gmail.com">
                    dharunkumarvaradharaj@gmail.com
                  </a>
                </li>
                <li>
                  <span>Phone</span>
                  <a href="tel:+919342571277">+91 9342571277</a>
                </li>
                <li>
                  <span>Location</span>
                  <p>Salem, Tamil Nadu, India</p>
                </li>
              </ul>

              <div className="social-links">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Resume Google Drive"
                >
                  Resume ↗
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <p className="footer-brand">Dharunkumar V.</p>
            <p>Full-Stack Software Engineer.</p>
          </div>
          <div>
            <p>Salem, Tamil Nadu, India.</p>
          </div>
          <div className="footer-links">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:dharunkumarvaradharaj@gmail.com">Email</a>
            <a href={RESUME_URL} target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 Dharunkumar V. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
