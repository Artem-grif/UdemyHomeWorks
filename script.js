'use strict';

//Lesson 24. Практика, ч4. Используем объекты6


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    rememberMyFilms: function () {
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
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            const a = prompt(`Ваш любимый жанр под номером ${i}?`, '');
            if (a == null || a == '') {
                console.log('Error!');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = a;
            }
        }
        personalMovieDB.genres.forEach(function (item, i) {
            console.log(`Любимый жанр №${i + 1}: - это ${item}`);
        });
    },
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};


// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.writeYourGenres();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.toggleVisibleMyDB();