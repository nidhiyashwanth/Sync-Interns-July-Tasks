import *  as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './common/Layout'
 

function App() {
  return (  
    
  <ChakraProvider>
     <Routes>
      
      <Route path='/' element={<Layout/>} >              
        

      </Route>
     </Routes>
   </ChakraProvider>

  )
}

export default App;

