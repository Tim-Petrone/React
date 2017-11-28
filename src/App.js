import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Info from './Content/Info.js';
import Hobby from './Content/Hobby.js';
import Places from './Content/Places.js';
import BeenPlaces from './Content/BeenPlaces.js';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      info: [
        {
          name: 'Kiah',
          bio: 'Tim is a cool guy (kappa).'
        },
        {
          name: 'Tim',
          bio: 'Kiah is a shmuck.'
        }
      ],
      hobby: [
        {
          hobby: 'Baseball',
          image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1492121640/articles/2015/11/01/the-hell-raising-cocaine-snorting-86-mets-craziest-team-in-major-league-baseball-history/151101-silverman-mets-1986-tease_w7hzaw'
        },
        {
          hobby: 'League of Legends',
          image: 'http://media.comicbook.com/2017/06/background-1002091.jpg'
        }
      ],
      places_living: [
        {
          living_place: 'New York',
          living_place: 'North Carolina',
          living_place: 'Washington',
          living_place: 'California',
          living_place: 'Connecticut'
        },
      ],
      places_been: [
        {
          been_place: 'Hillcrest',
          been_place: 'Israel',
          been_place: 'London',
          been_place: 'Dubai',
          been_place: 'The Moon'
        },
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>My Bio Page!</h1>
        <Info info={this.state.info} />
        <Hobby hobby={this.state.hobby}/>
        <Places places={this.state.places_living}/>
        <BeenPlaces been_place={this.state.places_been} />
      </div>
    );
  }
}

export default App;
