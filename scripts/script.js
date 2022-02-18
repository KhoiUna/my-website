const header = document.querySelector("header");
const readMoreButton = document.querySelector("#read-more");

window.addEventListener("scroll", () => {
  if (document.querySelector("html").scrollTop > 0)
    return (header.style.animation = "colorFadeIn 1s forwards");

  return (header.style.animation = "colorFadeOut 1s forwards");
});

$().ready(() => {
  $("#read-more").on("click", (e) => {
    const destination = $("#introduction");
    const scrollPosition =
      destination.offset().top - destination.offset().top * 0.12;
    const animationDuration = 500;

    $("html").animate(
      {
        scrollTop: scrollPosition,
      },
      animationDuration
    );
  });
});
