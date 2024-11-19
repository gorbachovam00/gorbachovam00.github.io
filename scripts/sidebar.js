const menuItems = document.querySelectorAll(".sidebar__menu-item");

menuItems.forEach((item) => {
  const icons = item.querySelectorAll(".sidebar__menu-icon");
  const text = item.querySelector("p");

  item.style.borderRadius = "8px";
  item.style.padding = "11px 8px 11px 11px";

  item.addEventListener("mouseenter", () => {
    item.style.backgroundColor = "#5932ea";
    item.style.color = "white";
    item.style.transition = "all 0.5s ease";

    icons.forEach((icon) => {
      icon.style.filter = "brightness(0) invert(1)";
    });
    text.style.color = "white";
  });

  item.addEventListener("mousedown", () => {
    item.style.backgroundColor = "darkblue";
    icons.forEach((icon) => {
      icon.style.filter = "brightness(0) invert(1)";
    });
    text.style.color = "white";
  });

  item.addEventListener("mouseup", () => {
    item.style.backgroundColor = "blue";
  });

  item.addEventListener("mouseleave", () => {
    item.style.backgroundColor = "";
    item.style.color = "";
    icons.forEach((icon) => {
      icon.style.filter = "";
    });
    text.style.color = "";
  });
});
