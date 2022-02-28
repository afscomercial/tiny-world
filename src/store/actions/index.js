import { types } from '../types';


export const setBoard = (width, height) => ({
    type: types.setBoard,
    payload: {
        width,
        height
    }
});

export const reBuildBoard = (width, height) => ({
    type: types.reBuildBoard,
    payload: {
        width,
        height
    }
});

export const changeCell = (id) => ({
    type: types.changeCell,
    payload: {
        id,
    }
});