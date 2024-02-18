function adjustFontSizeToFit() {
  const column = document.querySelector(".column");
  if (!column) return;

  let fontSize = parseFloat(
    window.getComputedStyle(column, null).getPropertyValue("font-size")
  );
  while (column.scrollHeight > window.innerHeight && fontSize > 1) {
    fontSize -= 0.5; // Decrease font size gradually
    column.style.fontSize = `${fontSize}px`;
  }
}

// Initial adjust and on window resize
window.onload = adjustFontSizeToFit;
window.onresize = adjustFontSizeToFit;
