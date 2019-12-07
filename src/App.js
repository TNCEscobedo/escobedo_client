import React from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import ReduxThunk from "redux-thunk";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

function App() {
  return (
    <Provider store={store}>
      Hello World
    </Provider>
  );
}

export default App;
