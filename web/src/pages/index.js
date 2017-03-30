import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'
import LiMaker from '../components/list-item'
import 'tachyons/css/tachyons.css'
import { connect } from 'react-redux'

class ItemList extends React.Component {
  componentDidMount() {
    fetch(`http://localhost:5000/widgets`)
      .then(res => res.json())
      .then(res => this.props.dispatch({
        type: 'LOAD_ITEMS', payload: res
      }))
  }
  render() {

    return (
        <div>
            <ul>
          {map(item =>
            <LiMaker
              key={item.id}
              title={item.name}
              price={item.price}
              description={item.description}
              linkUrl={`/items/${item.id}`}
            />)(this.props.items)}
              </ul>
        </div>
    )

  }
}

const mapStateToProps = (state) => ({
  items: state.items
})


const connector = connect(mapStateToProps)

export default connector(ItemList)
