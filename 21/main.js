// // Все кнопки с программами
// const programBtns = document.querySelectorAll(".program-btn");

// const handleColorChange = (
//   className,
//   downColor,
//   upColor,
//   childDown,
//   childUp
// ) => {
//   const children = document.querySelectorAll(`.${className}`);
//   children.forEach((child) => {
//     child.addEventListener("touchstart", function () {
//       this.parentElement.style.background = downColor;
//       child.classList.remove(childUp);
//       child.classList.add(childDown);

//       programBtns.forEach((btn) => {
//         btn.classList.remove("program-button-active");
//       });

//       this.classList.add("program-button-active");
//     });
//     child.addEventListener("touchend", function () {
//       this.parentElement.style.backgroundImage = `linear-gradient(
//           180deg,
//           rgba(0, 0, 0, 0.6) 0%,
//           ${upColor} 100%
//         )`;
//       this.parentElement.style.background = `linear-gradient(
//         180deg,
//         rgba(0, 0, 0, 0.6) 0%,
//         ${upColor} 100%
//       )`;
//       child.classList.remove(childDown);
//       child.classList.add(childUp);
//     });
//   });
// };

// handleColorChange(
//   "active-light-blue",
//   "#0092e4",
//   "rgba(0, 160, 228, 1)",
//   "active-light-blue-child-down",
//   "active-light-blue-child-up"
// );
// handleColorChange(
//   "active-dark-blue",
//   "#1E5DFF",
//   "rgba(0, 160, 228, 1)",
//   "active-dark-blue-child-down",
//   "active-dark-blue-child-up"
// );
// handleColorChange(
//   "active-pink",
//   "#ff3f9b",
//   "rgba(0, 160, 228, 1)",
//   "active-pink-child-down",
//   "active-pink-child-up"
// );
// handleColorChange(
//   "active-purple",
//   "#A038F1",
//   "rgba(0, 160, 228, 1)",
//   "active-purple-child-down",
//   "active-purple-child-up"
// );
// handleColorChange(
//   "active-avocado-green",
//   "#7fe409",
//   "rgba(0, 160, 228, 1)",
//   "active-avocado-green-child-down",
//   "active-avocado-green-child-up"
// );
// handleColorChange(
//   "active-grass-green",
//   "#00e577",
//   "rgba(0, 229, 119, 1)",
//   "active-grass-green-child-down",
//   "active-grass-child-child-up"
// );
// handleColorChange(
//   "active-red",
//   "#FF0303",
//   "rgba(0, 160, 228, 1)",
//   "active-red-child-down",
//   "active-red-child-up"
// );

// Все кнопки с программами
const programBtns = document.querySelectorAll(".program-btn");

// // Установка WebSocket-соединения
// const socket = new WebSocket("ws://your-server.com/websocket");

// // Обработчик открытия соединения
// socket.addEventListener("open", () => {
//   console.log("WebSocket connection established");
// });

// // Обработчик получения сообщения от сервера
// socket.addEventListener("message", (event) => {
//   const response = JSON.parse(event.data);
//   if (response.success) {
//     // Удаление класса "program-button-active" со всех кнопок
//     programBtns.forEach((btn) => {
//       btn.classList.remove("program-button-active");
//     });

//     // Добавление класса "program-button-active" на кнопку, по которой кликнули
//     const clickedBtn = document.querySelector(
//       `.program-btn.${response.program}` // response.program - уникальный класс каждой кнопки, в ответе от сервера или можно по клику вешать класс на фронте 'pending', далее по какому-нибудь статичному ответу от сервера этой кнопке вешать ещё один класс 'active'
//     );
//     clickedBtn.classList.add("program-button-active");
//   } else {
//     console.error("Error changing program:", response.error);
//   }
// });

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

      // // Отправка события на сервер через WebSocket
      // socket.send(
      //   JSON.stringify({ action: "changeProgram", program: className })
      // );
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
