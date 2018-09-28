export default function notMyPostsReducer(
    state = [

    ],
    action
) {
    switch (action.type) {
      case 'SET_OTHER_POSTS':
        return [...action.posts]

      default:
        return state
    }
}
