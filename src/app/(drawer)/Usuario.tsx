import { PageStyles } from '@/src/styles/Pagestyles'
import { View, Text } from 'react-native'

export default function Usuario() {
    const { page, container, title } = PageStyles

    return(
        <View style={page}>
            <View style={container}>
                <Text style={title}>
                    Tela Usuario
                </Text>
            </View>
        </View>
    )
}