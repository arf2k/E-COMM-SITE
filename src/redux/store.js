import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware  from "redux-saga";
import rootReducer from "./rootReducer.js";
// import { incrementSaga } from "./"

const sagaMiddleware = createSagaMiddleware();


const middlewares = [logger, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// sagaMiddleware.run(incrementSaga);

export const persistor = persistStore(store);

export const storePersistor = { store, persistor };



