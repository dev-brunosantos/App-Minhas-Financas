import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import * as Animatable from 'react-native-animatable';
import { PageStyles } from "../../src/styles/PageStyles";
import { Cores } from "../../src/styles/Cores";
import { CardValor } from "../../src/components/Cards/CardValor";

export default function Entradas() {

    const [dados, setDados] = useState([])
    const [valorEntrada, setValorEntrada] = useState(0)

    useEffect(() => {
        async function BuscarEntradas() {
            const entradas = await fetch("https://api-financas-zeta.vercel.app/entradas")
            const resposta = await entradas.json()
            setDados(resposta)
        }
        BuscarEntradas()
        somarEntradas(dados)
    }, [dados])

    function somarEntradas(api) {
        let soma = 0
        for (var i = 0; i < api.length; i++) {
            soma += api[i].valor
            setValorEntrada(soma)
        }
    }

    return (
        <View style={[{ backgroundColor: Cores.azul, flex: 1, justifyContent: "center" }]}>
            <View style={{
                width: '100%', height: 500,
                marginTop: 60, paddingBottom: 80, padding: 10
            }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        dados.map(card => (
                            <CardValor
                                key={card._id}
                                titulo={card.nome}
                                saida={"green"}
                                valor={card.valor}
                                data={card.data}
                            />
                        ))
                    }
                </ScrollView>
            </View>

            <Animatable.View animation={"fadeInUp"} delay={500} style={PageStyles.rodape}>
                <Text style={PageStyles.rodapeTxt}>Total</Text>
                <Text style={[PageStyles.rodapeTxt, { color: 'green' }]}>R$ {valorEntrada}</Text>
            </Animatable.View>
        </View>
    )
}