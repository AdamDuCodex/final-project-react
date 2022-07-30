import React, { useContext } from 'react';
import { DataContext } from './DataProvider';
import { NavLink } from 'react-router-dom';

export default function Products() {
    
    const [products, setProducts] = useContext(DataContext);

    return (
        
        <div className="products">
            {products.map((product) => (
                    <>
                    <div className="card" key={product.id}>
                        <NavLink to={`/products/${product.id}`}>
                            <img src={product.image} alt=""/>
                        </NavLink>
                        <div className="box">
                            <h3 title={product.title}>
                            <NavLink to={`/products/${product.id}`}>{product.title}</NavLink>
                            </h3>
                            <p>{product.description}</p>
                            <h4>{product.price}</h4>
                            <button>Add to cart</button>
                        </div>
                    </div>
                    </>
                ))}
        </div>
    )
}