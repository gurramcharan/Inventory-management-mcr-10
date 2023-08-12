import { createContext, useReducer } from "react";
import { inventoryData } from "../data/Data";
import { productReducer } from "../reducer/ProductReducer";
import { filterReducer } from "../reducer/FilterReducer";

export const ProductContext = createContext()

export const ProductProvider = ({children}) => {

    const allData = inventoryData;

    const initialData = allData

    const [productState, productDispatch] = useReducer(productReducer, initialData)

    const initialFilters = {
        departments:"",
        lowstock:false,
        sortby:""
    }

    const [filterState,filterDispatch] = useReducer(filterReducer,initialFilters)

    const allStock = productState.reduce((acc,curr) => curr.stock + acc,0)

    const deliveryCount = productState.reduce((acc,curr) => curr.delivered + acc,0)

    const lowStockItemsCount = productState.reduce((acc,curr) => curr.stock <= 10 ? acc+1 : acc,0) 

    const lowStock = filterState.lowstock ? productState.filter((item) => item.stock <= 10) : productState;

    const sortbyProducts = filterState.sortby === "name" ? [...lowStock].sort((a, b) => a.name.localeCompare(b.name)): filterState.sortby === "price" ? [...lowStock].sort((a,b) => a.price - b.price): filterState.sortby === "stock" ? [...lowStock].sort((a,b) => a.stock - b.stock) : lowStock;
    
    const sortedItems = filterState.departments === "Kitchen" ? sortbyProducts.filter((item) => item.department === "Kitchen") : filterState.departments === "Clothing" ? sortbyProducts.filter((item) => item.department === "Clothing") : filterState.departments === "Toys" ? sortbyProducts.filter((item) => item.department === "Toys") : sortbyProducts; 


    return(
        <ProductContext.Provider value={{allData, allStock, deliveryCount, lowStockItemsCount,productState,productDispatch,filterState,filterDispatch,sortedItems}}>
            {children}
        </ProductContext.Provider>
    )
}