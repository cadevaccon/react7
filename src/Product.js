import React from 'react'
import { Link, Route } from 'react-router-dom';

function Product({title,dis}) {
    
    return (
        <div>
                <h2>Product</h2>

                
            {title}
            <br/>
            {dis}



        </div>
    )
}

export default Product
