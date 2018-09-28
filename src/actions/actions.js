export function setCurrentUser(user) {
  return {user: user, type: 'SET_CURRENT_USER'}
}

export function setCurrentProfile(profile) {
  return {profile: profile, type: 'SET_CURRENT_PROFILE'}
}

export function setCurrentSkills(skills) {
  return {skills: skills, type: 'SET_CURRENT_SKILLS'}
}

export function setCurrentFollowers(followers) {
  return {followers: followers, type: 'SET_CURRENT_FOLLOWERS'}
}

export function setOtherUser(user) {
  return {user: user, type: 'SET_OTHER_USER'}
}

export function setOtherProfile(profile) {
  return {profile: profile, type: 'SET_OTHER_PROFILE'}
}

export function setOtherSkills(skills) {
  return {skills: skills, type: 'SET_OTHER_SKILLS'}
}

export function setOtherFollowers(followers) {
  return {followers: followers, type: 'SET_OTHER_FOLLOWERS'}
}
