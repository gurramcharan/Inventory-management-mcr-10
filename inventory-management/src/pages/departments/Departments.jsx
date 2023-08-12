import React, { useContext } from 'react'
import { departments } from '../../data/Departments'
import "./Departments.css"
import { ProductContext } from '../../context/ProductContext'
import { useNavigate } from 'react-router-dom'

export const Departments = () => {
  
  const {filterDispatch,filterState} = useContext(ProductContext)
  const navigate = useNavigate();

  const handleDeptClick = (dept) => {
    filterDispatch({type:"department_filter",payload:dept})
    navigate("/products")
  }

  return (
    <div className='flex-row gap2'>
      {departments.map((dept) => (
        <div key={dept} className='dept-icons'>
          <h2 style={{cursor:"pointer"}} onClick={() => handleDeptClick(dept)}>{dept}</h2>
        </div>
      ))}
      {console.log(filterState)}
    </div>
  )
}
