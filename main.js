// Получаем элементы бургер-меню, навигационного меню и полоски иконки бургер-меню
const burgerMenu = document.querySelector('.button-burger-menu'); // Иконка бургер-меню
const nav = document.querySelector('header-menu'); // Меню навигации
const burgerBars = document.querySelectorAll('.burger-menu'); // Полоски внутри бургер-меню

// Флаг, который хранит состояние меню (открыто/закрыто)
let isOpenMenu = false;

// Обработчик клика по иконке бургер-меню
burgerMenu.addEventListener('click', function () {
    // Переключаем флаг состояния меню (открыто/закрыто)
    isOpenMenu = !isOpenMenu;
    // В зависимости от состояния (true или false) вызываем функцию переключения
    toggleMenu();
});

// Обработчик изменения размера окна
window.addEventListener('resize', applyStyles);

// Функция, которая переключает состояние меню в зависимости от флага isOpenMenu
function toggleMenu() {
    if (isOpenMenu) {
        // Если меню открыто, применяем стили "крестика" для бургер-меню и показываем мобильное меню
        adaptiveMenuOpen();
        showMobileMenu();
    } else {
        // Если меню закрыто, возвращаем бургер-меню в исходное состояние и скрываем мобильное меню
        adaptiveMenuClose();
        hideMobileMenu();
    }
}

// Функция, которая отслеживает изменение размера экрана и применяет соответствующие стили
function applyStyles() {
    // Проверка, является ли текущее окно десктопным (ширина больше или равна 768px)
    const isDesktop = window.matchMedia("(min-width: 1120px)").matches;
    if (isDesktop) {
        // Если ширина экрана больше или равна 768px (десктопная версия), возвращаем стили для десктопа
        resetToDesktop();
    } else if (isOpenMenu) {
        // Если ширина экрана меньше 768px и меню открыто, сохраняем крестик и мобильное меню
        adaptiveMenuOpen();  // Меняем иконку бургер-меню на крестик
        showMobileMenu();    // Показываем мобильное меню
    }
}

// Функция, которая визуально открывает бургер-меню (меняет полоски на крестик)
function adaptiveMenuOpen() {
    burgerBars[0].style.transform = 'rotate(45deg) translateY(12.5px)'; // Верхняя полоска вращается
    burgerBars[1].style.opacity = '0'; // Средняя полоска исчезает
    burgerBars[2].style.transform = 'rotate(-45deg) translateY(-12.5px)'; // Нижняя полоска вращается
}

// Функция, которая визуально закрывает бургер-меню (возвращает полоски в исходное положение)
function adaptiveMenuClose() {
    burgerBars[0].style.transform = 'rotate(0deg)'; // Возвращаем верхнюю полоску в исходное состояние
    burgerBars[1].style.opacity = '1'; // Восстанавливаем среднюю полоску
    burgerBars[2].style.transform = 'rotate(0deg)'; // Возвращаем нижнюю полоску в исходное состояние
}

// Функция, которая отображает мобильное меню (переключение с десктопной версии на адаптивную)
function showMobileMenu() {
    nav.classList.remove('header-menu'); // Убираем класс десктопного меню
    nav.classList.add('button-burger-menu'); // Добавляем класс для отображения адаптивного меню
}

// Функция, которая скрывает мобильное меню (переключение с адаптивной версии на десктопную)
function hideMobileMenu() {
    nav.classList.remove('button-burger-menu'); // Убираем класс адаптивного меню
    nav.classList.add('header-menu'); // Возвращаем класс десктопного меню
}

// Функция, которая сбрасывает стили для десктопа, если окно увеличено
function resetToDesktop() {
    hideMobileMenu(); // Скрываем адаптивное меню и показываем десктопное
    if (!isOpenMenu) {
        // Только если меню закрыто (isOpenMenu === false), возвращаем бургер-меню в исходное состояние
        adaptiveMenuClose();
    }
}

