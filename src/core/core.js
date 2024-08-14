let currentYear = 2024

setTimeout(function () {
  setYear(currentYear)
}, 1)

function setYear(year) {
  currentYear = year
  createTable(year)
  document.getElementById('year_label').innerHTML = year
}

function changeTableYear(year) {
  setYear(year)

  clearDraw()

  createTable(year)
}

function selectDraw() {
  document.getElementById('load_draw_input').click()
}

async function loadDraw() {
  const data = await readDraw()

  renderDraw(data)
}

function saveDraw() {
  const daysMapped = mapDaysToDraw()

  downloadDraw(currentYear, daysMapped)
}

function clearDraw() {
  clearTable()
}
