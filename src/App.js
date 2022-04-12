import Views from './Views';
import React, { component } from 'react';
import { Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import ListBoard from './components/board/ListBoard';


function App() {
  return (
    <div>
       
      <Views />
     
      
    {/* <BrowserRouter>
      <Routes>
        <Route path = "/" element={<ListBoard />}></Route>
      </Routes>
    </BrowserRouter> */}
    </div>
  );
}

export default App;
