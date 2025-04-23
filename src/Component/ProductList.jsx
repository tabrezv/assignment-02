import React from 'react'
import { products } from '../memory'
function ProductList() {
  return (
    <div>
        <h1>Products List</h1>
        <table border={1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name Name</th>
                    <th>Quantity</th>
                    <th> Price </th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default ProductList