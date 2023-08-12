import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import "./Dashboard.css"

export const Dashboard = () => {
  const { allStock, deliveryCount, lowStockItemsCount} = useContext(ProductContext)
  
  return (
    <div className='dashboard-container'>
      <div className='dashboard-icons'>
        <h3 style={{color:"green"}}>{allStock}</h3>
        <p>Total Stock</p>
      </div>
      <div className='dashboard-icons'>
        <h3 style={{color:"orange"}}>{deliveryCount}</h3>
        <p>Total Delivered</p>
      </div>
      <div className='dashboard-icons'>
        <h3 style={{color:"red"}}>{lowStockItemsCount}</h3>
        <p>Low Stock Items</p>
      </div>
    </div>
  )
}
