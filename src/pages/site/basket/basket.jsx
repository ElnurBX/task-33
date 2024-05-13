
import React, { useContext, useState } from 'react'
import MainContext from '../../../context/context'
import { Helmet } from 'react-helmet'
const Basket = () => {
    const {setbasket,basket} = useContext(MainContext)

    const addBasket=(item)=>{
       console.log(item)
       const target=(basket).map((basketItem) => {
        if (basketItem.item.id === item.item.id) {
            return { ...basketItem, count: basketItem.count + 1 };
        }
        return basketItem;
    });

       setbasket(target)
       localStorage.setItem("basket", JSON.stringify(target));
    }
    const deleteItem = (item) => {
        const updatedBasket = basket.map((basketItem) => {
            if (basketItem.item.id === item.item.id && basketItem.count > 0) {
                return { ...basketItem, count: basketItem.count - 1 };
            }
            return basketItem;
        });
        const filteredBasket = updatedBasket.filter((basketItem) => basketItem.count > 0);
    
        setbasket(filteredBasket);
        localStorage.setItem("basket", JSON.stringify(filteredBasket));
    }
    
  return (
    <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>basket</title>
    <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div>
        <table className="table">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">title</th>
        <th scope="col">price</th>
        <th scope="col">img</th>
        <th scope="col">-</th>
        <th scope="col">count</th>
        <th scope="col">+</th>
        </tr>
    </thead>
    <tbody>
        {
            (basket).map((item,index)=>(
                <tr key={index}>
                <th scope="row">{index}</th>
                <td>{item.item.title}</td>
                <td>{item.item.price}</td>
                <td><img height={"60px"} src={item.item.img} alt="" /></td>
                <td><button className='btn btn-danger'onClick={()=>deleteItem(item)}     > -</button></td>
                <td><span className='text'   > {item.count}</span></td>
                <td><button className='btn btn-danger'  onClick={()=>addBasket(item)}   > +</button></td>
                </tr>
            ))

        }   
    
    </tbody>
    </table>
    </div>
    </>
  )
}

export default Basket