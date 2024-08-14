const FILE_NAME = 'draw'

async function readDraw() {
  const drawInput = document.getElementById('load_draw_input')

  const data = JSON.parse(await drawInput.files[0].text())

  if (data.days && data.year) {
    return data
  }

  alert("FILE DON'T HAVE THE CORRECT DATA TYPE")
}

function renderDraw({ year, days }) {
  changeTableYear(year)

  days
    .map(function (day) {
      return day.split('/').slice(0, -1).join('/')
    })
    .forEach(function (day) {
      const dayInput = document.getElementById(day)

      changeState(dayInput, true)
    })
}

function mapDaysToDraw() {
  if (daysToDraw.size <= 0) {
    return
  }

  const daysMapped = []

  for (const day of daysToDraw.values()) {
    daysMapped.push(day)
  }

  return daysMapped
}

function downloadDraw(yearOfDraw, daysToSave) {
  const data = {
    year: yearOfDraw,
    days: daysToSave
  }

  const dataAsTxt = new Blob([JSON.stringify(data)])

  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(dataAsTxt, FILE_NAME)
  } else {
    const elem = window.document.createElement('a')
    elem.href = window.URL.createObjectURL(dataAsTxt, { oneTimeOnly: true })
    elem.download = FILE_NAME
    elem.style.display = 'none'
    document.body.appendChild(elem)
    elem.click()
    document.body.removeChild(elem)
  }
}
