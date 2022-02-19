// Global variables
const animationDuration = 500;
let menuOpened = false;

// Functions
const headerFading = () => {
  if (menuOpened) return (header.style.animation = "colorFadeIn 1s forwards");

  if (document.querySelector("html").scrollTop > 0)
    return (header.style.animation = "colorFadeIn 1s forwards");

  return (header.style.animation = "colorFadeOut 1s forwards");
};

// Select elements
const header = document.querySelector("header");
const readMoreButton = document.querySelector("#read-more");

window.addEventListener("scroll", headerFading);

$().ready(() => {
  // dropdown-menu
  $("#burger-menu").click(() => {
    if (!menuOpened) {
      menuOpened = !menuOpened;
      headerFading();

      $("#burger-icon").fadeOut(animationDuration);
      $("#dropdown-menu").fadeIn(animationDuration);
      setTimeout(() => {
        $("#close-icon").fadeIn(animationDuration);
      }, animationDuration);
    } else {
      menuOpened = !menuOpened;
      headerFading();

      $("#close-icon").fadeOut(animationDuration);
      $("#dropdown-menu").fadeOut(animationDuration);
      setTimeout(() => {
        $("#burger-icon").fadeIn(animationDuration);
      }, animationDuration);
    }
  });

  // read-more button
  $("#read-more").on("click", (e) => {
    const destination = $("#introduction");
    const scrollPosition =
      destination.offset().top - destination.offset().top * 0.12;

    $("html").animate(
      {
        scrollTop: scrollPosition,
      },
      animationDuration
    );
  });
});
