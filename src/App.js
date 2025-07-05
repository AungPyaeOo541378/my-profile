import logo from './logo.svg';
import './App.css';
import './test.css'
import Router from './router/router';
import React from 'react';
import { BrowserRouter as RouterProvider, Link } from "react-router-dom";
function App() {
  return (
   <RouterProvider>
    <Router/> 
   </RouterProvider>
   
  );
}

export default App;
