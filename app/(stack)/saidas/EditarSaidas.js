import { StyleSheet, Text, View, Alert } from "react-native";
import { Input } from "../../../src/components/Inputs";
import { Cores } from "../../../src/styles/Cores";
import { Btn } from "../../../src/components/Btn";
import { useState } from "react";



export default function EditarSaidas() {

    const [idSaida, setIdSaida] = useState()
    const [editarNomeSaida, setEditarNomeSaida] = useState()
    const [editarValorSaida, setEditarValorSaida] = useState()
    const [editarDataSaida, setEditarDataSaida] = useState()

    async function buscarDados() {
        const busca = await fetch(`https://api-financas-topaz.vercel.app/saidas/editar/${idSaida}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "nome": editarNomeSaida,
                "valor": editarValorSaida,
                "data": editarDataSaida
            })
        })
        const resposta = await busca.json()
        Alert.alert(resposta.Mensagem)
        return(
            setIdSaida(''), setEditarNomeSaida(''),
            setEditarValorSaida(''), setEditarDataSaida('')
        )
    }

    return (
        <View style={[styles.container, { alignContent: 'center' }]}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: Cores.azul }}>Editar Saida</Text>
            <View style={styles.containerFormulario}>
                <View style={styles.containerInputBtn}>
                    <Input
                        txtCor={Cores.branco}
                        placeholder={"ID da Saida"}
                        value={idSaida}
                        dados={(txt) => setIdSaida(txt)}
                    />
                </View>

                <View style={[styles.containerInput]}>
                    <Input
                        txtCor={Cores.branco}
                        placeholder={"Nome da Saida"}
                        value={editarNomeSaida}
                        dados={(txt) => setEditarNomeSaida(txt)}
                    />
                </View>
                <View style={[styles.containerInput]}>
                    <Input
                        txtCor={Cores.branco}
                        placeholder={"Valor da Saida"}
                        value={editarValorSaida}
                        teclado={"numeric"}
                        dados={(txt) => setEditarValorSaida(txt)}
                    />
                </View>
                <View style={[styles.containerInput]}>
                    <Input
                        txtCor={Cores.branco}
                        placeholder={"Data da Saida"}
                        value={editarDataSaida}
                        dados={(txt) => setEditarDataSaida(txt)}
                    />
                </View>

            </View>
            <View style={styles.containerInputBtn}>
                <Btn
                    titulo={"Editar Saida"}
                    txtCor={Cores.branco}
                    txtFont={25}
                    funcao={buscarDados}
                />
            </View>
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
        // height: 'auto',
        flex: 1,
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    containerInputBtn: {
        width: '100%',
        height: 60,
        borderRadius: 10,
        backgroundColor: Cores.azul,
        shadowOffset: { width: 20, height: 20 },
        shadowOpacity: 5,
        shadowColor: Cores.azul,
        elevation: 10
    },
    containerInput: {
        width: '100%',
        height: 60,
        // borderWidth: 1,
        borderRadius: 10,
        shadowOffset: { width: 10, height: 10 },
        elevation: 5,
        marginVertical: 20,
        backgroundColor: Cores.azul
    }
})