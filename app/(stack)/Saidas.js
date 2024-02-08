import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import * as Animatable from 'react-native-animatable';
import { PageStyles } from "../../src/styles/PageStyles";
import { Cores } from "../../src/styles/Cores";
import { CardValor } from "../../src/components/Cards/CardValor";

export default function Saidas() {

    const [dados, setDados] = useState([])
    const [valorSaida, setValorSaida] = useState(0)

    useEffect(() => {
        async function BuscarSaidas(api) {
            const saidas = await fetch("https://api-financas-zeta.vercel.app/saidas")
            const resposta = await saidas.json()
            setDados(resposta)
        }
        BuscarSaidas(dados)
        somarDespesas(dados)
    }, [dados])
    
    function somarDespesas(api) {
        let soma = 0
        for (var i = 0; i < api.length; i++) {
            soma += api[i].valor
            setValorSaida(soma)
        }
    }
    
    return (
        <View style={[{ backgroundColor: Cores.azul, flex: 1, justifyContent: "center" }]}>
            <View style={{
                width: '100%', height: 500,
                marginTop: 60, padding: 10
            }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        dados.map(card => (
                            <CardValor
                                key={card._id}
                                titulo={card.nome}
                                valor={card.valor}
                                saida={'red'}
                                data={card.data}
                            />
                        ))
                    }
                </ScrollView>
            </View>

            <Animatable.View animation={"fadeInUp"} delay={500} style={PageStyles.rodape}>
                <Text style={PageStyles.rodapeTxt}>Total</Text>
                <Text style={[PageStyles.rodapeTxt, {color: 'red'}]}>R$ {valorSaida}</Text>
            </Animatable.View>
        </View>
    )
}