export function setCurrentUser(user) {
  return {user: user, type: 'SET_CURRENT_USER'}
}

export function setCurrentProfile(profile) {
  return {profile: profile, type: 'SET_CURRENT_PROFILE'}
}

export function setCurrentSkills(skills) {
  return {skills: skills, type: 'SET_CURRENT_SKILLS'}
}
