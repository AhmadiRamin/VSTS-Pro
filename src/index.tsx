
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter} from 'react-router-redux';
import ReleasePage from './Containers/ReleasesPage/ReleasePage';
import WelcomePage from './Containers/WelcomePage/WelcomePage';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import history from './Store/history';
import configureStore from './Store/store';

const configuredStore = configureStore();
const app=(
  <Provider store={configuredStore}>
    <ConnectedRouter history={history}>
      <>
        <Route exact path='/' component={WelcomePage}/>
        <Route path='/releases' component={ReleasePage}/>
      </>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(
  app,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
