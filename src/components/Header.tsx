import React from 'react';
import { Navbar } from './Navbar';

export const Header: React.FC = () => {
    return (
        <header className="bg-primary text-white p-5 text-center">
            <h1 className="text-3xl font-bold mb-2">ConectaHC</h1>
            <Navbar />
        </header>
    );
};