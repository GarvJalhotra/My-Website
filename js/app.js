/**
 * GARV JALHOTRA - "LUCID DREAMS" SCROLLING & INTERACTION ENGINE
 * Direct GSAP ScrollTrigger scrubbed master journey mirroring nesilnoble.com
 */

document.addEventListener("DOMContentLoaded", () => {
  const config = window.PORTFOLIO_CONFIG;
  if (!config) return;

  const stage = document.getElementById("stage");
  const rulerHead = document.getElementById("rulerHead");
  const tunnel = document.getElementById("tunnel");
  const space = document.getElementById("space");

  // ==========================================================================
  // 1. LENIS INERTIAL SMOOTH SCROLL ENGINE
  // ==========================================================================
  let lenis = null;
  if (typeof Lenis !== "undefined") {
    lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 0.95,
      smoothWheel: true,
      smoothTouch: false
    });

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }

  // ==========================================================================
  // 2. RENDER SELECTED WORK (HORIZONTAL SCROLL TRACK)
  // ==========================================================================
  const track = document.getElementById("track");
  if (track && config.projects) {
    const cardsMarkup = config.projects.map(p => `
      <div class="proj" data-id="${p.id}">
        <div class="label">
          <span>${p.title}</span>
          <em>${p.year}</em>
        </div>
        <div class="cover">
          <img src="${p.coverImage}" alt="${p.title}" loading="lazy">
        </div>
        <h3>${p.title}</h3>
        <p>${p.tagline}</p>
      </div>
    `).join("");

    track.insertAdjacentHTML("beforeend", cardsMarkup);

    // Attach click events to open case study viewer
    document.querySelectorAll(".proj").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-id");
        openCaseStudy(id);
      });
    });
  }

  // ==========================================================================
  // 3. MASTER GSAP SCROLLTRIGGER JOURNEY TIMELINE
  // ==========================================================================
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: "#space",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (rulerHead) {
            rulerHead.style.left = `${self.progress * 100}%`;
          }
        }
      }
    });

    // ------------------------------------------------------------------------
    // SCENE 1 (0 to 3.0): HERO & DIVE INTO THE FRAME
    // ------------------------------------------------------------------------
    tl.to("#heroScrollHint", { autoAlpha: 0, duration: 0.4 }, 0)
      .to(".phrase, .dream, .eyes-widget", { y: 60, autoAlpha: 0, duration: 0.8 }, 0)
      .to(".kicker", { y: -40, autoAlpha: 0, duration: 0.6 }, 0)
      .to("#nameWrap", {
        scale: 18,
        autoAlpha: 0,
        transformOrigin: "center center",
        duration: 1.8,
        ease: "power2.in"
      }, 0.2)
      .fromTo(tunnel,
        { scale: 0.35, autoAlpha: 0 },
        { scale: 3.5, autoAlpha: 1, duration: 1.4, ease: "power1.in" }, 0.6)
      .to(tunnel, { scale: 8, autoAlpha: 0, duration: 0.8, ease: "power2.in" }, 1.8)
      .to(stage, { "--bg": "#7B3F6E", duration: 1.2 }, 0.8)
      .set("#hero", { autoAlpha: 0 }, 2.9);

    // ------------------------------------------------------------------------
    // SCENE 2 (3.0 to 6.2): SYSTEMS & ARCHITECTURE
    // ------------------------------------------------------------------------
    tl.set("#systems", { autoAlpha: 1 }, 2.9)
      .fromTo("#sysWord",
        { scale: 0.2, autoAlpha: 0, rotate: -6 },
        { scale: 1, autoAlpha: 1, rotate: 0, duration: 1.2, ease: "power3.out" }, 3.0)
      .fromTo("#sysSmall",
        { y: 30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6 }, 3.2)
      .fromTo("#sysCard",
        { scale: 0.6, autoAlpha: 0, rotate: 6 },
        { scale: 1, autoAlpha: 1, rotate: 0, duration: 0.9, ease: "back.out(1.4)" }, 3.6)
      .fromTo("#sysCap",
        { y: 20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6 }, 4.0)
      .to(stage, { "--bg": "#3E5591", duration: 1.2 }, 3.4)
      .to(["#sysWord", "#sysSmall", "#sysCard", "#sysCap"],
        { scale: 1.3, autoAlpha: 0, duration: 0.8, ease: "power2.in" }, 5.4)
      .set("#systems", { autoAlpha: 0 }, 6.2);

    // ------------------------------------------------------------------------
    // SCENE 3 (6.2 to 9.5): BASED / EXPEDITION & TRAVEL VEHICLE
    // ------------------------------------------------------------------------
    tl.set("#based", { autoAlpha: 1 }, 6.15)
      .fromTo("#basedTitle span",
        { xPercent: 50, autoAlpha: 0 },
        { xPercent: 0, autoAlpha: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }, 6.2)
      .fromTo("#basedSub",
        { y: 20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6 }, 6.7)
      .fromTo("#autoVehicle",
        { x: () => -window.innerWidth * 0.4 },
        { x: () => window.innerWidth * 1.15, duration: 2.6, ease: "none" }, 6.5)
      .to(stage, { "--bg": "#2B6468", duration: 1.2 }, 6.5)
      .to(["#basedTitle", "#basedSub", ".road"],
        { y: -40, autoAlpha: 0, duration: 0.7, ease: "power2.in" }, 8.8)
      .set("#based", { autoAlpha: 0 }, 9.5);

    // ------------------------------------------------------------------------
    // SCENE 4 (9.5 to 15.5): SELECTED WORK (HORIZONTAL SCROLL TRACK)
    // ------------------------------------------------------------------------
    tl.set("#work", { autoAlpha: 1 }, 9.45)
      .fromTo(".work-head",
        { y: 50, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.7, ease: "power3.out" }, 9.5)
      .fromTo(".proj",
        { y: 70, rotate: 2, autoAlpha: 0 },
        { y: 0, rotate: 0, autoAlpha: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }, 9.7)
      .to(stage, { "--bg": "#8A3D4E", duration: 1.2 }, 9.7)
      // Horizontal scrub across all project cards
      .to("#track", {
        x: () => -(document.querySelector("#track").scrollWidth - document.querySelector(".stage").clientWidth + 80),
        duration: 4.6,
        ease: "none"
      }, 10.3)
      .to("#work", { yPercent: -15, autoAlpha: 0, duration: 0.7, ease: "power2.in" }, 14.8)
      .set("#work", { autoAlpha: 0 }, 15.5);

    // ------------------------------------------------------------------------
    // SCENE 5 (15.5 to 19.0): ABOUT & MANIFESTO
    // ------------------------------------------------------------------------
    tl.set("#about", { autoAlpha: 1 }, 15.45)
      .fromTo("#aboutHeadline",
        { y: 40, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out" }, 15.5)
      .fromTo([".about-sub", ".facts", ".tools-cloud"],
        { y: 30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.12 }, 16.0)
      .to(stage, { "--bg": "#4C6230", duration: 1.2 }, 15.8)
      .to("#about", { scale: 0.94, autoAlpha: 0, duration: 0.7, ease: "power2.in" }, 18.3)
      .set("#about", { autoAlpha: 0 }, 19.0);

    // ------------------------------------------------------------------------
    // SCENE 6 (19.0 to 23.0): CLOSING DOODLES, COFFEE & CONTACT (DIVE OUT)
    // ------------------------------------------------------------------------
    tl.set("#contact", { autoAlpha: 1 }, 18.95)
      .fromTo(tunnel,
        { scale: 7, autoAlpha: 0 },
        { scale: 1.1, autoAlpha: 1, duration: 1.2, ease: "power2.out" }, 19.0)
      .to(tunnel, { scale: 0.35, autoAlpha: 0, duration: 0.7 }, 20.2)
      .to(stage, { "--bg": "#545388", duration: 1.2 }, 19.3)
      .fromTo(".closing-title",
        { scale: 0.8, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: 0.8, ease: "back.out(1.5)" }, 20.2)
      .fromTo(["#coffeeCupBtn", ".contact-links"],
        { y: 30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.14 }, 20.6);
  }

  // ==========================================================================
  // 4. NAVIGATION SECTION JUMP LINKS
  // ==========================================================================
  const navTargets = {
    work: 0.44,      // ~10.5 / 23.0 in timeline
    journey: 0.28,   // ~6.5 / 23.0 in timeline
    about: 0.70,     // ~16.0 / 23.0 in timeline
    contact: 0.92    // ~21.0 / 23.0 in timeline
  };

  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetKey = btn.getAttribute("data-target");
      const targetFraction = navTargets[targetKey];
      if (typeof targetFraction === "number" && space) {
        const totalHeight = space.offsetHeight - window.innerHeight;
        const targetScrollY = totalHeight * targetFraction;

        if (lenis) {
          lenis.scrollTo(targetScrollY, { duration: 1.5 });
        } else {
          window.scrollTo({ top: targetScrollY, behavior: "smooth" });
        }
      }
    });
  });

  // ==========================================================================
  // 5. PERCEPTION ENGINE: EYES THAT FOLLOW CURSOR & BLINKING
  // ==========================================================================
  const eyeLeft = document.getElementById("eyeLeft");
  const eyeRight = document.getElementById("eyeRight");
  const pupilLeft = document.getElementById("pupilLeft");
  const pupilRight = document.getElementById("pupilRight");
  const eyelidLeft = document.getElementById("eyelidLeft");
  const eyelidRight = document.getElementById("eyelidRight");

  function trackPupil(eyeEl, pupilEl, targetX, targetY) {
    if (!eyeEl || !pupilEl) return;
    const rect = eyeEl.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const deltaX = targetX - eyeCenterX;
    const deltaY = targetY - eyeCenterY;
    const angle = Math.atan2(deltaY, deltaX);
    const distance = Math.min(Math.hypot(deltaX, deltaY) / 16, 7);

    const pupilX = Math.cos(angle) * distance;
    const pupilY = Math.sin(angle) * distance;

    pupilEl.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
  }

  window.addEventListener("mousemove", (e) => {
    trackPupil(eyeLeft, pupilLeft, e.clientX, e.clientY);
    trackPupil(eyeRight, pupilRight, e.clientX, e.clientY);
  });

  // Natural eyelid blinking
  function scheduleBlink() {
    const delay = Math.random() * 4500 + 2500;
    setTimeout(() => {
      if (eyelidLeft && eyelidRight) {
        eyelidLeft.style.height = "100%";
        eyelidRight.style.height = "100%";
        setTimeout(() => {
          eyelidLeft.style.height = "0%";
          eyelidRight.style.height = "0%";
          scheduleBlink();
        }, 130);
      }
    }, delay);
  }
  scheduleBlink();

  // ==========================================================================
  // 6. SWEET MELODY SOUNDTRACK & EQUALIZER
  // ==========================================================================
  const soundBtn = document.getElementById("soundBtn");
  const soundLabel = document.getElementById("soundLabel");
  const soundHint = document.getElementById("soundHint");

  function setAudioUIState(isPlaying) {
    if (soundBtn) {
      soundBtn.classList.toggle("on", isPlaying);
    }
    if (soundLabel) {
      soundLabel.textContent = isPlaying ? "Melody on" : "Melody off";
    }
    if (soundHint && isPlaying) {
      soundHint.style.display = "none";
    }
  }

  function handleAudioToggle() {
    if (window.soundEngine) {
      const isPlaying = window.soundEngine.toggle();
      setAudioUIState(isPlaying);
    }
  }

  if (soundBtn) {
    soundBtn.addEventListener("click", handleAudioToggle);
  }

  // ==========================================================================
  // 7. CASE STUDY VIEWER DRAWER (.cs with clip-path)
  // ==========================================================================
  const csViewer = document.getElementById("csViewer");
  const csBackBtn = document.getElementById("csBackBtn");
  const csTitle = document.getElementById("csTitle");
  const csBody = document.getElementById("csBody");

  function openCaseStudy(projectId) {
    const p = config.projects.find(item => item.id === projectId);
    if (!p) return;

    if (csTitle) csTitle.textContent = `${p.title} · ${p.year}`;

    if (csBody) {
      csBody.innerHTML = `
        <div style="margin-bottom: 32px;">
          <span style="font-size: 15px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; background: #000; color: #fff; padding: 4px 12px; border-radius: 999px;">
            ${p.category}
          </span>
          <h1 style="font-family: var(--font-serif); font-size: clamp(36px, 5vw, 68px); line-height: 1.05; margin: 16px 0 10px; color: #000;">
            ${p.title}
          </h1>
          <p style="font-size: clamp(20px, 2.2vw, 26px); color: #444; max-width: 54ch; line-height: 1.35;">
            ${p.overview || p.tagline}
          </p>
        </div>

        <div style="width: 100%; max-height: 540px; border-radius: 18px; overflow: hidden; border: 3px solid #000; margin-bottom: 40px; box-shadow: 6px 6px 0 #000;">
          <img src="${p.coverImage}" alt="${p.title}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; margin-bottom: 40px;">
          ${(p.metrics || []).map(m => `
            <div style="padding: 20px; border-radius: 14px; border: 2.5px solid #000; background: #fff; box-shadow: 4px 4px 0 #000;">
              <div style="font-size: 32px; font-weight: 900; line-height: 1; color: #000;">${m.value}</div>
              <div style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; color: #666; margin-top: 6px;">${m.label}</div>
            </div>
          `).join("")}
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px; margin-bottom: 40px;">
          <div style="padding: 24px; border-radius: 16px; background: #f4f2ff; border: 2px solid #000;">
            <h3 style="font-size: 16px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em; color: #b91c1c; margin-bottom: 8px;">The Challenge</h3>
            <p style="font-size: 18px; line-height: 1.45; color: #222;">${p.problem}</p>
          </div>
          <div style="padding: 24px; border-radius: 16px; background: #f4f2ff; border: 2px solid #000;">
            <h3 style="font-size: 16px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em; color: #15803d; margin-bottom: 8px;">The Architectural Solution</h3>
            <p style="font-size: 18px; line-height: 1.45; color: #222;">${p.solution}</p>
          </div>
        </div>

        <div style="margin-top: 32px; padding-top: 24px; border-top: 2px solid #eee; display: flex; flex-wrap: wrap; gap: 14px; align-items: center;">
          <a href="${p.demoUrl || '#'}" target="_blank" style="padding: 12px 24px; background: #000; color: #fff; border-radius: 999px; font-size: 17px; font-weight: 700; text-transform: uppercase; text-decoration: none;">
            Launch Prototype ↗
          </a>
          <a href="${p.repoUrl || '#'}" target="_blank" style="padding: 12px 24px; border: 2px solid #000; color: #000; border-radius: 999px; font-size: 17px; font-weight: 700; text-transform: uppercase; text-decoration: none;">
            Source Code ↗
          </a>
        </div>
      `;
    }

    if (csViewer) {
      csViewer.classList.add("open");
      csViewer.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
  }

  function closeCaseStudy() {
    if (csViewer) {
      csViewer.classList.remove("open");
      csViewer.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  }

  if (csBackBtn) csBackBtn.addEventListener("click", closeCaseStudy);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCaseStudy();
  });

  // ==========================================================================
  // 8. COFFEE BREWER INTERACTION
  // ==========================================================================
  let coffeeCount = 1420;
  const coffeeCupBtn = document.getElementById("coffeeCupBtn");
  const coffeeText = document.getElementById("coffeeText");

  if (coffeeCupBtn && coffeeText) {
    coffeeCupBtn.addEventListener("click", () => {
      coffeeCount++;
      coffeeText.textContent = `${coffeeCount.toLocaleString()}+ cups brewed during production.`;
      coffeeText.style.color = "#fff";
      setTimeout(() => {
        coffeeText.style.color = "var(--lav)";
      }, 500);
    });
  }

  // Set current year in footer
  const yearSpan = document.getElementById("yearSpan");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
