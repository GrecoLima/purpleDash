import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { RouterModule, Routes } from '@angular/router';
import { TipoEsgotamentoComponent } from './tipo-esgotamento/tipo-esgotamento.component';
import { FormsModule } from '@angular/forms';
import {​​​​​ MaterialModule }​​​​​ from'.././material.module';
import { ClientesListagemComponent } from './clientes-listagem/clientes-listagem.component';

const routes: Routes = [
  { path: 'basic-table', component: BasicTableComponent },
  { path: 'tipo-esgotamento', component: TipoEsgotamentoComponent },
  { path: 'clientes-listagem', component: ClientesListagemComponent }
]

@NgModule({
  declarations: [BasicTableComponent, TipoEsgotamentoComponent, ClientesListagemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MaterialModule,
  ]
})
export class TablesModule { }
export class ButtonTypesExample {}
