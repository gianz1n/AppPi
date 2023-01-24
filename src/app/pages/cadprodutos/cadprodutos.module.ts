import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadprodutosPageRoutingModule } from './cadprodutos-routing.module';

import { CadprodutosPage } from './cadprodutos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadprodutosPageRoutingModule
  ],
  declarations: [CadprodutosPage]
})
export class CadprodutosPageModule {}
