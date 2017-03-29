import React from 'react'
import InputField from '../components/input'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'

const postItem = (item) => {
  fetch(`http://localhost:5000/widgets`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(item)
  })
}

const AddItem = (props) => {
  return (
    <form onSubmit={props.submit(props.item)} className="pa4 black-80">
      <InputField
        title='Name'
        onChange={props.changeName}
      />
      <InputField
        title='Price'
        onChange={props.changePrice}
      />
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
  submit: (item) => (e) => {
    e.preventDefault()
    postItem(item)
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: 'CLEAR_ITEM'
      })
    })
  }

})

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(AddItem)
