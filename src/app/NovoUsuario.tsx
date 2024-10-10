import { Alert, Text, View } from "react-native";
import { PageStyles } from "../styles/PageStyles";
import { BtnComponent } from "../components/BtnComponent";
import { InputComponent } from "../components/InputComponent";
import { useState } from "react";

export default function NovoUsuario() {

    const [usuario, setUsuario] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')

    const validarUsuario = () => {
        if(usuario?.trim() || email?.trim() || senha?.trim() || confirmarSenha?.trim()) {
            if(confirmarSenha !== senha) {
                return Alert.alert("As senhas não estão iguais.")
            }
            
            return Alert.alert("Todos os campos devem ser preenchidos.")
        }
        return Alert.alert("Novo usuário cadastrado com sucesso.")
    }

    return(
        <View style={PageStyles.page}>
            <View style={PageStyles.container}>
                <InputComponent 
                    placeholder="Digite seu email"
                    isPassword={false}
                    onChangeText={setUsuario}
                />

                <InputComponent 
                    placeholder="Digite seu email"
                    isPassword={false}
                    onChangeText={setEmail}
                />

                <InputComponent 
                    placeholder="Digite sua senha"
                    isPassword={true}
                    onChangeText={setSenha}
                />

                <InputComponent 
                    placeholder="Digite sua senha"
                    isPassword={true}
                    onChangeText={setConfirmarSenha}
                />
            </View>
            
            <View style={PageStyles.container}>
                <BtnComponent 
                    titulo="Entrar"
                    onPress={validarUsuario}
                />
            </View>
        </View>
    )
}