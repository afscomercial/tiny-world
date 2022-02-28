import { types } from '../types';


export const setBoard = (width, height) => ({
    type: types.setBoard,
    payload: {
        width,
        height
    }
});