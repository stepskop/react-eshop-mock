import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQnt, setTotalQnt] = useState(0)
    const [qnt, setQnt] = useState(1)
    const [selsize, setSize] = useState()

    let foundProduct
    let index

    const onAdd = (product, quantity, pickedsize) => {

        if (pickedsize) {
            const checkProductInCart = cartItems.find((item) => item._id === product._id)
            const checkSameSize = cartItems.find((item) => ((item.pickedsize === pickedsize) && (item._id === product._id)))
            
            setTotalQnt((prevTotQnt) => prevTotQnt + quantity)
            setTotalPrice((prevTotPrice) => prevTotPrice + product.price * quantity)

            if (checkProductInCart) {
            
                if (!checkSameSize) {
                    product.pickedsize = pickedsize
                    product.quantity = quantity
                    setCartItems([...cartItems, {...product}])
                } else {
                    const updatedCart = cartItems.map((cartProd) => {
                        if (cartProd._id === product._id) return {
                            ...cartProd,
                            quantity: cartProd.quantity + quantity
                        } 
                        else {
                            return cartProd
                        }
                    })
                    setCartItems(updatedCart)
                }
            
            } else {
                product.pickedsize = pickedsize
                product.quantity = quantity
                setCartItems([...cartItems, {...product}])
            }
            
            toast.success(`${qnt} ${product.name} (${pickedsize}) added to cart!`)
        } else {
            toast.error("Please select size")
        }
    }

    const cartQnt = (id, value, itemSize) => {
        foundProduct = cartItems.find((item) => ((item._id === id) && (item.pickedsize === itemSize)))
        index = cartItems.findIndex((prod) => ((prod._id === id) && (prod.pickedsize === itemSize)))

        
        if (value === 'add') {
            setCartItems(prevCartItems => prevCartItems.map(item => {
                if ((item._id === id) && (item.pickedsize === itemSize)) {
                    return {...item, quantity: foundProduct.quantity + 1}
                }
                return item
            }))
            setTotalPrice((prevTotPrice)=> prevTotPrice + foundProduct.price)
            setTotalQnt(prevTotQnt => prevTotQnt + 1)
        } else if(value === 'min') {
            if (foundProduct.quantity > 1) {
                setCartItems(prevCartItems => prevCartItems.map(item => {
                    if ((item._id === id) && (item.pickedsize === itemSize)) {
                        return {...item, quantity: foundProduct.quantity - 1}
                    }
                    return item
                }))
                setTotalPrice((prevTotPrice)=> prevTotPrice - foundProduct.price)
                setTotalQnt(prevTotQnt => prevTotQnt - 1)
            }
        }
    }
    const delItem = (id, itemSize) =>{
        let notherItems = [...cartItems]
        let foundProduct = cartItems.find((item) => (item._id === id) && (item.pickedsize === itemSize))
        notherItems.splice(notherItems.indexOf(foundProduct),1)
        setCartItems(notherItems)
        setTotalPrice((prevTotPrice)=> prevTotPrice - (foundProduct.price * foundProduct.quantity))
        setTotalQnt(prevTotQnt => prevTotQnt - foundProduct.quantity)

    }
    const qntAdd = () => {
        setQnt(prev => prev + 1)
    }
    const qntMin = () => {
        setQnt(prev => {
            if (prev - 1 < 1) return 1
            return prev - 1
        })
    }

    return (
        <Context.Provider
            value={{
                showCart,
                setShowCart,
                cartItems,
                totalPrice,
                totalQnt,
                setSize,
                selsize,
                qnt,
                qntAdd,
                qntMin,
                onAdd,
                cartQnt,
                delItem
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)