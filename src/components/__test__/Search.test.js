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


describe('Contact Us Page', () => { 

    global.fetch=jest.fn(()=>{
        return Promise.resolve(
                {
                    json:()=>{
                        return Promise.resolve(MOCK_SEARCH_DATA);
                    },
                }
           
            );
    })

    beforeAll(async ()=>{

    })

    beforeEach(async()=>{

        
        await act(()=>
        render(<BrowserRouter><Body/></BrowserRouter>)
    )

    })
    
    it('should render body component',()=>{
    
    })
    
    it('should display 2 cards on search body component',async ()=>{

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
            
            expect(cards.length).toBe(4);


            fireEvent.change(searchInput,{
                target:{
                    value:''
                }
            })

            fireEvent.click(searchButton);

            expect(screen.getAllByTestId('resCard').length).toBe(9)



            fireEvent.change(searchInput,{
                target:{
                    value:'ar'
                },
            })

            fireEvent.keyDown(searchInput,{
                code:'Enter'
            })
            
            expect(screen.getAllByTestId('resCard').length).toBe(4)


            fireEvent.change(searchInput,{
                target:{
                    value:''
                },
            })

            fireEvent.keyDown(searchInput,{
                code:'Enter'
            })
            
            expect(screen.getAllByTestId('resCard').length).toBe(9)

    
    })
    
    it('should display 4 cards on Top Rated Restaurants Button Click',async ()=>{
    
            const topRatedButton=screen.getByRole('button',{
                name:'Top Rated Restaurants'
            });
    
            const cardsBefore=screen.getAllByTestId('resCard');
            
            expect(cardsBefore.length).toBe(9)
    
            fireEvent.click(topRatedButton);
    
            const cards=screen.getAllByTestId('resCard');
            
            expect(cards.length).toBe(7)
    
    })
    
})

