// Находим все изображения на странице
const images = document.querySelectorAll('.photo-item img');

// Функция для увелечения изображения
function enlargeImage(event) {
    event.target.style.transform = 'scale(1.2)'; // Увеличиваем изображение на 20%
    event.target.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)'; // Добавляем тень
    event.target.style.cursor = 'pointer'; // Изменяем курсор на "указатель"
    console.log('Сработало')
};

// Функция для возвращения к исходному размеру
function resetImage(event) {
    event.target.style.transform = 'scale(1)'; // Возвращаем исходный размер
    event.target.style.boxShadow = 'none'; // Убираем тень
}

//Добавляем обработчики событий для каждого изображения
images.forEach(image => {
    image.addEventListener('mouseover', enlargeImage); // При наведении курсора
    image.addEventListener('mouseout', resetImage); // При убирании курсора
});





// Находим все изображения на странице
const gif = document.querySelectorAll('.gif');

// Функция для увелечения изображения
function enlargeImage(event) {
    event.target.style.transform = 'scale(1.2)'; // Увеличиваем изображение на 20%
    event.target.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)'; // Добавляем тень
    event.target.style.cursor = 'pointer'; // Изменяем курсор на "указатель"
};

// Функция для возвращения к исходному размеру
function resetImage(event) {
    event.target.style.transform = 'scale(1)'; // Возвращаем исходный размер
    event.target.style.boxShadow = 'none'; // Убираем тень
}

//Добавляем обработчики событий для каждого изображения
gif.forEach(gif => {
    gif.addEventListener('mouseover', enlargeImage); // При наведении курсора
    gif.addEventListener('mouseout', resetImage); // При убирании курсора
});