import React from 'react'
import Card from './Card'
import styled from 'styled-components'


const map = (fn, list) => list.map(fn)

const card = movie => <Card movie={movie} />

const List = styled.div`
  margin: 20px 10px;
`

function Collection (props) {
  const { movies=[] } = props

  return (
    <List className="columns is-multiline">
      {movies.length > 0 ? map(card, movies) : <p>No Movies...</p>}
    </List>
  )
}

export default Collection
