import './App.scss';
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import History from './components/history/History';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="History" element={<History />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;