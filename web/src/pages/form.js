import React from 'react'
import InputField from '../components/input'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'


const testItem = {
  name: "Screwdriver",
  price: "1"
}

const postItem = (item) => {
   return fetch(`http://localhost:5000/widgets`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(item)
  })
}

const AddItem = (props) => {
  return (
    <form onSubmit={props.submit(props.item, props.history)} className="pa4 black-80">
      <InputField
        title='Name'
        onChange={props.changeName}
        value={props.item.name}
      />
      <InputField
        title='Price'
        onChange={props.changePrice}
        value={props.item.price}
      />
      <button className="ph2">Add/Edit</button>
      <a className="ph2 " href="/">Cancel</a>
      <a className="link" href="#" onClick={e => props.history.goBack() }>Cancel v.2</a>
    </form>
  )
}

const mapStateToProps = (state) => ({
  item: state.item
})

const mapActionsToProps = (dispatch) => ({
  changeName: (e) => dispatch({
    type: 'SET_NAME', payload: e.target.value
  }),
  changePrice: (e) => dispatch({
    type: 'SET_PRICE', payload: e.target.value
  }),
  submit: (item, history) => (e) => {
    e.preventDefault()
    postItem(item)
    .then(res => res.json())
    .then(res => dispatch({type:'CLEAR_ITEM'})
    .then(history.push('/'))
    )}
  })

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(AddItem)
