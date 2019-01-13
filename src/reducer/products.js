import {ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT} from "../constants";

export default (state = {products: []}, action) => {
  const {type, payload} = action;
  console.log(state);

  console.log('reducer products', payload);

  switch (type) {
    case DELETE_PRODUCT :
      return state.filter(product => product.id !== payload.id);

    case ADD_PRODUCT:
      return [
        ...state,
        {
          id: payload.id++,
          name: ''
        }
      ];

    case EDIT_PRODUCT:
      return state.map(product =>
        (product.id === payload.id) ?
          {...product, name: payload.name} :
          product
      );

    default:
      return state;

  }
}
