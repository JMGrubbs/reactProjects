import React from 'react';
import reactDOM from 'react-dom';
import Faker from 'faker'
import Component from '../src/components/CompentDetails'
import ApprovalCard from '../src/components/ApprovalCard'

const App = () => {
    return (
        <div className="Comments">
            <div className ="ui container comments">
            <ApprovalCard>
                <Component 
                    author="Sam" 
                    message="Nice blog post" 
                    time="6:00PM" 
                    avatar={Faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <Component 
                    author="Dan" 
                    message="Sweeet post!" 
                    time="7:00PM" 
                    avatar={Faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <Component 
                    author="Bobby" 
                    message="Very Helpful, thanks!" 
                    time="8:00PM" 
                    avatar={Faker.image.avatar()}/>
            </ApprovalCard>
            </div>
        </div>    
    )
}

reactDOM.render(<App />,
    document.getElementById('root')
)