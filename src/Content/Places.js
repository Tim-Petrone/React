import React, {Component} from 'react'

class Places extends Component {
  render() {
    let places = this.props.living_place.map(function(places){
      return(
        <div>
          <li key={places_living.living_place}>{places_living.living_place}</li>
        </div>
      )
    })
    return (
      <div>
        <h3>Cool Places!</h3>
        <h5>These are the places I have lived:</h5>
        <ul>
          {places}
        </ul>
      </div>
    );
  }
}

export default Places;
