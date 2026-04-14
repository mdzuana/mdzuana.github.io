const experience = [
  {
    title: "FrontEnd",
    comp: "Telkom",
    loc:"Bandung",
    date: "april 2025 - mei 2026",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros mauris, suscipit non luctus a,
                    vulputate id ipsum. Nunc pharetra auctor nunc, sit amet suscipit quam. Aenean in scelerisque ligula.
                    Suspendisse facilisis vel augue vel pellentesque. Quisque vel ligula eu libero elementum elementum
                    vitae sit amet velit. Proin ac porta libero. Sed vestibulum sed eros sit amet rhoncus. Integer
                    tincidunt congue ipsum sit amet placerat. Nunc sapien tellus, porttitor at dui sit amet, iaculis
                    iaculis mi. Quisque venenatis auctor mattis. Morbi ornare urna et mauris congue, non luctus dolor
                    ultrices. Ut tincidunt sodales urna, a elementum urna aliquam nec. Morbi elementum porttitor semper.
                    Sed dapibus fermentum lacinia. Maecenas gravida neque a ipsum consequat, ac sodales lectus
                    malesuada.
                    Aliquam pharetra, orci aliquet euismod aliquet, ligula justo fermentum nunc, quis viverra elit neque
                    sit amet orci.`,
    tech: " Javascript, Nuxt, Jira, Figma, Git"
  },
  {
    title: "FrontEnd",
    comp: "Telkom - bandung",
    loc:"Bandung",
    date: "april 2025 - mei 2026",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros mauris, suscipit non luctus a,
                    vulputate id ipsum. Nunc pharetra auctor nunc, sit amet suscipit quam. Aenean in scelerisque ligula.
                    Suspendisse facilisis vel augue vel pellentesque. Quisque vel ligula eu libero elementum elementum
                    vitae sit amet velit. Proin ac porta libero. Sed vestibulum sed eros sit amet rhoncus. Integer
                    tincidunt congue ipsum sit amet placerat. Nunc sapien tellus, porttitor at dui sit amet, iaculis
                    iaculis mi. Quisque venenatis auctor mattis. Morbi ornare urna et mauris congue, non luctus dolor
                    ultrices. Ut tincidunt sodales urna, a elementum urna aliquam nec. Morbi elementum porttitor semper.
                    Sed dapibus fermentum lacinia. Maecenas gravida neque a ipsum consequat, ac sodales lectus
                    malesuada.
                    Aliquam pharetra, orci aliquet euismod aliquet, ligula justo fermentum nunc, quis viverra elit neque
                    sit amet orci.`,
    tech: " Javascript, Nuxt, Jira, Figma, Git"
  },
  {
    title: "FrontEnd",
    comp: "Telkom - bandung",
    loc:"Bandung",
    date: "april 2025 - mei 2026",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros mauris, suscipit non luctus a,
                    vulputate id ipsum. Nunc pharetra auctor nunc, sit amet suscipit quam. Aenean in scelerisque ligula.
                    Suspendisse facilisis vel augue vel pellentesque. Quisque vel ligula eu libero elementum elementum
                    vitae sit amet velit. Proin ac porta libero. Sed vestibulum sed eros sit amet rhoncus. Integer
                    tincidunt congue ipsum sit amet placerat. Nunc sapien tellus, porttitor at dui sit amet, iaculis
                    iaculis mi. Quisque venenatis auctor mattis. Morbi ornare urna et mauris congue, non luctus dolor
                    ultrices. Ut tincidunt sodales urna, a elementum urna aliquam nec. Morbi elementum porttitor semper.
                    Sed dapibus fermentum lacinia. Maecenas gravida neque a ipsum consequat, ac sodales lectus
                    malesuada.
                    Aliquam pharetra, orci aliquet euismod aliquet, ligula justo fermentum nunc, quis viverra elit neque
                    sit amet orci.`,
    tech: " Javascript, Nuxt, Jira, Figma, Git"
  }
]

const content = document.getElementById('exp-content');

experience.forEach(item => {
  // Membuat elemen baru dengan isi yang berbeda
  const itemContent = `
      <div class="card-item">
            <div class="circle"></div>
            <div class="date">
            ${item.date}
            </div>
            <div class="card-exp frosted-glass">
              <div class="card-header">
                <div class="job"> ${item.title}

                </div>
                <div class="comp"> ${item.comp}
                  <span class="city">${item.loc}</span>
                </div>
                
                <div class="tech-stack">Tech stack : ${item.tech}</div>
              </div>
              <div class="card-body">
                <div class="desc-perusahaan">
                  <p>${item.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
    `;
  // Memasukkan ke dalam HTML
  content.innerHTML += itemContent;
});
