document.querySelectorAll(".clickable").forEach(card => {
  card.addEventListener("click", () => {
    const content = card.querySelector(".hidden-content");
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});

document.querySelectorAll(".clickable-course").forEach(item => {
  const title = item.querySelector(".course-title");

  title.addEventListener("click", (e) => {
    e.stopPropagation();

    const sub = item.querySelector(".sub-courses");
    if (!sub) return;

    const isOpen = sub.style.display === "block";

    sub.style.display = isOpen ? "none" : "block";
    title.classList.toggle("open", !isOpen);
  });
});

// prevent links from closing the dropdown
document.querySelectorAll(".course-list a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

document.querySelectorAll(".toggle-courses").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const content = toggle.nextElementSibling;
    const isOpen = content.style.height && content.style.height !== "0px";

    if (isOpen) {
      // collapse
      content.style.height = content.scrollHeight + "px"; // set current height first
      requestAnimationFrame(() => {
        content.style.height = "0";
      });
    } else {
      // expand
      content.style.height = content.scrollHeight + "px";

      // optional: reset to auto after animation
      setTimeout(() => {
        content.style.height = "auto";
      }, 300);
    }

    toggle.classList.toggle("open", !isOpen);
  });
});

document.querySelectorAll(".toggle-section").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const content = toggle.nextElementSibling;

    if (content.style.height && content.style.height !== "0px") {
      // Section is open → collapse
      content.style.height = content.scrollHeight + "px"; // set to current height to trigger transition
      requestAnimationFrame(() => { 
        content.style.height = "0px"; 
      });
    } else {
      // Section is closed → expand
      content.style.height = content.scrollHeight + "px";
      content.addEventListener("transitionend", function handler() {
        content.style.height = "auto"; // let it resize naturally
        content.removeEventListener("transitionend", handler);
      });
    }
  });
});

document.querySelectorAll(".course-title").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const content = toggle.nextElementSibling; // .sub-courses

    if (content.style.height && content.style.height !== "0px") {
      // Section is open → collapse
      // Collapse
content.style.height = content.scrollHeight + "px"; // fix current height

// Force the browser to recalc styles immediately (reflow)
content.offsetHeight; // read a layout property to flush the change

// Then collapse
content.style.height = "0px";
      toggle.classList.remove("open"); // arrow rotation
    } else {
      // Section is closed → expand
      content.style.height = content.scrollHeight + "px"; // animate expand
      content.addEventListener("transitionend", function handler() {
        content.style.height = "auto"; // allow natural resizing
        content.removeEventListener("transitionend", handler);
      });
      toggle.classList.add("open"); // arrow rotation
    }
  });
});