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

    const isOpen = content.style.display === "block";

    content.style.display = isOpen ? "none" : "block";
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