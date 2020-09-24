import React from 'react'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Home from './Home.js'
import Items from './Items.js'
import Item_Detail from './Item_Details.js'
const App = () => {
  return (
    <div>



    <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/items" component={Items} />
        <Route exact path="/items/:id" component={Item_Detail} />
      </Switch>
    </Router>
    </div>
  </div>
  )
}

export default App
