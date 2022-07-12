import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = () => {

    const onAdd = (count) => {
        console.log(count)
    }

    return (
        <div style={{ textAlign: 'center', marginTop: 200 }}>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </div>
    )
}

export default ItemListContainer