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

document.addEventListener("DOMContentLoaded", function () {
  const iconsContainer = document.getElementById("icons-container"); //в переменную iconsContainer кладем значение icons-container из html
  const addIconBtn = document.getElementById("add-icon-btn"); //аналогично
  const removeIconBtn = document.getElementById("remove-icon-btn"); //аналогично

  let iconCount = 0; //счетчик звездочек

  addIconBtn.addEventListener("click", function () { //слушатель событий на кнопку с идентификатором addIconBtn, реагирующий на клик
    const icon = document.createElement("i"); //создаем новый элемент <i>, который будет представлять нашу иконку, он создан, но не отображается
    icon.className = "fa fa-star"; //присваиваем иконке класс fa(1) обозначает использование Font Awesome(это иконочный шрифт, который вместо цифр и букв содержит символы)
    //а класс fa-star указывает на конкретную иконку (звезду в данном случае).
    icon.classList.add("icon"); //добавляем класс "icon" к иконке, он используется для настройки стилей (css)
    icon.dataset.iconId = iconCount; //используем dataset для добавления пользовательского атрибута iconId к иконке, он будет содержать уникальный идентификатор для каждой иконки.
    icon.addEventListener("click", removeIcon); //при нажатии кнопки вызывается функция removeIcon
    iconsContainer.appendChild(icon); //добавляем созданную звездочку в контейнер со звездочками (iconsContainer)
    iconCount++; //увеличиваем счетчик на 1
  });

  function removeIcon() { //объявление функции removeIcon
    const iconId = this.dataset.iconId; // используем ключевое слово this, чтобы обратиться к иконке, на которую был сделан клик. 
    //dataset - это специальное свойство, которое позволяет нам получить доступ к пользовательским атрибутам HTML-элемента.
    // В нашем случае, мы извлекаем значение атрибута data-icon-id, который мы ранее добавили к каждой иконке.
    const iconToRemove = document.querySelector(`[data-icon-id="${iconId}"]`); //используем document.querySelector() для поиска элемента по классу.
    //В данном случае, мы ищем элемент с атрибутом data-icon-id, который соответствует значению iconId. 
    //Это позволяет нам найти конкретную иконку, которую нужно удалить.
    iconsContainer.removeChild(iconToRemove); //удаляем найденную иконку из контейнера iconsContainer, используя метод removeChild()
  }

  removeIconBtn.addEventListener("click", function () { //добавляем слушатель события по клику на кнопку с идентификатором removeIconBtn
    event.preventDefault(); //предотвращает перезагрузку страницы при клике на нее
    const icons = document.querySelectorAll(".icon"); //используем document.querySelectorAll() для получения всех элементов с классом "icon",
    //то есть всех добавленных иконок на странице.
    if (icons.length > 0) { //Мы проверяем, есть ли на странице добавленные иконки. 
      icons[icons.length - 1].remove(); //Если есть удаляем последнюю добавленную иконку, обращаясь к ней в массиве icons по индексу icons.length - 1
    } else { //Если иконок на старнице нет
      alert("Нет добавленных иконок для удаления."); //выводим сообщение об этом с помощью alert()
    }
  });
});
