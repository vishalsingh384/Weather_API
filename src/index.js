import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Globe from './components/Globe';
import { Canvas } from '@react-three/fiber';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/globe' element={<Canvas style={{height:window.innerHeight,width:window.innerWidth}}><Suspense fallback={null}><Globe/></Suspense></Canvas>}/>
    </Routes>
    </BrowserRouter>
);
