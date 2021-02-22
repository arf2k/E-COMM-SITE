import { call, put, takeLatest } from "redux-saga/effects";
import  ShopActionTypes  from "./shopTypes.js";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/Firebase.utils";
import {
     fetchCollectionsSuccess,
     fetchCollectionsFailure
} from "./shopActions";

export function* fetchCollections() {
    yield console.log("sup i'm fired");

    try { 
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (error) {
     yield put (fetchCollectionsFailure(error.message))
    }

}


export function* fetchCollectionsStart(){
     yield takeLatest(ShopActionTypes.FETCH_COLLECTION_START, fetchCollections)
}