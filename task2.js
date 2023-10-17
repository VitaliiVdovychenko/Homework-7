/**
Напишіть функцію changeCSS, яка спрацьовуватиме по кліку на кнопку
і змінюватиме стиль вмісту тега <p>:
колір шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS"
 */

function changeCSS() {
    // Функція для зміни стилю елементу <p>
    const paragraph = document.querySelector('#text');
  
    // paragraph.style.color = 'orange';
    // paragraph.style.fontSize = '20px';
    // paragraph.style.fontFamily = 'Comic Sans MS';
    paragraph.style.cssText = "color: orange; font-size: 20px; font-family: 'Comic Sans MS'";
  }
  
  const button = document.querySelector('button');
  
  button.addEventListener('click', changeCSS);
  