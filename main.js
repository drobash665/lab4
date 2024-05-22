function validation(form) {
  let result = true;
  return result;
}
document.getElementById("forma").addEventListener("submit", function (event) {
  event.preventDefault(); //что бы страница не перезагружалась
  if (validation(this) == true) {
    alert("Форма проверена успешно!");
  }
});

let formcontent = document.querySelector(".light-theme");
let themebuttom = document.getElementById("theme-button");

themebuttom.onclick = function () {
  formcontent.classList.toggle("dark-theme");
};

