import {applyMiddleware, createStore} from "redux";
import reducer from '../reducer';
import {LIST} from "../fixtures";
import randomId from "../middlewares/randomId";
import logger from "../middlewares/logger";
import {routerMiddleware} from "connected-react-router";
import history from '../history';



const store = createStore(
  reducer,  {
  products: LIST
},
  applyMiddleware(randomId, logger));

export default store;
