import React from 'react'
import InputField from '../components/input'
import { connect } from 'react-redux'


const AddItem = (props) => {
  return (
    <form className="pa4 black-80">
      <InputField 
        title='Name'
      
      />
      <InputField 
        title='Price'
        
      />
    </form>
  )
}

const mapStateToProps = (state => state)

const mapActionsToProps = (dispatch) => {
  changeName: 
  changePrice: 
  
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default AddItem
