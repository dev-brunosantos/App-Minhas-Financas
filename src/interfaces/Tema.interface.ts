export interface TemaProps {
    background: string;
    txt: string;
}

export interface Tema {
    tema: TemaProps;
    alterarTema: ({ background, txt }: TemaProps) => void;
}