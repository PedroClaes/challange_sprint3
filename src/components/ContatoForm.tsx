import React from 'react';
import { useForm,  type SubmitHandler } from 'react-hook-form';

interface FormData {
    nome: string;
    email: string;
    mensagem: string;
}

export const ContactForm: React.FC = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log("Formulário enviado:", data);
        alert("Formulário enviado com sucesso!");
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-5 bg-section rounded-lg shadow-md max-w-lg mx-auto my-5">
            <label htmlFor="nome" className="font-secondary font-normal text-text-soft mb-1">Nome:</label>
            <input
                type="text"
                id="nome"
                {...register("nome", { required: "Nome é obrigatório" })}
                className="font-principal text-base p-3 border border-gray-300 rounded-lg bg-white text-text focus:border-secondary focus:shadow-outline-secondary outline-none transition-all duration-300"
            />
            {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}

            <label htmlFor="email" className="font-secondary font-normal text-text-soft mb-1">Email:</label>
            <input
                type="email"
                id="email"
                {...register("email", {
                    required: "Email é obrigatório",
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Email inválido"
                    }
                })}
                className="font-principal text-base p-3 border border-gray-300 rounded-lg bg-white text-text focus:border-secondary focus:shadow-outline-secondary outline-none transition-all duration-300"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            <label htmlFor="mensagem" className="font-secondary font-normal text-text-soft mb-1">Mensagem:</label>
            <textarea
                id="mensagem"
                {...register("mensagem", { required: "Mensagem é obrigatória" })}
                className="font-principal text-base p-3 border border-gray-300 rounded-lg bg-white text-text resize-y min-h-32 focus:border-secondary focus:shadow-outline-secondary outline-none transition-all duration-300"
            ></textarea>
            {errors.mensagem && <p className="text-red-500 text-sm">{errors.mensagem.message}</p>}

            <button type="submit" className="font-principal font-bold text-base bg-primary text-white p-3 border-none rounded-lg cursor-pointer transition-all duration-300 hover:bg-secondary hover:translate-y-[-2px]">
                Enviar
            </button>
        </form>
    );
};