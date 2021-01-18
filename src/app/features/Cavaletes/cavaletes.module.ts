import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CavaleteFormComponent } from './presentation/screens/cavalete-form/cavalete-form.component';
import { CavaleteListComponent } from './presentation/screens/cavalete-list/cavalete-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { CavaleteService } from './cavalete.service';
import { CavaletesRepository } from './domain/repositories/cavaletes.repository';
import { CavaleteDataSource, CavaletesDataSourceImpl } from './data/datasources/cavaletes.data-sources';
import { CavaletesRepositoryImpl } from './data/repositories/cavaletes.repository.impl';

const routes: Routes = [
  { path: 'cavalete', component: CavaleteFormComponent },
  { path: 'cavaletes-listagem', component: CavaleteListComponent }
]

@NgModule({
  declarations: [CavaleteFormComponent, CavaleteListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MaterialModule,
  ],
  providers: [CavaleteService,
    { provide: CavaletesRepository, useClass: CavaletesRepositoryImpl },
    { provide: CavaleteDataSource, useClass: CavaletesDataSourceImpl },]
})
export class CavaletesModule { }
