import './App.scss';
import { Routes, Route} from "react-router-dom";
import Home from './components/home/Home';
import History from './components/history/History';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import {useReducer} from 'react';
import historyReducer ,{ addAction } from './Reducer.js';

const initialState = {
  history: [],
}

function App() {
  const [state, dispatch] = useReducer(historyReducer, initialState);
  const addHistory = (action) => {
    dispatch(addAction(action));
  }
  console.log(state);
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home addHistory={addHistory} state = {state}/>} />
        <Route path="History" element={<History history = {state}/>} />
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;