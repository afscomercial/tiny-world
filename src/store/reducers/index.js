import { types } from '../types';
import { findObj, copyArray } from '../../utils';

const initialState = {
  width: 0,
  height: 0,
  board: [],
  filledCells: 0,
  islands: 0,
};

const checkConnection = (connection) =>
  connection !== undefined && connection.state;

const buildBoard = (width, height, cells = []) => {
  let currentBoard = [];
  let state = false;

  for (let y = 1; y <= height; y++) {
    for (let x = 1; x <= width; x++) {
      const id = '' + y + x;
      if (cells.length > 0) {
        const currentCell = findObj(cells, id);
        const cellHasState = checkConnection(currentCell);
        if (cellHasState) {
          state = currentCell.state;
        }
      }
      currentBoard.push({
        id,
        state,
      });
      state = false;
    }
  }

  return currentBoard;
};

const checkIslands = (islands, idCell, idConnection) => {
  let isCellAnIsland = false;
  if (islands.length === 0) {
    islands.push([idCell, idConnection]);
  } else {
    for (let i = 0; i < islands.length; i++) {
      let island = islands[i];
      const foundIdCell = island.find((e) => e === idCell);
      const foundIdConnection = island.find((e) => e === idConnection);
      if (foundIdCell && !foundIdConnection) {
        island.push(idConnection);
        isCellAnIsland = true;
      } else if (!foundIdCell && foundIdConnection) {
        island.push(idCell);
        isCellAnIsland = true;
      } else if (foundIdCell && foundIdConnection) {
        isCellAnIsland = true;
      }
    }

    if (!isCellAnIsland) {
      islands.push([idCell, idConnection]);
    }
  }
};

const findIslands = (board) => {
  //islands=[[22,23], [11]]
  let islands = [];
  board.forEach((o) => {
    if (o.state) {
      const top = (parseInt(o.id) - 10).toString();
      const right = (parseInt(o.id) + 1).toString();
      const bottom = (parseInt(o.id) + 10).toString();
      const left = (parseInt(o.id) - 1).toString();

      const connectionTop = checkConnection(findObj(board, top));
      const connectionRight = checkConnection(findObj(board, right));
      const connectionBottom = checkConnection(findObj(board, bottom));
      const connectionLeft = checkConnection(findObj(board, left));

      if (
        !connectionTop &&
        !connectionRight &&
        !connectionBottom &&
        !connectionLeft
      ) {
        islands.push([o.id]);
      } else {
        connectionTop && checkIslands(islands, o.id, top);
        connectionRight && checkIslands(islands, o.id, right);
        connectionBottom && checkIslands(islands, o.id, bottom);
        connectionLeft && checkIslands(islands, o.id, left);
      }
    }
  });

  return islands.length;
};

export const cellReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setBoard:
      const { width, height } = action.payload;
      let initialCells = buildBoard(width, height);

      return {
        ...state,
        width,
        height,
        board: initialCells,
      };

    case types.reBuildBoard:
      const { width: wid, height: hei } = action.payload;
      const currentCells = copyArray(state.board);
      const cells = buildBoard(wid, hei, currentCells);
      const filledCells = cells.filter((o) => o.state);
      const reBuildIslands = findIslands(cells);
      return {
        ...state,
        width: wid,
        height: hei,
        board: cells,
        filledCells: filledCells.length,
        islands: reBuildIslands,
      };

    case types.changeCell:
      const { id } = action.payload;
      const currentBoard = copyArray(state.board);
      const currentCell = findObj(currentBoard, id);
      currentCell.state = !currentCell.state;
      const filledCellsArray = currentBoard.filter((o) => o.state);
      const islands = findIslands(currentBoard);
      return {
        ...state,
        board: currentBoard,
        filledCells: filledCellsArray.length,
        islands,
      };

    default:
      return state;
  }
};
