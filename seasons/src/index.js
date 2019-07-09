import SeasonDisplay from '../src/SeasonDisplay'
import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from './Spinner'; 

// import App from '../src/App'

class App extends React.Component{ 
    state = {lat: null, errorMessage: '', month: new Date().getMonth()};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
        )
    }

    renderComponet(){
        if (this.state.errorMessage && this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay month={this.state.month} lat={this.state.lat}/>
        }

        return <Spinner message="Please accept location request"/>
    }

    // componentWillUpdate(){
    //     console.log("Did update")
    // }

    render() {
        return(
            <div className="border red">
                {this.renderComponet()}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
