import { useState } from "react";
import ItemCount from "./ItemCount";



const ItemListContainer = ({greeting}) => {
    const [stock, setStock] = useState(6)
    const onAdd = cantidad => { setStock(stock - cantidad) }

    console.log("props de ILC", greeting);
    return (
    <div>
        <h2>Soy el ItemListContainer</h2>
        <h3>{greeting}</h3>
        <ItemCount stock={stock} onAdd={onAdd} initial={1}/>
    </div> );   
};  


export default ItemListContainer;