import { takeEvery } from "redux-saga/effects";
import { ShopActionTypes } from "./shopTypes.js"


export function* fetchCollectionsAsync() {
    yield console.log("sup i'm fired")
}


export function* fetchCollectionStart(){
     yield takeEvery(ShopActionTypes.FETCH_COLLECTION_START, fetchCollectionsAsync)
}