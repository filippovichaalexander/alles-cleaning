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

function handleColorChange(className, downColor, upColor) {
  const children = document.querySelectorAll(`.${className}`)
  children.forEach((child) => {
    child.addEventListener("mousedown", function () {
      this.parentElement.style.background = downColor
    })
    child.addEventListener("mouseup", function () {
      this.parentElement.style.backgroundImage = `linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.6) 0%,
          ${upColor} 100%
        )`
    })
  })
}

handleColorChange("active-light-blue", "#0092e4", "rgba(0, 160, 228, 1)")
handleColorChange("active-dark-blue", "#1E5DFF", "rgba(0, 160, 228, 1)")
handleColorChange("active-pink", "#ff3f9b", "rgba(0, 160, 228, 1)")
handleColorChange("active-purple", "#A038F1", "rgba(0, 160, 228, 1)")
handleColorChange("active-avocado-green", "#7fe409", "rgba(0, 160, 228, 1)")
handleColorChange("active-grass-green", "#00e577", "rgba(0, 229, 119, 1)")
