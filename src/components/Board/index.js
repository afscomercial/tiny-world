import './Board.css';
import waterImg from '../../assets/img/wave.svg';
import soilImg from '../../assets/img/soil.svg';

const cells = [
  { id: 1, state: false },
  { id: 2, state: true },
  { id: 3, state: false },
  { id: 4, state: false },
  { id: 5, state: false },
  { id: 6, state: false },
  { id: 7, state: false },
  { id: 8, state: false },
  { id: 9, state: false },
  { id: 10, state: false },
  { id: 11, state: false },
  { id: 12, state: false },
  { id: 13, state: false },
  { id: 14, state: false },
  { id: 15, state: false },
  { id: 16, state: false },
  { id: 17, state: false },
  { id: 18, state: false },
  { id: 19, state: false },
  { id: 20, state: false },
  { id: 21, state: false },
  { id: 22, state: false },
  { id: 23, state: false },
  { id: 24, state: false },
  { id: 25, state: false }
];

const width=5;
const length=4;

const Board = () => {

  const inlineBoardStyle={gridTemplateColumns:`repeat(${width}, 100px)`};

  return (
    <div className='board'>
      <div className='board-content' style={inlineBoardStyle}>
        {cells.map((cell) => (
          <div
            className='board-cell'
            style={{
              backgroundImage: `url(${!cell.state?waterImg:soilImg})`,
              backgroundColor: `${!cell.state?'#80ced6':'#b9936c'}`,
            }}
            key={cell.id}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Board;
