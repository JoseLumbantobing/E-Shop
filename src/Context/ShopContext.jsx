import React from "react";
import { createContext } from "react";
import all_product from '../Components/Assets/all_product'

// Create context
export const ShopContext = createContext(null);

// Create function
const ShopContextProvider = (props) => {

    // Get data from all_product
    const contextValue = {all_product};

    return (
        <ShopContext.Provider value={contextValue}>
            {/* children -> each data from all_product */}
            {props.children}
        </ShopContext.Provider>
    )
}

// export function to index.js so the context can be use to all category
export default ShopContextProvider;