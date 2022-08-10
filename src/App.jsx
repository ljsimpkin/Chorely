import React, { useState } from 'react'
import './App.css';

import Form from './Form'
import People from './People'
import Chores from './Chores'
import Assign from './Assign'

function App() {
  const peopleChores = {
    People: [],
    Chores: [],
  }
  const [formData, setFormData] = useState(peopleChores)
  const [assignVis, setAssignVis] = useState(false)

  function getFormData(form) {
    let newFormData = { ...formData }
    newFormData[form.table].push(form.chorePeople)
    setFormData(newFormData)
  }
  function assignChores() {
    setAssignVis(true)
  }

  return (
    <>
        <div className='container'>
          <People formData={formData} />
          <Form getFormData={getFormData} assignChores={assignChores}/>
          <Chores formData={formData} />
        </div>
        
        {assignVis && <Assign formData={formData} />}
    </>
  )
}

export default App
