// ============================================
// RAVIKISHAN PORTFOLIO - ENHANCED SCRIPT
// ============================================

const portfolioData = {
  personalInfo: {
    name: "Ravikishan",
    title: "Tech Learner | MCA Student | Passionate Coder",
    about: "I am currently pursuing MCA after completing BCA. I have strong proficiency in Java, Python, C, and C++, with hands-on experience in HTML, CSS, JavaScript, Django, and PL/SQL. I enjoy building efficient software, solving practical problems, and adapting quickly to new technologies.",
    strengths: [
      "Full stack thinking",
      "Problem solving",
      "Fast learner",
      "Team collaboration",
      "Database fundamentals",
      "Clean coding style"
    ]
  },
  skills: [
    { name: "HTML, CSS, JavaScript", level: 85, icon: "bi-filetype-html" },
    { name: "Python, Django", level: 75, icon: "bi-filetype-py" },
    { name: "Java, PL/SQL", level: 80, icon: "bi-filetype-java" },
    { name: "C, C++", level: 75, icon: "bi-code-slash" },
    { name: "Git, MS Office", level: 85, icon: "bi-git" },
    { name: "SQLite, MySQL", level: 70, icon: "bi-database" }
  ],
  projects: [
    {
      title: "CarInfoSystem",
      description: "System to manage car listings with search, filtering, user authentication, and an admin panel.",
      stack: ["Django", "HTML", "CSS", "SQLite", "JavaScript"],
      highlights: ["Car search and listings", "Admin dashboard", "Authentication"],
      github: "https://github.com/sahravikishan/CarInfoSystem",
      category: "Django"
    },
    {
      title: "MusicFlow",
      description: "Responsive music streaming UI with playlist controls and smooth playback interactions.",
      stack: ["Django", "HTML", "CSS", "JavaScript", "Bootstrap"],
      highlights: ["Audio control UI", "Guitar Audio Generation", "Mobile responsive"],
      github: "https://github.com/sahravikishan/MusicFlow",
      category: "Web"
    },
    {
      title: "CoffeeKaafiHai",
      description: "Cafe platform with menu browsing, order management, and integrated Razorpay payments.",
      stack: ["Django", "Razorpay", "MongoDB", "HTML", "CSS", "JavaScript"],
      highlights: ["Online ordering", "Payment integration", "Session-based cart"],
      github: "https://github.com/sahravikishan/CoffeeKaafiHai",
      category: "Django"
    },
    {
      title: "AlgoQuest",
      description: "Learning platform for algorithm concepts with visual explanation and guided steps.",
      stack: ["Django","Python", "Algorithms", "Data Structures", "3D Visualization"],
      highlights: ["Visual learning", "Step-by-step explanation", "Concept clarity"],
      github: "https://github.com/sahravikishan/AlgoQuest",
      category: "Python"
    },
    {
      title: "Ravikishan Portfolio",
      description: "Personal portfolio website that presents projects, education, skills, and downloadable profile content.",
      stack: ["HTML", "CSS", "JavaScript"],
      highlights: ["Theme toggle", "Responsive UI", "Data downloads"],
      github: "https://github.com/sahravikishan/Ravikishan-Portfolio",
      category: "Web"
    }
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      year: "2025 - Present",
      institute: "Zeal Institute of Business Administration, Computer Application & Research, Pune (ZIBCAR)",
      university: "Savitribai Phule Pune University (SPPU)",
      description: "Advanced study in software development, algorithms, system design, and applied computing."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      year: "2022 - 2025",
      institute: "H. V. Desai College, Pune",
      university: "Savitribai Phule Pune University (SPPU)",
      description: "Built a foundation in programming, databases, web development, and software engineering principles."
    }
  ],
  contact: [
    { label: "Email", value: "ravik364144@gmail.com", href: "mailto:ravik364144@gmail.com" },
    { label: "LinkedIn", value: "ravikishan-sah-688a64245", href: "https://www.linkedin.com/in/ravikishan-sah-688a64245" },
    { label: "GitHub", value: "sahravikishan", href: "https://github.com/sahravikishan" },
    { label: "Location", value: "Pune, India", href: "" }
  ],
  resume: {
    summary: "Strong proficiency in Java, Python, C, and C++, with practical experience in web technologies, databases, and problem solving. Focused on building reliable software with clean architecture and maintainable code.",
    skills: [
      "Web development with HTML, CSS, JavaScript, and Django",
      "Programming in Python, Java, C, C++, and PL/SQL",
      "Database design with SQLite and MySQL",
      "Version control and collaboration with Git"
    ]
  }
};

// ============================================
// UI Controller
// ============================================
const ui = {
  state: {
    filter: "All",
    theme: "dark"
  },

  init() {
    this.cache();
    this.render();
    this.bind();
    this.applyStoredTheme();
    this.animateMetrics();
    this.setCurrentYear();
    this.observeReveal();
    this.observeSections();
    this.handleScroll();
    this.initCursorGlow();
  },

  cache() {
    this.topbar = document.getElementById("topbar");
    this.navMenu = document.getElementById("nav-menu");
    this.menuToggle = document.getElementById("menu-toggle");
    this.themeToggle = document.getElementById("theme-toggle");
    this.backToTop = document.getElementById("back-to-top");
    this.scrollProgress = document.getElementById("scroll-progress");
    this.cursorGlow = document.getElementById("cursor-glow");

    this.aboutText = document.getElementById("about-text");
    this.aboutStrengths = document.getElementById("about-strengths");
    this.skillsGrid = document.getElementById("skills-grid");
    this.projectFilters = document.getElementById("project-filters");
    this.projectsGrid = document.getElementById("projects-grid");
    this.timeline = document.getElementById("education-timeline");
    this.resumeSummary = document.getElementById("resume-summary");
    this.resumeSkills = document.getElementById("resume-skills");
    this.contactGrid = document.getElementById("contact-grid");

    this.metricProjects = document.getElementById("metric-projects");
    this.metricTech = document.getElementById("metric-tech");
    this.metricEducation = document.getElementById("metric-education");
  },

  toneClass(index = 0) {
    const tones = ["mint", "sky", "amber", "violet", "rose"];
    return `tone-${tones[index % tones.length]}`;
  },

  contactMeta(label = "") {
    const key = label.toLowerCase();
    if (key === "email") return { icon: "bi-envelope-at-fill", note: "Preferred for project discussion", action: "Write now" };
    if (key === "linkedin") return { icon: "bi-linkedin", note: "Best for professional networking", action: "Connect" };
    if (key === "github") return { icon: "bi-github", note: "Browse code and repositories", action: "View profile" };
    if (key === "location") return { icon: "bi-geo-alt-fill", note: "Open to remote collaboration", action: "Available" };
    return { icon: "bi-chat-dots-fill", note: "Reach out any time", action: "Open" };
  },

  // ============================================
  // RENDER
  // ============================================
  render() {
    this.renderAbout();
    this.renderSkills();
    this.renderProjectFilters();
    this.renderProjects();
    this.renderEducation();
    this.renderResume();
    this.renderContact();
    this.attachDownloadHandlers();
  },

  renderAbout() {
    if (this.aboutText) {
      this.aboutText.textContent = portfolioData.personalInfo.about;
    }

    if (this.aboutStrengths) {
      this.aboutStrengths.innerHTML = portfolioData.personalInfo.strengths
        .map((item, index) => `<button type="button" class="tag-btn ${this.toneClass(index)}">${item}</button>`)
        .join("");
    }
  },

  renderSkills() {
    if (!this.skillsGrid) return;

    this.skillsGrid.innerHTML = portfolioData.skills
      .map((skill, index) => `
        <div class="col-md-6 col-lg-4">
          <article class="skill-card glass-card reveal" style="transition-delay: ${index * 80}ms">
            <div class="skill-head">
              <h3><i class="bi ${skill.icon}" style="color: var(--brand); margin-right: 6px;"></i>${skill.name}</h3>
              <span>${skill.level}%</span>
            </div>
            <div class="skill-meter" aria-label="${skill.name} ${skill.level} percent">
              <span data-level="${skill.level}"></span>
            </div>
          </article>
        </div>
      `)
      .join("");

    // Animate after a short delay
    setTimeout(() => this.animateSkillMeters(), 300);
  },

  animateSkillMeters() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target.querySelector(".skill-meter span");
          if (bar) {
            const level = Number(bar.getAttribute("data-level") || "0");
            requestAnimationFrame(() => {
              bar.style.width = `${level}%`;
            });
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll(".skill-card").forEach((card) => observer.observe(card));
  },

  renderProjectFilters() {
    if (!this.projectFilters) return;

    const categories = Array.from(new Set(portfolioData.projects.map((p) => p.category)));
    const filters = ["All", ...categories];

    this.projectFilters.innerHTML = filters
      .map((filter, index) => `<button class="filter-btn ${this.toneClass(index)}${filter === "All" ? " active" : ""}" data-filter="${filter}">${filter}</button>`)
      .join("");

    this.projectFilters.querySelectorAll(".filter-btn").forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter") || "All";
        this.state.filter = filter;

        this.projectFilters.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        this.filterProjects();
      });
    });
  },

  renderProjects() {
    if (!this.projectsGrid) return;

    this.projectsGrid.innerHTML = portfolioData.projects
      .map((project, index) => {
        const visualClass = project.category.toLowerCase();
        const code = project.title
          .split(" ")
          .map((word) => word[0])
          .join("")
          .slice(0, 2)
          .toUpperCase();

        return `
          <div class="col-md-6 col-lg-4 project-col" data-category="${project.category}">
            <article class="project-card glass-card reveal" style="transition-delay: ${index * 100}ms">
              <div class="project-visual ${visualClass}">${code}</div>
              <div class="project-body">
                <h3>${project.title}</h3>
                <p>${project.description}</p>

                <div class="project-stack">
                  ${project.stack.map((item, i) => `<button type="button" class="stack-item tag-btn ${this.toneClass(i + 1)}">${item}</button>`).join("")}
                </div>

                <ul class="project-points">
                  ${project.highlights.map((point) => `<li>${point}</li>`).join("")}
                </ul>

                <div class="project-footer">
                  <button type="button" class="tag-btn category-btn ${this.toneClass(project.stack.length)}" style="font-size:0.74rem;padding:5px 10px;">${project.category}</button>
                  <a class="project-link" href="${project.github}" target="_blank" rel="noopener noreferrer">
                    View code <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </article>
          </div>
        `;
      })
      .join("");

    this.filterProjects();
  },

  filterProjects() {
    const cols = Array.from(document.querySelectorAll(".project-col"));
    cols.forEach((col) => {
      const category = col.getAttribute("data-category");
      const visible = this.state.filter === "All" || category === this.state.filter;
      col.classList.toggle("hidden", !visible);
    });
  },

  renderEducation() {
    if (!this.timeline) return;

    this.timeline.innerHTML = portfolioData.education
      .map((item, index) => `
        <article class="timeline-card glass-card reveal" style="transition-delay: ${index * 120}ms">
          <span class="timeline-year"><i class="bi bi-calendar3"></i> ${item.year}</span>
          <h3>${item.degree}</h3>
          <p><strong>Institute:</strong> ${item.institute}</p>
          <p><strong>University:</strong> ${item.university}</p>
          <p>${item.description}</p>
        </article>
      `)
      .join("");
  },

  renderResume() {
    if (this.resumeSummary) {
      this.resumeSummary.textContent = portfolioData.resume.summary;
    }

    if (this.resumeSkills) {
      this.resumeSkills.innerHTML = portfolioData.resume.skills.map((item) => `<li>${item}</li>`).join("");
    }
  },

  renderContact() {
    if (!this.contactGrid) return;

    this.contactGrid.innerHTML = portfolioData.contact
      .map((item, index) => {
        const meta = this.contactMeta(item.label);
        const labelKey = item.label.toLowerCase();
        const tone = labelKey === "email"
          ? "tone-amber"
          : labelKey === "linkedin"
            ? "tone-sky"
            : this.toneClass(index + 1);
        const isLink = Boolean(item.href);
        const externalAttrs = item.href && item.href.startsWith("mailto:")
          ? ""
          : ' target="_blank" rel="noopener noreferrer"';

        const cardBody = `
          <div class="contact-card-top">
            <span class="contact-badge ${tone}">
              <i class="bi ${meta.icon}" aria-hidden="true"></i>
            </span>
            <p class="contact-label">${item.label}</p>
          </div>
          <p class="contact-value">${item.value}</p>
          <p class="contact-note">${meta.note}</p>
          <span class="contact-open${isLink ? "" : " static"}">${meta.action}${isLink ? ' <i class="bi bi-arrow-right"></i>' : ""}</span>
        `;

        if (isLink) {
          return `<div class="col-6"><a class="contact-card glass-card ${tone}" href="${item.href}"${externalAttrs}>${cardBody}</a></div>`;
        }

        return `<div class="col-6"><article class="contact-card glass-card ${tone}">${cardBody}</article></div>`;
      })
      .join("");
  },

  // ============================================
  // METRICS COUNTER ANIMATION
  // ============================================
  animateMetrics() {
    const techSet = new Set();
    portfolioData.projects.forEach((p) => p.stack.forEach((item) => techSet.add(item)));

    const targets = [
      { el: this.metricProjects, value: portfolioData.projects.length, suffix: "+" },
      { el: this.metricTech, value: techSet.size, suffix: "+" },
      { el: this.metricEducation, value: portfolioData.education.length, suffix: "" }
    ];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          targets.forEach(({ el, value, suffix }) => {
            if (el) this.countUp(el, value, suffix);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const metricsSection = document.getElementById("metrics");
    if (metricsSection) observer.observe(metricsSection);
  },

  countUp(el, target, suffix = "", duration = 1200) {
    const start = 0;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (target - start) * eased);

      el.textContent = `${current}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  },

  // ============================================
  // BINDINGS
  // ============================================
  bind() {
    // Mobile menu toggle
    this.menuToggle?.addEventListener("click", () => {
      const open = this.navMenu.classList.toggle("open");
      this.menuToggle.classList.toggle("active", open);
      this.menuToggle.setAttribute("aria-expanded", String(open));
    });

    // Close menu on outside click
    document.addEventListener("click", (event) => {
      if (!this.navMenu || !this.menuToggle) return;
      const inside = this.navMenu.contains(event.target) || this.menuToggle.contains(event.target);
      if (!inside) {
        this.navMenu.classList.remove("open");
        this.menuToggle.classList.remove("active");
        this.menuToggle.setAttribute("aria-expanded", "false");
      }
    });

    // Close menu on Escape
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.navMenu?.classList.remove("open");
        this.menuToggle?.classList.remove("active");
        this.menuToggle?.setAttribute("aria-expanded", "false");
      }
    });

    // Theme toggle
    this.themeToggle?.addEventListener("click", () => {
      const nextTheme = this.state.theme === "light" ? "dark" : "light";
      this.setTheme(nextTheme);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const targetSelector = link.getAttribute("href");
        if (!targetSelector || targetSelector === "#") return;
        const target = document.querySelector(targetSelector);
        if (!target) return;

        event.preventDefault();
        const topOffset = this.topbar?.offsetHeight ?? 0;
        const top = target.getBoundingClientRect().top + window.scrollY - topOffset - 16;
        window.scrollTo({ top, behavior: "smooth" });

        this.navMenu?.classList.remove("open");
        this.menuToggle?.classList.remove("active");
        this.menuToggle?.setAttribute("aria-expanded", "false");
      });
    });

    // Scroll events
    window.addEventListener("scroll", () => this.handleScroll(), { passive: true });

    // Back to top
    this.backToTop?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  },

  // ============================================
  // SCROLL HANDLING
  // ============================================
  handleScroll() {
    const scrolled = window.scrollY > 20;
    this.topbar?.classList.toggle("scrolled", scrolled);
    this.backToTop?.classList.toggle("visible", window.scrollY > 500);

    // Scroll progress
    if (this.scrollProgress) {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      this.scrollProgress.style.width = `${progress}%`;
    }
  },

  // ============================================
  // CURSOR GLOW
  // ============================================
  initCursorGlow() {
    if (!this.cursorGlow) return;

    // Only on devices with hover
    const hasHover = window.matchMedia("(hover: hover)").matches;
    if (!hasHover) return;

    let rafId = null;
    document.addEventListener("mousemove", (e) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        this.cursorGlow.style.left = `${e.clientX}px`;
        this.cursorGlow.style.top = `${e.clientY}px`;
        this.cursorGlow.classList.add("active");
      });
    });

    document.addEventListener("mouseleave", () => {
      this.cursorGlow.classList.remove("active");
    });
  },

  // ============================================
  // INTERSECTION OBSERVERS
  // ============================================
  observeReveal() {
    const revealTargets = Array.from(document.querySelectorAll(".reveal, .skill-card, .project-card, .timeline-card, .contact-card"));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });

    revealTargets.forEach((target) => {
      if (!target.classList.contains("reveal")) {
        target.classList.add("reveal");
      }
      observer.observe(target);
    });
  },

  observeSections() {
    const links = Array.from(document.querySelectorAll(".nav-link"));
    const sections = Array.from(document.querySelectorAll("main section[id]"));

    if (!links.length || !sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      const current = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!current) return;
      const id = current.target.getAttribute("id");

      links.forEach((link) => {
        const active = link.getAttribute("href") === `#${id}`;
        link.classList.toggle("active", active);
      });
    }, { threshold: [0.2, 0.5, 0.8], rootMargin: "-30% 0px -50% 0px" });

    sections.forEach((section) => observer.observe(section));
  },

  // ============================================
  // THEME
  // ============================================
  setCurrentYear() {
    const yearElement = document.getElementById("current-year");
    if (yearElement) {
      yearElement.textContent = String(new Date().getFullYear());
    }
  },

  applyStoredTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      this.setTheme(saved, false);
      return;
    }

    const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    this.setTheme(preferredDark ? "dark" : "light", false);
  },

  setTheme(theme, persist = true) {
    this.state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);

    if (persist) {
      localStorage.setItem("theme", theme);
    }
  },

  // ============================================
  // DOWNLOADS
  // ============================================
  attachDownloadHandlers() {
    document.getElementById("download-html")?.addEventListener("click", () => this.downloadHTML());
    document.getElementById("download-markdown")?.addEventListener("click", () => this.downloadMarkdown());
    document.getElementById("download-json")?.addEventListener("click", () => this.downloadJSON());
  },

  download(content, filename, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  },

  downloadHTML() {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${portfolioData.personalInfo.name} Portfolio</title></head><body><h1>${portfolioData.personalInfo.name}</h1><p>${portfolioData.personalInfo.title}</p><h2>About</h2><p>${portfolioData.personalInfo.about}</p><h2>Skills</h2><ul>${portfolioData.skills.map((s) => `<li>${s.name}: ${s.level}%</li>`).join("")}</ul><h2>Projects</h2>${portfolioData.projects.map((p) => `<article><h3>${p.title}</h3><p>${p.description}</p><p>${p.stack.join(", ")}</p><a href="${p.github}">GitHub</a></article>`).join("")}<h2>Contact</h2><ul>${portfolioData.contact.map((c) => `<li>${c.label}: ${c.value}</li>`).join("")}</ul></body></html>`;
    this.download(html, "Ravikishan_Portfolio.html", "text/html");
  },

  downloadMarkdown() {
    const md = `# ${portfolioData.personalInfo.name}\n${portfolioData.personalInfo.title}\n\n## About\n${portfolioData.personalInfo.about}\n\n## Skills\n${portfolioData.skills.map((s) => `- ${s.name}: ${s.level}%`).join("\n")}\n\n## Projects\n${portfolioData.projects.map((p) => `### ${p.title}\n${p.description}\n- Stack: ${p.stack.join(", ")}\n- GitHub: ${p.github}`).join("\n\n")}\n\n## Contact\n${portfolioData.contact.map((c) => `- ${c.label}: ${c.value}`).join("\n")}`;
    this.download(md, "Ravikishan_Portfolio.md", "text/markdown");
  },

  downloadJSON() {
    this.download(JSON.stringify(portfolioData, null, 2), "Ravikishan_Portfolio.json", "application/json");
  }
};

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  ui.init();
});
