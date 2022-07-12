import React, {useState} from "react"

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial)

    const suma = () => {
        count < stock ? setCount (count + 1) : alert('La compra máxima es de 10 unidades por producto')
    }
    const resta = () => {
        if (count > initial) {
            setCount(count -1)
        }
        else { alert(`compra minima: ${initial}`)}
        }
    
    
    const reset = () => {
        setCount(initial)
    }
    
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={suma}>+</button>
            <button onClick={resta}>-</button>
            <button onClick={()=> onAdd(count)}>Agregar al carrito</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default ItemCount


