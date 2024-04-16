import { render,screen } from "@testing-library/react"
import Contact from "../Contact";
import '@testing-library/jest-dom';


describe('Contact test',()=>{


    it('should load Contact component',()=>{
        render(<Contact/>);
    
        const heading=screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    
    })
    
    it('should load Button inside contact component',()=>{
        render(<Contact/>);
    
        const button=screen.getByRole('button');
        expect(button).toBeInTheDocument();
    
    })
    
    
    it('should load Message Input in Contact Component',()=>{
        render(<Contact/>);
    
        const messageInput=screen.getByPlaceholderText('Message');
    
        expect(messageInput).toBeInTheDocument();
    
    })
    
    
    it('should load 2 Inputs in Contact Component',()=>{
        render(<Contact/>);
    
        const messageInputs=screen.getAllByRole('textbox');
    
    })


})

