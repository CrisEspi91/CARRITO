import { useState } from "react";

const ItemCount = ({stock, initial}) =>{
    // Voy a sumar hasta que el número sea menor o igual al stock
    // Voy a restar hasta que el número sea mayor o igual al valor inicial
    //Declaro el hoock para el contador
    const[count, setCount] = useState(initial);
    //Agregar función que suma para el boton + y para restar -
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

    const onAdd = () => {
        alert(`Agregaste ${count} productos.`)
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
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
        
    )
}

export default ItemCount;