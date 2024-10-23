export interface UsuarioProps {
    email: string;
    senha: string;
}

export interface Login {
    usuario: UsuarioProps;
    erro: boolean;
    login: ({ email, senha }:UsuarioProps) => void;
}

