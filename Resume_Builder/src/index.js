import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './app/Store'
import { Provider } from 'react-redux'
 
const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <>  
   <Provider store={store}>
      <BrowserRouter>
        <App/>        
      </BrowserRouter>   
    </Provider>
  </>
 
);

