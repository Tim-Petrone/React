import React, {Component} from 'react'

class BeenPlaces extends Component {
  render() {
    let been_place = this.props.places_been.map(function(places_been){
      return(
        <div>
          <li key={places_been.been_place}>{places_been.been_place}</li>
        </div>
      )
    })
    return (
      <div>
        <h3>Cool Places!</h3>
        <h5>These are the interesting places I have been:</h5>
        <ul>
          {been_place}
        </ul>
      </div>
    );
  }
}

export default BeenPlaces;
