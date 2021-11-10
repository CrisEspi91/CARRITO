import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
    console.log("props de ILC", greeting);
    return (
    <div>
        <h2>Soy el ItemListContainer</h2>
        <h3>{greeting}</h3>
        <ItemCount stock={6} initial={1}/>
    </div> );   
};  


export default ItemListContainer;