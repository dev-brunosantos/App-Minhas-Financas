import { StatusBar } from 'react-native';
import { Drawer } from 'expo-router/drawer';
// import { StatusBar } from 'expo-status-bar';
import { Cores } from '../../src/styles/Cores';

export default function DrawerLayout() {
    return (
        <>
            {/* <StatusBar backgroundColor={Cores.azul} translucent barStyle={'light-content'} /> */}
            <StatusBar style='light' backgroundColor={Cores.azul} translucent={false} barStyle={'light-content'} />
            <Drawer
                screenOptions={{
                    headerStatusBarHeight: -200,
                    headerLeftContainerStyle: {
                        position: 'absolute',
                        top: 15,
                        right: 0
                    },
                    drawerHideStatusBarOnOpen: false,
                    headerTransparent: true,
                    title: ''
                }}
            >
                <Drawer.Screen
                    name='index'
                    options={{ drawerLabel: 'Home', headerTintColor: Cores.branco }}
                />

                <Drawer.Screen
                    name='EntradasControle'
                    options={{
                        drawerLabel: 'Controle de Entradas',
                        headerTintColor: Cores.branco,
                        headerShown: true,
                        headerStatusBarHeight: 0,
                        title: 'Controle de Entradas',
                        headerBackgroundContainerStyle: {
                            backgroundColor: Cores.azul
                        }
                    }}
                />

                <Drawer.Screen
                    name='SaidasControle'
                    options={{
                        drawerLabel: 'Controle de Saídas',
                        headerTintColor: Cores.branco,
                        headerShown: true,
                        headerStatusBarHeight: 0,
                        title: 'Controle de Saidas',
                        headerBackgroundContainerStyle: {
                            backgroundColor: Cores.azul
                        }
                    }}
                />

                <Drawer.Screen
                    name='Perfil'
                    options={{ drawerLabel: 'Perfil' }}
                />
            </Drawer>
        </>
    )
}