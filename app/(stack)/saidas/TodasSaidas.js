import { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { CardEntradasInfor } from "../../../src/components/Cards/CardEntradasInfor";

export default function TodasSaidas() {

    const [saidas, setSaidas] = useState([])

    useEffect(() => {
        async function buscarDados() {
            const dados = await fetch('https://api-financas-topaz.vercel.app/saidas')
            const resposta = await dados.json()
            setSaidas(resposta)
        }
        buscarDados()
    }, [])



    return (
        <View style={{ flex: 1, padding: 20 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                {
                    saidas.map(card => (
                        <CardEntradasInfor
                            key={card.id}
                            entradaNome={card.nome}
                            valor={card.valor}
                            data={card.data}
                            id={card._id}
                        />
                    ))
                }
                </View>
            </ScrollView>
        </View>
    )
}