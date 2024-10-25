import { createContext, ReactNode, useState } from "react";
// IMPORTAÇÃO DE INTERFACES
import { Tema, TemaProps } from "@/interfaces/Tema.interface";
import { TemaClaro, TemaEscuro } from "@/styles/Cores";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TemaContext = createContext<Tema | null>(null)

const TemaContextProvider = ({ children }:{ children: ReactNode }) => {

    const [icone, setIcone] = useState('sun')
    const [tema, setTema] = useState<TemaProps>({ background: "", txt: "" })
    const [temaAtual, setTemaAtual] = useState<TemaProps>({ background: "", txt: "" })

    const alterarTema = async () => {
        icone === 'moon' ? setIcone('sun') : setIcone('moon')

        let teste:Promise<TemaProps> = AsyncStorage.getItem('tema_atual')
        

        if (icone === "sun") {
            setTema(TemaClaro)
            await AsyncStorage.setItem('tema_atual', JSON.stringify(tema))
            return setTemaAtual(tema)
        }
        setTema(TemaEscuro)
        await AsyncStorage.setItem('tema_atual', JSON.stringify(tema))
        return setTemaAtual(teste)
    }


    return (
        <TemaContext.Provider value={{ tema, temaAtual, alterarTema, icone }}>
            { children }
        </TemaContext.Provider>
    )
}

export { TemaContext, TemaContextProvider }