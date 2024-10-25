import { Pressable, Text, View } from "react-native";
import * as Animacao from 'react-native-animatable';
import { router } from "expo-router";
import { PageStyles } from "@/styles/Pagestyles";
import { useEffect, useState } from "react";
import { TemaProps } from "@/interfaces/Tema.interface";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTema } from "@/hooks/useTema";

export default function App() {
    const { page, container, title } = PageStyles

    const { temaAtual } = useTema()

    return (
        <View style={[page, { backgroundColor: temaAtual?.background}]}>
            <Animacao.View style={container} animation={"zoomIn"} delay={500} duration={1000}>
                <Text style={[title, { color: temaAtual.txt }]}>
                    Minhas Finanças
                </Text>
            </Animacao.View>
            
            <Animacao.View style={container} animation={"zoomIn"} delay={1200} duration={1000}>
                <Pressable onPress={() => router.push('/Login')}>
                    <Text style={{ fontSize: 22, color: temaAtual.txt }}>Fazer Login</Text>
                </Pressable>
            </Animacao.View>
        </View>
    )
}