'use client';

import React, { useEffect } from 'react';

// Define a type for the component props
type ErrorProps = {
  error: Error;
  reset: () => void; // Renomeado de '_' para 'reset' para clareza, mas ainda não usado
};

// Use a convenção de prefixar com '_' para indicar que 'reset' não está sendo usado intencionalmente
// Ou remova 'reset' dos parâmetros se não for necessário pela assinatura do componente de erro do Next.js
export default function Error({ error, reset: _reset }: ErrorProps) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Logging Error: ', error);
    }, [error]);

    return (
        <div className='text-red-500'>
            <h1 className='text-2xl font-bold'>Erro na Página de Configurações</h1>
            <div className='border border-dashed border-red-500 p-4 mt-4'>
                <p>Ocorreu um erro inesperado.</p>
                {/* Você pode adicionar um botão para tentar recarregar usando a função reset */}
                {/* <button
                    className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => _reset()
                    }
                >
                    Tentar Novamente
                </button> */}
            </div>
        </div>
    );
}