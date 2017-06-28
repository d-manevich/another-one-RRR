import { takeEvery, throttle, call, put, select } from 'redux-saga/effects'
import { RESET, changeText } from 'app/otherReducerShit'

function* resetFormSaga() {
  yield put(changeText('saga work!!!'))
}

export default function* rootSaga() {
  yield takeEvery(RESET, resetFormSaga)
}
