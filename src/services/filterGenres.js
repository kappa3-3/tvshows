export function filterGenres (array, genre) {
  return array.filter(show => show.genres.indexOf(genre) !== -1)
}
