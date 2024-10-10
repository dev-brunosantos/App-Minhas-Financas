import { AntDesign } from "@expo/vector-icons";
import { View, Modal, Text, TouchableOpacity } from "react-native"
import { CardStyles } from "@/src/styles/CardStyles";


interface PagamentosProps {
    titulo: string;
    id: string;
    valor: number;
    data: string;
    verModal: boolean;
    abrirModal: () => void;
}

export const CardPagamentos = ({ titulo, id, valor, data, verModal, abrirModal }: PagamentosProps) => {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={verModal}
            onRequestClose={abrirModal}
        >
            <View style={CardStyles.container}>

                <TouchableOpacity
                    style={CardStyles.btnFechar}
                    onPress={abrirModal}
                >
                    <AntDesign name="close" size={35} />
                </TouchableOpacity>

                <View>
                    <Text>{titulo}</Text>
                </View>

                <View>
                    <Text>{id}</Text>
                    <View>
                        <Text>R$ {valor}</Text>
                        <Text>{data}</Text>
                    </View>
                </View>
            </View>

        </Modal>

    )
}