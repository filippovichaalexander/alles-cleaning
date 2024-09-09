// const lightBlueChildren = document.querySelectorAll(".active-light-blue")

// lightBlueChildren.forEach((child) => {
//   child.addEventListener("mousedown", function () {
//     this.parentElement.style.background = "#0092e4"
//   })
//   child.addEventListener("mouseup", function () {
//     this.parentElement.style.backgroundImage = `linear-gradient(
//         180deg,
//         rgba(0, 0, 0, 0.6) 0%,
//         rgba(0, 160, 228, 1) 100%
//       )`
//   })
// })

function handleColorChange(className, downColor, upColor, childDown, childUp) {
  const children = document.querySelectorAll(`.${className}`)
  children.forEach((child) => {
    child.addEventListener("touchstart", function () {
      this.parentElement.style.background = downColor
      child.classList.remove(childUp)
      child.classList.add(childDown)
    })
    child.addEventListener("touchend", function () {
      this.parentElement.style.backgroundImage = `linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.6) 0%,
          ${upColor} 100%
        )`
      this.parentElement.style.background = `linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 0%,
        ${upColor} 100%
      )`
      child.classList.remove(childDown)
      child.classList.add(childUp)
    })
  })
}

handleColorChange(
  "active-light-blue",
  "#0092e4",
  "rgba(0, 160, 228, 1)",
  "active-light-blue-child-down",
  "active-light-blue-child-up"
)
handleColorChange(
  "active-dark-blue",
  "#1E5DFF",
  "rgba(0, 160, 228, 1)",
  "active-dark-blue-child-down",
  "active-dark-blue-child-up"
)
handleColorChange(
  "active-pink",
  "#ff3f9b",
  "rgba(0, 160, 228, 1)",
  "active-pink-child-down",
  "active-pink-child-up"
)
handleColorChange(
  "active-purple",
  "#A038F1",
  "rgba(0, 160, 228, 1)",
  "active-purple-child-down",
  "active-purple-child-up"
)
handleColorChange(
  "active-avocado-green",
  "#7fe409",
  "rgba(0, 160, 228, 1)",
  "active-avocado-green-child-down",
  "active-avocado-green-child-up"
)
handleColorChange(
  "active-grass-green",
  "#00e577",
  "rgba(0, 229, 119, 1)",
  "active-grass-green-child-down",
  "active-grass-child-child-up"
)
