import {combineReducers} from 'redux'
import authedUser from './autheduser'
import tweets  from './tweets'
import users from './users'

export default combineReducers({
    authedUser,
    tweets,
    users
})