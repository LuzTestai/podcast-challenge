import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Provider } from 'react-redux';
import store from './store';
import HomePage from './pages/HomePage/homePage';
import DetailPodcast from './pages/DetailPodcast/detailPodcast'
import DetailEpisode from './pages/DetailEpisode/detailEpisode';
import Navbar from './components/Navbar/navbar';

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Navbar loading={loading}/>
                <Routes>
                    <Route path="/" element={< HomePage setLoading={setLoading} />} />
                    <Route path="/episode" element={< DetailEpisode setLoading={setLoading}  />} />
                    <Route path="/podcast/:name" element={< DetailPodcast setLoading={setLoading} />} />
                </Routes>
        </BrowserRouter>
      </div>
      </Provider>
  );
}

export default App;