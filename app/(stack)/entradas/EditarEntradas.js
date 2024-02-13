import { StyleSheet, Text, View, Alert } from "react-native";
import { Input } from "../../../src/components/Inputs";
import { Cores } from "../../../src/styles/Cores";
import { Btn } from "../../../src/components/Btn";
import { useState } from "react";



export default function EditarEntradas() {

    const [idEntrada, setIdEntrada] = useState()
    const [editarNomeEntrada, setEditarNomeEntrada] = useState()
    const [editarValorEntrada, setEditarValorEntrada] = useState()
    const [editarDataEntrada, setEditarDataEntrada] = useState()

    async function buscarDados() {
        const busca = await fetch(`https://api-financas-topaz.vercel.app/entradas/editar/${idEntrada}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "nome": editarNomeEntrada,
                "valor": editarValorEntrada,
                "data": editarDataEntrada
            })
        })
        const resposta = await busca.json()
        Alert.alert(resposta.Mensagem)
        return(
            setIdEntrada(''), setEditarNomeEntrada(''),
            setEditarValorEntrada(''), setEditarDataEntrada('')
        )
    }

    return (
        <View style={[styles.container, { alignContent: 'center' }]}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: Cores.azul }}>Editar Entrada</Text>
            <View style={styles.containerFormulario}>
                <View style={styles.containerInputBtn}>
                    <Input
                        txtCor={Cores.branco}
                        placeholder={"ID da Entrada"}
                        value={idEntrada}
                        dados={(txt) => setIdEntrada(txt)}
                    />
                </View>

                <View style={[styles.containerInput]}>
                    <Input
                        txtCor={Cores.branco}
                        placeholder={"Nome da entrada"}
                        value={editarNomeEntrada}
                        dados={(txt) => setEditarNomeEntrada(txt)}
                    />
                </View>
                <View style={[styles.containerInput]}>
                    <Input
                        txtCor={Cores.branco}
                        placeholder={"Valor da entrada"}
                        value={editarValorEntrada}
                        teclado={"numeric"}
                        dados={(txt) => setEditarValorEntrada(txt)}
                    />
                </View>
                <View style={[styles.containerInput]}>
                    <Input
                        txtCor={Cores.branco}
                        placeholder={"Data da entrada"}
                        value={editarDataEntrada}
                        dados={(txt) => setEditarDataEntrada(txt)}
                    />
                </View>

            </View>
            <View style={styles.containerInputBtn}>
                <Btn
                    titulo={"Editar Entrada"}
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
        borderRadius: 10,
        shadowOffset: { width: 10, height: 10 },
        elevation: 5,
        marginVertical: 20,
        backgroundColor: Cores.azul
    }
})