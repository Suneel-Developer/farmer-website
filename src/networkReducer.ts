import Frame from "./assets/Frame.png";
import { SET_SELECTED_NETWORK } from './actions';

const initialState = {
  id: 1,
  image: Frame,
  title: 'Ethereum',
};

const networkReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case SET_SELECTED_NETWORK:
      return action.payload;
    default:
      return state;
  }
};

export default networkReducer;
