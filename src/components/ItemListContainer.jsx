import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import getProducts from "./services/handMadePromise";
import ItemList from "./items/ItemList";



const ItemListContainer = ({greeting}) => {
  
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts
        .then(res => {
            setProducts(res)
        })
        .catch(err => alert("estamos ante un problema", err))
    }, [])



    const [stock, setStock] = useState(6)
    const onAdd = cantidad => { setStock(stock - cantidad) }

    console.log("props de ILC", greeting);

    

    return (
    <div>
        <h2>Soy el ItemListContainer</h2>
        <h3>{greeting}</h3>
        <ItemCount stock={stock} onAdd={onAdd} initial={1}/>
        <ItemList products={products}/>
    </div> );   
};  


export default ItemListContainer;