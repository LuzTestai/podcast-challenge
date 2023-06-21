import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Provider } from 'react-redux';
import store from './store';
import HomePage from './pages/HomePage/homePage';
import DetailPodcast from './pages/DetailPodcast/detailPodcast'
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Navbar />
                <Routes>
                    <Route path="/" element={< HomePage />} />
                    <Route path="/podcast/:id" element={< DetailPodcast />} />
                </Routes>
        </BrowserRouter>
      </div>
      </Provider>
  );
}

export default App;