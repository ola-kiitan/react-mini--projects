import React, { useState } from 'react'

const Loading = () => {
  const [loading, setLoading] = useState(true)
  const showLoading = () => setLoading(true)

  const hideLoading = () => setLoading(false)
  if (loading)
    return (
      <div className='loading'>
        <h1>loading...</h1>
      </div>
    )
}

export default Loading
