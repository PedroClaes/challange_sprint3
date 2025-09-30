import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AjudaPage } from './pages/Ajuda';
import { ContatoPage } from './pages/Contato';
import { IntegrantesPage } from './pages/Integrantes';
import { HomePage } from './pages/Home';
import { FaqPage } from './pages/Faq';


function App() {
    return (
        <Router>
       
            <div className="min-h-screen flex flex-col font-principal font-light text-base leading-relaxed text-text bg-background">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/integrantes" element={<IntegrantesPage />} />
                    <Route path="/faq" element={<FaqPage />} />
                    <Route path="/contato" element={<ContatoPage />} />
                    <Route path="/ajuda" element={<AjudaPage />} />

                </Routes>
            </div>
        </Router>
    );
}

export default App;