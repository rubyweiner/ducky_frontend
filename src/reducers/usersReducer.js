export default function usersReducer(
    state = {
      user: {}
    },
    action
) {
    switch (action.type) {
      case 'SET_CURRENT_USER':
        return {user: action.user}

      default:
        return state
    }
}
