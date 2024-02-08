import { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Cores } from '../../styles/Cores';

export const CardValor = ({ titulo, valor, data, saida }) => {

    const [abrir, setAbrir] = useState(0)

    const handleAbrirInfor = () => {
        abrir == 0 ? setAbrir(100) : setAbrir(0)
    }

    return (
        <>
            <TouchableOpacity style={styles.container} onPress={handleAbrirInfor}>
                <Text style={styles.txt}>{titulo}</Text>
            </TouchableOpacity>
            <View style={[styles.containerInfor, { height: abrir }]}>
                <View>
                    <Text style={styles.txt}>Valor</Text>
                    <Text style={[styles.txt, { color: saida }]}>R$ {valor}</Text>
                </View>
                <View style={{ width: '40%', alignItems: 'flex-start'}}>
                    <Text style={styles.txt}>Data</Text>
                    <Text style={[styles.txt, { width: '92%', height: 28, overflow: 'hidden', color: Cores.azul }]}>{data}</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        // borderWidth: 1,
        borderRadius: 5,
        marginVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Cores.branco
    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    containerInfor: {
        width: '100%',
        // height: 100,
        borderRadius: 5,
        marginVertical: 0,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Cores.branco,
        overflow: 'hidden'
    }
})