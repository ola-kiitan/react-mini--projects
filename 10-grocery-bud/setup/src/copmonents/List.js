import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ editItem, deleteItem, items }) => {
  return (
    <div className='grocery-list'>
      {items.map((item) => {
        const { id, title } = item

        return (
          <article key={id} className='grocery-item'>
            <p>{title}</p>
            <div className='btn-container'>
              <button
                type='button'
                className='edit-btn'
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                type='button'
                onClick={() => deleteItem(id)}
                className='delete-btn'
              >
                <FaTrash />
              </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default List
