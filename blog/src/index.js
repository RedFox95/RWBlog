import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const uri = "mongodb+srv//RedFox95:<jQ9M5qNyoUt3YpWb>@blog.idz8gix.mongodb.net/?retryWrites=true&w=majority&appName=Blog"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
