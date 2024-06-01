import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import AppContextProvider from './context/TimeSlot';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContextProvider>
     <React.StrictMode>
    <App />
  </React.StrictMode>
  </AppContextProvider>
 
);
reportWebVitals();