import { DISPLAY_ALERT, CLEAR_ALERT } from './actions'
const reducer = (state, action) => {
  switch (action.type) {
    case DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        alertText: 'Please provide all values',
        alertType: 'danger',
      }
    case CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
      }
  }
  throw new Error(`no such actinon: ${action.type}`)
}

export default reducer
