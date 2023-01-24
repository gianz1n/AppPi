import { Injectable } from '@angular/core';

// IMPORTS

import { Produtos } from '../models/produtos.model';
import { Guid } from 'guid-typescript';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private todosProdutos= []

  constructor(private storage: Storage) { }

// CREATE
enviarProdutos(){
  return this.todosProdutos
}

async filtrarProdutosId(id:string){
  return JSON.parse(await this.storage.get(id))
}


// READ
  async listarTodos(){
    let arrayProdutos: Produtos [] = [];

    await this.storage.forEach((value: string) => {const produtos: Produtos = JSON.parse(value); arrayProdutos.push(produtos)})
      return arrayProdutos
}

// INSERT
  inserir(argumento: Produtos) {
    argumento.id = Guid.create()
    this.storage.set(argumento.id.toString(), JSON.stringify(argumento))
  }

 
}
