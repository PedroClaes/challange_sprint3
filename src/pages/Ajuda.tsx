import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const AjudaPage: React.FC = () => {
    return (
        <>
            <Header />
            <main className="flex-grow container mx-auto p-4">
                <section className="my-5 p-4 rounded-lg bg-section">
                    <h2 className="text-2xl font-bold mb-3">Como acessar sua consulta online</h2>
                    <p className="mb-2">Esse é um aplicativo que irá auxiliar os pacientes que estiverem com dúvidas.</p>
                    <p className="mb-4">
                        <img src="/prototipo_conectahc.jpg" alt="Protótipo ConectaHC" className="max-w-full h-auto rounded-lg mx-auto" />
                    </p>
                    <p>Em caso de dúvidas, entre em contato com nosso suporte.</p>
                </section>
            </main>
            <Footer />
        </>
    );
};