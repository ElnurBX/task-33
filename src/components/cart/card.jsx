import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({item,index,addBasket}) => {
    return (

            <div key={index} className="Card">
                                    <div className="card" >
                                    <img src={item.img} className="card-img-top" height={"200"} alt="..."/>
                                    <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.price}</p>
                                        <div className="d-flex">
                                        <Link to={`/det/${item.id}`} className="btn btn-primary col-6 ">Go details</Link>
                                        <div className="col-1"></div>
                                        <button className='btn btn-primary col-5 ' onClick={()=>addBasket(item)}> Add basket  </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

    )
}

export default Card