import { Text, View } from "react-native";
import { PageStyles } from "../styles/PageStyles";
import { BtnComponent } from "../components/BtnComponent";
import { InputComponent } from "../components/InputComponent";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { router } from "expo-router";

export default function Login() {

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [novoUsuario, setNovoUsuario] = useState(false)

    const validarUsuario = () => {
        // if (!usuario || !senha) {
        //     setNovoUsuario(true)
        //     return alert("Usuário não esta cadastrado no sistema.")
        // }
        // setNovoUsuario(false)
        // return alert("Funcionou")

        return router.push('/(drawer)')
    }
    
    const criarConta = () => {
        return router.push('/NovoUsuario')
    }

    return (
        <GestureHandlerRootView>
            <View style={PageStyles.page}>
                <View style={PageStyles.container}>
                    <Text>Minhas Finanças</Text>
                </View>

                <View style={PageStyles.container}>
                    <InputComponent
                        placeholder="Digite seu email"
                        isPassword={false}
                        onChangeText={setUsuario}
                    />

                    <InputComponent
                        placeholder="Digite sua senha"
                        isPassword={true}
                        onChangeText={setSenha}
                    />
                </View>

                <View style={PageStyles.container}>
                    <BtnComponent
                        titulo="Entrar"
                        onPress={validarUsuario}
                    />
                </View>

                {
                    !novoUsuario ? (
                        <View style={PageStyles.container}>
                            <TouchableOpacity onPress={criarConta}>
                                <Text>Não tem conta ? Clique aqui</Text>
                            </TouchableOpacity>
                        </View>
                    ) : <View style={PageStyles.container}/>
                }
            </View>
        </GestureHandlerRootView>
    )
}