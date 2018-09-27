export default function notMyUserReducer(
    state = {

    },
    action
) {
    switch (action.type) {
      case 'SET_OTHER_USER':
        return {...action.user}

      default:
        return state
    }
}
