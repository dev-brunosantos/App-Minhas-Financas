import { Pressable, Text, View } from "react-native";
import * as Animacao from 'react-native-animatable';
import { router } from "expo-router";
import { PageStyles } from "../styles/Pagestyles";

export default function App() {
    const { page, container, title } = PageStyles
    return (
        <View style={page}>
            <Animacao.View style={container} animation={"zoomIn"} delay={500} duration={1000}>
                <Text style={title}>
                    Minhas Finanças
                </Text>
            </Animacao.View>
            
            <Animacao.View style={container} animation={"zoomIn"} delay={1200} duration={1000}>
                <Pressable onPress={() => router.push('/Login')}>
                    <Text>Fazer Login</Text>
                </Pressable>
            </Animacao.View>
        </View>
    )
}