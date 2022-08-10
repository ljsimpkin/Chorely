import React from 'react'

function People(props) {
  return (
    <>
      <div className="column">
        <h3>People</h3>
        {props.formData.People.map((person, i) => {
          return <li key={i}>{person}</li>
        })}
      </div>
    </>
  )
}

export default People
