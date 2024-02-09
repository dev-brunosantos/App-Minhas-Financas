import { View, Text } from "react-native";
import * as Animatable from 'react-native-animatable';
import {useRouter} from 'expo-router';
import opcoes from '../../src/json/opcoesControleEntrada.json';
import { BtnOpcoes } from "../../src/components/BtnOpcoes";
import { PageStyles } from "../../src/styles/PageStyles";
import { Cores } from "../../src/styles/Cores";
import { Btn } from "../../src/components/Btn";

export default function saidasControle() {

    const router = useRouter()

    return (
        <View style={PageStyles.page}>
            <View style={[PageStyles.containerbtnIconesControles, { height: 400 }]}>
                {
                    opcoes.map(card => (
                        <BtnOpcoes
                            key={card.texto}
                            icone={card.icone}
                            texto={card.texto}
                        />
                    ))
                }
            </View>
            <Animatable.View
                animation={"fadeInUp"} delay={1000}
                style={[PageStyles.rodape, { backgroundColor: Cores.azul }]}
            >
                <Btn
                    titulo={"Voltar"}
                    txtCor={Cores.branco}
                    txtFont={30}
                    funcao={() => router.push('(drawer)')}
                />
            </Animatable.View>
        </View>
    )
}