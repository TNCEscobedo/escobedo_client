import React from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import ReduxThunk from "redux-thunk";
import Home from './Home';
import ModalConfirm from "./components/common/ModalConfirm";
import ErrorAlert from "./components/common/ErrorAlert";
import SuccessAlert from "./components/common/SuccessAlert";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

function App() {
  return (
    <Provider store={store}>
      <Home />
      <ModalConfirm />
      <ErrorAlert />
      <SuccessAlert />
    </Provider>
  );
}

export default App;
