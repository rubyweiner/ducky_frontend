export default function skillsReducer(
    state = [

    ],
    action
) {
    switch (action.type) {
      case 'SET_CURRENT_SKILLS':
        return [...action.skills]

      default:
        return state
    }
}
