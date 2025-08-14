function tabs(event, tabName) {
    // 1. Check if the clicked tab was already active before any changes.
  const wasActive = event.currentTarget.classList.contains('active');

  // 2. Reset all tabs and content by removing the 'active' class from all of them.
  const tabContents = document.getElementsByClassName("tabs-content");
  for (let content of tabContents) {
    content.classList.remove("active");
  }

  const tabButtons = document.getElementsByClassName("tab-button");
  for (let button of tabButtons) {
    button.classList.remove("active");
  }

  // 3. If the tab was NOT active before, make it active now.
  // If it was already active, this block is skipped, and the tab remains closed.
  if (!wasActive) {
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
  }
}