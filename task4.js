/**
 Реалізуйте логіку видалення вибраного елементу списку при натисканні на кнопку.
 Видаляти елементи можна в будь якому порядку.
 */
const mySelect = document.getElementById('mySelect');
const deleteButton = document.getElementById('deleteButton');

deleteButton.addEventListener('click', function() {
  const selectedOption = mySelect.options[mySelect.selectedIndex];
  mySelect.remove(mySelect.selectedIndex);
});