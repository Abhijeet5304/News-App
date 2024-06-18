import './App.css';

import React, { Component } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorBoundary from './components/ErrorBoundary';

import NavBar from './components/NavBar';

import News from './components/News';
import CustomErrorComponent from './components/CustomErrorComponent';


const router = createBrowserRouter([
  {path: "/health",
    element:<News key="health"  errorElement={<CustomErrorComponent/>}pagesize={6} country="in" category="health"/>,
  },
  {path: "/science",
    element:<News key="science" errorElement={<CustomErrorComponent/>} pagesize={6} country="in" category="science"/>,
  },
  {path:"/business",
  element:<News key="business" errorElement={<CustomErrorComponent/>} pagesize={6} country="in" category="business"/>},
  {path: "/entertainment",
    element:<News key="entertainment" errorElement={<CustomErrorComponent/>} pagesize={6} country="in" category="entertainment"/>,
  },
  {path: "/general",
    element:<News key="general" errorElement={<CustomErrorComponent/>} pagesize={6} country="in" category="general"/>,
  },
  {path: "/sports",
    element:<News   key="sports" errorElement={<CustomErrorComponent/>} pagesize={6} country="in" category="sports"/>,
  },
  {path: "/technology",
    element:<News key="technology" errorElement={<CustomErrorComponent/>} pagesize={6} country="in" category="technology"/>,
  },
  {path: "/home",
    element:<News key="in" errorElement={<CustomErrorComponent/>} pagesize={6} country="in" category="sports"/>,
  },
  

])



export default class App extends Component {

 
  
  render() {
   

    
    
    return (
               
     
       
      <div>
        <ErrorBoundary>  
        <NavBar/> 
        

        
        
      
      <RouterProvider router={router} errorElement={<CustomErrorComponent/>} /> 
    </ErrorBoundary>

      </div>
      
      
      
      
      
    )
  }
};


