import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';

class App extends React.Component {  
  state = {lat: null, errorMsg: ''}

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMsg: err.message }),
    )
  }

  componentDidUpdate() {
    console.log('My component was just updated - it rerendered!')
  }

  render () {
    if (this.state.errorMsg && !this.state.lat) {
      return <div>Error: {this.state.errorMsg}</div>
    }

    if (!this.state.errorMsg && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner />
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
