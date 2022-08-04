import React, { useContext, useState , useRef, useEffect } from 'react';
import { DataContext } from './DataProvider';
import { Link } from 'react-router-dom';

export default function Cart() {

    const value = useContext(DataContext);
    const [cart, setCart] = value.cart;
    const [total, setTotal] = useState(0);
    const imgDiv = useRef();

    useEffect (() => {
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + (item.price * item.count)
            }, 0)
            setTotal(res)
        }
        getTotal()
    }, [cart])

    const decrease = id => {
        cart.forEach(item => {
            if(item.id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        setCart([...cart])
    }

    const increase = id => {
        cart.forEach(item => {
            if(item.id === id) {
                item.count += 1;
            }
        })
        setCart([...cart])
    }

    const removeProduct = id => {
        if(window.confirm("Do you want to remove this product?")) {
            cart.forEach((item, index) => {
                if(item.id === id) {
                    cart.splice(index, 1)
                }
            })
            setCart([...cart])
        }
    }

    const handleMouseMove = e => {
        const {left, top, width, height} = e.target.getBoundingClientRect();
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
    }

    if(cart.length === 0)
        return <h2 style={{textAlign: "center", fontSize: "5rem"}}>Cart Empty</h2>

    return (
        <>
            {
                cart.map(product => (
                    <div className="details cart" key={product.id}>
                        <div className="img-container" onMouseMove={handleMouseMove} style={{backgroundImage: `url(${product.image})`}} ref={imgDiv} onMouseLeave={() => imgDiv.current.style.backgroundPosition = `top`} />
                        <div className="box-details">
                            <h2 title={product.title}>{product.title}</h2>
                            <h3>${product.price}</h3>
                            <h4>{product.category}</h4>
                            <p>{product.description}</p>
                            
                            <div className='amount'>
                                <button className='count' onClick={() => decrease(product.id)}> - </button>
                                <span>{product.count}</span>
                                <button className='count' onClick={() => increase(product.id)}> + </button>
                            </div>

                            <div className='delete' onClick={() => removeProduct(product.id)}>X</div>
                        </div>
                    </div>
                ))
            }

            <div className='total'>
                <h3>Total: $ {total}</h3>
                <Link to="/checkout">Checkout</Link>
            </div>
        </>
    )

}