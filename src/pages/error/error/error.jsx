
import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'

const Error = () => {
    const {data,setdata} = useContext(MainContext)
    return (
    <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Error</title>
                {/* <link rel="icon" type="image/x-icon" href="x"></link> favicon*/}
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div>Error page
            </div>
    </>
    )
}

export default Error
    