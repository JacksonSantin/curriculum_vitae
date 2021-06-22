import './styles/global.css';

import ScrollButton from './components/ScrollButton';

import Routes from './routes';

import ReactGa from 'react-ga';
import TagManager from 'react-gtm-module';

import { useEffect } from 'react';

const tagManagerArgs = {
  gtmId: 'GTM-5NB5D4D'
}

TagManager.initialize(tagManagerArgs)

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
