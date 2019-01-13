import {createStore} from "redux";
import reducer from '../reducer';
import {LIST} from "../fixtures";

const store = createStore(reducer, {
  products: LIST
});

export default store;
