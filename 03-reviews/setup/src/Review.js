import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { id, name, job, image, text } = people(index)
  return (
    <article>
      <img src={image} alt={name} />
      <FaQuoteRight className='' />
      <h4>{name}</h4>
      <h4>{job}</h4>
      <p>{text}</p>
      <div>
        <span onClick={moveLeft}>
          <FaChevronLeft />
        </span>
        <span onClick={moveRight}>
          <FaChevronRight />
        </span>
      </div>
      <button>Random quote</button>
    </article>
  )
}

export default Review
