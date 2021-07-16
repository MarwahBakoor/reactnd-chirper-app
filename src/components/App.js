import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'

import Dashboard from './Dashboard'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        {this.props.loading  ? null :  
        <TweetPage mathc={{params:{id: 'hbsc73kzqi75rg7v1e0i6a' } }} />}
      </div>
    )
  }
}
function mapStateToProps({authedUsder}){
  return {
    loading: authedUsder === null
  }
}

export default connect(mapStateToProps)(App)