// Все кнопки с программами
const programBtns = document.querySelectorAll(".program-btn");

const handleColorChange = (
  className,
  downColor,
  upColor,
  childDown,
  childUp
) => {
  const children = document.querySelectorAll(`.${className}`);
  children.forEach((child) => {
    child.addEventListener("touchstart", function () {
      this.parentElement.style.background = downColor;
      child.classList.remove(childUp);
      child.classList.add(childDown);

      programBtns.forEach((btn) => {
        btn.classList.remove("program-button-active");
      });

      this.classList.add("program-button-active");
    });
    child.addEventListener("touchend", function () {
      this.parentElement.style.backgroundImage = `linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.6) 0%,
          ${upColor} 100%
        )`;
      this.parentElement.style.background = `linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 0%,
        ${upColor} 100%
      )`;
      child.classList.remove(childDown);
      child.classList.add(childUp);
    });
  });
};

handleColorChange(
  "active-light-blue",
  "#0092e4",
  "rgba(0, 160, 228, 1)",
  "active-light-blue-child-down",
  "active-light-blue-child-up"
);
handleColorChange(
  "active-dark-blue",
  "#1E5DFF",
  "rgba(0, 160, 228, 1)",
  "active-dark-blue-child-down",
  "active-dark-blue-child-up"
);
handleColorChange(
  "active-pink",
  "#ff3f9b",
  "rgba(0, 160, 228, 1)",
  "active-pink-child-down",
  "active-pink-child-up"
);
handleColorChange(
  "active-purple",
  "#A038F1",
  "rgba(0, 160, 228, 1)",
  "active-purple-child-down",
  "active-purple-child-up"
);
handleColorChange(
  "active-avocado-green",
  "#7fe409",
  "rgba(0, 160, 228, 1)",
  "active-avocado-green-child-down",
  "active-avocado-green-child-up"
);
handleColorChange(
  "active-grass-green",
  "#00e577",
  "rgba(0, 229, 119, 1)",
  "active-grass-green-child-down",
  "active-grass-child-child-up"
);
handleColorChange(
  "active-red",
  "#FF0303",
  "rgba(0, 160, 228, 1)",
  "active-red-child-down",
  "active-red-child-up"
);

// function displayScreenSize() {
//   const width = window.innerWidth;
//   const height = window.innerHeight;
//   const screenSizeDiv = document.getElementById("screenSize");
//   screenSizeDiv.textContent = `Ширина: ${width}px, Высота: ${height}px`;

//   // Пример условий для медиазапросов
//   if (width <= 1080) {
//     console.log("Экран меньше или равен 1080px");
//   } else {
//     console.log("Экран больше 1080px");
//   }
// }

// window.addEventListener("resize", displayScreenSize);
