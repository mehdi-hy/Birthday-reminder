import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [people, setPeople] = useState(data)
  console.log(people)
  const clearPage = () => {
    setPeople([])
  }
  return (
    <>
      <List {...{ people, clearPage }} />
    </>
  )
}

export default App
