import { useSelector, useDispatch } from 'react-redux';

import { setBoard, reBuildBoard } from '../../store/actions';
import useInput from './../../hooks/useInput';
import './Header.css';
import earthImg from '../../assets/img/earth.svg';
import { max, min } from '../../utils';

const Header = () => {
  const {
    value: cellsHeight,
    isValid: cellsHeightIsValid,
    hasError: cellsHeightHasError,
    valueChangeHandlerNumbers: cellsHeightChangedHandler,
    inputFocusHandler: cellsHeightFocusHandler,
    reset: cellsHeightReset,
  } = useInput();

  const {
    value: cellsWidth,
    isValid: cellsWidthIsValid,
    hasError: cellsWidthHasError,
    valueChangeHandlerNumbers: cellsWidthChangedHandler,
    inputFocusHandler: cellsWidthFocusHandler,
    reset: cellsWidthReset,
  } = useInput();
  const filledCells = useSelector((state) => state.filledCells);
  const islands = useSelector((state) => state.islands);
  const dispatch = useDispatch();

  let formIsValid = false;

  if (cellsHeightIsValid && cellsWidthIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    filledCells > 0
      ? dispatch(reBuildBoard(cellsWidth, cellsHeight))
      : dispatch(setBoard(cellsWidth, cellsHeight));
    cellsHeightReset();
    cellsWidthReset();
  };

  const cellsWidthClasses = cellsWidthHasError
    ? 'form-control is-invalid'
    : 'form-control';

  const cellsHeightClasses = cellsHeightHasError
    ? 'form-control is-invalid'
    : 'form-control';

  return (
    <div className='header'>
      <div className='header-logo'>
        <h3>My Tiny World</h3>
        <img src={earthImg} alt='earth' />
      </div>
      <div className='header-form'>
        <p>Enter Board Dimensions</p>
        <form onSubmit={formSubmissionHandler}>
          <div className='form-group form-group-sm row'>
            <label
              htmlFor='cellsWidthInput'
              className='col-sm-7 col-form-label'
            >
              number of columns: <strong>{`(Min ${min} Max ${max})`}</strong>
            </label>
            <div className='col-sm-5'>
              <input
                type='text'
                className={cellsWidthClasses}
                id='cellsWidthInput'
                onChange={cellsWidthChangedHandler}
                onFocus={cellsWidthFocusHandler}
                value={cellsWidth}
                maxLength='2'
              />
              <div className='invalid-feedback'>Enter a valid number</div>
            </div>
          </div>
          <div className='form-group form-group-sm row'>
            <label
              htmlFor='cellsWidthInput'
              className='col-sm-7 col-form-label'
            >
              number of rows: <strong>{`(Min ${min} Max ${max})`}</strong>
            </label>
            <div className='col-sm-5'>
              <input
                type='text'
                className={cellsHeightClasses}
                id='cellsWidthInput'
                onChange={cellsHeightChangedHandler}
                onFocus={cellsHeightFocusHandler}
                value={cellsHeight}
                maxLength='2'
              />
              <div className='invalid-feedback'>Enter a valid number</div>
            </div>
          </div>
          <button
            type='submit'
            className='btn btn-light'
            disabled={!formIsValid}
          >
            Set Board
          </button>
        </form>
      </div>

      <div className='header-data'>
        <p>Board State</p>
        <p>
          Filled Cells: <strong>{filledCells}</strong>
        </p>
        <p>
          Amount of Islands: <strong>{islands}</strong>
        </p>
      </div>
    </div>
  );
};

export default Header;
