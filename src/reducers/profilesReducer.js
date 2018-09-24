export default function profilesReducer(
    state = {

    },
    action
) {
    switch (action.type) {
      case 'SET_CURRENT_PROFILE':
        return {...action.profile}

      default:
        return state
    }
}
