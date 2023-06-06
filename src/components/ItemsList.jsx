import NewItem from "./NewItem"

export const ItemsList = ({ items, deleteItem }) => {
  return (
    <div className='mt-4'>
      {items.length === 0 && <span className="d-block text-center fs-3">No Items</span>}
      {items.map(item => (
        <NewItem
          {...item}
          key={item.id}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  )
}
