import { View, TextInput, TextInputProps, TouchableOpacity, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { useState } from 'react';
import { useTema } from '@/hooks/useTema';

interface InputProps extends TextInputProps {
    isPassword: boolean;
}

export const InputComponent = ({ isPassword, ...rest }: InputProps) => {

    const { temaAtual } = useTema()

    const { container, btn, input } = styles // DESESTRUTURAÇÃO DE ESTILOS

    const [icone, setIcone] = useState('eye-with-line')
    const [seguranca, setSeguranca] = useState(false)

    const verSenha = () => {
        setSeguranca(!seguranca)
        icone === "eye-with-line" ? setIcone("eye") : setIcone("eye-with-line")
    }


    if (isPassword) {
        return (
            <View style={[container, { backgroundColor: temaAtual.background }]}>
                <TextInput
                    style={[input, { color: temaAtual.txt}]}
                    {...rest}
                    placeholderTextColor={temaAtual.txt}
                    secureTextEntry={seguranca}
                />

                <TouchableOpacity style={btn} onPress={verSenha}>
                    <Entypo name={icone} size={35} color={temaAtual.txt} />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={[container, { backgroundColor: temaAtual.background, borderColor: temaAtual.txt }]}>
            <TextInput
                style={[input, { color: temaAtual.txt }]}
                {...rest}
                placeholderTextColor={temaAtual.txt}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 52,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
        fontSize: 16
    },
    btn: {
        height: '100%',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 15
    }
})