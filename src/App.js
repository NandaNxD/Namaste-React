"use strict"
import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client"
import Header  from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import {Provider} from 'react-redux'
import appStore from "./utils/AppStore";
import Cart from "./components/Cart";


const AppComponent = () => {
    const [userName,setUserName]=useState('Nan');

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser:userName,setLoggedInUser:setUserName}}>
                <div className="app">
                    <Header/>
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>
    )
}


const About=lazy(()=>{return import('./components/About')})

const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<AppComponent/>,
        children:[
            {
                path:'/',
                element:<Body></Body>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/about',
                element:<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>
            },
            {
                path:'/restaurant/:resId',
                element:<RestaurantMenu/>
            },
            {
                path:'/cart',
                element:<Cart/>
            }
        ],
        errorElement:<Error></Error>
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root)

root.render(<RouterProvider router={appRouter}/>)
