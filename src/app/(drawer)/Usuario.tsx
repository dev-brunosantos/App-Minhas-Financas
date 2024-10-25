import { PageStyles } from '@/styles/Pagestyles'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { useState } from 'react'
import { useTema } from '@/hooks/useTema'
import { TemaClaro, TemaEscuro } from '@/styles/Cores'

export default function Usuario() {
    const { page, container, title } = PageStyles

    const [icone, setIcone] = useState('moon')

    const { tema, alterarTema } = useTema()
    const { background, txt } = tema

    const trocarTema = () => {
        icone === 'moon' ? setIcone('sun') : setIcone('moon')

        if(icone === "sun") {
            return alterarTema(TemaClaro)
        }
        return alterarTema(TemaEscuro)
    }

    return(
        <View style={[page, { backgroundColor: background}]}>
            <View style={container}>
                <Text style={[title, { color: txt }]}>
                    Tela Usuario
                </Text>
            </View>

            <View style={container}>
                <TouchableOpacity onPress={trocarTema}>
                    <Feather name={icone} size={35} color={txt} />
                </TouchableOpacity>
            </View>
        </View>
    )
}