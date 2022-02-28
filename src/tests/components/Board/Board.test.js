import { render, screen, cleanup } from '@testing-library/react';
import * as reactRedux from 'react-redux';

import Board from '../../../components/Board';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Board component tests', () => {
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });

  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
    cleanup();
  });

  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;

  const mockStore = {
    width: 0,
    height: 0,
    board: [],
    filledCells: 0,
    islands: 0,
  };

  test('should render the Board component', () => {
    render(<Board />);
    const text = screen.getByText('Please enter valid board dimensions');
    expect(text).toBeInTheDocument();
  });
});
