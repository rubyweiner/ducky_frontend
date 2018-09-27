export default function notMySkillsReducer(
    state = [

    ],
    action
) {
    switch (action.type) {
      case 'SET_OTHER_SKILLS':
        return [...action.skills]

      default:
        return state
    }
}
