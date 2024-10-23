import { createContext, ReactNode, useState } from "react";
// IMPORTAÇÃO DE INTERFACES
import { Tema, TemaProps } from "../interfaces/Tema.interface";

const TemaContext = createContext<Tema | null>(null)

const TemaContextProvider = ({ children }:{ children: ReactNode }) => {

    const [tema, setTema] = useState<TemaProps>({ background: "", txt: "" })

    const alterarTema = ({ background, txt }: TemaProps) => {
        setTema({ background, txt })
    }

    return (
        <TemaContext.Provider value={{ tema, alterarTema }}>
            { children }
        </TemaContext.Provider>
    )
}

export { TemaContext, TemaContextProvider }