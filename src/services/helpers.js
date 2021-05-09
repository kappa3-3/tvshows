import axios from 'axios'

export function resolveApiCall (url) {
  const tvmazePromise = new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(data => resolve(data.data))
  })
  return tvmazePromise
}

export function generateGenresList (array) {
  return array.reduce((acc, show) => {
    show.genres.forEach(genre => {
      if (acc.indexOf(genre) === -1) {
        acc.push(genre)
      }
    })
    return acc
  }, [])
}

export function categorizeShows (array, genresList) {
  const categorisedShows = genresList.map(genreListed => ({ id: genreListed, shows: [] }))
  array.forEach(show => {
    show.genres.forEach(genre => {
      categorisedShows.forEach(({ id, shows }) => {
        if (id === genre) {
          shows.push(show)
        }
      })
    })
  })
  return categorisedShows
}
