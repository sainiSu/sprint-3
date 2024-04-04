const movies = require("./data");

// Exercise 1: Get the array of all directors.(with map() array method)
function getAllDirectors(array) {
  let result = array.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director(with filter() array method)
function getMoviesFromDirector(array, director) {
  return  array.filter(movie => movie.director === director);
}

// Exercise 3: Calculate the average of the films of a given director.(with reduce() array method)
function moviesAverageOfDirector(array, director) {
  const movieDirector = array.filter(movie => movie.director === director);//filter director whom score we want to see:
  if(movieDirector.length === 0){
    return 0; //movie is not found
  }
  const result = movieDirector.reduce((total, movie) => total + movie.score, 0);
  const average = result / movieDirector.length;
  return Math.round(average * 100)/100;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const top20Movies = array.slice();//for 20 movies:
  const title  = top20Movies.map(item => item.title); //should not mutate the original array
  //return the titles alphabatically:
  title.sort();
  //should return all of items when the array passed has fewer than 20 items:
  return title.length <= 20 ? title : title.slice(0,20);
};
// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const sortedMovies = [...array];  // spread operator
  sortedMovies.sort((a, b) => {    //sorted all the movies by year with tittle:
    //year and title comparision as sort method needds comparison
    const comparison1 = `${a.year} - ${a.title}`;
    const comparison2 = `${b.year} - ${b.title}`;
    //comapre these strings using localCompare:
    return comparison1.localeCompare(comparison2);
  });
  return sortedMovies;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies,genre) {
    const filteredMovies = movies.filter(movie => movie.genre.includes(genre));//filter movie by include genre
    if(filteredMovies.length === 0){
      return 0;//when movie not found
    }
    const result = filteredMovies.reduce((total, movie) => total + movie.score, 0);
    const average =  result / filteredMovies.length;
    return parseFloat(average.toFixed(2))
  }

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
    //'should return an array',:
    if (!Array.isArray(movies)) {
      console.error('Input must be an array of movies');
      return [];
    }
    // should return a new array, not update the original one'we can Split the duration by space
    const result = movies.map(movie => {
      const durationParts = movie.duration.split(' '); 
      let totalMinutes = 0;
  //should return an array of movies with duration as a number:
      for (let part of durationParts) {
        if (part.includes('h')) {
          const hours = parseInt(part);
          totalMinutes += hours * 60; //change hours into minutes
        } else if (part.includes('min')) {
          const minutes = parseInt(part);
          totalMinutes += minutes; //minutes
        } else {
          console.error(`Invalid duration format for movie: ${movie.duration}`);
          return { ...movie };
        }
      }
      return {
        ...movie,
        duration: totalMinutes
      };
    });
    return result;
  }
  

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies,year) {
  const filmsOfYear = movies.filter(movie => movie.year === year);//filtered the movie by given year 
  if (filmsOfYear.length === 0){ //condition if no movie found in that year
    return []; //return an array 
  }
  //Now find the movies with the high score:
  let bestMovie = filmsOfYear[0];
  for(let i = 1; i < filmsOfYear.length; i++){
    if(filmsOfYear[i].score > bestMovie.score){
      bestMovie = filmsOfYear[i];
    }
  }
  return [bestMovie];
}
// The following is required to make unit tests work.
// Environment setup. Do not modify the below code. 
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}






