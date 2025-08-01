// Portfolio data
const portfolioData = {
  personalInfo: {
    name: "Ravikishan",
    title: "Web Developer | BCA Graduate | Passionate Coder",
    about: "I'm a recent BCA graduate with skills in full-stack web development. I have experience in HTML, CSS, JavaScript, Django, Java, Python, C, C++, and PL/SQL. I love building projects and learning new technologies to grow as a developer. My passion lies in creating innovative solutions and bringing ideas to life through code."
  },
  skills: [
    { name: "HTML, CSS, JavaScript", level: 85 },
    { name: "Python, Django", level: 75 },
    { name: "Java, PL/SQL", level: 80 },
    { name: "C, C++", level: 75 },
    { name: "MS Office, Git", level: 85 }
  ],
  projects: [
    {
      title: "CarInfoSystem",
      description: "A comprehensive system for managing car information including listings, search functionality, and admin dashboard with user authentication.",
      techStack: ["Django", "HTML", "CSS", "SQLite", "JavaScript"],
      features: ["Car Listings", "Admin Dashboard", "User Management"]
    }
  ],
  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    year: "Graduated 2025",
    description: "Completed comprehensive coursework in computer science fundamentals, programming languages, database management, web development, and software engineering principles."
  },
  contact: {
    email: "raviki364144@gmail.com",
    linkedin: "www.linkedin.com/in/ravikishan-sah-688a64245",
    github: "www.github.com/sahravikishan"
  }
};

// Theme management
class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'light';
    this.init();
  }

  init() {
    this.applyTheme();
    this.setupToggle();
  }

  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.theme);
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
      themeIcon.textContent = this.theme === 'light' ? '🌙' : '☀️';
    }
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', this.theme);
    this.applyTheme();
  }

  setupToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => this.toggleTheme());
    }
  }
}

// Animations and interactions
class AnimationManager {
  constructor() {
    this.init();
  }

  init() {
    this.setupScrollAnimations();
    this.setupSkillBars();
    this.setupSmoothScrolling();
  }

  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(30px)';
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(section);
    });
  }

  setupSkillBars() {
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBar = entry.target.querySelector('.skill-progress');
          const width = progressBar.getAttribute('data-width');
          setTimeout(() => {
            progressBar.style.width = width + '%';
          }, 200);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.skill-card').forEach(card => {
      skillObserver.observe(card);
    });
  }

  setupSmoothScrolling() {
    // Add smooth scrolling for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}

// Download functionality
class DownloadManager {
  constructor() {
    this.init();
  }

  init() {
    this.setupDownloadButtons();
  }

  setupDownloadButtons() {
    document.getElementById('download-html')?.addEventListener('click', () => this.downloadHTML());
    document.getElementById('download-markdown')?.addEventListener('click', () => this.downloadMarkdown());
    document.getElementById('download-json')?.addEventListener('click', () => this.downloadJSON());
  }

  downloadHTML() {
    const htmlContent = this.generateHTMLContent();
    this.downloadFile(htmlContent, 'Ravikishan_Portfolio.html', 'text/html');
  }

  downloadMarkdown() {
    const markdownContent = this.generateMarkdownContent();
    this.downloadFile(markdownContent, 'Ravikishan_Portfolio.md', 'text/markdown');
  }

  downloadJSON() {
    const jsonContent = JSON.stringify(portfolioData, null, 2);
    this.downloadFile(jsonContent, 'Ravikishan_Portfolio.json', 'application/json');
  }

  generateHTMLContent() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${portfolioData.personalInfo.name} - Portfolio</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 20px; background: #f4f4f4; }
        .container { max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        h1 { color: #333; text-align: center; border-bottom: 3px solid #007bff; padding-bottom: 10px; }
        h2 { color: #007bff; margin-top: 30px; }
        .skill { background: #e9ecef; padding: 10px; margin: 5px 0; border-radius: 5px; }
        .project { background: #f8f9fa; padding: 15px; margin: 10px 0; border-radius: 5px; border-left: 4px solid #007bff; }
        .contact { background: #e7f3ff; padding: 15px; border-radius: 5px; }
        ul { padding-left: 20px; }
        .tech-stack { color: #6c757d; font-style: italic; }
    </style>
</head>
<body>
    <div class="container">
        <h1>${portfolioData.personalInfo.name}</h1>
        <p style="text-align: center; font-size: 18px; color: #666;">${portfolioData.personalInfo.title}</p>
        
        <h2>About Me</h2>
        <p>${portfolioData.personalInfo.about}</p>
        
        <h2>Skills</h2>
        ${portfolioData.skills.map(skill => `<div class="skill"><strong>${skill.name}</strong> - ${skill.level}%</div>`).join('')}
        
        <h2>Projects</h2>
        ${portfolioData.projects.map(project => `
            <div class="project">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p class="tech-stack"><strong>Tech Stack:</strong> ${project.techStack.join(', ')}</p>
                <p><strong>Features:</strong></p>
                <ul>${project.features.map(feature => `<li>${feature}</li>`).join('')}</ul>
            </div>
        `).join('')}
        
        <h2>Education</h2>
        <p><strong>${portfolioData.education.degree}</strong> - ${portfolioData.education.year}</p>
        <p>${portfolioData.education.description}</p>
        
        <h2>Contact Information</h2>
        <div class="contact">
            <p><strong>Email:</strong> <a href="mailto:${portfolioData.contact.email}">${portfolioData.contact.email}</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://${portfolioData.contact.linkedin}" target="_blank">${portfolioData.contact.linkedin}</a></p>
            <p><strong>GitHub:</strong> <a href="https://${portfolioData.contact.github}" target="_blank">${portfolioData.contact.github}</a></p>
        </div>
        
        <hr style="margin-top: 30px;">
        <p style="text-align: center; color: #666; font-size: 14px;">
            Generated on ${new Date().toLocaleDateString()} | Built with HTML, CSS & JavaScript
        </p>
    </div>
</body>
</html>`;
  }

  generateMarkdownContent() {
    return `# ${portfolioData.personalInfo.name} - Portfolio

## Personal Information
**Name:** ${portfolioData.personalInfo.name}
**Title:** ${portfolioData.personalInfo.title}

## About Me
${portfolioData.personalInfo.about}

## Skills
${portfolioData.skills.map(skill => `- ${skill.name}: ${skill.level}%`).join('\n')}

## Projects
${portfolioData.projects.map(project => `
### ${project.title}
**Description:** ${project.description}
**Tech Stack:** ${project.techStack.join(', ')}
**Features:**
${project.features.map(feature => `- ${feature}`).join('\n')}
`).join('\n')}

## Education
**Degree:** ${portfolioData.education.degree}
**Year:** ${portfolioData.education.year}
**Description:** ${portfolioData.education.description}

## Contact Information
- **Email:** ${portfolioData.contact.email}
- **LinkedIn:** ${portfolioData.contact.linkedin}
- **GitHub:** ${portfolioData.contact.github}

---
Generated on: ${new Date().toLocaleDateString()}
Portfolio Website: Built with HTML, CSS & JavaScript`;
  }

  downloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}

// Utility functions
class Utils {
  static debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  static throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }
}

// Performance optimizations
class PerformanceManager {
  constructor() {
    this.init();
  }

  init() {
    this.setupLazyLoading();
    this.setupScrollOptimization();
  }

  setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  setupScrollOptimization() {
    let ticking = false;

    const updateScrollPosition = () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('.header-bg-elements');
      
      if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
      
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all managers
  new ThemeManager();
  new AnimationManager();
  new DownloadManager();
  new PerformanceManager();

  // Add loading animation
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.3s ease';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);

  // Console message for developers
  console.log(`
    🚀 Portfolio loaded successfully!
    
    Built with:
    - HTML5
    - CSS3 (Custom Properties, Grid, Flexbox)
    - Vanilla JavaScript (ES6+)
    - Modern Web APIs (Intersection Observer, Local Storage)
    
    Features:
    ✅ Responsive Design
    ✅ Dark/Light Theme
    ✅ Smooth Animations
    ✅ Performance Optimized
    ✅ Accessibility Friendly
    ✅ Download Functionality
    
    Developer: ${portfolioData.personalInfo.name}
  `);
});

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Pause animations when page is not visible
    document.body.style.animationPlayState = 'paused';
  } else {
    // Resume animations when page becomes visible
    document.body.style.animationPlayState = 'running';
  }
});

// Error handling
window.addEventListener('error', (e) => {
  console.error('Portfolio Error:', e.error);
});

// Service Worker registration (optional - for PWA features)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Uncomment if you want to add PWA features
    // navigator.serviceWorker.register('/sw.js')
    //   .then(registration => console.log('SW registered'))
    //   .catch(registrationError => console.log('SW registration failed'));
  });
}
