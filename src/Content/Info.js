import React, {Component} from 'react'

class Info extends Component {
  render() {
    let info = this.props.info.map(function(info){
      return(
        <div>
          <li key={info.name}>{info.name}</li>
          <li key={info.bio}>{info.bio}</li>
        </div>
      )
    })
    return (
      <div>
        <h3>My Info</h3>
        <ul>
          {info}
        </ul>
      </div>
    );
  }
}

export default Info;
