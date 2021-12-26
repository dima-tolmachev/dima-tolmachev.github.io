import './App.css'
import Burger from './components/leftbar/burger';
import Main from './components/main/main';
import Details from './components/main/details';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="content" style={{ display: "flex", gap: "10px", width: "100%" }}>
        <Burger />
        <br />
        <div style={{ width: "100%" }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/details" element={<Details />} />
              <Route path="/resume" element={<Details />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
