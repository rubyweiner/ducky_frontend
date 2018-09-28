export default function followingReducer(
    state = [

    ],
    action
) {
    switch (action.type) {
      case 'SET_CURRENT_FOLLOWING':
        return [...action.following]

      case 'ADD_FOLLOWING':
      return[...state, action.following]

      default:
        return state
    }
}
