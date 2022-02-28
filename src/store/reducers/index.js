import { types } from '../types';

const initialState = {
  width: 0,
  height: 0,
};

export const cellReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setBoard:
      return {
        ...state,
        width: action.payload.width,
        height: action.payload.height,
      };

    case types.changeCell:
      return {};

    default:
      return state;
  }
};
