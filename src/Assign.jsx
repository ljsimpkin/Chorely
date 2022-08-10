import React from 'react'

function Assign(props) {
  let task = assignChores(props)
  const people = Object.keys(task)

  return (
    <>
      <div className="result">
          <ul>
            {people.map((person, i) => {
              return (
                <>
                    <h3>{person}</h3>
                  {task[person].map((chore, i) => {
                    return <li key={i}>{chore}</li>
                  })}
                </>
              )
            })}
          </ul>
        </div>
    </>
  )
}

export default Assign

// UTILS

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

function assignChores(props) {
  let tasks = {}
  let shufflePeople = shuffle(props.formData.People)
  props.formData.Chores.forEach((chore, i) => {
    if (!tasks[shufflePeople[i % shufflePeople.length]]) {
      tasks[shufflePeople[i % shufflePeople.length]] = [chore]
    } else {
      tasks[shufflePeople[i % shufflePeople.length]].push(chore)
    }
  })
  return tasks
}
