import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
// public/index.htmlのdivタグ内のrootを参照
// src/App.jsからApp()メソッドを参照
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
