import { useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import * as Animatable from 'react-native-animatable';
import { Input } from "../../src/components/Inputs";
import { PageStyles } from "../../src/styles/PageStyles";
import { Cores } from "../../src/styles/Cores";
import { Btn } from "../../src/components/Btn";

export default function NovaEntrada() {

    const [entradaNome, setEntradaNome] = useState()
    const [entradaValor, setEntradaValor] = useState()
    const [entradaData, setEntradaData] = useState()

    const validarEntrada = async () => {
        const buscaDados = await fetch('https://minhas-financas-peach.vercel.app/entradas/nova', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                nome: entradaNome,
                valor: entradaValor,
                data: entradaData
            })
        })
        const resposta = await buscaDados.json()
        Alert.alert(resposta.Mensagem)
    }


    return (
        <Animatable.View
            animation="fadeIn" delay={500}
            style={[PageStyles.page, { backgroundColor: Cores.azul }]}
        >
            <View >
                <Text style={{ fontSize: 40, fontWeight: 'bold', color: Cores.branco, textAlign: "center" }}>Cadastrar nova Entrada</Text>
            </View>
            <View style={[PageStyles.pageContainer, { height: 250 }]}>
                <View style={[styles.container, { backgroundColor: Cores.branco }]}>
                    <Input
                        placeholder={"Nome da entrada"}
                        dados={(txt) => setEntradaNome(txt)}
                    />
                </View>
                <View style={[styles.container, { backgroundColor: Cores.branco }]}>
                    <Input
                        placeholder={"Valor da entrada"}
                        teclado={"numeric"}
                        dados={(txt) => setEntradaValor(txt)}
                    />
                </View>
                <View style={[styles.container, { backgroundColor: Cores.branco }]}>
                    <Input
                        placeholder={"Data da entrada"}
                        dados={(txt) => setEntradaData(txt)}
                    />
                </View>
            </View>
            <View style={[
                styles.container,
                { width: '90%', backgroundColor: Cores.branco }
            ]}>
                <Btn
                    titulo={"Cadastrar"}
                    txtCor={Cores.azul}
                    txtFont={30}
                    funcao={validarEntrada}
                />
            </View>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        // borderWidth: 1,
        borderRadius: 10,
        shadowOffset: { width: 10, height: 10 },
        elevation: 5
    }
})