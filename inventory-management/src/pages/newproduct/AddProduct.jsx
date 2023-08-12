import React, {useContext, useState} from 'react'
import {departments} from '../../data/Departments'
import {ProductContext} from '../../context/ProductContext'
import {useNavigate} from 'react-router-dom'

export const AddProduct = () => {
    const {productState, productDispatch} = useContext(ProductContext)
    const navigate = useNavigate()
    const [pdata,
        setPdata] = useState({
        id: 0,
        department: "",
        name: "",
        description: "",
        price: 0,
        stock: 0,
        sku: "",
        supplier: "",
        delivered: 0,
        imageUrl: ""
    })

    const productLength = productState.length +1;

    const handleNewProduct = () => {
        console.log(productLength)
        setPdata(prev => ({
            ...prev,
            id: productLength
        }));
        productDispatch({type: "add_product", payload: pdata})
        // navigate("/products")
    }
    return (
        <div className='flex-column'>
            <h2>Add New Product</h2>
            <label htmlFor="dept">Department:</label>
            <select
                name="dept"
                id="dept"
                onChange={(e) => setPdata((prev) => ({
                ...prev,
                department: e.target.value
            }))}>
                {departments.map((item) => (
                    <option value={item}>{item}</option>
                ))}
            </select>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => setPdata((prev) => ({
                ...prev,
                name: e.target.value
            }))}/>
            <label htmlFor="desc">Description:</label>
            <textarea
                name="desc"
                id="desc"
                rows="3"
                onChange={(e) => setPdata((prev) => ({
                ...prev,
                description: e.target.value
            }))}/>
            <label htmlFor="price">Price:</label>
            <input
                type="number"
                name="price"
                id="price"
                onChange={(e) => setPdata((prev) => ({
                ...prev,
                price: e.target.value
            }))}/>
            <label htmlFor="stock">Stock:</label>
            <input
                type="number"
                name="stock"
                id="stock"
                onChange={(e) => setPdata((prev) => ({
                ...prev,
                stock: e.target.value
            }))}/>
            <label htmlFor="sku">SKU:</label>
            <input
                type="text"
                name="sku"
                id="sku"
                onChange={(e) => setPdata((prev) => ({
                ...prev,
                sku: e.target.value
            }))}/>
            <label htmlFor="supplier">Supplier:</label>
            <input
                type="text"
                name="supplier"
                id="supplier"
                onChange={(e) => setPdata((prev) => ({
                ...prev,
                supplier: e.target.value
            }))}/>
            <label htmlFor="delivered">Delivered:</label>
            <input
                type="number"
                name="delivered"
                id="delivered"
                onChange={(e) => setPdata((prev) => ({
                ...prev,
                delivered: e.target.value
            }))}/>
            <label htmlFor="image">ImageUrl:</label>
            <input
                type="text"
                name="image"
                id="image"
                onChange={(e) => setPdata((prev) => ({
                ...prev,
                imageUrl: e.target.value
            }))}/>
            <button onClick={handleNewProduct}>Add Product</button>
        </div>
    )
}
