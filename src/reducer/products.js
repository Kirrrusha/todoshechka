import {ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT} from "../constants";

export default (state = {products: []}, action) => {
  const {type, payload, randomId} = action;

  switch (type) {
    case DELETE_PRODUCT :
      return state.filter(product => product.id !== payload.id);

    case ADD_PRODUCT:
      return [
        {
          id: randomId,
          name: payload.val,
          completed: true
        },
        ...state
      ];

    case EDIT_PRODUCT:
      return state.map(product =>
        (product.id === payload.id) ?
          {...product, name: payload.name, completed: payload.completed} :
          product
      );

    default:
      return state;

  }
}
