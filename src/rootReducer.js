import typeToReducer from 'type-to-reducer'
import * as at from 'app/otherReducerShit'

const initialState = {
  text: '',
  isFetching: false,
}

export default typeToReducer({
  [at.CHANGE_TEXT]: (state, action) => ({
    ...state,
    text: action.payload.text,
    isFetching: false,
  }),
  [at.SEND]: state => ({
    ...state,
    isFetching: true,
  }),
  [at.RESET]: state => ({
    ...state,
    isFetching: false,
    text: '',
  }),
  [at.STOP]: state => ({
    ...state,
    isFetching: false,
    text: 'mi 1',
  })
}, initialState)
