import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
    return (
        <>
            <Header />
            <main className="flex-grow container mx-auto p-4">
                <section className="my-5 p-4 rounded-lg bg-section">
                    <h2 className="text-2xl font-bold mb-3">Bem-vindo ao ConectaHC</h2>
                    <p className="mb-2">Sua saúde conectada, com tecnologia e humanização para reduzir faltas em consultas online.</p>
                    <p className="mb-2">O ConectaHC foi desenvolvido para facilitar seu acesso às consultas médicas de forma prática, segura e eficiente. Com poucos cliques, você pode aprender a utilizar o aplicativo, tirar dúvidas e acompanhar suas consultas no conforto da sua casa.</p>
                    <p className="mb-2">Nosso objetivo é promover o cuidado com a sua saúde de forma acessível, reduzindo barreiras digitais e garantindo que ninguém perca seu atendimento por dificuldades técnicas.</p>
                    <p>Explore os recursos disponíveis, assista ao tutorial e descubra como é simples cuidar da sua saúde com o ConectaHC.</p>
                </section>
            </main>
            <Footer />
        </>
    );
};