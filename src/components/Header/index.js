import useInput from './../../hooks/useInput';
import './Header.css';
import earthImg from '../../assets/img/earth.svg';

const Header = () => {
  const {
    value: cellsHeight,
    isValid: cellsHeightIsValid,
    hasError: cellsHeightHasError,
    valueChangeHandlerNumbers: cellsHeightChangedHandler,
    inputFocusHandler: cellsHeightFocusHandler,
  } = useInput();

  const {
    value: cellsWidth,
    isValid: cellsWidthIsValid,
    hasError: cellsWidthHasError,
    valueChangeHandlerNumbers: cellsWidthChangedHandler,
    inputFocusHandler: cellsWidthFocusHandler,
  } = useInput();

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
        <form>
          <div className='form-group form-group-sm row'>
            <label
              htmlFor='cellsWidthInput'
              className='col-sm-7 col-form-label'
            >
              vertical cells: <strong>{'(Min 1 Max 5)'}</strong>
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
              horizontal cells: <strong>{'(Min 1 Max 5)'}</strong>
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
        </form>
      </div>

      <div className='header-data'>
        <p>Board State</p>
        <p>Filled Cells:<strong> 4</strong></p>
        <p>Amount of Islands:<strong> 2</strong></p>
      </div>
    </div>
  );
};

export default Header;
