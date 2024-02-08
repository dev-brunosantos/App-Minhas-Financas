import { StyleSheet, TouchableOpacity, Text } from "react-native";

export const Btn = ({titulo, txtCor, txtFont, funcao}) => {
    return(
        <TouchableOpacity
            onPress={funcao}
            style={styles.container}
        >
            <Text style={[styles.txt, {fontSize: txtFont, color: txtCor}]}>
                {titulo}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt: {
        fontWeight: 'bold',
        textAlign: 'center'
    }
})