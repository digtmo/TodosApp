import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App> 
       Esto es un props, se enviará al componente en el cual esto está escrito (App)
    </App>
  </React.StrictMode>
);


