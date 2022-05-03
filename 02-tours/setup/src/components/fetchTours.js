import React, { useState, useEffect } from 'react'
import { showLoading, hideLoading } from './Loading'
import Tour from './Tour'
const url = 'https://course-api.com/react-tours-project'
export default function fetchTours() {
  const [tours, setTours] = useState([])
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id != id)
    setTours(newTours)
  }
  const getTours = async () => {
    showLoading()
    try {
      const response = await fetch(url)
      const tours = await response.json()
      console.log(tours)
      hideLoading()
      setTours(tours)
    } catch (error) {
      hideLoading()
      console.log(error)
    }
  }
  useEffect(() => {
    getTours()
  }, [])
  if (tours.length === 0) {
    return (
      <main>
        <h2>No tours left</h2>
      </main>
    )
  }
  return (
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />
        })}
      </div>
    </section>
  )
}
