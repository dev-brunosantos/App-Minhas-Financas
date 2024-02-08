import { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useRouter } from 'expo-router';
import { FontAwesome, FontAwesome6, Entypo } from '@expo/vector-icons';
import { Cores } from "../../src/styles/Cores";
import { PageStyles } from "../../src/styles/PageStyles";
import { Btn } from "../../src/components/Btn";

export default function Home() {

    const [iconeSaldo, setIconeSaldo] = useState('eye-with-line')
    const [verSaldo, setVerSaldo] = useState(false)
    const [saldoTotal, setSaldoTotal] = useState([])
    const [valor, setValor] = useState()

    // let soma = 0

    const router = useRouter()

    const checarSaldo = () => {
        iconeSaldo == 'eye-with-line' ? (
            setIconeSaldo('eye'), setVerSaldo(true), somaValores(saldoTotal)
        ) : (setIconeSaldo('eye-with-line'), setVerSaldo(false))
    }

    // async function BuscarEntradas() {
    //     const entradas = await fetch("https://api-financas-zeta.vercel.app/entradas")
    //     const resposta = await entradas.json()
    //     setSaldoTotal(resposta)
    // }

    useEffect(() => {
        async function BuscarEntradas() {
            const entradas = await fetch("https://api-financas-zeta.vercel.app/entradas")
            const resposta = await entradas.json()
            setSaldoTotal(resposta)
        }
        BuscarEntradas()
    }, [valor])

    function somaValores(dados) {
        let soma = 0
        for (var i = 0; i < dados.length; i++) {
            soma += dados[i].valor
        }
        setValor(soma)
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.cabecalho}>
                <View style={styles.cabecalhoContainer}>
                    <View style={styles.containerIcones}>
                        <Text style={styles.cabecalhoContainerTxt}>Olá, Bruno Santos</Text>
                    </View>
                    <View style={styles.containerIcones}>
                        <TouchableOpacity onPress={checarSaldo}>
                            <Entypo name={iconeSaldo} size={30} color={Cores.branco} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.containerValorGeral}>
                    <Text style={[styles.txtValor, {fontSize: 25}]}>Conta</Text>
                    <View style={{ width: 120, height: 30 }}>
                        {
                            verSaldo ? (
                                <Text style={[styles.txtValor, {fontSize: 25}]}>R$ {valor}</Text>
                            ) : (<View style={styles.esconder} />)
                        }
                    </View>
                </View>

                <View style={styles.containerbtnIconesControles}>
                    <TouchableOpacity
                        onPress={() => router.push('Entradas')}
                        style={styles.btnIconesControles}
                    >
                        <FontAwesome6
                            name="money-bill-wave"
                            size={60} color={Cores.branco}
                        />
                        <Text style={styles.btnIconesControlesTxt}>Entradas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => router.push('Saidas')}
                        style={styles.btnIconesControles}
                    >
                        <FontAwesome6
                            name="money-bill-transfer"
                            size={60} color={Cores.branco}
                        />
                        <Text style={styles.btnIconesControlesTxt}>Saidas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => router.push('NovaEntrada')}
                        style={styles.btnIconesControles}
                    >
                        <FontAwesome6
                            name="pencil"
                            size={60} color={Cores.branco}
                        />
                        <Text style={styles.btnIconesControlesTxt}>Nova Entrada</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => router.push('NovaSaida')}
                        style={styles.btnIconesControles}
                    >
                        <FontAwesome6
                            name="pencil"
                            size={60} color={Cores.branco}
                        />
                        <Text style={styles.btnIconesControlesTxt}>Nova Saida</Text>
                    </TouchableOpacity>
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
        // height: 100,
        height: 50,
        backgroundColor: Cores.azul
    },
    cabecalhoContainer: {
        width: '100%',
        // height: '50%',
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
        width: '80%',
        padding: 2
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
        // borderWidth: 1,
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