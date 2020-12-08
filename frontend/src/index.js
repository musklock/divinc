import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './components/store/store.js'
import reportWebVitals from './reportWebVitals';


document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore()

  // authentication snippet 

    // if (window.currentUser) {
    //     const preloadedState = {
    //         session: { id: window.currentUser.id },
    //         entities: {
    //             users: { [window.currentUser.id]: window.currentUser }
    //         }
    //     };
    //     store = configureStore(preloadedState);
    //     delete window.currentUser;
    // } else {
    //     store = configureStore();
    // }
    ReactDOM.render(
      <React.StrictMode>
        <App store={store}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
