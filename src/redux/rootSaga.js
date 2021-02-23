import { all, call } from "redux-saga/effects";
import { onFetchCollectionsStart } from "./shop/shopSagas";
import { userSagas } from "./user/userSagas"

export default function* rootSaga() {
  yield all([call(onFetchCollectionsStart), call(userSagas)]);
}
