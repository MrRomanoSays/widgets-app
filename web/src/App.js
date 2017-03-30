import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import 'tachyons/css/tachyons.css'
import AddItem from './pages/form'
import ItemList from './pages/index'

class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <header className="pa4 bg-purple white">
              <h1 className="f1 fw1 tc">Garage Sale Extravaganza</h1>
              <Link className="no-underline white dim ph3 tc" to="/">Home</Link>
              <Link className="no-underline white dim ph3 tc" to="/form">Add Item</Link>
            </header>

            <Route exact path="/" component={ItemList}/>
            <Route path="/form" component={AddItem}/>
          </div>
      </Router>

    )
  }
}

export default App;
