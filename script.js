'use strict';

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }


// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }

//     console.log(i);

// }




const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};


// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');


for (let i = 0; i <= 1; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a == null || a.length > 50 || a == '' || b == null || b.length > 50 || b == '') {
        console.log('Error!');
        i--;
    } else {
        personalMovieDB.movies[a] = b;
        console.log('done');
    }

}

if (numberOfFilms < 10 && numberOfFilms > 0) {
    alert('Просмотрено довольно мало фильмов');
} else if (numberOfFilms >= 10 && numberOfFilms <= 30){
    alert('Вы классический зритель');
} else if (numberOfFilms > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}


console.log(personalMovieDB);