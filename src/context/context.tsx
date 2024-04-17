import React, { createContext, useState, useContext, ReactNode } from "react";

interface ContextProviderProps {
    children: ReactNode;
}

interface ContextType {
    darkmode: boolean;
    setDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
    currentLanguage: string;
    setCurrentLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const Context = createContext<ContextType | undefined>(undefined);

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const [darkmode, setDarkmode] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('pt');

    // Retornar o provedor de contexto com os estados como valor
    return (
        <Context.Provider value={{ darkmode, setDarkmode, currentLanguage, setCurrentLanguage }}>
            {children}
        </Context.Provider>
    );
};

// Criar um hook personalizado para acessar os estados do contexto
export const useContexts = (): ContextType => {
    const context = useContext(Context);
    if (!context) {
        throw new Error("useMyContext deve ser usado dentro de um ContextProvider");
    }
    return context;
};
