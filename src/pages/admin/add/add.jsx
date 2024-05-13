
import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'
import AddForm from '../../../components/AddForm/AddForm'
import Dashbord from '../../../components/Dashbord/Dashbord'

const Add = () => {
    const {data,setdata} = useContext(MainContext)
    return (
    <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Add</title>
                {/* <link rel="icon" type="image/x-icon" href="x"></link> favicon*/}
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div>
                <AddForm />
                <Dashbord/>
            </div>
    </>
    )
}

export default Add
    