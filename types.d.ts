interface Usuario {
    cpf: string,
    nome: string,
    data_nascimento: string,
    email: string,
    senha: string
}

interface Exame {
    id: number,
    nome: string,
    data: string,
    colesterolLDL: number,
    colesterolHDL: number,
    triglicerides: number,
    glicose: number,   
}

interface Infantil {
    id: number,
    cpf: string,
    nome: string,
    data_nascimento: string,
    peso: string,
    altura: string,
    sexo: string
}