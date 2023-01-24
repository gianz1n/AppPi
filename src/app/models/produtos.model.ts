import { Guid } from "guid-typescript";

export interface Produtos {
    id: Guid
    marca: string
    nome: string
    cor: string
    tamanho: string
    tipo: string
    preco: string
    quantidade: string
}