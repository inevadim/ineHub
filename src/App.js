import { Content } from './components/content/Content';
import { Header } from './components/header/Header';
import { store } from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Content />
      </div>
    </Provider>
  );
}

export default App;
