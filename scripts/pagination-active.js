// let currentPage = 1;

// function updatePagination() {
//   const pages = document.querySelectorAll(".pagination__page");

//   pages.forEach((page) => {
//     page.classList.remove("active");
//   });

//   const currentPageButton = Array.from(pages).find(
//     (page) => parseInt(page.textContent, 10) === currentPage
//   );

//   if (currentPageButton) {
//     currentPageButton.classList.add("active");
//   }
// }

// function goToPage(page) {
//   if (page !== currentPage) {
//     currentPage = page;
//     updatePagination();
//   }
// }

// function nextPage() {
//   const totalPages = document.querySelectorAll(".pagination__page").length - 1; // Учитываем, что последняя кнопка — это многоточие
//   if (currentPage < totalPages) {
//     currentPage++;
//     updatePagination();
//   }
// }

// function prevPage() {
//   if (currentPage > 1) {
//     currentPage--;
//     updatePagination();
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   updatePagination();

//   document.querySelector("#next").addEventListener("click", nextPage);
//   document.querySelector("#prev").addEventListener("click", prevPage);
// });


let currentPage = 1; // Начальная страница

// Функция обновления пагинации
function updatePagination() {
  const pages = document.querySelectorAll(
    ".pagination__page, .pagination-mobile .pagination__page"
  );

  pages.forEach((page) => {
    const pageNumber = parseInt(page.textContent, 10);
    if (pageNumber === currentPage) {
      page.classList.add("active"); // Добавляем класс "active" для текущей страницы
    } else {
      page.classList.remove("active"); // Убираем класс "active" с других кнопок
    }
  });
}

// Функция для перехода на конкретную страницу
function goToPage(page) {
  currentPage = page; // Обновляем текущую страницу
  updatePagination(); // Обновляем отображение активной страницы
}

// Функция для перехода на следующую страницу
function nextPage() {
  const totalPages =
    document.querySelectorAll(
      ".pagination__page, .pagination-mobile .pagination__page"
    ).length - 1;
  if (currentPage < totalPages) {
    currentPage++;
    updatePagination();
  }
}

// Функция для перехода на предыдущую страницу
function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    updatePagination();
  }
}

// Инициализация пагинации при загрузке страницы
document.addEventListener("DOMContentLoaded", updatePagination);
