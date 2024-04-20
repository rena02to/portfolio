import React, { createContext, useState, useContext, ReactNode } from "react";

interface ContextProviderProps {
    children: ReactNode;
}

interface ContextType {
    darkmode: boolean;
    setDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
    menuOpen: boolean;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Context = createContext<ContextType | undefined>(undefined);

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const [darkmode, setDarkmode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Retornar o provedor de contexto com os estados como valor
    return (
        <Context.Provider value={{ darkmode, setDarkmode, menuOpen, setMenuOpen }}>
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
