import { StyleSheet } from "react-native";
import { Cores } from "./Cores";

export const PageStyles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    pageContainer: {
        width: '90%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    rodape: {
        width: '90%', 
        height: 60, 
        alignSelf: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute', 
        bottom: 0,
        backgroundColor: Cores.branco
    },
    rodapeTxt: {
        fontSize: 20,
        fontWeight: 'bold'
    },
})