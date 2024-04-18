import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from '../../utils/AppStore'
import { BrowserRouter } from "react-router-dom"
import UserContext from "../../utils/UserContext"
import "@testing-library/jest-dom"
import Body from "../Body";
import MOCK_SEARCH_DATA from '../mocks/MOCK_SEARCH_DATA.json'
import { act } from "react-dom/test-utils"

global.fetch=jest.fn(()=>{
    return Promise.resolve(
            {
                json:()=>{
                    return Promise.resolve(MOCK_SEARCH_DATA);
                },
            }
       
        );
})

it('should render body component',()=>{

    render(   <BrowserRouter>
        <UserContext.Provider value={{loggedInUser:'nandan'}}>
        <Provider store={appStore}>
            <Body/>
        </Provider>
        </UserContext.Provider>
        </BrowserRouter>)

})

it('should display 2 cards on search body component',async ()=>{

    await act(
        async()=>render(<BrowserRouter>
                            <Body/>
                        </BrowserRouter>
                        )
            )

        const searchInput=screen.getAllByRole('textbox')[0];
    
        expect(searchInput).toBeInTheDocument();

        fireEvent.change(searchInput,{
            target:{
                value:'ar'
            }
        })

        const searchButton=screen.getByText('Search');

        const cardsBefore=screen.getAllByTestId('resCard');
        
        expect(cardsBefore.length).toBe(9)

        fireEvent.click(searchButton);

        const cards=screen.getAllByTestId('resCard');
        
        expect(cards.length).toBe(4)

})