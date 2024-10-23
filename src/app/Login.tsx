import { Text, TouchableOpacity, View } from "react-native";
import { PageStyles } from "../styles/Pagestyles";
import { InputComponent } from "../controllers/InputComponent";
import { useState } from "react";
import { BtnComponent } from "../controllers/BtnComponent";
import { useLogin } from "../hooks/useLogin";

export default function Login() {

    const { page, container } = PageStyles
    const { usuario, erro, login } = useLogin()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const fazerLogin = () => {
        login({ email, senha })
    }

    return (
        <View style={page}>
            <View style={container}>
                <InputComponent
                    placeholder="Digite seu e-mail"
                    isPassword={false}
                    onChangeText={setEmail}
                />
                <InputComponent
                    placeholder="Digite seu e-mail"
                    isPassword={false}
                    onChangeText={setSenha}
                />
            </View>

            <View style={container}>
                <BtnComponent titulo="Login" onPress={fazerLogin} />
            </View>

            <View style={container}>
                {erro && (
                    <TouchableOpacity>
                        <Text>Não tem conta? Cadastre-se</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}