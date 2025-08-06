import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ShoppingCartContext = createContext({});

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState(()=>{
    const savedItem = localStorage.getItem('mjMart-cart')
   return savedItem ? JSON.parse(savedItem) : []
  });

 useEffect(()=>{
  localStorage.setItem('mjMart-cart' , JSON.stringify(cartItems))
 },[cartItems])

  const increase = (id) => {
    setCartItems((prev) => {
      let selectedItem = prev.find((item) => item.id == id);

      if (selectedItem == null) {
        return [...prev, { id: id, qty: 1 }];
      } else {
        return prev.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decrese = (id) => {
    setCartItems((prev) => {
      let selectedItem = prev.find((item) => {
        return item.id == id;
      });

      if (selectedItem.qty == 1) {
        return prev.filter((item) => {
          return item.id !== id;
        });
      } else {
        return prev.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return { ...item };
          }
        });
      }
    });
  };

  const removeItem = (id) => {
    setCartItems((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

const totalQty = cartItems.reduce((acc , cur)=>(
 (acc) + (cur.qty)
),0)

 

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, setCartItems, increase, decrese, removeItem, totalQty }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
