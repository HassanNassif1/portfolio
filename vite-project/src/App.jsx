import React, { useState, useEffect } from 'react';
import './App.css';
import profilePhoto from './assets/profile.jpeg';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id], header[id]');
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const projects = [
    {
      title: 'Energy Bridge CRM',
      desc: 'Full-stack ERP platform featuring core IP network management, ticketing modules, and telemetry reporting.',
      tech: ['React', 'ASP.NET Core', 'PostgreSQL'],
      icon: 'fa-bolt'
    },
    {
      title: 'Digital Connects',
      desc: 'Engineered a centralized social operations and management dashboard to handle client records, account data, invoices, quotations, and profit analytics.',
      tech: ['React', 'Node.js', 'RESTful APIs'],
      icon: 'fa-share-alt'
    },
    {
      title: 'TbilisiDiscover',
      desc: 'High-density business intelligence directory tracking 200+ active venues with custom entity management.',
      tech: ['ExpressJS', 'ReactJS', 'PostgreSQL'],
      icon: 'fa-map-marked-alt'
    },
    {
      title: 'DevXLine SaaS',
      desc: 'Multi-tenant CRM ecosystem designed for automated client onboarding and pipeline management.',
      tech: ['ReactJS', 'ASP.NET', 'PostgreSQL'],
      icon: 'fa-cloud-upload-alt'
    },
    {
      title: 'Estishara',
      desc: 'Automated consulate booking engine built to streamline appointment slot allocation and tracking.',
      tech: ['ReactJS', 'ExpressJS'],
      icon: 'fa-calendar-check'
    },
    {
      title: 'Scandiweb E-Commerce',
      desc: 'Modular storefront architecture with dynamic catalog indexing and secure checkout flows.',
      tech: ['PHP', 'ReactJS', 'MySQL'],
      icon: 'fa-shopping-cart'
    }
  ];

  const getTechIcon = (tech) => {
    const iconMap = {
      'React': 'fab fa-react',
      'ReactJS': 'fab fa-react',
      'Node.js': 'fab fa-node-js',
      'ExpressJS': 'fab fa-node-js',
      'ASP.NET': 'fas fa-cubes',
      'ASP.NET Core': 'fas fa-cubes',
      'PostgreSQL': 'fas fa-database',
      'MySQL': 'fas fa-database',
      'PHP': 'fab fa-php',
      'RESTful APIs': 'fas fa-code-branch',
    };
    return iconMap[tech] || 'fas fa-code';
  };

  return (
    <div className="portfolio">
      <div className="tech-grid-bg"></div>

      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => scrollToSection('home')}>
            <span className="logo-text">HN<span className="logo-dot">_</span></span>
          </div>
          <ul className="nav-links">
            <li>
              <button className={`nav-btn ${activeSection === 'home' ? 'active' : ''}`} onClick={() => scrollToSection('home')}>
                <span>Home</span>
              </button>
            </li>
            <li>
              <button className={`nav-btn ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => scrollToSection('projects')}>
                <span>Projects</span>
              </button>
            </li>
            <li>
              <button className={`nav-btn ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => scrollToSection('contact')}>
                <span>Contact</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <div className="page-content">
        <header id="home" className="hero">
          <div className="hero-glow"></div>
          <div className="hero-container">
            <div className="hero-photo-showcase animate-on-scroll fade-in-up">
              <div className="profile-wrapper">
                <img src={profilePhoto} alt="Hassan Nassif" className="profile-img" />
                <div className="profile-ring"></div>
                <div className="tech-corner tl"></div>
                <div className="tech-corner tr"></div>
                <div className="tech-corner bl"></div>
                <div className="tech-corner br"></div>
              </div>
              <div className="photo-caption">
                <span className="badge-dot"></span> OP_ID: HASSAN_NASSIF // STATUS: ACTIVE
              </div>
            </div>

            <div className="hero-content animate-on-scroll fade-in-up">
              <div className="badge">
                <span className="badge-dot"></span> SYSTEM ONLINE: AVAILABLE FOR HIRE
              </div>
              <h1 className="name">Hassan Nassif</h1>
              <p className="title">&gt; Software Engineer & Full-Stack Developer_</p>
              <p className="bio">
                Building scalable web infrastructure, high-performance APIs, and reactive interfaces. 
                Specialized in full-stack engineering, secure database systems, and automated workflows.
              </p>
              <div className="hero-actions">
                <a href="mailto:hassannassif.lb@gmail.com" className="btn btn-primary">
                  <i className="fas fa-terminal"></i> Initialize Contact
                </a>
               
              </div>
              <div className="social-links">
                <a href="https://www.instagram.com/hassan_nassiff?igsh=MWZvdmdtdWUxbWdwcg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/hassan-nassif-0b6b29313/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="section skills-section">
          <div className="section-content-wrapper">
            <div className="section-header animate-on-scroll fade-in-up">
              <h2 className="section-title"><i className="fas fa-microchip"></i> Core Modules</h2>
            </div>
            <div className="skills-grid">
              <div className="skill-card animate-on-scroll fade-in-up">
                <div className="skill-icon-box"><i className="fas fa-database"></i></div>
                <h3>Data & Persistence</h3>
                <ul>
                  <li><i className="fas fa-database"></i>PostgreSQL & SQL Optimization</li>
                  <li><i className="fas fa-check-circle"></i>Data Validation & Integrity</li>
                  <li><i className="fas fa-chart-line"></i>Advanced Reporting & ETL</li>
                  <li><i className="fas fa-sitemap"></i>Database Architecture</li>
                </ul>
              </div>
              <div className="skill-card animate-on-scroll fade-in-up" style={{ animationDelay: '0.15s' }}>
                <div className="skill-icon-box"><i className="fas fa-server"></i></div>
                <h3>Systems & Architecture</h3>
                <ul>
                  <li><i className="fas fa-building"></i>CRM & ERP Implementation</li>
                  <li><i className="fas fa-code-branch"></i>RESTful API Design</li>
                  <li><i className="fas fa-cloud"></i>Cloud Infrastructure & Nginx</li>
                  <li><i className="fas fa-headset"></i>Client Support Systems</li>
                </ul>
              </div>
              <div className="skill-card animate-on-scroll fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="skill-icon-box"><i className="fas fa-code-branch"></i></div>
                <h3>Tech Stack</h3>
                <ul>
                  <li><i className="fab fa-react"></i>React.js & JavaScript (ES6+)</li>
                  <li><i className="fas fa-cubes"></i>ASP.NET Core Web API</li>
                  <li><i className="fab fa-node-js"></i>Node.js & Laravel</li>
                  <li><i className="fab fa-css3-alt"></i>Tailwind CSS & Git CI/CD</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section edu-section">
          <div className="section-content-wrapper">
            <div className="section-header animate-on-scroll fade-in-up">
              <h2 className="section-title"><i className="fas fa-graduation-cap"></i> Academic Logs</h2>
            </div>
            <div className="edu-list">
              <div className="edu-item animate-on-scroll fade-in-up">
                <div className="edu-dot"></div>
                <div className="edu-content">
                  <h3><i className="fas fa-university"></i> AUL University</h3>
                  <p><i className="fas fa-laptop-code"></i> B.S. in Computer Science</p>
                </div>
                <span className="edu-date"><i className="far fa-calendar-alt"></i> 2018 – 2022</span>
              </div>
              <div className="edu-item animate-on-scroll fade-in-up" style={{ animationDelay: '0.15s' }}>
                <div className="edu-dot"></div>
                <div className="edu-content">
                  <h3><i className="fas fa-school"></i> CIS College</h3>
                  <p><i className="fas fa-network-wired"></i> B.S. in Information Technology</p>
                </div>
                <span className="edu-date"><i className="far fa-calendar-alt"></i> 2016 – 2018</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-content-wrapper">
            <div className="section-header animate-on-scroll fade-in-up">
              <h2 className="section-title"><i className="fas fa-project-diagram"></i> My Work</h2>
            </div>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div className="project-card animate-on-scroll fade-in-up" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="project-top">
                    <div className="folder-icon"><i className={`fas ${project.icon}`}></i></div>
                    <h3>{project.title}</h3>
                  </div>
                  <p>{project.desc}</p>
                  <div className="project-tech-list">
                    {project.tech.map((t, i) => (
                      <span key={i} className="project-tech">
                        <i className={getTechIcon(t)}></i> {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-content-wrapper">
            <div className="section-header animate-on-scroll fade-in-up">
              <h2 className="section-title"><i className="fas fa-satellite-dish"></i> Transmission Hub</h2>
            </div>
            <div className="contact-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <div className="contact-info animate-on-scroll fade-in-left" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', maxWidth: '800px' }}>
                <div className="contact-item">
                  <div className="contact-icon-box"><i className="fas fa-envelope"></i></div>
                  <div>
                    <h4>Secure Email</h4>
                    <a href="mailto:hassannassif.lb@gmail.com"><i className="fas fa-at"></i> hassannassif.lb@gmail.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon-box"><i className="fas fa-phone-alt"></i></div>
                  <div>
                    <h4>Direct Comm Line</h4>
                    <a href="tel:+96170748266"><i className="fas fa-phone"></i> +961 70 748 266</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon-box"><i className="fab fa-linkedin-in"></i></div>
                  <div>
                    <h4>Network Node</h4>
                    <a href="https://www.linkedin.com/in/hassan-nassif-0b6b29313/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> linkedin.com/in/hassan-nassif</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon-box"><i className="fab fa-instagram"></i></div>
                  <div>
                    <h4>Social Stream</h4>
                    <a href="https://www.instagram.com/hassan_nassiff?igsh=MWZvdmdtdWUxbWdwcg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> @hassannassif</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>
            <i className="fas fa-terminal"></i> hassannassif.lb@gmail.com &nbsp;·&nbsp;
            <i className="fas fa-phone-alt"></i> +961 70 748 266
          </p>
          <p className="footer-meta">© 2026 Hassan Nassif </p>
        </div>
      </footer>
    </div>
  );
};

export default App;