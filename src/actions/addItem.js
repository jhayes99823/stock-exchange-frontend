import axios from 'axios';
import URLs from 'routes/URLs';
import { toast } from 'react-toastify';

export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

export const addItemAction = (itemType, itemContent) => (dispatch) => {
  dispatch({
    type: ADD_ITEM_REQUEST,
  });
  const url = `${URLs.stockExchange}/${itemType}`;
  return axios.post(url, {
    ...itemContent,
  })
    .then(({ data }) => {
      toast('Item has been added successfully');
      dispatch({
        type: ADD_ITEM_SUCCESS,
        itemType,
        data,
      });
    })
    .catch((error) => {
      toast(`An error occurred trying to add the item\n${error}`);
      dispatch({
        type: ADD_ITEM_FAILURE,
      });
    });
};
