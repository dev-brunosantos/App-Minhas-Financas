export interface TemaProps {
    background: string;
    txt: string;
}

export interface Tema {
    tema: TemaProps;
    temaAtual: TemaProps;
    icone: string;
    alterarTema: () => void;
}