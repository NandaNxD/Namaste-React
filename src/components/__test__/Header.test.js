import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from '../../utils/AppStore'
import { BrowserRouter } from "react-router-dom"
import UserContext from "../../utils/UserContext"
import "@testing-library/jest-dom"

describe('Header Test',()=>{

    it('should load header with cart button',()=>{
        render(
            <BrowserRouter>
            <UserContext.Provider value={{loggedInUser:'nandan'}}>
            <Provider store={appStore}>
                <Header/>
            </Provider>
            </UserContext.Provider>
            </BrowserRouter>
        )
        
        const cart=screen.findByText(/cart/);

        const online=screen.findByText(/online/);

        const about=screen.findByText(/about/);
        
    })

    it('should render header with cart items 0',()=>{
        render(
            <BrowserRouter>
            <UserContext.Provider value={{loggedInUser:'nandan'}}>
            <Provider store={appStore}>
                <Header/>
            </Provider>
            </UserContext.Provider>
            </BrowserRouter>
        )
        
        const cart=screen.findByText('Cart (0)');
        
    })

    it('should change login button to logout on click',()=>{
        render(
            <BrowserRouter>
            <UserContext.Provider value={{loggedInUser:'nandan'}}>
            <Provider store={appStore}>
                <Header/>
            </Provider>
            </UserContext.Provider>
            </BrowserRouter>
        )
        
        let loginButton=screen.getByText('login');

        fireEvent.click(loginButton);

        const logoutButton=screen.getByText('logout');

        
        fireEvent.click(logoutButton);

        loginButton=screen.getByText('login');
        
    })
   

})