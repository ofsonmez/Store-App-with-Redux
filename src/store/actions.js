import { ADDITEM, UPDATEITEM, DELETEITEM, DESTROYITEM } from "./constants";

export const addItem = (data, quantity) => {
  return {
    type: ADDITEM,
    payload: {
      data,
      quantity: quantity || 1,
    },
  };
};

export const updateItem = (data) => ({
  type: UPDATEITEM,
  payload: data,
});

export const deleteItem = (data) => ({
  type: DELETEITEM,
  payload: data,
});

export const destroy = (data) => ({
  type: DESTROYITEM,
  payload: data,
});
