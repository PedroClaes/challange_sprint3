import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactForm } from '../components/ContatoForm';
export const ContatoPage: React.FC = () => {
    return (
        <>
            <Header />
            <main className="flex-grow container mx-auto p-4">
                <section>
                    <h2 className="text-2xl font-bold text-center my-5" id="title">Fale Conosco</h2>
                    <ContactForm /> 
                </section>
            </main>
            <Footer />
        </>
    );
};