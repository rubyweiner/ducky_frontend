export default function followersReducer(
    state = [

    ],
    action
) {
    switch (action.type) {
      case 'SET_CURRENT_FOLLOWERS':
        return [...action.followers]

      default:
        return state
    }
}
