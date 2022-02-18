const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (document.querySelector("html").scrollTop > 0)
    return (header.style.animation = "colorFadeIn 1s forwards");

  return (header.style.animation = "colorFadeOut 1s forwards");
});
