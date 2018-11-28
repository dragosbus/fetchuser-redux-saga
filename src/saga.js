import * as actions from './actions';
import {takeLatest, call, put} from 'redux-saga/effects';

const fetchUser = () => fetch('https://randomuser.me/api/').then(res=>res.json());

export function* watcherSaga() {
  yield takeLatest(actions.apiRequest().type, workerSaga);
}

function* workerSaga() {
  try {
    const response = yield call(fetchUser);
    const user = response.results[0];

    yield put(actions.apiSuccess(user));
  }catch(err) {
    yield put(actions.apiError());
  }
}