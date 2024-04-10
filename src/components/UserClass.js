import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count:0,
        }

    }
    render(){
        return (
            <div>
                <h1>{this.state.test}</h1>
                <button  onClick={()=>{
                   this.setState({
                    test:this.state.test?0:1,
                   })}}
                   >
                    Add
                </button>
                <h2>{this.props.name}</h2>
                <h3>Frontend Developer</h3>
                <h3>React Developer</h3>
            </div>
        )
    }
}

export default UserClass;