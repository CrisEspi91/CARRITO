import { useState } from "react";


const ItemCount = ({stock, initial, onAdd}) =>{
    
    const[count, setCount] = useState(initial)

    const addItem = () => {
        const newValue = count + 1;
        if(newValue <= stock){
            setCount(newValue);
        }
    }
    const quitItem = () => {
        const newValue = count - 1;
        if(newValue >= initial){
            setCount(newValue);
        }
    }
    

    console.log("soy el estado inicial del contador", count)  
    return(
        <div>
            <h3>Contador</h3>
            <div>
                <button onClick={addItem}>+</button>
                <h4>{count}</h4>
                <button onClick={quitItem}>-</button>
            </div>
            <button onClick={()=> onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}
export default ItemCount;