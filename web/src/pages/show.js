import React from 'react'
import Card from '../components/card'
import fetch from 'isomorphic-fetch'

class ShowItem extends React.Component{
  componentDidMount() {
    fetch(`http://localhost:5000/widgets/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => this.props.dispatch(type: 'SET_CARD', payload: res ))
  }
  render() {
  return(
    <Card
      title={this.props.name}
      price={this.props.price}
    />
  )

  }
}

export default ShowItem
