import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Animatable from 'react-native-animatable';
import { Input } from "../../src/components/Inputs";
import { PageStyles } from "../../src/styles/PageStyles";
import { Cores } from "../../src/styles/Cores";
import { Btn } from "../../src/components/Btn";
import { API } from "../../src/components/FuncaoSomar";

export default function NovaSaida() {

    const [saidaNome, setSaidaNome] = useState()
    const [saidaValor, setSaidaValor] = useState()
    const [saidaData, setSaidaData] = useState()

    const dados = []

    const cadastrarSaida = async () => {
        const buscaDados = await fetch('https://api-financas-zeta.vercel.app/saidas/nova', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                nome: saidaNome,
                valor: saidaValor,
                data: saidaData
            })
        })
        const resposta = await buscaDados.json()
        console.log(resposta)
    }


    return (
        <Animatable.View
            animation="fadeIn" delay={500}
            style={[PageStyles.page, { backgroundColor: Cores.azul }]}
        >
            <View >
                <Text style={{ fontSize: 40, fontWeight: 'bold', color: Cores.branco, textAlign: "center" }}>Cadastrar nova Saída</Text>
            </View>
            <View style={[PageStyles.pageContainer, { height: 250 }]}>
                <View style={[styles.container, { backgroundColor: Cores.branco }]}>
                    <Input
                        placeholder={"Nome da saída"}
                        dados={(txt) => setSaidaNome(txt)}
                    />
                </View>
                <View style={[styles.container, { backgroundColor: Cores.branco }]}>
                    <Input
                        placeholder={"Valor da saída"}
                        teclado={"numeric"}
                        dados={(txt) => setSaidaValor(txt)}
                    />
                </View>
                <View style={[styles.container, { backgroundColor: Cores.branco }]}>
                    <Input
                        placeholder={"Data da saída"}
                        dados={(txt) => setSaidaData(txt)}
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
                    funcao={cadastrarSaida}
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