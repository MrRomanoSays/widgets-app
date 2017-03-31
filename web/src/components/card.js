import React from 'react'

const Card = function (props) {
  return (
    <div>
      <article className="hide-child relative ba b--black-20 mw5 center">
          <img src="http://placehold.it/300x300" className="db" alt="Placeholdit Image" />
          <div className="pa2 bt b--black-20">
            <a className="f6 db link dark-blue hover-blue" href="#">{props.title}</a>
            <p className="f6 gray mv1">{props.price}</p>
            <a className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1" href="#">Edit Info</a>
          </div>
          <a className="child absolute top-1 right-1 ba bw1 black-40 grow no-underline br-100 w1 h1 pa2 lh-solid b" href="#">×</a>
        </article>
    </div>
  )
}

export default Card
