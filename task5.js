/*
Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення
"I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!",\
а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
Нове повідомлення додається до уснуючих.
додаткове випробування: обмежити кількість виведених повідомлень до 5,
при додаванні повіомлення після 5го, зі сторінки має зникнути найстаріше повідомлення.
*/
const button = document.querySelector('button');
const messageContainer = document.createElement('div');
messageContainer.className = 'message-container';
document.body.appendChild(messageContainer);

button.addEventListener('click', function() {
  showMessage("I was pressed!");
});

button.addEventListener('mouseover', function() {
  showMessage("Mouse on me!");
});

button.addEventListener('mouseout', function() {
  showMessage("Mouse is not on me!");
});

function showMessage(message) {
  const messageElement = document.createElement('p');
  messageElement.textContent = message;
  messageContainer.appendChild(messageElement);

  if (messageContainer.children.length > 5) {
    messageContainer.removeChild(messageContainer.firstChild);
  }
}
