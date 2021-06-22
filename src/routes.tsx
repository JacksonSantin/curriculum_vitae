import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Page404 from './components/404Page';
import Landing from './pages/Landing';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;