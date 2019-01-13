import {ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT} from "../constants";

export function deleteProduct(id) {
  return {
    type: DELETE_PRODUCT,
    payload: { id }
  }
}

export function addProduct(id) {
  return {
    type: ADD_PRODUCT,
    payload: {id}
  }
}

export function editProduct(product) {
  console.log('ac', product);
  const id = product.id;
  const name = product.name;
  return {
    type: EDIT_PRODUCT,
    payload: {id, name}
  }
}
