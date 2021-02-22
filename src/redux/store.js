import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware  from "redux-saga";
import rootReducer from "./rootReducer.js";
import rootSaga from "./rootSaga"

const sagaMiddleware = createSagaMiddleware();


const middlewares = [logger, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export const storePersistor = { store, persistor };



