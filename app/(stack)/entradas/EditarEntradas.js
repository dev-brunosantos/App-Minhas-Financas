import { Text, View } from "react-native";
import { Input } from "../../../src/components/Inputs";

export default function EditarEntradas() {
    return(
        <View>
            <Text>Tela para editar as Entradas</Text>
            <Input 
                placeholder={"Nome da Entrada"}
                
            />
        </View>
    )
}