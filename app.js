const endDate = "6 July 2025 07:00:00 PM";
var x = setInterval(function () {
  function date() {
    const end = new Date(endDate);
    const now = new Date();
    console.log(end);
    console.log(now);
    const diff = (end - now) / 1000;
    var days = Math.floor(diff / 3600 / 24);
    var hours = Math.floor(diff / 3600) % 24;
    var minutes = Math.floor(diff / 60) % 60;
    var seconds = Math.floor(diff) % 60;
    document.getElementById("days").innerHTML = days + "\nDays";
    document.getElementById("hours").innerHTML = hours + "\nhours";
    document.getElementById("minutes").innerHTML = minutes + "\nminutes";
    document.getElementById("seconds").innerHTML = seconds + "\nseconds";
  }
  date();
}, 1000);

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");
window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;
  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;
  cursorOutline.style.left = `${posX}px`;
  cursorOutline.style.top = `${posY}px`;
  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    {
      duration: 1000,
      fill: "backwards",
    }
  );
});

var animateButton = function (e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function () {
    e.target.classList.remove('animate');
  }, 700);
};

var classname = document.getElementsByClassName("confetti-button");

for (var i = 0; i < classname.length; i++) {
  classname[i].addEventListener('click', animateButton, false);
}
