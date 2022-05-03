import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { id, name, job, image, text } = people(index)
  const checkIndex = () => {
    if (index > people.length - 1) {
      return 0
    }
    if (index < 0) {
      return people.length - 1
    }
  }
  const moveRight = () => {
    const person = index + 1
    setIndex(checkIndex(person))
  }
  const moveLeft = () => {
    const person = index - 1
    setIndex(checkIndex(person))
  }
  const random = () => {
    let person = Math.floor(Math.random(index * people.length))
    setIndex(checkIndex(person))
  }
  return (
    <article className='review'>
      <div className='image-container'>
        <img src={image} alt={name} />
        <span className='quot-icon'>
          <FaQuoteRight />
        </span>
      </div>

      <h4 className='author'>{name}</h4>
      <h4 className='job'>{job}</h4>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={moveLeft}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={moveRight}>
          <FaChevronRight />
        </button>
      </div>
      <button onClick={random}>Random quote</button>
    </article>
  )
}

export default Review
