import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { createStore } from 'redux'
// import { Provider } from "react-redux";
// import reducer from './reducers'
// disable ServiceWorker
// import registerServiceWorker from './registerServiceWorker';

//const store = createStore(reducer);

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     document.getElementById("root")
//   );
// disable ServiceWorker
// registerServiceWorker();
