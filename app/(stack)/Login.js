import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Animatable from 'react-native-animatable';
import {useRouter} from 'expo-router';
import { Input, Password } from "../../src/components/Inputs";
import { PageStyles } from "../../src/styles/PageStyles";
import { Cores } from "../../src/styles/Cores";
import { Btn } from "../../src/components/Btn";

export default function Login() {

    const router = useRouter()

    const [usuario, setUsuario] = useState()
    const [senha, setSenha] = useState()

    const validarUsuario = () => {
        if(usuario == "Bruno" && senha === "brunosds" || 
            usuario == "Monica" && senha === "moni2520"
        ) {
            return router.push('(drawer)')
        }
        return alert('Usuário incorreto!')
        // return router.push('(drawer)')
    }

    return (
        <Animatable.View
            animation="fadeIn" delay={500}
            style={[PageStyles.page, { backgroundColor: Cores.azul }]}
        >
            <View >
                <Text style={{ fontSize: 40, fontWeight: 'bold', color: Cores.branco }}>Bem Vindo!</Text>
            </View>
            <View style={PageStyles.pageContainer}>
                <View style={[styles.container, { backgroundColor: Cores.branco }]}>
                    <Input
                        placeholder={"Digite seu nome"}
                        dados={(txt) => setUsuario(txt)}
                    />
                </View>
                <View style={[styles.container, { backgroundColor: Cores.branco }]}>
                    <Password
                        placeholder={"Digite sua senha"}
                        dados={(txt) => setSenha(txt)}
                    />
                </View>
            </View>
            <View style={[
                styles.container,
                { width: '90%', backgroundColor: Cores.branco }
            ]}>
                <Btn
                    titulo={"Entrar"}
                    txtCor={Cores.azul}
                    txtFont={30}
                    funcao={validarUsuario}
                />
            </View>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        borderRadius: 10,
        shadowOffset: { width: 10, height: 10 },
        elevation: 5
    }
})