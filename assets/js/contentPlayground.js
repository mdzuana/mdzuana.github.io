const Playground = [
  {
    tag:"Web",
    title: "Front-End Engineer",
    comp: "PT. Layanan Cerdas Indonesia",
    date: "Oct 2025 - Apr 2026",
    desc: [
      "Developed responsive real-time dashboards for an IoT platform to monitor and manage devices and sensor data, while supporting a scalable big data architecture.",
      "Designed and developed end-to-end frontend interfaces for Trip AI, an AI-powered travel application, covering both user-facing features and a comprehensive admin dashboard while integrating core AI functionalities.",
      "Integrated RESTful and MQTT connections to bridge backend AI and IoT systems with the UI.",
      "Collaborated with backend teams to design a scalable system architecture for a Big Data IoT platform."
    ],
    tech: ["Javascript", "Typescript", "React.js", "Next", "WebSocket", "Mqtt", "Kafka"]
  },
  {
    tag:"Web",
    title: "Front-End Developer",
    comp: "PT. Telkom Indonesia",
    date: "Apr 2024 - Sep 2024",
    desc: [
      "Developed responsive real-time dashboards for an IoT platform to monitor and manage devices and sensor data, while supporting a scalable big data architecture.",
      "Designed and developed end-to-end frontend interfaces for Trip AI, an AI-powered travel application, covering both user-facing features and a comprehensive admin dashboard while integrating core AI functionalities.",
      "Integrated RESTful and MQTT connections to bridge backend AI and IoT systems with the UI.",
      "Collaborated with backend teams to design a scalable system architecture for a Big Data IoT platform."
    ],
    tech: ["Javascript", "Nuxt", "Jira", "Figma", "Git"]
  },
  {
    tag:"Mobile",
    title: "Full Stack Developer",
    comp: "PT. Tech Mayantara Asia",
    date: "Nov 2023 - Dec 2023",
    desc: [
      "Developed responsive real-time dashboards for an IoT platform to monitor and manage devices and sensor data, while supporting a scalable big data architecture.",
      "Designed and developed end-to-end frontend interfaces for Trip AI, an AI-powered travel application, covering both user-facing features and a comprehensive admin dashboard while integrating core AI functionalities.",
      "Integrated RESTful and MQTT connections to bridge backend AI and IoT systems with the UI.",
      "Collaborated with backend teams to design a scalable system architecture for a Big Data IoT platform."
    ],
    tech: ["Python", "Javascript", "Nuxt", "Django", "PostgreSQL", "Figma"]
  },
  {
    tag:"Mobile",
    title: "Full Stack Developer",
    comp: "PT. Tech Mayantara Asia",
    date: "Nov 2023 - Dec 2023",
    desc: [
      "Developed responsive real-time dashboards for an IoT platform to monitor and manage devices and sensor data, while supporting a scalable big data architecture.",
      "Designed and developed end-to-end frontend interfaces for Trip AI, an AI-powered travel application, covering both user-facing features and a comprehensive admin dashboard while integrating core AI functionalities.",
      "Integrated RESTful and MQTT connections to bridge backend AI and IoT systems with the UI.",
      "Collaborated with backend teams to design a scalable system architecture for a Big Data IoT platform."
    ],
    tech: ["Python", "Javascript", "Nuxt", "Django", "PostgreSQL", "Figma"]
  },
  {
    tag:"AI",
    title: "Full Stack Developer",
    comp: "PT. Tech Mayantara Asia",
    date: "Nov 2023 - Dec 2023",
    desc: [
      "Developed responsive real-time dashboards for an IoT platform to monitor and manage devices and sensor data, while supporting a scalable big data architecture.",
      "Designed and developed end-to-end frontend interfaces for Trip AI, an AI-powered travel application, covering both user-facing features and a comprehensive admin dashboard while integrating core AI functionalities.",
      "Integrated RESTful and MQTT connections to bridge backend AI and IoT systems with the UI.",
      "Collaborated with backend teams to design a scalable system architecture for a Big Data IoT platform."
    ],
    tech: ["Python", "Javascript", "Nuxt", "Django", "PostgreSQL", "Figma"]
  },
  {
    tag:"AI",
    title: "Full Stack Developer",
    comp: "PT. Tech Mayantara Asia",
    date: "Nov 2023 - Dec 2023",
    desc: [
      "Developed responsive real-time dashboards for an IoT platform to monitor and manage devices and sensor data, while supporting a scalable big data architecture.",
      "Designed and developed end-to-end frontend interfaces for Trip AI, an AI-powered travel application, covering both user-facing features and a comprehensive admin dashboard while integrating core AI functionalities.",
      "Integrated RESTful and MQTT connections to bridge backend AI and IoT systems with the UI.",
      "Collaborated with backend teams to design a scalable system architecture for a Big Data IoT platform."
    ],
    tech: ["Python", "Javascript", "Nuxt", "Django", "PostgreSQL", "Figma"]
  },
  {
    tag:"Tools",
    title: "Full Stack Developer",
    comp: "PT. Tech Mayantara Asia",
    date: "Nov 2023 - Dec 2023",
    desc: [
      "Developed responsive real-time dashboards for an IoT platform to monitor and manage devices and sensor data, while supporting a scalable big data architecture.",
      "Designed and developed end-to-end frontend interfaces for Trip AI, an AI-powered travel application, covering both user-facing features and a comprehensive admin dashboard while integrating core AI functionalities.",
      "Integrated RESTful and MQTT connections to bridge backend AI and IoT systems with the UI.",
      "Collaborated with backend teams to design a scalable system architecture for a Big Data IoT platform."
    ],
    tech: ["Python", "Javascript", "Nuxt", "Django", "PostgreSQL", "Figma"]
  },
  {
    tag:"Tools",
    title: "Full Stack Developer",
    comp: "PT. Tech Mayantara Asia",
    date: "Nov 2023 - Dec 2023",
    desc: [
      "Developed responsive real-time dashboards for an IoT platform to monitor and manage devices and sensor data, while supporting a scalable big data architecture.",
      "Designed and developed end-to-end frontend interfaces for Trip AI, an AI-powered travel application, covering both user-facing features and a comprehensive admin dashboard while integrating core AI functionalities.",
      "Integrated RESTful and MQTT connections to bridge backend AI and IoT systems with the UI.",
      "Collaborated with backend teams to design a scalable system architecture for a Big Data IoT platform."
    ],
    tech: ["Python", "Javascript", "Nuxt", "Django", "PostgreSQL", "Figma"]
  },
  
]

const galaxyThemes = [
  'rgba(139, 92, 246, 0.4)',   // ungu
  'rgba(236, 72, 153, 0.4)',   // pink
  'rgba(34, 211, 238, 0.3)',   // teal/cyan
  'rgba(99, 102, 241, 0.4)',   // indigo
  'rgba(167, 139, 250, 0.35)', // lavender
  'rgba(232, 121, 249, 0.35)', // fuchsia
];

const borderColors = [
  '263, 90%, 50%',  // ungu
  '319, 90%, 35%',  // pink
  '187, 90%, 40%',  // cyan
  '245, 80%, 55%',  // indigo
  '280, 85%, 45%',  // lavender
  '295, 85%, 45%',  // fuchsia
];

const contentPlay = document.getElementById('play-content');


  Playground.forEach((item, index) => {
    const borderCors = borderColors[index % borderColors.length];
    const color = galaxyThemes[index % galaxyThemes.length];
    const color2 = galaxyThemes[(index+1) % galaxyThemes.length];
    const category = item.tag.toLowerCase();
    const itemContent = `
  <div class="proj-card frosted-glass" data-cat="${category}" style="
      --glow: ${borderCors};
      border-color: hsla(var(--glow), 0.3);
      background-color: hsla(var(--glow), 0);
    " onclick="toggleCard(this)">
    <div class="proj-thumb thumb-web" style="background: radial-gradient(circle, ${color2}, ${color});">
      ✍️
    </div>
    <div class="proj-info">
      <div class="proj-type-tag">${item.tag}</div>
      <div class="proj-name">Blog Engine</div>
      <div class="proj-stack">Next.js · MDX</div>
    </div>
    
    <div class="expanded-inner">
      <div class="exp-content-wrapper">
        <div class="exp-divider"></div>
        <div class="exp-desc">
          Blog engine static dengan MDX support, syntax highlighting, dan SEO otomatis.
        </div>
        <div class="exp-row">
          <div>
            <div class="exp-col-label">Tech stack</div>
            <div class="tech-badges">
              <span class="tech-badge">Next.js</span>
              <span class="tech-badge">MDX</span>
              <span class="tech-badge">Vercel</span>
            </div>
          </div>
          <div>
            <div class="exp-col-label">Highlights</div>
            <ul class="highlights">
              <li>Static site generation</li>
              <li>RSS feed otomatis</li>
              <li>Dark mode support</li>
            </ul>
          </div>
        </div>
        <div class="exp-links">
          <div class="exp-link primary">↗ Live demo</div>
          <div class="exp-link">⌥ Source code</div>
        </div>
        <div class="close-hint">klik untuk tutup</div>
      </div>
    </div>
  </div>
`;
    // Menggunakan insertAdjacentHTML agar tidak me-render ulang seluruh elemen setiap loop
    contentPlay.insertAdjacentHTML('beforeend', itemContent);
  });
