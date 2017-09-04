const series = require('./src/series.json');
const movies = require('./src/movies.json');

module.exports = () => ({
  series: series,
  movies: movies
});
