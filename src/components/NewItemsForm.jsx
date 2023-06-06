import { Form, Button } from 'react-bootstrap'
import { useState, useRef } from 'react'

const NewItemsForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState('')
  const inputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newItem === '') return

    onSubmit(newItem)

    setNewItem('')
    inputRef.current.focus()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 form-list">
        <Form.Control type="text" placeholder="Add Item..." ref={inputRef} onChange={e => setNewItem(e.target.value)} value={newItem} />
        <Button variant="light" type='submit'>Add</Button>
      </Form.Group>
    </Form>
  )
}

export default NewItemsForm