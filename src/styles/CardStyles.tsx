import { StyleSheet } from 'react-native'

export const CardStyles = StyleSheet.create({
    container: {
        width: '90%',
        height: 200,
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    btnFechar: {
        padding: 5,
        zIndex: 999,
        alignItems: 'center',
        justifyContent: "center",
        position: 'absolute',
        top: 0,
        right: 0,
    }
})