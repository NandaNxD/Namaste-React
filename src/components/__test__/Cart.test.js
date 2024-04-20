import { act } from "react-test-renderer"
import '@testing-library/jest-dom';
import { fireEvent, render } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_MENU from '../mocks/MOCK_MENU.json'
import { Provider } from "react-redux";
import appStore from "../../utils/AppStore";
import { screen } from "@testing-library/react";
import Header from "../Header";
import UserContext from "../../utils/UserContext";
import { BrowserRouter } from "react-router-dom";
import Cart from '../Cart';

describe('Cart',()=>{

    global.fetch=jest.fn(()=>{
        return Promise.resolve(
            {
                json(){
                    return Promise.resolve(
                        MOCK_MENU
                    );
                }
            }
        )
    })

    it('should load restaurant menu component',async()=>{
        await act(()=>render(
            <Provider store={appStore}>
                <RestaurantMenu/>
            </Provider>
        ))
    })


    
    it('should load 5 Menu Categories',async()=>{
        await act(()=>render(
            <Provider store={appStore}>
                <RestaurantMenu/>
            </Provider>
        ))
        const categories=screen.getAllByTestId('res-category');

        expect(categories.length).toBe(5)
        
    })

    it('should res category pot rice to have 3 items',async()=>{
        await act(()=>render(
            <BrowserRouter>
            <Provider store={appStore}>
                <UserContext.Provider value={{loggedInUser:'test',setLoggedInUser:''}}>
                    <Header/>
                    <RestaurantMenu/>
                </UserContext.Provider>
            </Provider>
            </BrowserRouter>
        ))

        fireEvent.click(screen.getAllByTestId('accordian-control-div')[1]);

        expect(screen.getAllByTestId('item-div').length).toBe(3)

    })


    it('should Add 3 Items to Cart',async()=>{
        await act(()=>render(
            <BrowserRouter>
            <Provider store={appStore}>
                <UserContext.Provider value={{loggedInUser:'test',setLoggedInUser:''}}>
                    <Header/>
                    <RestaurantMenu/>
                    <Cart/>
                </UserContext.Provider>
            </Provider>
            </BrowserRouter>
        ))

        fireEvent.click(screen.getAllByTestId('accordian-control-div')[1]);

        expect(screen.getAllByTestId('item-div').length).toBe(3);

        const addBtns=screen.getAllByTestId('add-btn')

        let cartCount=0;

        for(let addBtn of addBtns){
            fireEvent.click(addBtn);
            cartCount++;

            (screen.findByText(`Cart (${cartCount})`));
        }

        const items=screen.getAllByTestId('item-div')
        expect(items.length).toBe(6)

        const clearCartBtn=screen.getByTestId('clear-cart');
        fireEvent.click(clearCartBtn);

        screen.findByText('Cart Empty!!');

        fireEvent.click(screen.getAllByTestId('accordian-control-div')[1]);

    })



})