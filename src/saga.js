import * as actions from './actions';
import {takeLatest, call, put} from 'redux-saga/effects';

const fetchUser = () => fetch('https://randomuser.me/api/').then(res=>res.json());

//watch for an action to be dispatched
export function* watcherSaga() {
  /*takelatest will trigger a new workerSaga
    when it sees the apiRequest() action dispatched and
    will cancel it
  */
  yield takeLatest(actions.apiRequest().type, workerSaga);
}

//call the fetchUser promise and 
function* workerSaga() {
  try {
    const response = yield call(fetchUser);
    const user = response.results[0];

    yield put(actions.apiSuccess(user));
  }catch(err) {
    yield put(actions.apiError());
  }
}