import { StatusBar } from 'react-native';
import { Drawer } from 'expo-router/drawer';
// import { StatusBar } from 'expo-status-bar';
import { Cores } from '../../src/styles/Cores';

export default function DrawerLayout() {
    return (
        <>
            <StatusBar backgroundColor={Cores.azul} translucent barStyle={'light-content'} />
            {/* <StatusBar style='light' backgroundColor={Cores.azul} translucent /> */}
            <Drawer
                screenOptions={{
                    headerStatusBarHeight: -200,
                    headerLeftContainerStyle: {
                        position: 'absolute',
                        top: 10,
                        right: 0
                    }
                }}
            >
                <Drawer.Screen
                    name='index'
                    options={{ drawerLabel: 'Home', headerTintColor: Cores.branco }}
                />
                <Drawer.Screen
                    name='Perfil'
                    options={{ drawerLabel: 'Perfil' }}
                />
            </Drawer>
        </>
    )
}