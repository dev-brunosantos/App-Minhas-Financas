import { useTema } from '@/hooks/useTema'
import { Drawer } from 'expo-router/drawer'

export default function DrawerLayout() {

    const { temaAtual } = useTema()

    return (
        <Drawer screenOptions={{
            headerLeftContainerStyle: {
                position: 'absolute',
                right: 15,
                top: 15,
            },
            headerTintColor: temaAtual.txt
        }}>
            <Drawer.Screen name='index' />
            <Drawer.Screen name='Usuario' options={{
                headerTransparent: true, title: "Usuario", headerTitle: ""
            }} />
        </Drawer>
    )
}