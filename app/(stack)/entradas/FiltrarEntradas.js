import { StyleSheet, Text, View } from "react-native";
import { Input } from "../../../src/components/Inputs";
import { Btn } from "../../../src/components/Btn";
import { CardEntradasInfor } from "../../../src/components/Cards/CardEntradasInfor";
import { Cores } from "../../../src/styles/Cores";
import { useState } from "react";


export default function TodasEntradas() {

    const [nomeEntrada, setNomeEntrada] = useState()
    const [entrada, setEntrada] = useState([])

    const filtrarEntrada = async () => {
        const dados = await fetch('https://minhas-financas-peach.vercel.app/entradas/nome', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "nome": nomeEntrada
            })
        })
        const resposta = await dados.json()
        setEntrada(resposta)

        console.log(entrada)
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30, fontWeight: "bold", color: Cores.azul}}>Buscar Entrada</Text>
            <View style={styles.containerFormulario}>
                <View style={styles.containerInputBtn}>
                    <Input
                        txtCor={Cores.branco}
                        placeholder={"Nome da Entrada"}
                        dados={(txt) => setNomeEntrada(txt)}
                    />
                </View>
                <View style={styles.containerInputBtn}>
                    <Btn
                        titulo={"Buscar Entrada"}
                        txtCor={Cores.branco}
                        txtFont={25}
                        funcao={filtrarEntrada}
                    />
                </View>
            </View>

            {/* <CardEntradasInfor /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    containerFormulario: {
        width: '100%',
        height: 200,
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    containerInputBtn: {
        width: '100%',
        height: 60,
        borderRadius: 10,
        backgroundColor: Cores.azul
    }
})