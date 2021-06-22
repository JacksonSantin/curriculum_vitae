import './styles/global.css';

import ScrollButton from './components/ScrollButton';

import Routes from './routes';

import ReactGa from 'react-ga';

import { useEffect } from 'react';

function App() {

  useEffect(() => {
    ReactGa.initialize('UA-199994254-1')
    ReactGa.pageview('/')
  }, [])

  return (
    <div className="App">
      <Routes />
      <ScrollButton />
    </div>
  );
}

export default App;
