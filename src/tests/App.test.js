import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';

describe('App component tests', () => {
  afterEach(cleanup);

  test('should render the App component', () => {
    render(<App />);
    const text = screen.getByText('My Tiny World');
    expect(text).toBeInTheDocument();
  });

});
