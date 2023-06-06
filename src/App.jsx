import './App.css'
import useLocalStorage from './hooks/useLocalStorage'
import NewItemsForm from './components/NewItemsForm'
import { ItemsList } from './components/ItemsList'

function App() {
  const [items, setItems] = useLocalStorage('items', [])

  const addItem = (title) => {
    setItems(prevItems => [...prevItems, { id: crypto.randomUUID(), title}])
  }

  const deleteItem = (id) => {
    setItems(currentItems => {
      return currentItems.filter(item => item.id !== id)
    })
  }

  return (
    <div className='container-list'>
      <h1 className='text-center mb-4'>Items To Buy</h1>
      <NewItemsForm onSubmit={addItem} />
      <ItemsList items={items} deleteItem={deleteItem} />
    </div>
  )
}

export default App
