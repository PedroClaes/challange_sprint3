import React from 'react';
import { useNavigate } from 'react-router-dom';
export const Navbar: React.FC = () => {
const navigate = useNavigate();
return (
<nav className="bg-secondary p-2 font-secondary">
    <ul className="flex flex-col sm:flex-row justify-center items-center space-y-1 sm:space-y-0 sm:space-x-4">
        <li><button onClick={() => navigate('/')} className="text-white hover:text-highlight transition-colors duration-300 px-3 py-1 rounded">Início</button></li>
        <li><button onClick={() => navigate('/integrantes')} className="text-white hover:text-highlight transition-colors duration-300 px-3 py-1 rounded">Integrantes</button></li>
        <li><button onClick={() => navigate('/faq')} className="text-white hover:text-highlight transition-colors duration-300 px-3 py-1 rounded">FAQ</button></li>
        <li><button onClick={() => navigate('/contato')} className="text-white hover:text-highlight transition-colors duration-300 px-3 py-1 rounded">Contato</button></li>
        <li><button onClick={() => navigate('/ajuda')} className="text-white hover:text-highlight transition-colors duration-300 px-3 py-1 rounded">Ajuda</button></li>
    </ul>
</nav>
);
};