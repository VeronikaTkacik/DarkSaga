document.querySelector('.legend-btn').addEventListener('click', function () {
  window.location.href = 'legend.html'; // Сторінка Легенди
});
document.querySelector('.light-btn').addEventListener('click', function () {
  window.location.href = 'light.html'; // Сторінка для шляху Світла
});
document.querySelector('.shadow-btn').addEventListener('click', function () {
  window.location.href = 'shadow.html'; // Сторінка для шляху Тінь
});
document.querySelector('.atonement-btn').addEventListener('click', function () {
  window.location.href = 'atonement.html'; // Сторінка для шляху Спокута
});

/*    // Ваш JavaScript код для спінера тут
    const spinner = document.getElementById('spinner'); // Спінер

    // Показати спінер перед завантаженням сторінки
    window.addEventListener('beforeunload', function() {
        spinner.style.display = 'block';
        spinner.classList.add('show'); // Додаємо клас для анімації
    });

    // Сховати спінер після завантаження сторінки
    window.addEventListener('load', function() {
        spinner.classList.remove('show'); // Видаляємо клас для анімації
        setTimeout(() => {
            spinner.style.display = 'none'; // Сховати спінер після завершення анімації
        }, 300);
    });
*/
