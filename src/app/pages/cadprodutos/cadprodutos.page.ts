import { Component, OnInit } from '@angular/core';

// IMPORTS

import { ProdutosService } from 'src/app/services/produtos.service';
import { Produtos } from 'src/app/models/produtos.model'; 
import { Guid } from 'guid-typescript';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadprodutos',
  templateUrl: './cadprodutos.page.html',
  styleUrls: ['./cadprodutos.page.scss'],
})
export class CadprodutosPage implements OnInit {

  private produtos!: Produtos;
  public produtosForm!: FormGroup;
  public arrayProdutos: any
  public dadosProdutos: any


  constructor(private objProdutos: ProdutosService, 
              private FormBuilder: FormBuilder) { 
                this.dadosProdutos = objProdutos.enviarProdutos()
              }

  ngOnInit() { }

}
