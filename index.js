function demo() {
  function addClass(e) {
    document
      .getElementById(e)
      .classList.add(
        "text-lg",
        "font-medium",
        "bg-blue-400",
        "rounded-md",
        "text-white",
        "animate-pulse"
      );
  }
  function removeClass(e) {
    document
      .getElementById(e)
      .classList.remove(
        "text-lg",
        "font-medium",
        "bg-blue-400",
        "rounded-md",
        "text-white",
        "animate-pulse"
      );
  }
  const path = window.location.hash;
  switch (path) {
    case "#about":
      addClass("about-link");
      removeClass("contact-link");
      removeClass("project-link");
      removeClass("home-link");
      break;
    case "#contact":
      addClass("contact-link");
      removeClass("about-link");
      removeClass("project-link");
      removeClass("home-link");
      break;
    case "#project":
      addClass("project-link");
      removeClass("contact-link");
      removeClass("about-link");
      removeClass("home-link");
      break;

    default:
      removeClass("project-link");
      removeClass("contact-link");
      removeClass("about-link");
      addClass("home-link");
      break;
  }
}
