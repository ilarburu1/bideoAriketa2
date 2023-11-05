let bideoa = document.getElementById("bideoa");
let jo = document.getElementById("jo");
let eten = document.getElementById("eten");
let oihal = document.getElementById("oihala");
let intervalID;

jo.onclick = function () {
  bideoa.play();
};

eten.onclick = function () {
  bideoa.pause();
};

bideoa.addEventListener("play", function () {
  kapturakHasi();
});

bideoa.addEventListener("pause", function () {
  clearInterval(intervalID);
});

function kapturakHasi() {
  intervalID = setInterval(function () {
    const ctx = oihal.getContext("2d");
    ctx.drawImage(bideoa, 0, 0, 150, 100);
  }, 0); // Captura cada segundo (ajusta según tus necesidades)
}
