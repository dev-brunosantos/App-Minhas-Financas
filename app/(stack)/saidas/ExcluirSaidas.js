import { StyleSheet, Text, View } from "react-native";
import { Input } from "../../../src/components/Inputs";
import { Btn } from "../../../src/components/Btn";
import { Cores } from "../../../src/styles/Cores";
import { useState } from "react";


export default function ExcluirSaidas() {

    const [id, setID] = useState()
    const [res, setRes] = useState([])

    const filtrarSaida = async () => {
        const dados = await fetch(`https://api-financas-topaz.vercel.app/saidas/apagar/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "_id": id
            })
        })
        const resposta = await dados.json()
        setRes(resposta.Mensagem)

        return setID('')
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: Cores.azul }}>Buscar Saida</Text>
            <View style={styles.containerFormulario}>
                <View style={styles.containerInputBtn}>
                    <Input
                        txtCor={Cores.branco}
                        placeholder={"Id da Saida"}
                        value={id}
                        dados={(txt) => setID(txt)}
                    />
                </View>
                <View style={styles.containerInputBtn}>
                    <Btn
                        titulo={"Apagar Saida"}
                        txtCor={Cores.branco}
                        txtFont={25}
                        funcao={filtrarSaida}
                    />
                </View>
            </View>

            <View>
                {
                    res != '' ? (
                        <Text style={styles.txt}>
                            {res}
                        </Text>
                    ) : <Text />
                }
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
    },
    txt: {
        color: Cores.branco,
        textAlign: 'center',
        fontSize: 40,
        fontWeight: "bold",
        borderRadius: 10,
        padding: 30,
        backgroundColor: Cores.azul
    }
})