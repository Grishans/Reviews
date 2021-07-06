var categoriesBox = document.querySelector(".categories");
var subBox = document.querySelector(".subCategoriesBox");
var subBoxParagraph = document.querySelector(".subCategoriesBox p");
var categoriesCurrent = document.querySelectorAll(".categories__box li a");
var subCategoriesBox__value = document.querySelector(
  ".subCategoriesBox__value"
);
var subCategoriesBox__valueHrefs = document.querySelectorAll(
  ".subCategoriesBox__value a"
);

categoriesCurrent.forEach(function (item, i) {
  item.addEventListener("mouseover", () => {
    subBoxParagraph.innerHTML = item.innerHTML; // Вносим в параграф текст

    subCategoriesBox__value.innerHTML = "";
    var subItem = categoriesCurrent[i]
      .getAttribute("data-subcategories")
      .split(",");
    var subHref = categoriesCurrent[i].getAttribute("data-href").split(",");
    subItem.forEach(function (item, i) {
      let catHref = document.createElement("a");
      catHref.setAttribute("href", subHref[i]);
      catHref.setAttribute("target", "_blunk");
      catHref.innerHTML = item;
      subCategoriesBox__value.append(catHref);
    }); // создаем ссылки, получаем данные из data- атрибутов и вносим в нужные блоки

    subBox.style.display = "flex";
    subBox.style.top =
      item.getBoundingClientRect().bottom +
      (subBox.clientHeight / 2) * -1 +
      "px";
    subBox.style.left = item.getBoundingClientRect().right + 25 + "px";
    item.classList.add("selectCutegori");
    item.addEventListener("mouseout", () => {
      item.classList.remove("selectCutegori");
    });
  });

  subBox.addEventListener("mouseout", () => {
    subBox.style.display = "none";
    item.classList.remove("selectCutegori");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  categoriesCurrent.forEach(function (item, i) {
    if (item.getAttribute("data-subcategories") !== "") {
      item.classList.add("NovoidCategori");
    }
  });
});
