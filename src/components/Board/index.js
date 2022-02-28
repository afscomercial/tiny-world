import { useSelector, useDispatch } from 'react-redux';

import './Board.css';
import waterImg from '../../assets/img/wave.svg';
import soilImg from '../../assets/img/soil.svg';
import { max, min } from '../../utils';
import { changeCell } from '../../store/actions';


const Board = () => {
  const width = useSelector((state) => state.width);
  const board = useSelector((state) => state.board);
  const dispatch = useDispatch();
  const validWidth = width >= min && width <= max;
  const inlineBoardStyle = { gridTemplateColumns: `repeat(${width}, 100px)` };

  const clickHandler = (id) => {
    dispatch( changeCell( id ) );
  };

  return (
    <div className='board'>
      {validWidth ? (
        <div className='board-content' style={inlineBoardStyle}>
          {board.map((cell) => (
            <div
              className='board-cell'
              style={{
                backgroundImage: `url(${!cell.state ? waterImg : soilImg})`,
                backgroundColor: `${!cell.state ? '#80ced6' : '#b9936c'}`,
              }}
              key={cell.id}
              onClick={()=>clickHandler(cell.id)}
            ></div>
          ))}
        </div>
      ) : (
        <div className='board-content'> Please enter valid board dimensions</div>
      )}
    </div>
  );
};

export default Board;
