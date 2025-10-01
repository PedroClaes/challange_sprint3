import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const FaqPage: React.FC = () => {
    return (
        <>
            <Header />
            <main className="flex-grow container mx-auto p-4">
                <section className="my-5 p-4 rounded-lg bg-section">
                    <h2 className="text-2xl font-bold mb-3">Perguntas Frequentes</h2>
                    <article className="mb-4">
                        <h3 className="text-xl font-bold mb-1">Como recebo o link da consulta?</h3>
                        <p>Você receberá automaticamente pelo WhatsApp após a confirmação da consulta.</p>
                    </article>
                    <article className="mb-4">
                        <h3 className="text-xl font-bold mb-1">Como sei que a consulta está confirmada?</h3>
                        <p>Nosso chatbot enviará uma mensagem de confirmação para você.</p>
                    </article>
                    <article className="mb-4">
                        <h3 className="text-xl font-bold mb-1">O que fazer se tiver dificuldades técnicas?</h3>
                        <p>Na página de Ajuda temos instruções completas para você acessar a consulta.</p>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    );
};