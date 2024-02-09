import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { Cores } from "../styles/Cores";

export const BtnOpcoes = ({ rota, icone, texto }) => {
    const router = useRouter()

    return (
        <TouchableOpacity
            onPress={() => router.push(`${rota}`)}
            style={styles.btnIconesControles}
        >
            <FontAwesome6
                name={icone}
                size={60} color={Cores.branco}
            />
            <Text style={styles.btnIconesControlesTxt}>{texto}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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