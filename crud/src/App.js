import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import { Registration } from './components/Registration';
import { EditUser } from './components/EditUser';
import { PreviewUser } from './components/PreviewUser';
import './index.css';


function App() {

  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={ <Registration /> } />
            <Route exact path="/edit/:id" element={<EditUser />} />
            <Route exact path="/preview/:id" element={<PreviewUser />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
