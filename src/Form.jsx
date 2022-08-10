import React, { useState } from 'react'

function Form(props) {
  const [form, setForm] = useState({
    chorePeople: '',
  })

  function onFormChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  function addPerson(event) {
    event.preventDefault()
    if (form.chorePeople !== '') {
      console.log('no string')
      props.getFormData({ ...form, table: 'People' })
      setForm({
        chorePeople: '',
      })
    }
  }

  function addChore(event) {
    event.preventDefault()
    if (form.chorePeople !== '') {
      props.getFormData({ ...form, table: 'Chores' })
      setForm({
        chorePeople: '',
      })
    }
  }

  return (
    <>
      <div className="formContainer">
        <form>
          <button onClick={addPerson}>ADD PERSON</button>     
          <input
            type="text"
            name="chorePeople"
            onChange={onFormChange}
            value={form.chorePeople}
            placeholder="Input text here"
          />
          <button onClick={addChore}>ADD CHORE</button>
        </form>

        <button onClick={props.assignChores}>Assign</button>
      </div>
      </>
  )
}

export default Form
