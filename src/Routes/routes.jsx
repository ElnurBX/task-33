
import AdminRoot from "../pages/admin/AdminRoot"

import Add from "../pages/admin/add/add"
import Error from "../pages/error/error/error"
import SiteRoot from "../pages/site/SiteRoot"
import Basket from "../pages/site/basket/basket"
import Details from "../pages/site/details/details"
import Home from "../pages/site/home/home"

const ROUTES =[
    {
        path:"/",
        element:<SiteRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/basket",
                element:<Basket/>
            },{
                path:"/det/:id",
                element:<Details/>
            }
        ]
    },
    {
        path:"/admin",
        element: <AdminRoot/>,
        children:[
            {
                path:"",
                element:<Add/>
            },
        ]
    }
    ,    {
        path:"*",
        element:<Error/>,
        
    },
]
export default ROUTES;