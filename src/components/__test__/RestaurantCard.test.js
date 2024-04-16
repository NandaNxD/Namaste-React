import { render } from "@testing-library/react"
import RestaurentCard, { withPromotedLabel } from "../RestaurentCard"
import MOCK_CARD_DATA from "../../components/mocks/MOCK_CARD_DATA.json"
import { fireEvent,screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from '../../utils/AppStore'
import { BrowserRouter } from "react-router-dom"
import UserContext from "../../utils/UserContext"
import "@testing-library/jest-dom"


describe('Restaurant Card',()=>{

    it('should render restaurant card and restaurant name',()=>{
        render(<RestaurentCard data={MOCK_CARD_DATA}/>)

        const resName=screen.getByText('Sardarji Londonwaley');        
    })

    
})

describe('Promoted Restaurant Card',()=>{

    it('should render restaurant card and restaurant name',()=>{

        const PromotedCard=withPromotedLabel(RestaurentCard)

        render(<PromotedCard data={MOCK_CARD_DATA}/>)

        const resName=screen.getByText('Sardarji Londonwaley');
        const vegTag=screen.getByText('Veg');    
    })

    
})