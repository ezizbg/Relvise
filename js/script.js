// Меню бургер
const iconBurger = document.querySelector(".header__burger");
const menu = document.querySelector(".menu");
if (iconBurger) {
  iconBurger.addEventListener("click", function (e) {
    iconBurger.classList.toggle("_active");
    menu.classList.toggle("_active");
    document.body.classList.toggle("_lock");
  });
}

// Прокрутка при клике
const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight;

      if (iconBurger.classList.contains("_active")) {
        iconBurger.classList.remove("_active");
        menu.classList.remove("_active");
        document.body.classList.remove("_lock");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}
