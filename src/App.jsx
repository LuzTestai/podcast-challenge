import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Provider } from 'react-redux';
import store from './store';
import HomePage from './pages/HomePage/homePage';
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Navbar />
                <Routes>
                    <Route path="/" element={< HomePage />} />
                </Routes>
        </BrowserRouter>
      </div>
      </Provider>
  );
}

export default App;