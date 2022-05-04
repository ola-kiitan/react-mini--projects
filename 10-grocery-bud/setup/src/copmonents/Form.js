import React from 'react'
import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}
export default function Form() {
  const [input, setInput] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [isEdit, setEdit] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input) {
      showAlert(true, 'please write an item', 'danger')
    } else if (input && isEdit) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: input }
          }
          return item
        })
      )
      setInput('')
      setEdit(false)
      setEditId(null)
      showAlert(true, 'item edited', 'success')
    } else {
      showAlert(true, 'item added', 'success')
      const newInput = { id: new Date().getTime().toString(), title: input }
      setList(() => {
        setList([...list, newInput])
      })
      setInput('')
    }
  }
  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type })
  }
  const clearList = () => {
    showAlert(true, 'empty list', 'danger')
    setList([])
  }
  const deleteItem = (id) => {
    showAlert(true, 'item deleted', 'danger')
    const newList = list.filter((item) => item.id != id)
    setList(newList)
  }
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setEditId(id)
    setEdit(true)
    setInput(specificItem)
  }
  useEffect(() => {
    localStorage.setItem('list'.JSON.stringify(list))
  }, [list])
  return (
    <>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>Grocery bud</h3>
        <div>
          <input
            type='text'
            className='grocery'
            placeholder='E.g eggs'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button>{isEdit ? 'edit' : 'submit'}</button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} delete={deleteItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            clear Items
          </button>
        </div>
      )}
    </>
  )
}
