export default function notMyProfileReducer(
    state = {

    },
    action
) {
    switch (action.type) {
      case 'SET_OTHER_PROFILE':
        return {...action.profile}

      default:
        return state
    }
}
