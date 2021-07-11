/* Задания на урок:
1) Удалить все рекламные блоки со страницы (правая часть сайта)
2) Изменить жанр фильма, поменять "комедия" на "драма"
3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS
4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 
5) Добавить нумерацию выведенных фильмов */

'use strict';


const adv = document.querySelectorAll('.promo__adv img'),
      bg = document.querySelector('.promo__bg'),
      genre = bg.querySelector('.promo__genre'),
    //   interactive = document.querySelectorAll('.promo__interactive-item'),
    interactive = document.querySelector('.promo__interactive-list'),
      movieDB = {
         movies: [
            "Логан",
            "Одержимость",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Скотт Пилигрим против..."
        ]
};

adv.forEach(item => {
    item.remove();
});

// adv[0].remove();

genre.textContent = 'драма';

// genre[0].textContent = 'ДРАМА';

// bg.style.cssText = 'background: url(img/bg.jpg) center center/cover no-repeat';

bg.style.backgroundImage = 'url("img/bg.jpg")';

interactive.innerHTML = '';

movieDB.movies.sort();

// for (let i = 0; i < movieDB.movies.length; i++) {
//         interactive[i].textContent = `${i + 1 + '.' + ' '}` + movieDB.movies[i];
//     }

 movieDB.movies.forEach ((film, i) => {
    interactive.innerHTML += `
        <li class="promo__interactive-item">${i + 1 + '.'} ${film}
            <div class="delete"></div>
        </li>`;
 });