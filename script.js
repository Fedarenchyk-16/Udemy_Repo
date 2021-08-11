"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "1");
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}; 

let film,
    mark;

film = prompt("Один из последних просмотренных фильмов?", "1");
mark = prompt("На сколько оцените его?", "1");

let questionArray = [film,mark];

let movie = {};
movie[film] = mark;

console.log(movie);