import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons'
import { useState } from "react";

interface InputProps {
    placeholder: string;
    isPassword: boolean;
    onChangeText: (txt: string) => void;
}

export const InputComponent = ({ placeholder, isPassword, onChangeText }: InputProps) => {

    const [icone, setIcone] = useState('eye-with-line')
    const [seguranca, setSeguranca] = useState(true)

    const verSenha = () => {
        setSeguranca(!seguranca)
        icone ? setIcone('eye') : setIcone('eye-with-line')
    }

    if (isPassword) {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    secureTextEntry={seguranca}
                />

                <TouchableOpacity style={styles.btn} onPress={verSenha} >
                    <Entypo name={icone} size={35} />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
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
    },
    input: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 15,
        fontSize: 18
    },
    btn: {
        height: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 15
    }
})