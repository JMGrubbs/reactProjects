import React from 'react';
import ReactDOM from 'react-dom';

// import App from '../src/App'

class App extends React.Component{ 
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            error: null
        };
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({error: err})
        )
      }

    render() {
        console.log(this.state.lat)
        return (
            <div> Latitude: {this.state.lat}</div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
