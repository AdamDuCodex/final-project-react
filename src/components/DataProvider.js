import React, { createContext ,useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {

    const [products, setProducts] = useState([]);
    
    useEffect (() => {
        const fakestore = async() => {
        const response = await fetch("https://fakestoreapi.com/products");
        const jsonData = await response.json();
        setProducts(jsonData);
    }
      fakestore();
    }, [])
  
    return (
        <DataContext.Provider value={[products, setProducts]}>
            {props.children}
        </DataContext.Provider>
    )
}