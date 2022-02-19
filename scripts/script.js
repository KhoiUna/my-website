import config from "./config.js";

// Global variables
const { projects } = config;

const animationDuration = 500;
let menuOpened = false;

// Functions
const headerFading = () => {
  if (menuOpened) return (header.style.animation = "colorFadeIn 1s forwards");

  if (document.querySelector("html").scrollTop > 0)
    return (header.style.animation = "colorFadeIn 1s forwards");

  return (header.style.animation = "colorFadeOut 1s forwards");
};

const smoothScroll = (cssSelector) => {
  const destination = $(cssSelector);
  const scrollPosition =
    destination.offset().top - destination.offset().top * 0.05;

  $("html").animate(
    {
      scrollTop: scrollPosition,
    },
    animationDuration
  );
};

const toggleMenu = () => {
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
};

// Select elements
const header = document.querySelector("header");
const readMoreButton = document.querySelector("#read-more");

// JS interactions
window.addEventListener("scroll", headerFading);

$().ready(() => {
  // Add projects to DOM
  projects.forEach((item) => {
    $(".project-cards-container").append(`<div class="project-cards">
  <div class="flex-container">
    <p class="project-cards-title paragraph">${item.title}</p>
    <div>
      <a
        class="links"
        target="_blank"
        rel="noopener noreferrer"
        href=${item.liveURL}
        ><p class="paragraph">View live</p></a
      >
      <a
        class="links"
        target="_blank"
        rel="noopener noreferrer"
        href=${item.srcCodeURL}
        ><p class="paragraph">View source</p></a
      >
    </div>
  </div>
</div>`);
  });

  // nav-links
  $(".nav-links").on("click", (event) => {
    const destination = event.currentTarget.attributes.href.nodeValue;
    smoothScroll(destination);
    toggleMenu();
  });

  // dropdown-menu
  $("#burger-menu").on("click", toggleMenu);

  // read-more button
  $("#read-more").on("click", () => smoothScroll("#introduction"));

  // other-stuff-cards;
  $(".card-inner").on("click", (event) =>
    event.currentTarget.classList.toggle("card-flip")
  );
});
