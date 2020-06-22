import React from 'react'
import '../styling/style.css'

const Item = ({itemName,picture, handleChange}) => {
   return( <div className="item">
        <a>{itemName}</a>
        <img src={picture} alt="img" onClick ={handleChange}></img>
    </div>)
}

export default Item