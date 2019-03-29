import React, {useState} from 'react'

import Collection from './components/Collection'
import Header from './components/Header'
import Form from './components/Form'
import search from './lib/movie-search'




function App() {
  const [movies, setMovies] = useState([])

  function doSearch(criteria) {
    search(criteria)
      .then(res => {
        if (res.Response === 'True') {
          setMovies(res.Search)
        }
      })
      .catch(err => console.log({err}))
  }
  return (
    <>
      <Header />
      <Form doSearch={doSearch} />
      <Collection movies={movies} />
    </>
  )
}

export default App
