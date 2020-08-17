import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchNews() {
    const json = yield fetch('https://www.npmjs.com/package/redux-saga')
          .then(response => response.json(), );    
    yield put({ type: "NEWS_RECEIVED", json: json.articles, });
  }
  function* actionWatcher() {
       yield takeLatest('GET_NEWS', fetchNews)
  }
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}