export default function notMyFollowersReducer(
    state = [

    ],
    action
) {
    switch (action.type) {
      case 'SET_OTHER_FOLLOWERS':
        return [...action.followers]

      default:
        return state
    }
}
