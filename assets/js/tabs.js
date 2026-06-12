const tabButtons = document.querySelectorAll(".tab-button")
const tabPanels  = document.querySelectorAll(".tabs-content")

// ── 2. fungsi mobile visibility ──
function updateMobileVisibility(activeButton) {
  const isMobile = window.innerWidth < 600
  tabButtons.forEach(b => {
    b.style.display = (!isMobile || b === activeButton) ? '' : 'none'
  })
}

// ── 4. event listener ──
tabButtons.forEach(button => {
  button.addEventListener("click", function () {

    if (button.classList.contains("active")) {
      // ── hapus active dulu, baru tampilkan semua tombol ──
      button.classList.remove("active")
      document.getElementById(button.dataset.tab)?.classList.remove("active")
      tabButtons.forEach(b => b.style.display = '')
      return
    }

    tabButtons.forEach(b => b.classList.remove("active"))
    tabPanels.forEach(p => p.classList.remove("active"))

    button.classList.add("active")
    document.getElementById(button.dataset.tab)?.classList.add("active")

    updateMobileVisibility(button)
  })
})
// ── 5. resize handler ──
window.addEventListener('resize', () => {
  const activeBtn = document.querySelector('.tab-button.active')
  if (activeBtn) updateMobileVisibility(activeBtn)
})

// const headers = document.querySelectorAll(".card-header")
// const bodies = document.querySelectorAll(".card-body")


const cardItems = [...document.querySelectorAll('.card-item')]
const prevButtons = document.querySelectorAll('.prev-arrow')
const nextButtons = document.querySelectorAll('.next-arrow')
let expandedIndex = -1

function showCard(index) {
  cardItems.forEach((item, i) => {
    const exp = item.querySelector('.card-exp')
    const isActive = i === index
    item.style.display = isActive ? 'block' : 'none'
    exp.classList.toggle('active', isActive)
    exp.classList.toggle('frosted-glass', !isActive)

    exp.classList.remove('is-first', 'is-last')
    // Tambah ini
    if (isActive) {
      if (index === 0) exp.classList.add('is-first')
      if (index === cardItems.length - 1) exp.classList.add('is-last')
    }
  })
  expandedIndex = index
}

function showAllCards() {
  cardItems.forEach(item => {
    const exp = item.querySelector('.card-exp')
    item.style.display = 'block'
    exp.classList.remove('active', 'frosted-glass', 'is-first', 'is-last') 
    exp.classList.add('frosted-glass')
  })
  expandedIndex = -1
}

const headers = [...document.querySelectorAll('.card-header')]
headers.forEach(header => {
  header.addEventListener('click', function () {
    const cardItem = header.closest('.card-item')
    const index = cardItems.indexOf(cardItem)
    // const isActive = cardItem.querySelector('.card-exp').classList.contains('active')
    showCard(index)
  })
})

const footers = [...document.querySelectorAll('.card-footer')]
footers.forEach(footer => {
  footer.addEventListener('click', function () {
    showAllCards()
  })
})

prevButtons.forEach(button => {
  button.addEventListener('click', function (event) {
    event.stopPropagation()
    if (expandedIndex > 0) showCard(expandedIndex - 1)
  })
})

nextButtons.forEach(button => {
  button.addEventListener('click', function (event) {
    event.stopPropagation()
    if (expandedIndex < cardItems.length - 1) showCard(expandedIndex + 1)
  })
})

function toggleCard(card) {
  const inner = card.querySelector('.expanded-inner');
  const isExpanded = card.classList.contains('expanded');

  // 1. Reset semua secara INSTAN (tanpa delay)
  document.querySelectorAll('.proj-card').forEach(c => {
    c.classList.remove('expanded');
    c.style.gridColumn = '';
    c.style.gridRow = '';
    
    const i = c.querySelector('.expanded-inner');
    if(i) i.style.height = '0px'; // Kembalikan tinggi ke 0 seketika
  });

  // 2. Buka card yang diklik
  if (!isExpanded) {
    // Set ukuran grid baru secara instan
    card.style.gridColumn = 'span 2';
    card.style.gridRow = 'span 3';
    card.classList.add('expanded');

    // Gunakan requestAnimationFrame agar browser me-render grid baru dulu,
    // baru kemudian kita setel tingginya untuk memicu animasi CSS.
    requestAnimationFrame(() => {
      // scrollHeight akan mengambil tinggi asli konten yang ada di dalamnya
      inner.style.height = inner.scrollHeight + 'px';
    });
  }
}

 function filterCards(cat, pill) {
  document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  pill.classList.add('active');
  document.querySelectorAll('.proj-card').forEach(card => {
    const show = cat === 'all' || card.dataset.cat === cat;
    card.style.display = show ? '' : 'none';
    if (card.classList.contains('expanded')) {
      card.classList.remove('expanded');
      card.style.gridColumn = '';
      card.style.gridRow = '';
      
      const inner = card.querySelector('.expanded-inner');
      if (inner) inner.style.height = '0px';
    }
  });
}