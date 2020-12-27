import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store'


document.addEventListener("DOMContentLoaded", () => {

  let store = configureStore();
  
  
  ReactDOM.render(
    <React.StrictMode>
      <Root store={store}/>
    </React.StrictMode>,
    document.getElementById('root')
  );

  window.getState = store.getState
  
  

})