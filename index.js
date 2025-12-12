// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    if (mobileMenu) {
      mobileMenu.classList.add('hidden');
    }
  });
});

// Copy to Clipboard
window.copyToClipboard = function(button) {
  const codeBlock = button.parentElement?.nextElementSibling?.textContent;
  if (codeBlock) {
    navigator.clipboard.writeText(codeBlock).then(() => {
      const originalText = button.innerText;
      button.innerText = 'Copied!';
      button.classList.add('text-green-400');
      setTimeout(() => {
        button.innerText = originalText;
        button.classList.remove('text-green-400');
      }, 2000);
    });
  }
};

// Intersection Observer for Animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});

// Scroll Spy & Progress Bar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
const progressBar = document.getElementById('progress-bar');

const handleScroll = () => {
  let current = '';

  // Progress Bar
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  if (progressBar) {
    progressBar.style.width = scrolled + "%";
  }

  // Scroll Spy
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 250) { // Offset for header + padding
      current = section.getAttribute('id') || '';
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href')?.includes(current)) {
      link.classList.add('active');
    }
  });
};

window.addEventListener('scroll', handleScroll);