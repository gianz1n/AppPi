import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadprodutosPage } from './cadprodutos.page';

const routes: Routes = [
  {
    path: '',
    component: CadprodutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadprodutosPageRoutingModule {}
