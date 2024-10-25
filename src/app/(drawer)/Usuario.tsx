import { PageStyles } from '@/styles/Pagestyles'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { useState } from 'react'
import { useTema } from '@/hooks/useTema'
import { TemaClaro } from '@/styles/Cores'

export default function Usuario() {
    const { page, container, title } = PageStyles

    const [icone, setIcone] = useState('moon')

    const { tema, alterarTema } = useTema()

    const trocarTema = () => {
        icone === 'moon' ? setIcone('sun') : setIcone('moon')

        // if(icone === "sun") {
        //     trocarTema(TemaClaro)
        // }
    }

    return(
        <View style={page}>
            <View style={container}>
                <Text style={title}>
                    Tela Usuario
                </Text>
            </View>

            <View style={container}>
                <TouchableOpacity>
                    <Feather name={icone} size={35} />
                </TouchableOpacity>
            </View>
        </View>
    )
}