import { StyleSheet, View, Text } from "react-native"
import { Cores } from "../../styles/Cores"

export const CardEntradasInfor = ({ entradaNome, valor, data, id }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{entradaNome}</Text>
            <View style={styles.containerValorData}>
                <Text style={styles.valor}>R$ {valor}</Text>
                <View style={{width: '45%', height: 30, overflow: 'hidden'}}>
                    <Text style={styles.valor}>{data}</Text>
                </View>
            </View>
            <Text style={styles.id}>ID: {id}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        borderRadius: 15,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor:Cores.azul
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Cores.branco
    },
    containerValorData: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    valor: {
        color: Cores.branco,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    id: {
        // color: Cores.branco,
        fontSize: 20
    }
})