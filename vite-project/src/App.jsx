import React, { useState, useEffect } from 'react';
import './App.css';
import profilePhoto from './assets/profile.jpeg';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);

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
    setIsMenuOpen(false);
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

      <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo" onClick={() => scrollToSection('home')}>
            <span className="logo-text">HN<span className="logo-dot">_</span></span>
          </div>
          
          {/* Hamburger Menu Button */}
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <a 
                className={`nav-btn ${activeSection === 'home' ? 'active' : ''}`} 
                onClick={() => scrollToSection('home')}
                href="#home"
              >
                <i className="fas fa-home"></i>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a 
                className={`nav-btn ${activeSection === 'projects' ? 'active' : ''}`} 
                onClick={() => scrollToSection('projects')}
                href="#projects"
              >
                <i className="fas fa-code"></i>
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a 
                className={`nav-btn ${activeSection === 'contact' ? 'active' : ''}`} 
                onClick={() => scrollToSection('contact')}
                href="#contact"
              >
                <i className="fas fa-envelope"></i>
                <span>Contact</span>
              </a>
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
            </div>

            <div className="hero-content animate-on-scroll fade-in-up">
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
          <div className="section-content-wrapper" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
            <div className="section-header animate-on-scroll fade-in-up">
              <h2 className="section-title"><i className="fas fa-microchip"></i> Core Modules</h2>
            </div>
            <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', width: '100%' }}>
              <div className="skill-card animate-on-scroll fade-in-up" style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="skill-icon-box" style={{ fontSize: '2rem', marginBottom: '1rem', color: '#4a9eff' }}><i className="fas fa-database"></i></div>
                <h3 style={{ marginBottom: '1rem' }}>Data & Persistence</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.75rem' }}><i className="fas fa-database" style={{ marginRight: '12px', color: '#4a9eff' }}></i> PostgreSQL & SQL Optimization</li>
                  <li style={{ marginBottom: '0.75rem' }}><i className="fas fa-check-circle" style={{ marginRight: '12px', color: '#4a9eff' }}></i> Data Validation & Integrity</li>
                  <li style={{ marginBottom: '0.75rem' }}><i className="fas fa-chart-line" style={{ marginRight: '12px', color: '#4a9eff' }}></i> Advanced Reporting & ETL</li>
                  <li style={{ marginBottom: '0.75rem' }}><i className="fas fa-sitemap" style={{ marginRight: '12px', color: '#4a9eff' }}></i> Database Architecture</li>
                </ul>
              </div>
              <div className="skill-card animate-on-scroll fade-in-up" style={{ animationDelay: '0.15s', padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="skill-icon-box" style={{ fontSize: '2rem', marginBottom: '1rem', color: '#4a9eff' }}><i className="fas fa-server"></i></div>
                <h3 style={{ marginBottom: '1rem' }}>Systems & Architecture</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.75rem' }}><i className="fas fa-building" style={{ marginRight: '12px', color: '#4a9eff' }}></i> CRM & ERP Implementation</li>
                  <li style={{ marginBottom: '0.75rem' }}><i className="fas fa-code-branch" style={{ marginRight: '12px', color: '#4a9eff' }}></i> RESTful API Design</li>
                  <li style={{ marginBottom: '0.75rem' }}><i className="fas fa-cloud" style={{ marginRight: '12px', color: '#4a9eff' }}></i> Cloud Infrastructure & Nginx</li>
                  <li style={{ marginBottom: '0.75rem' }}><i className="fas fa-headset" style={{ marginRight: '12px', color: '#4a9eff' }}></i> Client Support Systems</li>
                </ul>
              </div>
              <div className="skill-card animate-on-scroll fade-in-up" style={{ animationDelay: '0.3s', padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="skill-icon-box" style={{ fontSize: '2rem', marginBottom: '1rem', color: '#4a9eff' }}><i className="fas fa-code-branch"></i></div>
                <h3 style={{ marginBottom: '1rem' }}>Tech Stack</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.75rem' }}><i className="fab fa-react" style={{ marginRight: '12px', color: '#4a9eff' }}></i> React.js & JavaScript (ES6+)</li>
                  <li style={{ marginBottom: '0.75rem' }}><i className="fas fa-cubes" style={{ marginRight: '12px', color: '#4a9eff' }}></i> ASP.NET Core Web API</li>
                  <li style={{ marginBottom: '0.75rem' }}><i className="fab fa-node-js" style={{ marginRight: '12px', color: '#4a9eff' }}></i> Node.js & Laravel</li>
                  <li style={{ marginBottom: '0.75rem' }}><i className="fab fa-css3-alt" style={{ marginRight: '12px', color: '#4a9eff' }}></i> Tailwind CSS & Git CI/CD</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section edu-section">
          <div className="section-content-wrapper" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
            <div className="section-header animate-on-scroll fade-in-up">
              <h2 className="section-title"><i className="fas fa-graduation-cap"></i> Academic Logs</h2>
            </div>
            <div className="edu-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
              <div className="edu-item animate-on-scroll fade-in-up" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
                <div className="edu-content">
                  <h3 style={{ marginBottom: '0.5rem' }}><i className="fas fa-university" style={{ marginRight: '10px', color: '#4a9eff' }}></i> AUL University</h3>
                  <p><i className="fas fa-laptop-code" style={{ marginRight: '10px', color: '#4a9eff' }}></i> B.S. in Computer Science</p>
                </div>
                <span className="edu-date" style={{ color: '#4a9eff' }}><i className="far fa-calendar-alt" style={{ marginRight: '8px' }}></i> 2018 – 2022</span>
              </div>
              <div className="edu-item animate-on-scroll fade-in-up" style={{ animationDelay: '0.15s', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
                <div className="edu-content">
                  <h3 style={{ marginBottom: '0.5rem' }}><i className="fas fa-school" style={{ marginRight: '10px', color: '#4a9eff' }}></i> CIS College</h3>
                  <p><i className="fas fa-network-wired" style={{ marginRight: '10px', color: '#4a9eff' }}></i> B.S. in Information Technology</p>
                </div>
                <span className="edu-date" style={{ color: '#4a9eff' }}><i className="far fa-calendar-alt" style={{ marginRight: '8px' }}></i> 2016 – 2018</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-content-wrapper" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
            <div className="section-header animate-on-scroll fade-in-up">
              <h2 className="section-title"><i className="fas fa-project-diagram"></i> My Work</h2>
            </div>
            <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', width: '100%' }}>
              {projects.map((project, index) => (
                <div className="project-card animate-on-scroll fade-in-up" key={index} style={{ animationDelay: `${index * 0.1}s`, padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s ease' }}>
                  <div className="project-top" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div className="folder-icon" style={{ fontSize: '2rem', color: '#4a9eff' }}><i className={`fas ${project.icon}`}></i></div>
                    <h3 style={{ fontSize: '1.25rem' }}>{project.title}</h3>
                  </div>
                  <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>{project.desc}</p>
                  <div className="project-tech-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {project.tech.map((t, i) => (
                      <span key={i} className="project-tech" style={{ padding: '0.4rem 0.8rem', background: 'rgba(74, 158, 255, 0.1)', borderRadius: '4px', fontSize: '0.85rem', color: '#4a9eff' }}>
                        <i className={getTechIcon(t)} style={{ marginRight: '6px' }}></i> {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="section-content-wrapper" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px', width: '100%' }}>
            <div className="section-header animate-on-scroll fade-in-up" style={{ textAlign: 'center' }}>
              <h2 className="section-title" style={{ justifyContent: 'center' }}>
                <i className="fas fa-satellite-dish"></i> Transmission Hub
              </h2>
            </div>
            <div className="contact-container" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem',
              width: '100%',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              <div className="contact-item" style={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '2.5rem 2rem', 
                background: 'rgba(255,255,255,0.05)', 
                borderRadius: '16px', 
                border: '1px solid rgba(74, 158, 255, 0.2)',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                minHeight: '180px',
                justifyContent: 'center'
              }}>
                <div className="contact-icon-box" style={{ 
                  fontSize: '2.5rem', 
                  color: '#4a9eff', 
                  marginBottom: '1rem',
                  width: '70px',
                  height: '70px',
                  background: 'rgba(74, 158, 255, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(74, 158, 255, 0.3)'
                }}>
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 style={{ 
                    fontSize: '0.8rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '2px', 
                    color: '#8892b0', 
                    marginBottom: '0.5rem',
                    fontFamily: 'Fira Code, monospace'
                  }}>
                    <i className="fas fa-lock" style={{ marginRight: '6px', fontSize: '0.6rem' }}></i> Secure Email
                  </h4>
                  <a href="mailto:hassannassif.lb@gmail.com" style={{ 
                    color: '#ccd6f6', 
                    textDecoration: 'none', 
                    fontSize: '1rem',
                    transition: 'color 0.3s ease',
                    fontWeight: '500'
                  }}>
                    <i className="fas fa-at" style={{ marginRight: '8px', color: '#4a9eff' }}></i> hassannassif.lb@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item" style={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '2.5rem 2rem', 
                background: 'rgba(255,255,255,0.05)', 
                borderRadius: '16px', 
                border: '1px solid rgba(74, 158, 255, 0.2)',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                minHeight: '180px',
                justifyContent: 'center'
              }}>
                <div className="contact-icon-box" style={{ 
                  fontSize: '2.5rem', 
                  color: '#4a9eff', 
                  marginBottom: '1rem',
                  width: '70px',
                  height: '70px',
                  background: 'rgba(74, 158, 255, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(74, 158, 255, 0.3)'
                }}>
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h4 style={{ 
                    fontSize: '0.8rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '2px', 
                    color: '#8892b0', 
                    marginBottom: '0.5rem',
                    fontFamily: 'Fira Code, monospace'
                  }}>
                    <i className="fas fa-bolt" style={{ marginRight: '6px', fontSize: '0.6rem' }}></i> Direct Comm Line
                  </h4>
                  <a href="tel:+96170748266" style={{ 
                    color: '#ccd6f6', 
                    textDecoration: 'none', 
                    fontSize: '1rem',
                    transition: 'color 0.3s ease',
                    fontWeight: '500'
                  }}>
                    <i className="fas fa-phone" style={{ marginRight: '8px', color: '#4a9eff' }}></i> +961 70 748 266
                  </a>
                </div>
              </div>

              <div className="contact-item" style={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '2.5rem 2rem', 
                background: 'rgba(255,255,255,0.05)', 
                borderRadius: '16px', 
                border: '1px solid rgba(74, 158, 255, 0.2)',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                minHeight: '180px',
                justifyContent: 'center'
              }}>
                <div className="contact-icon-box" style={{ 
                  fontSize: '2.5rem', 
                  color: '#4a9eff', 
                  marginBottom: '1rem',
                  width: '70px',
                  height: '70px',
                  background: 'rgba(74, 158, 255, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(74, 158, 255, 0.3)'
                }}>
                  <i className="fab fa-linkedin-in"></i>
                </div>
                <div>
                  <h4 style={{ 
                    fontSize: '0.8rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '2px', 
                    color: '#8892b0', 
                    marginBottom: '0.5rem',
                    fontFamily: 'Fira Code, monospace'
                  }}>
                    <i className="fas fa-globe" style={{ marginRight: '6px', fontSize: '0.6rem' }}></i> Network Node
                  </h4>
                  <a href="https://www.linkedin.com/in/hassan-nassif-0b6b29313/" target="_blank" rel="noopener noreferrer" style={{ 
                    color: '#ccd6f6', 
                    textDecoration: 'none', 
                    fontSize: '1rem',
                    transition: 'color 0.3s ease',
                    fontWeight: '500'
                  }}>
                    <i className="fab fa-linkedin" style={{ marginRight: '8px', color: '#4a9eff' }}></i> linkedin.com/in/hassan-nassif
                  </a>
                </div>
              </div>

              <div className="contact-item" style={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '2.5rem 2rem', 
                background: 'rgba(255,255,255,0.05)', 
                borderRadius: '16px', 
                border: '1px solid rgba(74, 158, 255, 0.2)',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                minHeight: '180px',
                justifyContent: 'center'
              }}>
                <div className="contact-icon-box" style={{ 
                  fontSize: '2.5rem', 
                  color: '#4a9eff', 
                  marginBottom: '1rem',
                  width: '70px',
                  height: '70px',
                  background: 'rgba(74, 158, 255, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(74, 158, 255, 0.3)'
                }}>
                  <i className="fab fa-instagram"></i>
                </div>
                <div>
                  <h4 style={{ 
                    fontSize: '0.8rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '2px', 
                    color: '#8892b0', 
                    marginBottom: '0.5rem',
                    fontFamily: 'Fira Code, monospace'
                  }}>
                    <i className="fas fa-share-alt" style={{ marginRight: '6px', fontSize: '0.6rem' }}></i> Social Stream
                  </h4>
                  <a href="https://www.instagram.com/hassan_nassiff?igsh=MWZvdmdtdWUxbWdwcg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ 
                    color: '#ccd6f6', 
                    textDecoration: 'none', 
                    fontSize: '1rem',
                    transition: 'color 0.3s ease',
                    fontWeight: '500'
                  }}>
                    <i className="fab fa-instagram" style={{ marginRight: '8px', color: '#4a9eff' }}></i> @hassannassif
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer" style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '2rem' }}>
        <div className="footer-content" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
          <p style={{ marginBottom: '0.5rem' }}>
            <i className="fas fa-terminal" style={{ marginRight: '8px', color: '#4a9eff' }}></i> hassannassif.lb@gmail.com &nbsp;·&nbsp;
            <i className="fas fa-phone-alt" style={{ marginRight: '8px', color: '#4a9eff' }}></i> +961 70 748 266
          </p>
          <p className="footer-meta" style={{ color: '#8892b0', fontSize: '0.9rem' }}>© 2026 Hassan Nassif</p>
        </div>
      </footer>
    </div>
  );
};

export default App;