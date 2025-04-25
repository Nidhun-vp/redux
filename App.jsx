import { useState } from 'react'

import './App.css'
import CakeContainer from './Redux/CakeContainer'
import { Provider } from 'react-redux';
import store from './Redux/store';

const App=() =>(

  <Provider store={store}>
 
     <CakeContainer/> 
     </Provider>

);
  
    
  


export default App
