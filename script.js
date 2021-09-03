'use strict';

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function start(){

    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == " " || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }

}

function rememberMyFilms(){

    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
        }else{
            i--;
        }
    }
}

function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель");
    }else{
        console.log("Вы киноман");
    }
}

function checkPrivateValue(){
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
        console.log("is false");
    }else{
        console.log("is true");
    }
}

function askAboutGenres(){
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i+1}`));
        // let buff = prompt(`Ваш любимый жанр под номером ${i+1}`);
        // personalMovieDB.genres.push(buff);
    }
}

start();
rememberMyFilms();
detectPersonalLevel();
askAboutGenres();
checkPrivateValue();

