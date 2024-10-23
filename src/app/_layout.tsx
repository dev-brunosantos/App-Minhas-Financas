import { Stack } from 'expo-router'
import { AppContextProvider } from '../contexts/AppContext'

export default function StackLayout() {
    return (
        <AppContextProvider>
            <Stack screenOptions={{ headerShown: false }}>
                
            </Stack>
        </AppContextProvider>
    )
}