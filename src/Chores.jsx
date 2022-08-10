import React from 'react'

function Chores(props) {
  return (
    <>
      <div className="column">
        <h3>Chores</h3>
        {props.formData.Chores.map((chore, i) => {
          return <li key={i}>{chore}</li>
        })}
      </div>
    </>
  )
}

export default Chores
