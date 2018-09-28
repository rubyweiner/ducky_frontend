import { combineReducers } from 'redux';
import usersReducer from './usersReducer'
import profilesReducer from './profilesReducer'
import skillsReducer from './skillsReducer'
import notMyUserReducer from './notMyUserReducer'
import notMyProfileReducer from './notMyProfileReducer'
import notMySkillsReducer from './notMySkillsReducer'
import notMyFollowersReducer from './notMyFollowersReducer'


export default combineReducers({
  user: usersReducer,
  profile: profilesReducer,
  skills: skillsReducer,
  notMyUser: notMyUserReducer,
  notMyProfile: notMyProfileReducer,
  notMySkills: notMySkillsReducer,
  notMyFollowers: notMyFollowersReducer
})
