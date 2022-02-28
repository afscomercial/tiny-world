import { Provider } from 'react-redux';

import store from './store';
import Header from './components/Header';
import Board from './components/Board';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Board />
    </Provider>
  );
}

export default App;
