import Item from './Item';


    const ItemList = ({products}) => {
        console.log("products en itemlist", products)
        return( 
            <div>
                {products.map(product => {
                    return(
                        <Item 
                        key={product.id}
                        title={product.title} 
                        price={product.price} 
                        />
                    )
                } )}    
            </div>
        )
    }
export default ItemList;