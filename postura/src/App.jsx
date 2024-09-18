import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Bienvenidos a ErgoFit</h1>
            <p className="col-lg-10 fs-4">Tu guía para mejorar la postura y alcanzar un bienestar físico óptimo. En ErgoFit, creemos que una buena postura es clave para una vida saludable y activa.</p>
          </div>
          <Inicio />
        </div>
      </div>

      <div className="container">
        <Footer />
      </div>
    </>
  );
}

export default App;
