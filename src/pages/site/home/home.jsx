
import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'

import Card from '../../../components/cart/card'
import './home.scss'
const Home = () => {
    const {data,setdata,setbasket,basket} = useContext(MainContext) 
    const[sortdata,setsortdata]=useState(data)
    useEffect(() => {
        setsortdata(data);
        console.log("mengeldim");
    }, [data.length]);

    const Sorting=(str)=>{
        console.log("Sorting option selected:", str ,sortdata);
        let sortedData = [...sortdata]; 
        
        switch (str) {
            case "a-c":
                sortedData.sort((a, b) => a.price - b.price);
                break;
            case "c-a":
                sortedData.sort((a, b) => b.price - a.price);
                break;
            case "default":
                sortedData = [...data];
                break
            default:
                break;
        }
    
        setsortdata(sortedData); 
    }
    const Searchdata=(str)=>{
        if(str=="") return setsortdata(data)
        let searchdata = sortdata.filter(x => x.title.toLowerCase().includes(str.toLowerCase()));
        setsortdata(searchdata);
    }
    const addBasket=(item)=>{
        const target = basket.filter(x => x.item.id === item.id); 
        console.log(basket,target)
        if(target.length!==0){
            target[0].count+=1
        }else{
            const basketItem={
                count:1,
                item:item
            }
            basket.push(basketItem)
            setbasket(basket)
            console.log(basket,basketItem)
            console.log(item)
            localStorage.setItem("basket",JSON.stringify(basket))
        }
    }
    
    return (
    <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <main>
                   <section className='HomeBanner'> 
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6 img">
                                <img src="https://preview.colorlib.com/theme/shop/img/header-img.png" alt="" />
                            </div>
                            <div className="col-6 text ">
                                <h2>
                                    <span>
                                    Flat 
                                    </span>
                                    <h4>
                                    75%Off
                                    </h4>
                                    IT’S HAPPENING <br />THIS SEASON!
                                    <br />
                                    <button className='btn btn-white'>
                                        Purchase Now
                                    </button>
                                </h2>
                            </div>
                        </div>
                    </div>
                   </section>
                   
                   <section className='container productsSection'>
                        <div className="searchsort">
                        <div className="sortdiv">
                            <select onChange={(e) => Sorting(e.target.value)}>
                                <option value="default">secin</option>
                                <option value="a-c">Azdan coxa</option>
                                <option value="c-a">Coxdan aza</option>
                            </select>
                            
                        </div>
                            <div className="search">
                                <input placeholder='Search...' type="text" onChange={(e)=>Searchdata(e.target.value)} />
                            </div>
                        </div>
                        <h1>New realeased Products for Women</h1>
                        <span>Who are in extremely love with eco friendly system.</span>
                        {   <div className='d-flex cards '>

                          
                        {sortdata.map((item,index)=>(
                            <Card item={item} key={index} addBasket={addBasket}/>
                        ))}
                         </div>
                        }
                   </section>
            </main>
    </>
    )
}

export default Home
    