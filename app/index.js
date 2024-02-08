import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useRouter } from 'expo-router';
// IMPORTAÇÕES DE ESTILOS
import { Cores } from "../src/styles/Cores";

export default function Page() {

    const router = useRouter()

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Text
                    animation="fadeIn" delay={1000}
                    style={styles.logo}
                >
                    Minhas Finanças
                </Animatable.Text>
            </View>

            <Animatable.View
                animation="fadeInUp"
                delay={1500}
                style={styles.containerForm}
            >
                <Text style={styles.titulo}>Bem vindo ao nosso App</Text>
                <Text style={styles.descricao}>Realize o login e controle suas finanças de qualquer lugar.</Text>

                <TouchableOpacity style={styles.btn} onPress={() => router.push('(stack)/Login')}>
                    <Text style={styles.btnTxt}>Entrar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center",
        backgroundColor: Cores.azul,
    },
    containerLogo: {
        flex: 2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        color: Cores.branco,
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'center',
        position: 'absolute',
        bottom: '15%'
    },
    containerForm: {
        flex: 1.2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: '5%',
        backgroundColor: Cores.branco
    },
    titulo: {
        color: Cores.azul,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    descricao: {
        color: Cores.azul,
        fontSize: 18,
        textAlign: 'center'
    },
    btn: {
        width: '50%',
        padding: 10,
        borderRadius: 10,
        backgroundColor: Cores.azul
    },
    btnTxt: {
        color: Cores.branco,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})