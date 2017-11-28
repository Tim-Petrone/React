import React, {Component} from 'react'

class Hobby extends Component {
  render() {
    let hobby = this.props.hobby.map(function(hobby){
      return(
        <div>
          <li key={hobby.hobby}>{hobby.hobby}</li>
          <h5 key={hobby.image}>
            <img id={"Mets"} src={hobby.image} />
          </h5>
        </div>
      )
    })
    return (
      <div>
        <h3>Hobbies!</h3>
        <ul>
          {hobby}
        </ul>
      </div>
    );
  }
}

export default Hobby;
