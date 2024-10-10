import { StyleSheet, TouchableOpacity, Text } from "react-native";

interface BtnProps {
    titulo: string;
    onPress: () => void;
}

export const BtnComponent = ({ titulo, onPress }:BtnProps) => {
    return(
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <Text style={styles.txt}>
                { titulo }
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 52,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})