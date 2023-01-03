document.addEventListener("mousemove", parallax);
function parallax(event) {
  this.querySelectorAll(".layer").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 100;
    const y = (window.innerHeight - event.pageY * position) / 100;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
