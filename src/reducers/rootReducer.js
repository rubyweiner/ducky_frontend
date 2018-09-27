import { combineReducers } from 'redux';
import usersReducer from './usersReducer'
import profilesReducer from './profilesReducer'
import skillsReducer from './skillsReducer'
import notMyProfileReducer from './notMyProfileReducer'


export default combineReducers({
  user: usersReducer,
  profile: profilesReducer,
  skills: skillsReducer,
  notMyProfile: notMyProfileReducer,
})
