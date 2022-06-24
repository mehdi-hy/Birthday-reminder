import React from 'react'

const List = ({ people, clearPage }) => {
  console.log(people)

  return (
    <div className='section'>
      <main>
        <div className='container'>
          <h3>We have {people.length} Birthdays today</h3>
          {people.map((person) => {
            return (
              <div className='person' key={person.id}>
                <img src={person.img} alt={person.name} />
                <h4>{person.name}</h4>
                <p>{person.age}</p>
              </div>
            )
          })}

          <button onClick={clearPage}>Clear all</button>
        </div>
      </main>
    </div>
  )
}

export default List
