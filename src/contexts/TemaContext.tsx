import { createContext, ReactNode, useState } from "react";
// IMPORTAÇÃO DE INTERFACES
import { Tema, TemaProps } from "@/interfaces/Tema.interface";
import { TemaClaro, TemaEscuro } from "@/styles/Cores";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TemaContext = createContext<Tema | null>(null)

const TemaContextProvider = ({ children }: { children: ReactNode }) => {

    const [icone, setIcone] = useState('sun')
    // const [tema, setTema] = useState<TemaProps>(TemaClaro)
    const [tema, setTema] = useState<TemaProps>(TemaEscuro)
    const [temaAtual, setTemaAtual] = useState<TemaProps>({ background: "", txt: "" })

    const alterarTema = async () => {
        icone === 'moon' ? setIcone('sun') : setIcone('moon')

        if(icone === 'moon') {
            // setTema(TemaClaro)
            setTema(TemaClaro)
            await AsyncStorage.setItem('tema_atual', JSON.stringify({background: TemaEscuro.background, txt: TemaEscuro.txt}))
            
            // let teste = await AsyncStorage.getItem('tema_atual')
            // console.log(teste)
            return setTemaAtual(tema)
        }
        else {
            // setTema(TemaEscuro)
            setTema(TemaEscuro)
            await AsyncStorage.setItem('tema_atual', JSON.stringify({background: TemaClaro.background, txt: TemaClaro.txt}))
            
            // let teste = await AsyncStorage.getItem('tema_atual')
            // console.log(teste)
            return setTemaAtual(tema)
        }
    }


    return (
        <TemaContext.Provider value={{ tema, temaAtual, alterarTema, icone }}>
            {children}
        </TemaContext.Provider>
    )
}

export { TemaContext, TemaContextProvider }