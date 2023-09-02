import React from 'react'
import ProImg from "./../../assets/vapeimg-removebg-preview.png"

export const Card = (props) => {
  return (
    <div className="product__card">
        <img src={ProImg} alt="" />
        <div className="product__details">
            <h3>{props.name}</h3>
            <p>{props.details}</p>
            <a href="#home">Get Now</a>
        </div>
    </div>
  )
}
