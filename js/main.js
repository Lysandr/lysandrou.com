/* ============================================================
   Pádraig Lysandrou — main.js
   Vanilla JS: nav, typewriter, scroll reveal, modal
   ============================================================ */

/* Project data
------------------------------------------------------------ */
const PROJECTS = {
  kyrtos: {
    title: 'kyrtos',
    year: '2026',
    tags: ['React', 'Supabase', 'Vercel', 'Canvas API', 'SaaS'],
    body: `
      <img src="images/portfolio/kyrtos/cover.svg" alt="kyrtos app">
      <h3>kyrtos — Dark Futuristic Todo &amp; Notes App</h3>
      <p>A personal productivity app with a glassmorphic, cyberpunk aesthetic — Space Mono throughout, neon accents on a near-black canvas, animated particle backgrounds. Live at <a href="https://kyrtos.io" target="_blank" rel="noopener">kyrtos.io ↗</a>.</p>
      <p><strong style="color: var(--text-bright)">Features:</strong> multiple todo lists with drag-and-drop reordering, inline editing, archive (item completion triggers a particle explosion), a notes page with multi-column card layout, and a Procs dashboard of resizable monitoring widgets (world clock, weather, stocks, Claude terminal). Multi-user via Supabase Auth — each user's data fully isolated. Auto-backup to localStorage every 5 minutes.</p>
      <p><strong style="color: var(--text-bright)">Stack:</strong> Vite 5 + React 18, @dnd-kit for all drag-and-drop, Supabase (Postgres + Auth), Canvas API for the particle system, Vercel for hosting.</p>
      <p>Roadmap: Stripe subscription tiers, Claude AI features behind Pro paywall via a Vercel serverless route (smart capture, task breakdown, weekly digest).</p>
    `
  },

  lander: {
    title: 'MiniLander — Rocket Powered VTVL Testbed',
    year: '2019 – Ongoing',
    tags: ['GNC', 'Propulsion', 'Hardware'],
    body: `
      <img src="images/portfolio/lander/cover.JPG" alt="GNC Testbed">
      <h3>MiniLander — Rocket Powered VTVL Testbed</h3>
      <p>An ongoing personal project to build a hardware-in-the-loop testbed for real-time powered descent guidance and control algorithm development. Intended to bridge the gap between simulation-only work and flight-ready software.</p>
      <p>Updates forthcoming.</p>
    `
  },

  nexus: {
    title: 'Nexus — Lander Ground Software',
    year: '2025 – Ongoing',
    tags: ['Python', 'React', 'Ground Software', 'Telemetry'],
    body: `
      <img src="images/portfolio/nexus/cover.svg" alt="Nexus telemetry dashboard">
      <h3>Nexus — Real-Time Lander Telemetry Dashboard</h3>
      <p>Ground software for the MiniLander testbed. A Python Flask backend ingests binary UDP telemetry packets from the flight software at 10 Hz, parses a custom blackboard format, and streams live data to a React frontend over WebSocket.</p>
      <p><strong style="color: var(--text-bright)">Features:</strong> real-time telemetry table with search, time-series charts for key signals (altitude, velocity, throttle command), 3D scatter plots for vector quantities (attitude, acceleration), ring-buffer snapshot replay so the frontend can catch up on connect, REST API for programmatic access, and JSON telemetry logging to disk.</p>
      <p><strong style="color: var(--text-bright)">Stack:</strong> Python 3 · Flask · Flask-SocketIO · React 18 · Recharts.</p>
    `
  },
  minHash: {
    title: 'LSH for Music Identification',
    year: '2019',
    tags: ['Algorithms', 'Software', 'ML', 'APPM5720'],
    body: `
      <img src="images/portfolio/minHash/block.JPG" alt="MinHash block diagram">
      <h3>Locality Sensitive Random Hashing for Music Identification</h3>
      <p>In early 2019, Sam Wishnek (Aerospace PhD, CU Boulder) and I implemented a Shazam-like system using locality sensitive random hashing for APPM5720: Randomized Algorithms, taught by Dr. Stephen Becker.</p>
      <p><a href="projects/minHash.pdf" target="_blank" rel="noopener">Paper/synopsis →</a></p>
      <p>Live-demonstrated in class. Successfully identified Darude — Sandstorm under significant additive noise conditions.</p>
      <img src="images/portfolio/minHash/alg.JPG" alt="Algorithm diagram">
    `
  },
  succ: {
    title: 'Successive Convexification Landing',
    year: '2018',
    tags: ['GNC', 'Optimization', 'Software'],
    body: `
      <img src="images/portfolio/succ/traj.png" alt="Trajectory">
      <h3>6DoF Successive Convex Optimal Powered Descent Guidance</h3>
      <p>Implementation of "Successive Convexification for 6-DoF Mars Rocket Powered Landing with Free-Final-Time" by Szmuk and Acikmese (2018). Done primarily as a final project for coursework at Boulder, and to develop familiarity with the SCvX framework for research applications.</p>
      <p><a href="projects/scvx.pdf" target="_blank" rel="noopener">Paper/synopsis →</a></p>
      <p>Cold gas control exploration appended. Similar work was presented at IPPW 2019 at Oxford University with modifications including MRP dynamics.</p>
      <img src="images/portfolio/succ/with_aero.png" alt="With aerodynamics">
    `
  },
  cmg: {
    title: 'RWA & CMG Sim Framework',
    year: '2018',
    tags: ['ADCS', 'Simulation', 'Software', 'ASEN6010'],
    body: `
      <img src="images/portfolio/cmg/eom.JPG" alt="Equations of motion derivation">
      <h3>Reaction Wheel and Control Moment Gyroscope Attitude Control Simulation Framework</h3>
      <p>ASEN6010 under Dr. Hanspeter Schaub. The assignment: derive the full equations of motion for N variable-speed control moment gyroscopes (8 pages of math). This is the most general momentum exchange device derivation — reaction wheels fall out as a simplification. Then build a complete attitude dynamics and control simulation for arbitrary numbers of devices in any orientation or momentum configuration.</p>
      <p><a href="projects/cmg.pdf" target="_blank" rel="noopener">Assignment report →</a></p>
      <img src="images/portfolio/cmg/output.JPG" alt="Simulation output">
    `
  },
  LR101: {
    title: 'LR101 Liquid Rocket Engine',
    year: '2018',
    tags: ['Propulsion', 'Hardware'],
    body: `
      <img src="images/portfolio/LR101/LR1.JPG" alt="LR101 engine">
      <h3>Restoring an LR101 Vernier Engine</h3>
      <p>Built a restoration rig — submersible pump, bucket, and 3D-printed injector plate — to circulate vinegar and water through the regenerative cooling channels for extended periods, then baked out the residual moisture. Pressure sphere and Marotta valves acquired. May be repurposed for a rocket-powered lander project, or replaced with a custom LOX/IPA engine of my own design.</p>
      <img src="images/portfolio/LR101/LR2.JPG" alt="LR101 detail">
      <img src="images/portfolio/LR101/parts.jpg" alt="Parts layout">
    `
  },
  LQG: {
    title: 'LQG Control on Quadcopter',
    year: '2018',
    tags: ['Control', 'GNC', 'Software'],
    body: `
      <img src="images/portfolio/LQG/LQGhelix_1.png" alt="LQG helix trajectory">
      <h3>Linear Quadratic Gaussian Control on Quadcopter</h3>
      <p>LQR with fixed gain matrix paired with an Extended Kalman Filter, written as a final project for MAE6780 Multivariate Control at Cornell.</p>
      <p><a href="projects/lqg.pdf" target="_blank" rel="noopener">Paper →</a></p>
    `
  },
  cvx: {
    title: 'Convex Optimal Rocket Landing',
    year: '2017',
    tags: ['GNC', 'Optimization', 'Software'],
    body: `
      <img src="images/portfolio/cvx1/3Dtraj.PNG" alt="3D trajectory">
      <h3>Convex Optimal Rocket Landing Guidance</h3>
      <p>Implementation of the powered descent guidance algorithm from papers by Blackmore, Acikmese, Ploen, and Carson. An outer terminal-time optimization loop wraps a fixed-final-time inner convex program. Written as a final project for ECE5555 Stochastic Control and Estimation.</p>
      <p><a href="projects/cvx.pdf" target="_blank" rel="noopener">Paper →</a></p>
    `
  },
  stewie: {
    title: '3DOF Stewart Platform',
    year: '2017',
    tags: ['Hardware', 'Embedded', 'Control'],
    body: `
      <img src="images/portfolio/stewie/rendersexysmall.jpg" alt="Stewart Platform render">
      <h3>3DOF Stewart Platform</h3>
      <p>Built with Eric Berg and Adam Weld for Dr. Bruce Land's ECE4760 microcontroller course at Cornell. Responsible for hardware design and the majority of the control software.</p>
      <p><a href="https://people.ece.cornell.edu/land/courses/ece4760/FinalProjects/f2017/psl58_aw698_eb645/psl58_aw698_eb645/index.html" target="_blank" rel="noopener">Project website →</a></p>
      <img src="images/portfolio/stewie/isometric.PNG" alt="Isometric CAD view">
      <div class="modal-video">
        <iframe src="https://www.youtube.com/embed/05-RaxBwdmg" title="Stewart Platform demo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    `
  },
  kbd: {
    title: 'TeXboard MkI & MkII',
    year: '2018–2019',
    tags: ['Hardware', 'Embedded', 'PCB'],
    body: `
      <img src="images/portfolio/kbd/dims_texbrd.PNG" alt="TeXboard dimensions">
      <h3>TeXbrd MkI and MkII</h3>
      <p>Custom 60% keyboard layouts with LaTeX symbol bindings via a Teensy microcontroller (MkI), then a full scratch build (MkII) — custom case designed and 3D-printed in three interlocking parts. Also builds converters for vintage keyboards like the IBM 4074 "Pingmaster."</p>
      <p><a href="https://github.com/Lysandr/TeXboard" target="_blank" rel="noopener">GitHub →</a>&nbsp;&nbsp;<em>MkII boards available — contact for inquiries.</em></p>
      <img src="images/portfolio/kbd/pic2.jpg" alt="Finished MkII">
      <img src="images/portfolio/kbd/pic3.jpg" alt="Customer board">
      <img src="images/portfolio/kbd/pic1.jpg" alt="MkI hardware with MkII PCB">
    `
  },
  ebrd: {
    title: 'Electric Longboard',
    year: '2018',
    tags: ['Hardware', 'Embedded'],
    body: `
      <img src="images/portfolio/ebrd/brd.JPG" alt="Electric longboard">
      <h3>Electric Longboard</h3>
      <p>4 kW board running on 18650 cells recycled from the hoverboard era. Wireless remote designed and built from scratch, using a flexistor as the primary control input. A communication reliability redesign is on the list.</p>
      <img src="images/portfolio/ebrd/ctrl.jpg" alt="Wireless controller">
    `
  },
  quad: {
    title: 'Quadrotor',
    year: '2017',
    tags: ['Hardware', 'GNC', 'Embedded'],
    body: `
      <img src="images/portfolio/quad/tethered.jpg" alt="Tethered quadrotor">
      <h3>Quadrotor</h3>
      <p>Built with Eric Berg for ECE3140 (Embedded Systems) as a final project. Brute-force PID controller, manually tuned without formal dynamics modeling. Flew tethered during development and eventually free-flight.</p>
    `
  },
  hackMIT18: {
    title: 'hackMIT 2018 — BraceX',
    year: '2018',
    tags: ['Hackathon', 'Hardware', 'Robotics'],
    body: `
      <img src="images/portfolio/hackMIT/gallery.jpg" alt="BraceX exo-arm">
      <h3>hackMIT BraceX — 2018</h3>
      <p>Robotic-assisted exo-arm built in 24 hours with Eric Berg, Adam Weld, and Katie Bradford. Designed to assist with limited upper-extremity mobility.</p>
      <p><a href="https://devpost.com/software/bracex" target="_blank" rel="noopener">Devpost →</a></p>
    `
  },
  hackMIT: {
    title: 'hackMIT 2017 — Amazon Prize',
    year: '2017',
    tags: ['Hackathon', 'Computer Vision', 'Software'],
    body: `
      <img src="images/portfolio/hackMIT/hackMITama.jpg" alt="hackMIT 2017">
      <h3>hackMIT 2017 — Amazon Prize Winner</h3>
      <p>Computer vision text-to-speech system for the vision impaired: describes surroundings, estimates distances to specific objects, and narrates ambient context. Built with Eric Berg and Adam Weld. Won the Amazon prize.</p>
      <p><a href="https://devpost.com/software/third-eye-11th-finger" target="_blank" rel="noopener">Devpost →</a></p>
      <img src="images/portfolio/hackMIT/11theye.jpg" alt="Third Eye device">
    `
  },
  caltech: {
    title: 'Caltech Space Challenge 2017',
    year: '2017',
    tags: ['Spacecraft', 'Mission Design'],
    body: `
      <img src="images/portfolio/csc/point.JPG" alt="Caltech Space Challenge presentation">
      <h3>Caltech Space Challenge 2017 — Team Winner</h3>
      <p>Week-long mission formulation at Caltech/JPL for a lunar base architecture to harvest hydrogen and oxygen from regolith and refuel spacecraft in Earth orbit — extending missions beyond the Earth-Moon system. Team Explorer won; all members received Microsoft Surface Pros.</p>
      <p>
        <a href="http://csc.caltech.edu/CSC2017/pdfs/team_explorer_final_report.pdf" target="_blank" rel="noopener">Final report →</a>&nbsp;&nbsp;
        <a href="https://arc.aiaa.org/doi/pdf/10.2514/6.2017-5375" target="_blank" rel="noopener">AIAA paper →</a>
      </p>
      <img src="images/portfolio/csc/us.JPG" alt="Team photo">
      <img src="images/portfolio/csc/reisman.JPG" alt="With Garrett Reisman">
      <p><em>With astronaut and SpaceX VP Garrett Reisman.</em></p>
    `
  },
  cugrav: {
    title: 'CUGrav 3U Cubesat',
    year: '2016–2018',
    tags: ['Spacecraft', 'Avionics', 'ADCS'],
    body: `
      <img src="images/portfolio/cug/header.png" alt="CUGrav header">
      <h3>Cornell Artificial Gravity Cubesat</h3>
      <p>The goal: first platform to demonstrate stable artificial-gravity control via a non-rigid tether. Led the avionics subsystem for one year — full in-house design of power system, flight computer, ADCS, telemetry, and solar power PCBs. Authored requirements and outlined all flight software components.</p>
      <p>The challenge: three independent avionics subsystems that had to interoperate and satisfy shared power budgets.</p>
      <img src="images/portfolio/cug/explode.JPG" alt="Exploded assembly view">
      <p><em>Exploded view: tether motors, avionics stack, solar cells, and Kane damper loops for energy dissipation.</em></p>
    `
  },
  akash: {
    title: 'Akash Systems 6U Satellite',
    year: '2017',
    tags: ['Spacecraft', 'Avionics', 'Comms'],
    body: `
      <img src="images/portfolio/akash/sat.PNG" alt="Akash satellite">
      <h3>Akash Systems 6U Satellite Study</h3>
      <p>COTS-level design study with 5 other students for a 6U demonstration spacecraft supporting Akash Systems' GaN-on-diamond communications transponders in the 100 Gb/s–1 Tb/s range.</p>
      <p><a href="projects/akash.pdf" target="_blank" rel="noopener">Report →</a></p>
      <img src="images/portfolio/akash/stack.JPG" alt="Avionics stack CAD">
      <p><em>~2U avionics stack. Remaining volume accommodates a high-gain parabolic antenna.</em></p>
    `
  },
  violet: {
    title: 'Violet Nanosatellite',
    year: '2014–2018',
    tags: ['Spacecraft', 'Avionics', 'ADCS', 'UNP'],
    body: `
      <img src="images/portfolio/violet/cover.jpg" alt="Violet nanosatellite">
      <h3>Violet — 55 kg Nanosatellite, University Nanosat Program</h3>
      <p>Worked 2.5 years on the UNP finalist spacecraft Violet under Dr. Mason Peck. Started on telemetry and command verification, built ground stations, and ultimately became Avionics Lead. In that role: brought every PCB on the spacecraft to full functionality, modifying hardware and firmware across the board for descoping decisions.</p>
      <p>Presented at AFRL for three Pre-Integration Reviews and one Pre-Ship Review. The vehicle ultimately transitioned to Ursa Space Systems as a bus, and now resides at Cornell's Sibley School.</p>
      <img src="images/portfolio/violet/me.JPG" alt="Operating flight computer">
      <img src="images/portfolio/violet/patch.jpg" alt="Mission patch">
    `
  },
  '5010': {
    title: 'Mode Switching ADCS Sim',
    year: '2019',
    tags: ['ADCS', 'Control', 'Simulation', 'ASEN5010'],
    body: `
      <img src="images/portfolio/5010/overview.JPG" alt="Simulation overview">
      <h3>Mode Switching Attitude Control Simulation</h3>
      <p>Final project for Dr. Schaub's ASEN5010 attitude control course. Lyapunov-derived nonlinear PD feedback control law with multiple attitude modes and mode-switch logic. Actuator physics are not modeled here — see the RWA/CMG simulation framework for that.</p>
      <p><a href="projects/5010.pdf" target="_blank" rel="noopener">Report →</a></p>
      <img src="images/portfolio/5010/plots.JPG" alt="Simulation plots">
    `
  },
  selectother: {
    title: 'Pre-2015 Projects',
    year: 'Pre-2015',
    tags: ['Hardware', 'Electronics', 'High School'],
    body: `
      <img src="images/portfolio/other/cover.jpg" alt="Pre-2015 projects">
      <h3>Select Older Projects</h3>
      <p>Pre-Cornell hardware builds: linear accelerators (linacs), Tesla coils, robot arms, early high-power rocketry, and miscellaneous electronics. Mostly what happens when you give a teenager a workshop and a library card.</p>
      <p>More on <a href="https://www.notforflight.com" target="_blank" rel="noopener">the blog →</a></p>
    `
  }
};

/* Nav — scroll opacity + active section highlighting
------------------------------------------------------------ */
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

const sections = document.querySelectorAll('main section[id]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

/* Mobile nav toggle
------------------------------------------------------------ */
const navToggle = document.getElementById('nav-toggle');
const navLinksList = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  const open = navLinksList.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
});

navLinksList.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinksList.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* Smooth scroll with nav offset
------------------------------------------------------------ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 60;
    window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
  });
});

/* Scroll-reveal
------------------------------------------------------------ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('[data-animate]').forEach(el => revealObserver.observe(el));

/* Project card stagger reveal (primary card only on load)
------------------------------------------------------------ */
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'none';
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.05 });

document.querySelectorAll('.project-primary .project-card').forEach((card, i) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(16px)';
  card.style.transition = `opacity 0.45s ease ${i * 30}ms, transform 0.45s ease ${i * 30}ms`;
  cardObserver.observe(card);
});

/* Old projects accordion
------------------------------------------------------------ */
const oldBtn  = document.getElementById('old-projects-btn');
const oldWrap = document.getElementById('old-projects-content');

if (oldBtn && oldWrap) {
  let animatedOnce = false;

  oldBtn.addEventListener('click', () => {
    const isOpen = oldWrap.classList.toggle('open');
    oldBtn.setAttribute('aria-expanded', String(isOpen));
    oldWrap.setAttribute('aria-hidden', String(!isOpen));

    if (isOpen && !animatedOnce) {
      animatedOnce = true;
      oldWrap.querySelectorAll('.project-card').forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(14px)';
        card.style.transition = `opacity 0.38s ease ${i * 22}ms, transform 0.38s ease ${i * 22}ms`;
        requestAnimationFrame(() => requestAnimationFrame(() => {
          card.style.opacity = '1';
          card.style.transform = 'none';
        }));
      });
    }
  });
}

/* Typewriter
------------------------------------------------------------ */
const lines = [
  'writing guidance & control algorithms',
  'for vehicles that leave the ground.',
];

function runTypewriter(el, lines) {
  let lineIndex = 0;
  let charIndex = 0;
  let deleting = false;
  let pauseTicks = 0;

  function tick() {
    const line = lines[lineIndex];

    if (!deleting) {
      el.textContent = line.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === line.length) {
        if (lineIndex === lines.length - 1) return; // done — last line stays
        deleting = true;
        pauseTicks = 18;
        setTimeout(tick, 50);
        return;
      }
      setTimeout(tick, 42);
    } else {
      if (pauseTicks > 0) { pauseTicks--; setTimeout(tick, 50); return; }
      el.textContent = line.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        lineIndex = (lineIndex + 1) % lines.length;
        setTimeout(tick, 200);
        return;
      }
      setTimeout(tick, 22);
    }
  }

  setTimeout(tick, 700);
}

const tw = document.getElementById('typewriter');
if (tw) runTypewriter(tw, lines);

/* Modal
------------------------------------------------------------ */
const modal       = document.getElementById('modal');
const modalTitle  = document.getElementById('modal-title');
const modalYear   = document.getElementById('modal-year');
const modalTags   = document.getElementById('modal-tags');
const modalBody   = document.getElementById('modal-body');
const modalClose  = document.getElementById('modal-close');
const modalBg     = document.getElementById('modal-backdrop');

function openModal(id) {
  const p = PROJECTS[id];
  if (!p) return;

  modalYear.textContent  = p.year;
  modalTitle.textContent = p.title;
  modalTags.innerHTML    = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
  modalBody.innerHTML    = p.body;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.project));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(card.dataset.project); }
  });
});

modalClose.addEventListener('click', closeModal);
modalBg.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
});

/* Email eigenvalue challenge
------------------------------------------------------------ */
(function () {
  const ANSWER = 5;
  const _e = ['padraig.lysandrou', '\x40', 'gmail.com'];

  const challenge = document.getElementById('email-challenge');
  const link      = document.getElementById('email-link');
  const input     = document.getElementById('eigen-input');
  const btn       = document.getElementById('eigen-btn');
  const hint      = document.getElementById('eigen-hint');

  function reveal() {
    const email = _e.join('');
    link.href = 'mailto:' + email;
    document.getElementById('email-display').textContent = email;
    link.style.display = 'inline-flex';
    challenge.style.display = 'none';
  }

  function check() {
    const raw = input.value.trim();
    if (!raw) return;
    const val = parseInt(raw, 10);
    if (val === ANSWER) {
      reveal();
    } else if (val === 2) {
      hint.textContent = 'that one has multiplicity 2';
      input.value = '';
      input.focus();
    } else {
      hint.textContent = val < ANSWER ? 'too small' : 'too large';
      input.value = '';
      input.focus();
    }
  }

  btn.addEventListener('click', check);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') check(); });
}());
