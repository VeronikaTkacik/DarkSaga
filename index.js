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


function openModal() {
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}



