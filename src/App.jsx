import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes Comunes
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// Secciones de la Landing
import Hero from './components/views/Hero';
import Features from './components/views/Features';
import Pricing from './components/views/Pricing';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        
        <main>
          <Routes>
            {/* Ruta Principal: Agrupamos las secciones para que funcionen como Landing Page */}
            <Route path="/" element={
              <>
                <div id="home"><Hero /></div>
                <div id="soluciones"><Features /></div>
                <div id="precios"><Pricing /></div>
              </>
            } />

            {/* Aquí podrías agregar rutas futuras, por ejemplo:
            <Route path="/proyecto/:id" element={<ProjectDetail />} /> 
            */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;