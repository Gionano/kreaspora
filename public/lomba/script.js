document.addEventListener('DOMContentLoaded', () => {
  // --- Parallax Scroll Logic ---
  const sections = document.querySelectorAll('.lomba-section');
  const smoothingFactor = 0.04; // Smaller value = smoother/slower catch-up

  const animatedElements = Array.from(sections).map(section => {
    const wrapper = section.querySelector('.lomba-visual-wrapper');
    return {
      element: wrapper.querySelector('.lomba-image'),
      isFromLeft: wrapper.classList.contains('from-left'),
      targetX: 0,
      targetOpacity: 0,
      targetRotate: 0,
      currentX: 0,
      currentOpacity: 0,
      currentRotate: 0,
    };
  });

  function updateTargets() {
    animatedElements.forEach(item => {
      const rect = item.element.parentElement.parentElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const zoneStart = viewportHeight * 0.9;
      const zoneEnd = viewportHeight * 0.1;
      const zoneHeight = zoneStart - zoneEnd;
      const elemCenter = rect.top + rect.height / 2;
      const progressInZone = (zoneStart - elemCenter) / zoneHeight;
      const tentProgress = 1 - Math.abs(progressInZone - 0.5) * 2;
      const clampedProgress = Math.max(0, Math.min(1, tentProgress));
      const initialX = item.isFromLeft ? -50 : 50;
      item.targetX = initialX - (initialX * clampedProgress);
      const initialRotate = item.isFromLeft ? -8 : 8;
      item.targetRotate = initialRotate - (initialRotate * clampedProgress);
      item.targetOpacity = clampedProgress;
    });
  }

  function animationLoop() {
    animatedElements.forEach(item => {
      item.currentX += (item.targetX - item.currentX) * smoothingFactor;
      item.currentOpacity += (item.targetOpacity - item.currentOpacity) * smoothingFactor;
      item.currentRotate += (item.targetRotate - item.currentRotate) * smoothingFactor;
      item.element.style.opacity = item.currentOpacity;
      item.element.style.transform = `translateX(${item.currentX}%)`;
      item.element.style.setProperty('--rotation', `${item.currentRotate}deg`);
    });
    requestAnimationFrame(animationLoop);
  }

  window.addEventListener('scroll', updateTargets, { passive: true });
  updateTargets();
  animationLoop();

  // --- Mobile Menu Logic ---
  const menuButton = document.getElementById('mobile-menu-button');
  const menuPanel = document.getElementById('mobile-menu-panel');
  const menuLinks = menuPanel.querySelectorAll('a');

  if (menuButton && menuPanel) {
    menuButton.addEventListener('click', () => {
      menuPanel.classList.toggle('is-open');
    });

    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuPanel.classList.remove('is-open');
      });
    });
  }

  // --- Typing Animation Logic ---
  const typeAnimation = (element, text, callback) => {
    let i = 0;
    element.innerHTML = '';
    const typing = () => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 25);
      } else if (callback) {
        callback();
      }
    };
    typing();
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const h3 = entry.target.querySelector('h3');
        const p = entry.target.querySelector('p');
        const originalH3 = h3.dataset.original;
        const originalP = p.dataset.original;

        typeAnimation(h3, originalH3, () => {
          typeAnimation(p, originalP);
        });

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.lomba-text').forEach(element => {
    observer.observe(element);
  });
});