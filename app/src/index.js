//package.jsonからパッケージをimport
// コンポーネントという
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// public/index.htmlのdivタグ内のrootを参照
const root = ReactDOM.createRoot(document.getElementById('root'));
// src/App.jsからApp()メソッドを参照
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
