'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let i = 1;
let a, b;
while (i <= 2) {
    a = prompt('Один из последних просмотренных фильмов?');
    b = prompt('На сколько оцените его?');
    i++;
    if (a === '' || a.length > 50) {
        continue;
    }
}

personalMovieDB.movies[a] = b;
if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}