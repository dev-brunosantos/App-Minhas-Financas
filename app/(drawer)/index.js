import { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, StatusBar } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useRouter } from 'expo-router';
import { Entypo } from '@expo/vector-icons';
import { Cores } from "../../src/styles/Cores";
import { PageStyles } from "../../src/styles/PageStyles";
import { Btn } from "../../src/components/Btn";
import opcoesHome from '../../src/json/opcoesHome.json';
import { BtnOpcoes } from "../../src/components/BtnOpcoes";


export default function Home() {

    const [iconeSaldo, setIconeSaldo] = useState('eye-with-line')
    const [verSaldo, setVerSaldo] = useState(false)
    const [saldoTotalEntrada, setSaldoTotalentrada] = useState([])
    const [valorEntrada, setValorEntrada] = useState()
    const [saldoTotalSaida, setSaldoTotalSaida] = useState([])
    const [valorSaida, setValorSaida] = useState()

    const router = useRouter()

    const checarSaldo = () => {
        iconeSaldo == 'eye-with-line' ? (
            setIconeSaldo('eye'), setVerSaldo(true), somaValores(saldoTotalEntrada)
        ) : (setIconeSaldo('eye-with-line'), setVerSaldo(false))
    }

    useEffect(() => {
        async function BuscarEntradas() {
            const entradas = await fetch("https://api-financas-topaz.vercel.app/entradas")
            const resposta = await entradas.json()
            setSaldoTotalentrada(resposta)
        }
        BuscarEntradas()
    }, [valorEntrada])

    function somaValores(dados) {
        let soma = 0
        for (var i = 0; i < dados.length; i++) {
            soma += dados[i].valor
        }
        setValorEntrada(soma)
    }
    // FUNÇÃO QUE BUSCA OS DADOS DE SAIDAS E REALIZADA A SOMA DO VALOR TOTAL DE SAIDAS
    useEffect(() => {
        async function BuscarEntradas() {
            const entradas = await fetch("https://api-financas-topaz.vercel.app/saidas")
            const resposta = await entradas.json()
            setSaldoTotalSaida(resposta)
        }
        BuscarEntradas()
    }, [valorSaida])

    function somaValores(dados) {
        let soma = 0
        for (var i = 0; i < dados.length; i++) {
            soma += dados[i].valor
        }
        setValorSaida(soma)
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={Cores.azul} translucent={false} barStyle={"light-content"} />
            <View style={styles.cabecalho}>
                <View style={styles.cabecalhoContainer}>
                    <View style={styles.containerIcones}>
                        <Text style={styles.cabecalhoContainerTxt}>Olá, Bruno Santos</Text>
                    </View>
                    <TouchableOpacity style={styles.containerBtnIcone} onPress={checarSaldo}>
                        <Entypo name={iconeSaldo} size={40} color={Cores.branco} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.containerValorGeral}>
                    <Text style={[styles.txtValor, { fontSize: 25 }]}>Conta</Text>
                    <View style={{ width: 120, height: 30 }}>
                        {
                            verSaldo ? (
                                <Text style={[styles.txtValor, { fontSize: 25 }]}>R$ {valor}</Text>
                            ) : (<View style={styles.esconder} />)
                        }
                    </View>
                </View>

                <View style={styles.containerbtnIconesControles}>
                    {
                        opcoesHome.map(card => (
                            <BtnOpcoes
                                key={card.rota} rota={card.rota}
                                texto={card.texto} icone={card.icone}
                            />
                        ))
                    }
                </View>
            </ScrollView>

            <Animatable.View
                animation={"fadeInUp"} delay={500}
                style={[PageStyles.rodape, { backgroundColor: Cores.azul }]}
            >
                <Btn
                    titulo={"Sair"}
                    txtCor={Cores.branco}
                    txtFont={30}
                    funcao={() => router.push('/')}
                />
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    cabecalho: {
        width: '100%',
        height: 60,
        backgroundColor: Cores.azul
    },
    cabecalhoContainer: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cabecalhoContainerTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Cores.branco
    },
    containerIcones: {
        width: '70%',
        height: '100%',
        padding: 2,
        justifyContent: 'center',
    },
    containerBtnIcone: {
        width: '20%',
        height: '100%',
        marginRight: 25,
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999
    },
    containerValorGeral: {
        width: '100%',
        height: 70,
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    txtValor: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Cores.azul
    },
    esconder: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
        backgroundColor: '#0000ff55'
    },
    containerbtnIconesControles: {
        width: '100%',
        padding: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    btnIconesControles: {
        width: 130,
        height: 130,
        padding: 5,
        margin: 10,
        shadowOffset: { width: 10, height: 10 },
        elevation: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Cores.azul
    },
    btnIconesControlesTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Cores.branco
    }
})