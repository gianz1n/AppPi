import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'estoque',
    pathMatch: 'full'
  },
  {
    path: 'estoque',
    loadChildren: () => import('./pages/estoque/estoque.module').then( m => m.EstoquePageModule)
  },
  {
    path: 'vendas',
    loadChildren: () => import('./pages/vendas/vendas.module').then( m => m.VendasPageModule)
  },
  {
    path: 'cadprodutos',
    loadChildren: () => import('./pages/cadprodutos/cadprodutos.module').then( m => m.CadprodutosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
