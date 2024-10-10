import { Stack } from 'expo-router'

export default function AppLayout() {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ headerShown: false }} />
            <Stack.Screen name='NovoUsuario'
                options={{
                    title: "Novo Usuário",
                    headerLeft: (({ canGoBack }) => canGoBack = false)
                }}
            />
            <Stack.Screen name='(drawer)' options={{ headerShown: false }} />
        </Stack>
    )
}