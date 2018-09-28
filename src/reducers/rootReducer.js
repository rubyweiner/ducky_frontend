import { combineReducers } from 'redux';
import usersReducer from './usersReducer'
import profilesReducer from './profilesReducer'
import skillsReducer from './skillsReducer'
import followersReducer from './followersReducer'
import notMyUserReducer from './notMyUserReducer'
import notMyProfileReducer from './notMyProfileReducer'
import notMySkillsReducer from './notMySkillsReducer'
import notMyFollowersReducer from './notMyFollowersReducer'


export default combineReducers({
  user: usersReducer,
  profile: profilesReducer,
  skills: skillsReducer,
  followers: followersReducer,
  notMyUser: notMyUserReducer,
  notMyProfile: notMyProfileReducer,
  notMySkills: notMySkillsReducer,
  notMyFollowers: notMyFollowersReducer
})
