import { Stack } from 'expo-router/stack'
import { Cores } from '../../src/styles/Cores'

export default function StackLayout() {
    return (
        <Stack
            screenOptions={{
                statusBarColor: Cores.azul,
                statusBarStyle: 'light',
                headerShown: false,
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
            <Stack.Screen name='Entradas' options={{ headerShown: true }}/>
            <Stack.Screen name='Saidas' options={{ headerShown: true }}/>
            <Stack.Screen name='NovaEntrada' />
            <Stack.Screen name='NovaSaida' />

            {/* CONTROLE DE ENTRADAS */}
            <Stack.Screen name='entradas/TodasEntradas' />
            <Stack.Screen name='entradas/FiltrarEntradas'/>
            <Stack.Screen name='entradas/EditarEntradas'/>
            <Stack.Screen name='entradas/ExcluirEntradas' />
            
            {/* CONTROLE DE ENTRADAS */}
            <Stack.Screen name='saidas/TodasSaidas' />
            <Stack.Screen name='saidas/FiltrarSaidas'/>
            <Stack.Screen name='saidas/EditarSaidas'/>
            <Stack.Screen name='saidas/ExcluirSaidas' />
        </Stack>
    )
}