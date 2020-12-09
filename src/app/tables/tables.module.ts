import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { RouterModule, Routes } from '@angular/router';
import { TipoEsgotamentoComponent } from './tipo-esgotamento/tipo-esgotamento.component';

const routes: Routes = [
  { path: 'basic-table', component: BasicTableComponent },
  { path: 'tipo-esgotamento', component: TipoEsgotamentoComponent }
]

@NgModule({
  declarations: [BasicTableComponent, TipoEsgotamentoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class TablesModule { }
