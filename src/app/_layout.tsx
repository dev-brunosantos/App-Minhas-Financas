import { Stack } from 'expo-router'
import { AppContextProvider } from '@/contexts/AppContext'

export default function StackLayout() {
    return (
        <AppContextProvider>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name='index' options={{
                    statusBarColor: 'red'
                }} />
                <Stack.Screen name='Login' options={{
                    statusBarColor: 'blue'
                }} />
                <Stack.Screen name='NovoUsuario' options={{
                    statusBarColor: 'blue'
                }} />
                <Stack.Screen name='(drawer)' />
            </Stack>
        </AppContextProvider>
    )
}