import './App.css'
import Burger from './components/leftbar/burger';
import Main from './components/main/main';

function App() {
  return (
    <div className="App">
      <div className="content" style={{ display: "flex", gap: "10px", width: "100%" }}>
        <Burger />
        <br />
        <div style={{ width: "100%" }}>
            <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
