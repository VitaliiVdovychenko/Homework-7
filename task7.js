/**
Потрібно реалізувати логіку, яка буде формувати 2 випадаючих списки.
У першому містяться назви країн, у другому – назви міст.
Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку
певна країна - в правому випадаючому списку з'являлися міста цієї країни.
Список міст формується динамічно, через JavaScript.
Також потрібно нижче в параграфі вивести назву обраної країни і місто.
Спробуйте не вносити зміни в html файл.
 */
const countrySelect = document.getElementById('country');
const citiesSelect = document.getElementById('cities');
const paragraph = document.querySelector('p');

const citiesByCountry = {
  ger: ['Berlin', 'Hamburg', 'Munich'],
  usa: ['New York', 'Los Angeles', 'Chicago'],
  ukr: ['Kyiv', 'Lviv', 'Kharkiv'],
};

countrySelect.addEventListener('change', function() {
  const selectedCountry = countrySelect.value;
  
  citiesSelect.innerHTML = '';

  citiesByCountry[selectedCountry].forEach(city => {
    const option = document.createElement('option');
    option.value = city;
    option.textContent = city;
    citiesSelect.appendChild(option);
  });

  paragraph.textContent = `${countrySelect.options[countrySelect.selectedIndex].text}, ${citiesSelect.options[citiesSelect.selectedIndex].text}`;
});

citiesSelect.addEventListener('change', function() {
  paragraph.textContent = `${countrySelect.options[countrySelect.selectedIndex].text}, ${citiesSelect.options[citiesSelect.selectedIndex].text}`;
});
