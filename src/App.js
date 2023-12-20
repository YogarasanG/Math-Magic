import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
const Guess = React.lazy(()=>import('./components/Guessing/Guess') );
const Tic = React.lazy(()=>import('./components/Tic Tac Toi/Tic') );

function App() {
 
  return (
    <div className="App">     
     <Router>      
      <Routes>
        <Route path="/" element={<React.Suspense fallback={<p className='loading'></p>}><Guess/></React.Suspense>}/>
        <Route path="Tic" element={<React.Suspense fallback={<p className='loading'></p>}><Tic/></React.Suspense>}/>
      </Routes>
     </Router>
    </div>
  );
}


export default App;
