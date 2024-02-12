import { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { CardEntradasInfor } from "../../../src/components/Cards/CardEntradasInfor";

export default function TodasEntradas() {

    const [entradas, setEntradas] = useState([])

    useEffect(() => {
        async function buscarDados() {
            const dados = await fetch('https://minhas-financas-peach.vercel.app/entradas')
            const resposta = await dados.json()
            setEntradas(resposta)
        }
        buscarDados()
    }, [])



    return (
        <View style={{ flex: 1, padding: 20 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                {
                    entradas.map(card => (
                        <CardEntradasInfor
                            key={card.id}
                            entradaNome={card.nome}
                            valor={card.valor}
                            data={card.data}
                            id={card._id}
                        />
                    ))
                }
                {
                    entradas.map(card => (
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