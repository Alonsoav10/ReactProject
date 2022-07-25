import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemList from './ItemList'
import ItemCount from './ItemCount'
import ItemDetail from '../ItemDetail/ItemDetail'

import zap1 from '../../images/zap1.webp'
import zap2 from '../../images/zap2.webp'
import zap3 from '../../images/zap3.webp'
import zap4 from '../../images/zap4.webp'
import zap5 from '../../images/zap5.webp'
import zap6 from '../../images/zap6.webp'

const ItemListContainer = () => {
    
    const [items, setItems] = useState({})
    const [loading, setLoading] = useState(true) 

    const productos = [
        {id: 1, name: 'Air Force 1', price: 100, stock: 10, image: zap1},
        {id: 2, name: 'Air Force 1 B/N', price: 100, stock: 15, image: zap2},
        {id: 3, name: 'Air Force 1 negras', price: 100, stock: 20, image: zap3},
        {id: 4, name: 'Air Max', price: 100, stock: 20, image: zap4},
        {id: 5, name: 'Air Force 1 negras', price: 100, stock: 20, image: zap5},
        {id: 6, name: 'Air Force 1 negras', price: 100, stock: 20, image: zap6},
        {id: 6, name: 'Air Force 1 negras', price: 100, stock: 20, image: zap6},
        {id: 6, name: 'Air Force 1 negras', price: 100, stock: 20, image: zap6},
        {id: 6, name: 'Air Force 1 negras', price: 100, stock: 20, image: zap6},
        {id: 6, name: 'Air Force 1 negras', price: 100, stock: 20, image: zap6},

    ]

    const task = new Promise ((resolve, reject) => {
        setTimeout(()=>{
            resolve(productos)
        },2000)
    })


    useEffect(()=> {
        //Acceder a una promesa con el método tradicional
        task
        .then(resolve=> setItems(resolve))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
     
    }, [])
    console.log(items)

    const onAdd = (count) => {
        console.log(count)
    }

    console.log(items)

    return (
        <div style={{ textAlign: 'center', marginTop: 200 }}>
            {loading ? <h1>Loading...</h1>: <ItemList items={items}/>}            
            
            <br />
            
        </div>
    )
}

export default ItemListContainer