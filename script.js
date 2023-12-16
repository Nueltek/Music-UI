document.addEventListener("DOMContentLoaded", function () {
  const pageTitle = document.querySelector(".page--title");
  const sections = {
    home: {
      element: document.querySelector(".home"),
      svg: document.querySelector(".home--svg"),
      p: document.querySelector(".home--p"),
    },
    discover: {
      element: document.querySelector(".discover"),
      svg: document.querySelector(".discover--svg"),
      p: document.querySelector(".discover--p"),
    },
    trending: {
      element: document.querySelector(".trending"),
      svg: document.querySelector(".trending--svg"),
      p: document.querySelector(".trending--p"),
    },
    playlist: {
      element: document.querySelector(".playlist--section"),
      svg: document.querySelector(".playlist--svg"),
      p: document.querySelector(".playlist--p"),
    },
  };

  const navItems = document.querySelectorAll(".svg-hover");

  function updateStyles(activeSection) {
    console.log(Object.values(sections));
    Object.values(sections).forEach((section) => {
      section.p.style.color = "#000";
      section.svg.style.fill = "#212121";
    });

    activeSection.p.style.color = "#941A97";
    activeSection.svg.style.fill = "#941A97";
  }

  navItems.forEach((navItem) => {
    navItem.addEventListener("click", (e) => {
      e.stopPropagation();
      const sectionName = e.target.innerText.toLowerCase();
      const activeSection = sections[sectionName];

      if (sectionName === "home") {
        pageTitle.textContent = "Home\u00A0\u00A0\u00A0\u00A0"; // Four  spaces
      } else {
        pageTitle.textContent =
          sectionName.charAt(0).toUpperCase() + sectionName.slice(1);
      }

      navItems.forEach((n) => n.classList.remove("focus"));
      e.target.closest(".svg-hover").classList.add("focus");

      Object.values(sections).forEach((section) => {
        section.element.classList.add("hide");
      });

      activeSection.element.classList.remove("hide");
      updateStyles(activeSection);
    });
  });
});
