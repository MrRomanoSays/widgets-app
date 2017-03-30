import React from 'react'

const InputField = (props) => {
  return (
    <div className="measure">
      <label htmlFor={props.title} className="f6 b db mb2">{props.title}</label>
      <input id={props.title} className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"
        value={props.value}
        onChange={props.onChange}
      />
    <small id="name-desc" className="f6 black-60 db mb2">{props.desc}</small>
    </div>
  )
}

InputField.propTypes = {
  title: React.PropTypes.string,
  desc: React.PropTypes.string,
  // optional: React.PropTypes.bool,
  onChange: React.PropTypes.func,
  value: React.PropTypes.string
}

export default InputField

/*
<div className="measure">
  <label htmlFor="name" className="f6 b db mb2">{props.title}<span className="normal black-60">{props.optional}</span></label>
  <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"
    value={props.value}
    onChange={props.onChange}
  />
<small id="name-desc" className="f6 black-60 db mb2">{props.desc}</small>
</div>
*/
