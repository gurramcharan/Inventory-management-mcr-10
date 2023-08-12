import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../../context/ProductContext'


export const ProductDetail = () => {
  const {productId} = useParams()
  const {productState} = useContext(ProductContext)
  const product = productState.filter((item) => item.id == productId)
    return (
        <div>
          {product.map((item) => (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <img src={item.imageUrl} alt={item.name} width="400px" />
              <p>Price: ${item.price}</p>
              <p>Stock: {item.stock}</p>
              <p>Supplier: {item.supplier}</p>
              <p>Department: {item.department}</p>
              <p>SKU: {item.sku}</p>
              <p>Delivered: {item.delivered}</p>
              <p>Description: {item.description}</p>
            </div>
          ))}
        </div>
    )
}
