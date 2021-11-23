import React, { Component, useEffect, useState } from 'react';

const [producto, setProductos] = useState([])


useEffect(()=>{
    let productos = [{
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
    setProductos(producto);
},[]);

export default useEffect;






 
