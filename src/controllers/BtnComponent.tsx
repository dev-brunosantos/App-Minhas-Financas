import { useTema } from "@/hooks/useTema";
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from "react-native";

interface BtnProps extends TouchableOpacityProps {
    titulo: string;
}

export const BtnComponent = ({ titulo, ...rest }: BtnProps) => {
    const { btn, texto } = styles // DESENTRUTURAÇÃO DE ESTILOS
    const { temaAtual } = useTema()

    return (
        <TouchableOpacity style={[btn, { backgroundColor: temaAtual.background, borderColor: temaAtual.txt }]} {...rest}>
            <Text style={[texto, { color: temaAtual.txt }]}>{titulo}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: '100%',
        height: 52,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})