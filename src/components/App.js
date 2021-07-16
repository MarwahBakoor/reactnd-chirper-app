import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>

      <div className='container'>
        <Nav />
        {this.props.loading  ? null :  
        <div>
          <Route path = '/' exact component={Dashboard }/>
          <Route path = '/tweet/:id' component = {TweetPage} />
          <Route path='/new' component = {NewTweet} />
        </div> }
      </div>

      </Router>
      
    )
  }
}
function mapStateToProps({authedUsder}){
  return {
    loading: authedUsder === null
  }
}

export default connect(mapStateToProps)(App)