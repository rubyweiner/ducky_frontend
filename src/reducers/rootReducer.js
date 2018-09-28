import { combineReducers } from 'redux';
import usersReducer from './usersReducer'
import profilesReducer from './profilesReducer'
import skillsReducer from './skillsReducer'
import followersReducer from './followersReducer'
import followingReducer from './followingReducer'
import postsReducer from './postsReducer'
import notMyUserReducer from './notMyUserReducer'
import notMyProfileReducer from './notMyProfileReducer'
import notMySkillsReducer from './notMySkillsReducer'
import notMyFollowersReducer from './notMyFollowersReducer'
import notMyPostsReducer from './notMyPostsReducer'


export default combineReducers({
  user: usersReducer,
  profile: profilesReducer,
  skills: skillsReducer,
  followers: followersReducer,
  following: followingReducer,
  posts: postsReducer,
  notMyUser: notMyUserReducer,
  notMyProfile: notMyProfileReducer,
  notMySkills: notMySkillsReducer,
  notMyFollowers: notMyFollowersReducer,
  notMyPosts: notMyPostsReducer
})
