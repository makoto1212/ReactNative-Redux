import { COUNT_UP } from '../constants/counter';

const initialState = {
  count: 0,
};

export default (state = initialState, action) => {

  if (action.type == COUNT_UP) {
    return {
      ...state,
      count: state.count + action.up,
    };
  }

  return state;
}