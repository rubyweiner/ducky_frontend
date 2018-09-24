export default function usersReducer(
    state = {
      
    },
    action
) {
    switch (action.type) {
      case 'SET_CURRENT_USER':
        return {...action.user}

      default:
        return state
    }
}
