import { PageStyles } from '@/styles/Pagestyles'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import { useTema } from '@/hooks/useTema'
import { TemaClaro, TemaEscuro } from '@/styles/Cores'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { TemaProps } from '@/interfaces/Tema.interface'

export default function Usuario() {
    const { page, container, title } = PageStyles

    // const [icone, setIcone] = useState('moon')
    // const [temaAtual, setTemaAtual] = useState<TemaProps>()

    const { tema, temaAtual, alterarTema, icone } = useTema()

    const trocarTema = async () => {
        alterarTema()
    }

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

    return (
        <View style={[page, { backgroundColor: temaAtual?.background }]}>
            <View style={container}>
                <Text style={[title, { color: temaAtual?.txt }]}>
                    Tela Usuario
                </Text>
            </View>

            <View style={container}>
                <TouchableOpacity onPress={trocarTema}>
                    <Feather name={icone} size={35} color={temaAtual?.txt} />
                </TouchableOpacity>
            </View>
        </View>
    )
}