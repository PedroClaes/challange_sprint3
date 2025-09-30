import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import type { Integrante } from '../types';

const integrantesData: Integrante[] = [
    { nome: "Pedro Gabriel Claes Ferreira", rm: "566058", turma: "1TDSPV", imagem: "/imagem1.jpeg" },
    { nome: "Artur Pioli Silva", rm: "565597", turma: "1TDSPV", imagem: "/imagem3.jpeg" },
];

export const IntegrantesPage: React.FC = () => {
    return (
        <>
            <Header />
            <main className="flex-grow container mx-auto p-4">
                <h1 className="text-3xl font-bold text-center my-5" id="integrantes">Integrantes</h1>
                <section className="flex flex-wrap justify-center gap-5 p-5">
                    {integrantesData.map((integrante, index) => (
                        <article key={index} className="bg-white p-5 rounded-lg shadow-md w-52 text-center">
                            <img src={integrante.imagem} alt={`Imagem de ${integrante.nome}`} className="max-w-full rounded-lg mb-3" />
                            <h3 className="text-lg font-bold my-2">{integrante.nome}</h3>
                            <p className="my-1 text-sm">RM: {integrante.rm}</p>
                            <p className="my-1 text-sm">Turma: {integrante.turma}</p>
                        </article>
                    ))}
                </section>
            </main>
            <Footer />
        </>
    );
};