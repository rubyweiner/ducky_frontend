import { combineReducers } from 'redux';
import usersReducer from './usersReducer'
import profilesReducer from './profilesReducer'

export default combineReducers({
  user: usersReducer,
  profile: profilesReducer,
})
