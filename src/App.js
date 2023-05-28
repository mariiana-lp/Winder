import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Cards from './Cards';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/chats">Estos son los chats</Route>
          <Route path="/" element={<Cards/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
