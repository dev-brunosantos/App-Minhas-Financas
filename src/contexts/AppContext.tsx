import { ReactNode } from "react";
import { TemaContextProvider } from "./TemaContext";
import { LoginContextProvider } from "./LoginContext";

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    return (
        <TemaContextProvider>
            <LoginContextProvider>
                {children}
            </LoginContextProvider>
        </TemaContextProvider>
    )
}