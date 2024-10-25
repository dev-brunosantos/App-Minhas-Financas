import { createContext, ReactNode, useState } from "react";
import { router } from 'expo-router'
// IMPORTAÇÃO DE INTERFACES
import { UsuarioProps, Login } from "@/interfaces/Login.interface";
import { Alert } from "react-native";
const LoginContext = createContext<Login | null>(null)

const LoginContextProvider = ({ children }: { children: ReactNode }) => {

    const [usuario, setUsuario] = useState<UsuarioProps>({ email: "", senha: "" })
    const [erro, setErro] = useState(false)

    const login = ({ email, senha }: UsuarioProps) => {
        if (email.trim() === "" || senha.trim() === "") {
            setErro(true)
            return Alert.alert("Todos os campos devem ser preenchidos.")
        }
        setErro(false)
        setUsuario({ email, senha })
        return router.push('/(drawer)')
    }

    const cadastrar = (nome: string, email: string, senha: string) => {
        if (nome.trim() === "" || email.trim() === "" || senha.trim() === "") {
            return Alert.alert("Todos os campos devem ser preenchidos.")
        }
        Alert.alert(`Usuario ${nome} foi cadastrado com sucesso.`)
        return router.back()
    }

    return (
        <LoginContext.Provider value={{ usuario, erro, login, cadastrar }}>
            {children}
        </LoginContext.Provider>
    )
}

export { LoginContext, LoginContextProvider }