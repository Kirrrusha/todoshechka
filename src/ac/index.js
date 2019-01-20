import {ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT} from "../constants";

export function deleteProduct(id) {
  return {
    type: DELETE_PRODUCT,
    payload: {id}
  }
}

export function addProduct(id, val) {
  return {
    type: ADD_PRODUCT,
    payload: {id, val},
    generateId: true
  }
}

export function editProduct(product) {
  const {id, name, completed} = product;
  return {
    type: EDIT_PRODUCT,
    payload: {id, name, completed}
  }
}
