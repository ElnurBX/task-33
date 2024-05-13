import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Details = () => {
    const {id} = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`).then(res => setProduct(res.data))
    },[])
    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <img src={product.img} width="200" alt="" />
        </div>
    )
}

export default Details