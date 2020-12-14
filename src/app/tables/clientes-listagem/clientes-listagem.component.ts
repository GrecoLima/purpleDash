import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NovoFormComponent } from '../novo-form/novo-form.component';

export interface Clientes {
  nome: string;
  id: number;
  tipo: string;
  rg: string;
  cpf_cnpj: string;
  email: string;
  pai: string;
  mae: string;
  foneFixo: string;
  foneMovel: string;
  nascimento: string;
}

const ELEMENT_DATA: Clientes[] = [{
  id: 1, nome: 'Alexandre Jesus', tipo: 'FISICA', rg: '33.040.955-4', cpf_cnpj: '916.365.690-64', email: 'ajesus@bol.com.br',
  pai: 'José Roberto', mae: 'Maria Aparecida', foneFixo: '(13) 3212-4567', foneMovel: '(13) 98712-0912', nascimento: '29/09/1970'
},
{
  id: 2, nome: 'Marcos Costa', tipo: 'FISICA', rg: '16.221.266-5', cpf_cnpj: '079.900.320-40', email: 'mcosta@bol.com.br',
  pai: 'Manoel Carlos', mae: 'Ivanilda Pires', foneFixo: '(11) 5412-3423', foneMovel: '(11) 98711-0909', nascimento: '20/07/1980'
},
{
  id: 3, nome: 'Industria Quimica Salt', tipo: 'JURIDICA', rg: '', cpf_cnpj: '73.534.450/0001-38', email: 'contato@salt.com.br',
  pai: '', mae: '', foneFixo: '(11) 5490-0102', foneMovel: '(11) 97723-1212', nascimento: ''
},
{
  id: 4, nome: 'Adriana Carla', tipo: 'FISICA', rg: '26.377.335-8', cpf_cnpj: '744.190.080-83', email: 'acarla@bol.com.br',
  pai: 'Paulo Dias', mae: 'Marlene Alves', foneFixo: '', foneMovel: '(21) 92323-1234', nascimento: '10/02/2000'
},
{
  id: 5, nome: 'Roberta Alves', tipo: 'FISICA', rg: '11.221.277-5', cpf_cnpj: '019.900.320-10', email: 'ralves@bol.com.br',
  pai: 'Ricardo Alves', mae: 'Josefina Alves', foneFixo: '(11) 5412-1223', foneMovel: '(11) 98711-0909', nascimento: '22/05/1981'
},
{
  id: 6, nome: 'Auto Mecânica Torres', tipo: 'JURIDICA', rg: '', cpf_cnpj: '81.534.450/0001-23', email: 'autotorres@autotorres.com.br',
  pai: '', mae: '', foneFixo: '(11) 5490-0123', foneMovel: '(11) 94523-1211', nascimento: ''
},
{
  id: 7, nome: 'Fernanda Albuquerque', tipo: 'FISICA', rg: '34.377.335-3', cpf_cnpj: '567.190.070-93', email: 'falbuquerque@bol.com.br',
  pai: 'Marcos Albuquerque', mae: 'Maria Albuquerque', foneFixo: '', foneMovel: '(21) 34523-1234', nascimento: '10/05/2001'
}]

@Component({
  selector: 'app-clientes-listagem',
  templateUrl: './clientes-listagem.component.html',
  styleUrls: ['./clientes-listagem.component.css']
})


export class ClientesListagemComponent implements OnInit, AfterViewInit {

  constructor(public matDialog: MatDialog) { }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "600px";
    dialogConfig.width = "800px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(NovoFormComponent, dialogConfig);
  }

  displayedColumns: string[] = ['id', 'nome', 'tipo', 'cpf_cnpj', 'email', 'pai', 'mae', 'foneFixo', 'foneMovel', 'acoes'];
  dataSource = new MatTableDataSource<Clientes>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('input') input!: ElementRef;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  public doFilter = (event: KeyboardEvent) => {
    const target = event.target as HTMLInputElement;
    this.dataSource.filter = target!.value.trim().toLocaleLowerCase();
  }

}
