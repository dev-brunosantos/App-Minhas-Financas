import { Stack } from 'expo-router/stack'
import { Cores } from '../../src/styles/Cores'

export default function StackLayout() {
    return (
        <Stack
            screenOptions={{
                statusBarColor: Cores.azul,
                statusBarStyle: 'light',
                headerTintColor: Cores.branco,
                headerTransparent: true,
                headerTitleStyle: {
                    fontSize: 30
                }
            }}
        >
            <Stack.Screen name='Login'
                options={{ headerShown: false }}
            />
            <Stack.Screen name='Entradas' />
            <Stack.Screen name='Saidas' />
            <Stack.Screen name='NovaEntrada'
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name='NovaSaida'
                options={{
                    headerShown: false
                }}
            />
        </Stack>
    )
}