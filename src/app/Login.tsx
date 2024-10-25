import { Text, TouchableOpacity, View } from "react-native";
import { PageStyles } from "@/styles/Pagestyles";
import { InputComponent } from "@/controllers/InputComponent";
import { useEffect, useState } from "react";
import { BtnComponent } from "@/controllers/BtnComponent";
import { useLogin } from "@/hooks/useLogin";
import { useTema } from "@/hooks/useTema";
import { TemaClaro, TemaEscuro } from "@/styles/Cores";
import { router } from "expo-router";
import { carregarTema } from "@/config/BuscarTema";
import { TemaProps } from "@/interfaces/Tema.interface";

export default function Login() {

    const { tema, temaAtual, alterarTema } = useTema()

    const { page, container } = PageStyles
    const { usuario, erro, login } = useLogin()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const fazerLogin = () => {
        login({ email, senha })
    }

    return (
        <View style={[page, { backgroundColor: temaAtual.background }]}>
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
                    <TouchableOpacity onPress={() => router.push('/NovoUsuario')}>
                        <Text style={{ color: temaAtual.txt }}>Não tem conta? Cadastre-se</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}