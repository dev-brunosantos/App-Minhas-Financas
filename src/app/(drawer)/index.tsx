import { BtnComponent } from "@/src/components/BtnComponent";
import { CardPagamentos } from "@/src/components/Cards/CardPagamentos";
import { axiosConfig } from "@/src/config/axiosConfig";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

interface EntradaDados {
    id_ent: string;
    titulo: string;
    descricao: string;
    valor: number;
    dt_criacao: string;
}

export default function Home() {

    const [entradas, setEntradas] = useState<EntradaDados[]>([])
    const [erro, setErro] = useState(false)

    // useEffect(() => {
    //     async function buscarDados() {
    //         try {
    //             const response = await axiosConfig.get('/entradas')
    //             setErro(false)
    //             return setEntradas(response.data)
    //         } catch (error) {
    //             setErro(true)
    //             return console.log(error)
    //         }
    //     }
    //     buscarDados()
    // }, [])

    const buscar = async () => {
        try {
            const response = await axiosConfig.get('/entradas')
            setErro(false)
            return setEntradas(response.data)
        } catch (error) {
            setErro(true)
            return console.log(error)
        }
    }

    return (
        <View>
            <Text>Tela HOME</Text>

            <BtnComponent
                titulo="Buscar Entradas"
                onPress={buscar}
            />

            {
                entradas && (
                    entradas.map(({ id_ent, titulo, descricao, valor, dt_criacao }: EntradaDados) => (
                        <View key={id_ent}>
                            <Text>{titulo}</Text>
                            <Text>{descricao}</Text>
                            <View>
                                <Text> R$ {valor}</Text>
                                <Text>{`${dt_criacao.split('-')[2].slice(0, 2)}/${dt_criacao.split('-')[1]}/${dt_criacao.split('-')[0]}`}</Text>
                            </View>
                        </View>
                    ))
                )
            }

            {
                erro && (
                    <View>
                        <Text>Não existe nenhuma entrada cadastrada no sistema</Text>
                    </View>
                )
            }
        </View>
    )
}