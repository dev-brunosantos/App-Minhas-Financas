import { PageStyles } from '@/src/styles/Pagestyles'
import { View, Text } from 'react-native'

export default function Home() {
    const { page, container, title } = PageStyles

    return(
        <View style={page}>
            <View style={container}>
                <Text style={title}>
                    Tela HOME
                </Text>
            </View>
        </View>
    )
}