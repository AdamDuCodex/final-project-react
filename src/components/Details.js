import React, {useContext, useState} from 'react';
import {useParams} from 'react-router-dom';
import {DataContext} from './DataProvider';

export default function Details() {

    const {id} = useParams();
    const [products, setProducts] = useContext(DataContext);

    const details = products.filter((product, index) => {
        return product.id === id
    })
    console.log(details)

    return (
        <>
            {
                details.map(product => (
                    <div className="details" key={product.id}>
                        <div className="img-container" style={{backgroundImage: `url(${product.image})`}}>
                            <div className="box-details">
                                <h2>{product.title}</h2>
                                <h3>${product.price}</h3>
                                <h4>{product.category}</h4>
                                <p>{product.description}</p>

                                <div className="thumb">
                                    {
                                        product.image.map((img, index) => (
                                            <img src={img} alt="" key={index} />
                                        ))
                                    }
                                </div>
                                <button className="cart">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )

}