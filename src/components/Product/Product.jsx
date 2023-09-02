import React from 'react'
import "./product.css"
import { Card } from './Card'

export const Product = () => {
  return (
    <section className="product" id="product">
        <div className="product__title">
            <h1>Our Products</h1>
            <p>We have top quality products for you</p>
        </div>

        <div className="product__section">
            <Card
            id = "1" 
            name = "Product 1"
            details = "Details About Product 1"
            />

            <Card
            id = "2" 
            name = "Product 2"
            details = "Details About Product 2"
            />

            <Card
            id = "3" 
            name = "Product 3"
            details = "Details About Product 3"
            />
        </div>

    </section>
  )
}
