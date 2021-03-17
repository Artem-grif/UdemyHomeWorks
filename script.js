'use strict';

//Lesson 18. Практика , ч3. Используем функции


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}

// start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};


function rememberMyFilms() {
    for (let i = 0; i <= 1; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if (a == null || a.length > 50 || a == '' || b == null || b.length > 50 || b == '' || isNaN(b)) {
            console.log('Error!');
            i--;
        } else {
            personalMovieDB.movies[a] = b;
            console.log('done');
        }
    }
}

// rememberMyFilms();


function detectPersonalLevel() {
    if (numberOfFilms < 10 && numberOfFilms > 0) {
        alert('Просмотрено довольно мало фильмов');
    } else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
        alert('Вы классический зритель');
    } else if (numberOfFilms > 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

// detectPersonalLevel();


function showMyDB() { //Первый способ
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

// function showMyDB(hidden) {                        //Второй способ
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);


// function writeYourGenres() {                    // Первый способ
//     for (let i = 1; i <= 3; i++) {
//         const a = prompt(`Ваш любимый жанр под номером ${i}?`, '');
//         personalMovieDB.genres[i - 1] = a;
//     }
// }

// writeYourGenres();


function writeYourGenres() { // Второй способ
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`, '');       // Вставляем вопрос вместо промежуточной переменной.
    }
}

writeYourGenres();