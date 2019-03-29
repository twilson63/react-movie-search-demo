import React, { useState }  from 'react'
import styled from 'styled-components'

const Field = styled.div`
  margin-top: 20px;
  margin-left: 5px;
  margin-right: 5px;
`

function noop() { return null }

function Form(props) {
  const { doSearch=noop } = props

  const [criteria, setCriteria] = useState('')
  
  function handleSubmit(e) {
    e.preventDefault()
    doSearch(criteria)
    setCriteria('')
  }

  return (

    <form onSubmit={handleSubmit}>
      <Field className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label" htmlFor="criteria">Movie Name</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input
                value={criteria}
                onChange={e => setCriteria(e.target.value)}
                className="input"
                id="criteria"
                type="text"
                placeholder="Enter Movie Name"
              />
            </div>
          </div>
          <div className="field">
            <button className="button" type="submit">
              Search
            </button>
          </div>
         </div>
       </Field>
    </form>
  )
}

export default Form
