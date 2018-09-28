export default function postsReducer(
    state = [

    ],
    action
) {
    switch (action.type) {
      case 'SET_CURRENT_POSTS':
        return [...action.posts]

      default:
        return state
    }
}
