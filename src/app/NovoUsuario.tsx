import { Alert, View } from "react-native";
import { PageStyles } from "../styles/PageStyles";
import { InputComponent } from "../components/InputComponent";
import { useState } from "react";
import { BtnComponent } from "../components/BtnComponent";
import { axiosConfig } from "../config/axiosConfig";

interface Usuario {
    nome: string;
    email: string;
    senha: string;
}

export default function NovoUSuario() {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmarSenha, setConfirmarSenha] = useState("")

    const [dadosUsuario, setDadosUsuario] = useState<Usuario[]>([])

    const cadastrar = async () => {
        if(nome?.trim() || email?.trim() || senha?.trim()) {
            if(confirmarSenha !== senha) {
                return Alert.alert("As senhas não são iguais.")
            }
            return Alert.alert("Todos os campos devem ser preenchidos.")
        }
        try {
            const response = await axiosConfig.post('/usuario/cadastrar')
            setDadosUsuario(response.data)

            return Alert.alert(`${dadosUsuario}`)
        } catch (error) {
            return Alert.alert('')
        }
    }

    return(
        <View style={PageStyles.page}>
            <View style={PageStyles.container}>
                <InputComponent 
                    placeholder="Digite seu nome"
                    isPassword={false}
                    onChangeText={setNome}
                />   
                <InputComponent 
                    placeholder="Digite seu e-mail"
                    isPassword={false}
                    onChangeText={setEmail}
                />   
                <InputComponent 
                    placeholder="Digite sua senha"
                    isPassword={true}
                    onChangeText={setSenha}
                />   
                <InputComponent 
                    placeholder="Confirmar senha"
                    isPassword={true}
                    onChangeText={setConfirmarSenha}
                />   
            </View>
            
            <View style={PageStyles.container}>
                <BtnComponent 
                    titulo="Cadastrar"
                    onPress={cadastrar}
                />
            </View>
        </View>
    )
}