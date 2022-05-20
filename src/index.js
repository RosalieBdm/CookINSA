/*import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
//import "./styles/index.scss";
//import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { getUsers } from "./actions/users.actions";
// dev tools
import { composeWithDevTools } from "redux-devtools-extension";
import { getPosts } from "./actions/post.actions";

const store = createStore (
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(getUsers());
store.dispatch(getPosts());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" element={ <App /> }>
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);  
*/
import React from 'react';
import ReactDOM from 'react-dom';
import Profil from './pages/Profil';
//import Trending from './pages/Trending';
///import Home from './pages/Home';
//import "./styles/index.scss";


ReactDOM.render(
     <Profil/>,
  document.getElementById('root')
);  

