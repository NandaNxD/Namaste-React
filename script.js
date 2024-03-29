import React from "react";
import ReactDOM from "react-dom/client"

const parent=React.createElement(
    'div',{id:'parent'},
    React.createElement(
        'div',
        {id:'child',className:'heading'},

        React.createElement(
            'h1',
            {id:'child',className:'heading',},
            'Im an h1'
        ),
        React.createElement(
            'h1',
            {id:'child',className:'heading',},
            'Im an h1'
        )       
    )
);



const heading=React.createElement('h1',{id:'heading'},'hello world')
console.log(heading)

const root=ReactDOM.createRoot(document.getElementById('root'));
console.log(root)

root.render(parent)