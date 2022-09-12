import React from 'react';
import ReactDOM from 'react-dom/client';
import  'animate.css';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import GifExpertApp from '../src/components/container/GifExpertApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);

