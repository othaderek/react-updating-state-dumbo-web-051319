// Code ClickityClick Component Here
import React from 'react'
import PropTypes from 'prop-types'

class ClickityClick extends React.Component {
  constructor(){
    super()
    this.state = {
      hasBeenClicked: false,
      person: {
        name: 'Otha',
        age: 30
      }
    }
  }

  handleClick = () => {
    this.setState({
      hasBeenClicked: !this.state.hasBeenClicked
    })
    console.log(this.state.hasBeenClicked);
  }

  incrementAge = () => {
    this.setState({
      person: {
        ...this.state.person,
        age: this.state.person.age += 1
      }
    })
    console.log(this.state.person.age);
  }

  render () {
    return(
      <div>
        <button onClick={this.handleClick}/>
        <button onClick={this.incrementAge}>age increment</button>
      </div>
    )

  }
}

export default ClickityClick;
