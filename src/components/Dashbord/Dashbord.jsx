
import React, { useContext } from 'react'
import MainContext from '../../context/context'
import axios from 'axios'
const Dashbord = () => { 
    const {data,setdata} = useContext(MainContext)
    const deletItem=(id)=>{
        axios.delete(`http://localhost:3000/products/${id}`).then(res=>console.log("object"))
        const target=data.filter((item) => item.id ===id );
        const index = data.indexOf(target[0]);
        data.splice(index, 1);
        setdata(data ) 
    }
    
  return (
    <div>
        <table className="table">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">title</th>
        <th scope="col">price</th>
        <th scope="col">img</th>
        <th scope="col">delete</th>
        </tr>
    </thead>
    <tbody>
        {
            data.map((item,index)=>(
                <tr key={index}>
                <th scope="row">{index}</th>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td><img height={"60px"} src={item.img} alt="" /></td>
                <td><button className='btn btn-danger'  onClick={()=>deletItem(item.id)}> delete</button></td>
                </tr>
            ))

        }   
    
    </tbody>
    </table>
    </div>
  )
}

export default Dashbord