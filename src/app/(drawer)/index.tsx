import { axiosConfig } from "@/src/config/axiosConfig";
import axios from "axios";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

interface Teste {
    id_ent: number;
    titulo: string;
    descricao: string
}

export default function Home() {
    const [entradas, setEntradas] = useState();

    return (
        <View>
            <Text>Página HOME</Text>
        </View>
    );
}
