import './styles/global.css';

import ScrollButton from './components/ScrollButton';

import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Routes />
      <ScrollButton />
    </div>
  );
}

export default App;
