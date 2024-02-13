import { useState } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import { Entypo } from '@expo/vector-icons';

export const Input = ({ placeholder, txtCor, value, dados, teclado }) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={dados}
                style={[styles.input, {color: txtCor}]}
                keyboardType={teclado}
            />
        </View>
    )
}

export const Password = ({ placeholder, value, dados }) => {

    const [seguranca, setSeguranca] = useState(true)
    const [verSenha, setVerSenha] = useState('eye-with-line')

    const verificarSenha = () => {
        return (
            verSenha == 'eye-with-line' ? setVerSenha('eye') : setVerSenha('eye-with-line'),
            setSeguranca(!seguranca)
        )
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                secureTextEntry={seguranca}
                value={value}
                onChangeText={dados}
                style={styles.input}
            />
            <TouchableOpacity
                onPress={verificarSenha}
                style={styles.btnIcone}
            >
                <Entypo name={verSenha} size={35} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 10,
        fontSize: 22
    },
    btnIcone: {
        height: '100%',
        position: 'absolute',
        right: 15,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
})