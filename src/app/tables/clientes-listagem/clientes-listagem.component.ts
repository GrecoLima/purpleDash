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
},
{
  id: 11, nome: 'Mário Gomes Pedroza', tipo: 'FISICA', rg: '11.140.955-X', cpf_cnpj: '909.365.690-12', email: 'mgp@uol.com.br',
  pai: 'André Nascimento', mae: 'Joana Prado', foneFixo: '(21) 3212-1267', foneMovel: '(21) 99812-0912', nascimento: '20/10/1971'
},
{
  id: 22, nome: 'Marcos Adriano', tipo: 'FISICA', rg: '15.321.246-5', cpf_cnpj: '179.800.320-44', email: 'madriano@outlook.com.br',
  pai: 'Antonio Dias', mae: 'Maria Dias dos Santos', foneFixo: '(11) 2312-3413', foneMovel: '(11) 97611-0901', nascimento: '13/10/1978'
},
{
  id: 33, nome: 'Comércio de Borrachas Vibrasil Ltda', tipo: 'JURIDICA', rg: '', cpf_cnpj: '78.234.150/0001-44', email: 'contato@vibrasil.com.br',
  pai: '', mae: '', foneFixo: '(11) 4390-1102', foneMovel: '(11) 98723-1102', nascimento: ''
},
{
  id: 41, nome: 'Marilene Alves Dias', tipo: 'FISICA', rg: '26.377.335-8', cpf_cnpj: '744.190.080-83', email: 'acarla@bol.com.br',
  pai: 'Paulo Alves Dias', mae: 'Marlene Alves Dias', foneFixo: '', foneMovel: '(24) 91223-1238', nascimento: '10/02/1998'
},
{
  id: 51, nome: 'Maria Dama Rica', tipo: 'FISICA', rg: '08.225.277-X', cpf_cnpj: '039.900.320-11', email: 'mariadr@uol.com.br',
  pai: 'Rodrigo Santos', mae: 'Karen Santos Alves', foneFixo: '(11) 5312-5223', foneMovel: '(11) 98712-0979', nascimento: '20/05/1978'
},
{
  id: 13, nome: 'Panificadora Bom Pão', tipo: 'JURIDICA', rg: '', cpf_cnpj: '71.334.350/0001-83', email: 'bompao@bompao.com.br',
  pai: '', mae: '', foneFixo: '(13) 3490-3123', foneMovel: '(13) 99523-1244', nascimento: ''
},
{
  id: 79, nome: 'Ivone Lara', tipo: 'FISICA', rg: '23.457.335-1', cpf_cnpj: '089.230.070-91', email: 'ivonelara@brasil.com.br',
  pai: 'Julio Fernadez Lara', mae: 'Rosane Lara', foneFixo: '', foneMovel: '(24) 95523-1234', nascimento: '09/07/2003'
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
