document.addEventListener("DOMContentLoaded", () => {
  hoverFocus();
  adaptsHeaderImageAccordingToScreenSize();
  window.addEventListener("resize", adaptsHeaderImageAccordingToScreenSize);
  initTextAnimation("#game-title", "The Game");
  initTextAnimation("#game-features", "Features");
  initTextAnimation("#game-faq", "FAQ");
  initImageFeaturesAnimation("#squirrel-features", 1);
  initImageFeaturesAnimation("#bear-features", 2);
  initLinks();
});

/**
 * Permet d'assombrir les textes et les icones des liens quand on passe la souris dessus
 */
function hoverFocus() {
  var activeLinks = document.querySelectorAll(".nav-link-text");
  var activeIcons = document.querySelectorAll("i");

  activeLinks.forEach(function (element) {
    element.addEventListener("mouseover", function () {
      this.classList.add("active-hover");
    });

    element.addEventListener("mouseout", function () {
      this.classList.remove("active-hover");
    });

    element.addEventListener("focus", function () {
      this.classList.add("active-hover");
    });

    element.addEventListener("blur", function () {
      this.classList.remove("active-hover");
    });
  });

  activeIcons.forEach(function (element) {
    element.addEventListener("mouseover", function () {
      this.classList.add("bi-hover");
    });

    element.addEventListener("mouseout", function () {
      this.classList.remove("bi-hover");
    });

    element.addEventListener("focus", function () {
      this.classList.add("bi-hover");
    });

    element.addEventListener("blur", function () {
      this.classList.remove("bi-hover");
    });
  });
}

/**
 * Permet de faire un effet de parallax sur plusieurs images
 */
function setParallaxImages() {
  classNames = [
    { className: ".layer-2", ratio: 500 },
    { className: ".layer-3", ratio: 300 },
    { className: ".layer-5", ratio: 150 },
  ];
  classNames.forEach((layer) => {
    setParallaxImage(layer.className, layer.ratio);
  });
}

/**
 * Permet de faire un effet de parallax sur une image
 * @param className
 * @param ratio
 */
function setParallaxImage(className, ratio) {
  gsap.fromTo(
    className,
    {
      y: 0,
    },
    {
      y: ratio,
      ease: "none",
      scrollTrigger: {
        trigger: className,
        start: "top top",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    }
  );
}

/**
 * Permet de fixer une image
 * @param className
 */
function setFixedImage(className) {
  gsap.timeline({
    scrollTrigger: {
      trigger: className,
      start: "top top",
      end: "bottom top",
      pin: true,
    },
  });
}

/**
 * Met les images en parallax si l'écran fait plus de 992px.
 * Met l'image en statique si l'écran fait moins de 992px
 */
function adaptsHeaderImageAccordingToScreenSize() {
  const screenWidth = window.innerWidth;
  if (screenWidth > 992) {
    setParallaxImages();
    setFixedImage(".layer-1");
  }
}

/**
 * Anime un texte dès qu'il est visible à l'écran
 * @param {string} id 
 * @param {string} newText
 */
function initTextAnimation(id, newText) {
  const title = document.querySelector(id);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && title) {
          title.style.visibility = 'visible';
          title.textContent = newText;
          const text = new SplitType(id, { types: 'chars' })
          const chars = text.chars
          gsap.fromTo(
            chars,
            { 
              y: 50,
              opacity: 0
            },
            {
              y: 0,
              opacity: 1,
              stagger: 0.05,
              duration: 2,
              ease: 'power4.out',
            });
        } else {
          title.textContent = "-";
          title.style.visibility = 'hidden';
        }
      });
    },
    { threshold: 0.5 }
  );
  if (title) {
    observer.observe(title);
  }
}

/**
 * Permet de faire un effet d'apparition de gauche à droite et de fondu sur les images du bloc features
 * @param {string} id 
 * @param {number} duration
 */
function initImageFeaturesAnimation(id, duration) {
  const title = document.querySelector(id);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && title) {
          gsap.fromTo(id, { x: -100, opacity: 0 }, { duration: duration, x: 0, opacity: 1 });
        } else {
          gsap.fromTo(id, { x: 0, opacity: 1 }, { duration: duration, x: -100, opacity: 0 });
        }
      });
    },
    { threshold: 0.5 }
  );
  if (title) {
    observer.observe(title);
  }
}

/**
 * Initialise la façon de faire lors du click sur les liens de la navbar
 */
function initLinks() {
  var scrollLinks = document.querySelectorAll('.nav-link-text[data-target]');
  scrollLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      var target = document.querySelector(link.getAttribute('data-target'));
      target.scrollIntoView({
        behavior: "instant"
      });
    });
  });
}