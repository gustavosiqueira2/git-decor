let leftMouseDown = 0
let rightMouseDown = 0
document.onmousedown = function (e) {
  e.preventDefault()
  if (e.button === 0) {
    ++leftMouseDown
  }
  if (e.button === 2) {
    ++rightMouseDown
  }
}
document.onmouseup = function (e) {
  e.preventDefault()
  if (e.button === 0) {
    leftMouseDown = 0
  }
  if (e.button === 2) {
    rightMouseDown = 0
  }
}

let daysToDraw = new Map()

function changeState(day, state) {
  if (day) {
    if (state && !day.classList.contains('active')) {
      day.className += ' active'
      daysToDraw.set(day.id, day.getAttribute('data-date'))
    } else if (!state) {
      day.className = day.className.split(' ')[0]
      daysToDraw.delete(day.id)
    }
  }
}

function clearTable() {
  daysToDraw.clear()

  const activeDays = Array.from(document.getElementsByClassName('active'))

  activeDays.forEach((day) => {
    document.getElementById(day.id).classList.remove('active')
  })
}

function addEvents(id) {
  let day = document.getElementById(id)
  day.addEventListener('mouseover', function () {
    if (!!leftMouseDown) {
      changeState(day, true)
    } else if (!!rightMouseDown) {
      changeState(day, false)
    }
  })

  day.addEventListener('mousedown', function (e) {
    if (e.button === 0) {
      changeState(day, true)
    } else if (e.button === 2) {
      changeState(day, false)
    }
  })
}
