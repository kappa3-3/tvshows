import axios from 'axios'

export function resolveApiCall (url) {
  const tvmazePromise = new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(data => resolve(data.data))
  })
  return tvmazePromise
}
