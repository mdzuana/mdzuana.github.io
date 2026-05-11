const experience = [
  {
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

const content = document.getElementById('exp-content');

experience.forEach((item, index) => {
  // Membuat elemen baru dengan isi yang berbeda
  const itemContent = `
    <div class="card-item">
      <div class="circle"></div>
      <div class="card-exp frosted-glass">

        <div class="nav-arrow prev-arrow glow-effect" aria-label="Previous item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>

        <div class="card-content">
          <div class="card-header">        
            <div class="date muted-text">
              ${item.date}
            </div>
            <div class="header-top">
              
              <div class="job"> ${item.title}</div>
              
            </div>
            <div class="comp"> 
              ${item.comp}
            </div>
            <div class="tech-stack" id="detail-stack-${index}">
              <span class="tech-text">${item.tech.join(', ')}</span>
              <span class="tech-badges"> ${item.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}</span>
            </div>
          </div>
          <div class="card-body">
            <div class="desc-perusahaan">
              <ul>
                ${item.desc.map(point => `<li>${point}</li>`).join('')}
              </ul>
            </div>
          </div>
          <div class="card-footer">
            <button class="glow-effect"> Tampilkan Semua </button>
          </div>
        </div>

        <div class="nav-arrow next-arrow glow-effect" aria-label="Next item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>

      </div>
    </div>
    `;
  // Memasukkan ke dalam HTML
  content.innerHTML += itemContent;
});
