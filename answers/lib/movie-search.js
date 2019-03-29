/* global fetch */
const url = 'https://movie-search.twilson63.sh'

export default s => fetch(`${url}/?s=${s}`, { method: 'POST' }).then(res => res.json())
