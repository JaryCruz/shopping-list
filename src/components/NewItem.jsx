import { Button } from 'react-bootstrap'

const NewItem = ({ title, id, deleteItem }) => {
  return (
    <div className="bg-light text-dark d-flex justify-content-between p-2 rounded mb-3">
      <p className='mb-0 p-1'>{title}</p>
      <Button variant='dark' onClick={() => deleteItem(id)}>
        X
      </Button>
    </div>
  )
}

export default NewItem