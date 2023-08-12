import React, {useContext} from 'react'
import {ProductContext} from '../../context/ProductContext'
import {Link} from "react-router-dom"
import {departments} from '../../data/Departments'

export const Products = () => {
    const {filterDispatch,sortedItems} = useContext(ProductContext)
    return (
        <div className="main-container">
            <div className="filter-container flex-row space-between align-items">
                <h2>Products</h2>
                <select name="department" id="department" onChange={(e) => filterDispatch({type:"department_filter",payload:e.target.value})}>
                    <option value="all">All Departments</option>
                    {departments.map((dept) => (
                        <option value={dept}>{dept}</option>
                    ))}
                </select>
                <div>
                    <input id='low-stock' type="checkbox"  onChange={(e) => filterDispatch({type:"low_stock_filter"})}/>
                    <label htmlFor="low-stock">Low stock Items</label>
                </div>
                <select name="sort" id="sort" onChange={(e) => filterDispatch({type:"sort_by_filter",payload:e.target.value})}>
                    <option value="">Sort By</option>
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="stock">Stock</option>
                </select>
                <Link
                    to='/addproduct'
                    style={{
                    textDecoration: "none",
                    backgroundColor: "blue",
                    padding: "0.5rem 1rem",
                    color: "white",
                    borderRadius: "5px"
                }}>New</Link>
            </div>
            <div className="products-container">
                <table style={{border:"1px solid black", padding:"2rem", borderCollapse:"collapse"}}>
                    <tr style={{border:"1px solid", backgroundColor:"#f2c188"}}>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Supplier</th>
                    </tr>
                    {sortedItems.map((item) => (
                        <tr key={item.id}>
                            <td><img src={item.imageUrl} alt={item.id} width="100px"/></td>
                            <td>
                                <Link to={`/productdetail/${item.id}`}>{item.name}</Link>
                            </td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>{item.stock}</td>
                            <td>{item.supplier}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}
