//import react and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

//create a react components


const App = () => {
    const button = 'click me!'
    const buttonText = { text: 'click me'}
    return(
        <div> 
            <label className="lable" htmlFor="name">Enter name:</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>
            {buttonText.text} 
            </button>
        </div>
    ); 
};

//show react componets
ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));


