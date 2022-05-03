import React, { useState } from 'react'

const Tour = ({ id, image, name, info, price }) => {
  const [read, setRead] = useState(false)
  const readMore = () => {
    setRead(!read)
  }

  return (
    <article className='single-tour'>
      <img src={image} alt='' />
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>${price}</h4>
      </div>
      <p>
        {read ? info : `${info.substring(0, 200)}... `}
        <button className='btn' onClick={readMore}>
          {read ? 'show less' : 'read more'}
        </button>
      </p>
      <button className='delete-btn' onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </article>
  )
}

export default Tour
