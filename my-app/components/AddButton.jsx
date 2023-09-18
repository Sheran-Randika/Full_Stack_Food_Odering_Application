import React from 'react'
import Style from '../styles/AddButton.module.css'

const AddButton = ({setClose}) => {
  return (
    <div onClick={()=>setClose(false)} className={Style.mainAddButton}>Add New Pizza</div>
  )
}

export default AddButton