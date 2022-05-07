import './App.css';
import Form from './components/form/form';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Result from './components/results/Results';
import {useState} from 'react';

function App() {
  const [form, setForm] = useState({});
  const getForm = (form) => {
    setForm(form);
  }

  return (
    <div className="App">
      <Header/>
      <Form getForm = {getForm}/>
      <Result method = {form.method} url = {form.url}/>
      <Footer/>
    </div>
  );
}

export default App;
