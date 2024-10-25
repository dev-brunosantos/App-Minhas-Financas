// useEffect(() => {
//     async function buscarTema() {
//         try {
//             const temaSalvo = await AsyncStorage.getItem('tema_atual')
//             if (temaSalvo !== null) {
//                 setTemaAtual(JSON.parse(temaSalvo))
//                 return console.log(temaAtual)
//             }
//         } catch (error) {
//             console.error('Erro ao obter o tema do AsyncStorage:', error);
//         }
//     }
//     buscarTema()
// }, [])

import { TemaProps } from "@/interfaces/Tema.interface";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const carregarTema = () => async () => {
    try {
        const temaSalvo = await AsyncStorage.getItem('tema_atual')
        if (temaSalvo !== null) {
            // tema = JSON.parse(temaSalvo)
            return console.log(temaSalvo)
        }
    } catch (error) {
        console.error('Erro ao obter o tema do AsyncStorage:', error);
    }
}
