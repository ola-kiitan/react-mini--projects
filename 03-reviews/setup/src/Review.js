import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]
  const checkIndex = (number) => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
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
    let person = Math.floor(Math.random() * people.length)
    if (person === index) {
      person = index + 1
    }
    setIndex(checkIndex(person))
  }
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
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
