'use strict';
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
        toggleVisibleMyDB: function() {
            if (privat === false) {
                privat == true;
            }
        },
        showMyDB: function(hidden) {
            if (!hidden) {
                console.log(personalMovieDB);
            }
        },
        detectPersonalLevel: function() {
            if (personalMovieDB.count < 10) {
                console.log('Просмотрено довольно мало фильмов');
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log('Вы классический зритель');
            } else if (personalMovieDB.count >= 30) {
                console.log('Вы киноман');
            } else {
                console.log('Произошла ошибка');
            }
        },
        rememberMyFilms: function() {
            for (let i = 0; i < 2; i++) {
                const a = prompt('Один из последних просмотренных фильмов?', ''),
                    b = prompt('На сколько оцените его?', '');

                if (a != '' && b != '' && a != null && b != null && a.length < 50) {
                    personalMovieDB.movies[a] = b;
                } else {
                    i--;
                }
            }
        },
        writeYourGenres: function() {
            for (let i = 1; i <= 3; i++) {

                personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
            }
            if (personalMovieDB.genres[i - 1] == null || personalMovieDB.genres[i - 1] == '') {
                i--;
            }
            personalMovieDB.genres.forEach(function(item, i) {
                console.log(`Любимый жанр ${i} - это ${personalMovieDB.genres[i]}`);
            })
        },
    }
    /* 
    
    при помощи метода forEach вывести в консоль сообщения в таком виде:
    ""*/