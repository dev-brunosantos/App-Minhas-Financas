import { Stack } from 'expo-router'
import { AppContextProvider } from '@/contexts/AppContext'
import { useEffect, useState } from 'react'
import { useTema } from '@/hooks/useTema'
import { Cores } from '@/styles/Cores'

export default function StackLayout() {

    const { cinza, cinza_escuro } = Cores

    return (
        <AppContextProvider>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name='index' options={{
                    statusBarColor: cinza_escuro
                }} />
                <Stack.Screen name='Login' options={{
                    statusBarColor: cinza_escuro
                }} />
                <Stack.Screen name='NovoUsuario' options={{
                    statusBarColor: cinza_escuro
                }} />
                <Stack.Screen name='(drawer)' options={{
                    statusBarColor: cinza_escuro
                }} />
            </Stack>
        </AppContextProvider>
    )
}