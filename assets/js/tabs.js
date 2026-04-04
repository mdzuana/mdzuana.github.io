const tabs = document.querySelectorAll(".tabs-content, .tab-button")
const clikButton = document.querySelectorAll(".tab-button")
for (let button of clikButton) {
  button.addEventListener("click", function () {
    const active = button.classList.contains('active')
    for (let content of tabs) {
      content.classList.remove("active")
    }
    if (!active) {
      document.getElementById(button.dataset.tab).classList.add("active");
      button.classList.add("active")
    }
  });
}

const headers = document.querySelectorAll(".card-header")
const bodies = document.querySelectorAll(".card-body")
for (let header of headers) {
  header.addEventListener("click", function () {
    const active = header.nextElementSibling.classList.contains("active")
    for (let body of bodies) {
      body.classList.remove("active")
      header.classList.remove("active")
    }
    if (!active) {
      header.nextElementSibling.classList.add("active")
      header.classList.add("active")
    }
  })
}