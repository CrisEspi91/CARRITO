

const  data = [
    {
        id: 1,
        title: "Coaching Ontológico",
        price: 5000
    },
    {
        id: 2,
        title: "Coaching Humanista",
        price: 3500,
    },
    {
        id: 3,
        title: "Curso de Oratoria",
        price: 5000,
    }        
]

const getProducts = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve(data)
    }, 2000)
})

export default getProducts;