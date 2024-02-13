import { StyleSheet, Text, View } from "react-native";
import { Input } from "../../../src/components/Inputs";
import { Btn } from "../../../src/components/Btn";
import { CardEntradasInfor } from "../../../src/components/Cards/CardEntradasInfor";
import { Cores } from "../../../src/styles/Cores";
import { useState } from "react";


export default function TodasSaidas() {

    const [nomeSaida, setNomeSaida] = useState()
    const [saida, setSaida] = useState([])

    const filtrarsaida = async () => {
        const dados = await fetch('https://api-financas-topaz.vercel.app/saidas/nome', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "nome": nomeSaida
            })
        })
        const resposta = await dados.json()
        setSaida(resposta)
        console.log(saida)
        return setNomeSaida('')
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30, fontWeight: "bold", color: Cores.azul}}>Buscar saida</Text>
            <View style={styles.containerFormulario}>
                <View style={styles.containerInputBtn}>
                    <Input
                        txtCor={Cores.branco}
                        placeholder={"Nome da saida"}
                        dados={(txt) => setNomeSaida(txt)}
                    />
                </View>
                <View style={styles.containerInputBtn}>
                    <Btn
                        titulo={"Buscar saida"}
                        txtCor={Cores.branco}
                        txtFont={25}
                        funcao={filtrarsaida}
                    />
                </View>
            </View>

            <View>
                {
                    saida.map(cardsaida => (
                        <CardEntradasInfor 
                            key={cardsaida._id}
                            entradaNome={cardsaida.nome}
                            valor={cardsaida.valor}
                            data={cardsaida.data}
                            id={cardsaida._id}
                        />
                    ))
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
    }
})