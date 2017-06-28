import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import reducer from 'app/rootReducer'
import rootSaga from 'app/rootSaga'
import createSagaMiddleware from 'redux-saga'
import App from 'app/App';

const history = createHistory()

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const store = createStore(
  combineReducers({reducer, router: routerReducer}),
  {},
  applyMiddleware(...middlewares)
)

sagaMiddleware.run(rootSaga)

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={ history }>
          <Component />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('app/App', () => { render(App) })
  module.hot.accept('app/rootReducer', () => {
    store.replaceReducer(combineReducers({reducer, router: routerReducer}));
  });
}
