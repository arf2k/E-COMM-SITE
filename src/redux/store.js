import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import { createSagaMiddleware } from "redux-saga";
import { fetchCollectionStart } from "./shop/shopSagas.js"


import rootReducer from "./rootReducer.js";

const sagaMiddleware = createSagaMiddleware();


const middlewares = [sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run()

export const persistor = persistStore(store);

export const storePersistor = { store, persistor };



