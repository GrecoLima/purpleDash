import { MascaraUtil } from './../util/mascara';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface Cidade {
  nomeCidade: string;
  sigla: string;
  id: number;
}

@Component({
  selector: 'app-novo-form',
  templateUrl: './novo-form.component.html',
  styleUrls: ['./novo-form.component.css']
})


export class NovoFormComponent {

  FISICA = true;
  JURIDICA = false;

  cpfMask = MascaraUtil.mascaraCpf;
  cnpjMask = MascaraUtil.mascaraCnpj;
  foneMask = MascaraUtil.mascaraTelefone;
  foneFixoMask = MascaraUtil.mascaraTelefoneFixo;


  cidades: Cidade[] = [
    { nomeCidade: 'ARAGUAIA', sigla: 'PARA', id: 21 },
    { nomeCidade: 'BLUMENAU', sigla: 'BLUM', id: 6 },
    { nomeCidade: 'CAÇADOR', sigla: 'CCDR', id: 22 },
    { nomeCidade: 'CACHOEIRO DE ITAPEMIRIM', sigla: 'CACH', id: 2 },
    { nomeCidade: 'LIMEIRA', sigla: 'LIM', id: 1 },
    { nomeCidade: 'MACAÉ', sigla: 'MACA', id: 12 },
    { nomeCidade: 'MAIRINQUE', sigla: 'MAIR', id: 8 },
    { nomeCidade: 'MARANHÃO', sigla: 'MARA', id: 18 },
    { nomeCidade: 'MAUÁ', sigla: 'MAUA', id: 3 },
    { nomeCidade: 'PORTO FERREIRA', sigla: 'PFER', id: 10 },
    { nomeCidade: 'RIO CLARO', sigla: 'RCLA', id: 4 },
    { nomeCidade: 'RIO DAS OSTRAS', sigla: 'ROST', id: 7 },
    { nomeCidade: 'RIO DE JANEIRO', sigla: 'RJAN', id: 11 },
    { nomeCidade: 'SANEATINS', sigla: 'TOCA', id: 17 },
    { nomeCidade: 'SANTA GERTRUDES', sigla: 'SGER', id: 5 },
    { nomeCidade: 'SUMARÉ', sigla: 'SUMA', id: 20 },
    { nomeCidade: 'URUGUAIANA', sigla: 'URUG', id: 9 },
  ];

  cliente_validation_messages = {
    'nome': [
      { type: 'required', message: 'Nome do cliente é obrigatório' },
      { type: 'minlength', message: 'Nome do cliente deve ter 5 caracteres no minimo' },
      { type: 'maxlength', message: 'Nome do cliente não pode ultrapassar 50 caracteres' }
    ],
    'email': [
      { type: 'required', message: 'Email é obrigatório' },
      { type: 'pattern', message: 'Digite um endereço de email válido' },
      { type: 'maxlength', message: 'Endereço de email não pode ultrapassar 100 caracteres' }
    ],
    'tipo': [
      { type: 'required', message: 'Tipo de cliente é obrigatório' }
    ],
    'cidade': [
      { type: 'required', message: 'Campo cidade é obrigatório' }
    ],
    'celular': [
      { type: 'required', message: 'Telefone móvel é obrigatório' },
      { type: 'pattern', message: 'Digite um número de telefone válido' }
    ],
    'fixo': [
      { type: 'required', message: 'Telefone fixo é obrigatório' },
      { type: 'pattern', message: 'Digite um número de telefone válido' }
    ],
    'rg': [
      { type: 'required', message: 'RG do cliente é obrigatório' },
      { type: 'maxlength', message: 'RG não pode ultrapassar 25 caracteres' }
    ],
    'cpf': [
      { type: 'required', message: 'CPF do cliente é obrigatório' },
      { type: 'pattern', message: 'Digite um CPF válido' }
    ],
    'cnpj': [
      { type: 'required', message: 'CNPJ do cliente é obrigatório' },
      { type: 'pattern', message: 'Digite um CNPJ válido' }
    ],
    'pai': [
      { type: 'maxlength', message: 'Nome do pai não pode ultrapassar 50 caracteres' }
    ],
    'mae': [
      { type: 'maxlength', message: 'Nome da mãe não pode ultrapassar 50 caracteres' }
    ],
    'observacao': [
      { type: 'maxlength', message: 'Campo observação não pode ultrapassar 200 caracteres' }
    ]

  }

  angForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      nome: new FormControl('', Validators.compose([
        Validators.maxLength(50),
        Validators.minLength(5),
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      celular: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^(\\([0-9]{2}\\))\\s([9]{1})?([0-9]{4})-([0-9]{4})$')
      ])),
      fixo: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^(\\([0-9]{2}\\))\\s([9]{1})?([0-9]{4})-([0-9]{4})$')
      ])),
      tipo: ['', Validators.required],
      rg: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(25)
      ])),
      cpf: new FormControl(''),
      cnpj: new FormControl(''),
      cidade: new FormControl('', Validators.required),
      sexo: new FormControl(''),
      pai: new FormControl(''),
      mae: new FormControl(''),
      observacao: new FormControl('', Validators.maxLength(200)),
    });
  }

  saveUser() {
    alert(
      this.angForm.value.nome
    );
  }

  selecionaTipo(t: string) {

    if (t === 'juridica') {
      this.FISICA = false;
      this.JURIDICA = true;
      this.setCamposJuridicaForm();
    } else {
      this.FISICA = true;
      this.JURIDICA = false;
      this.setCamposFisicaForm();
    }

  }
  setCamposFisicaForm() {
    this.angForm.controls['pai'].setValidators([Validators.maxLength(50)]);
    this.angForm.controls['pai'].updateValueAndValidity();
    this.angForm.controls['mae'].setValidators([Validators.maxLength(50)]);
    this.angForm.controls['mae'].updateValueAndValidity();
    this.angForm.controls['rg'].setValidators([
      Validators.required,
      Validators.maxLength(25)
    ]);
    this.angForm.controls['rg'].updateValueAndValidity();
    this.angForm.controls['cpf'].setValidators([
      Validators.required,
      Validators.pattern('^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$')
    ]);
    this.angForm.controls['cpf'].updateValueAndValidity();
    this.angForm.controls['cnpj'].clearValidators();
    this.angForm.controls['cnpj'].updateValueAndValidity();
  }
  setCamposJuridicaForm() {
    this.angForm.controls['pai'].clearValidators();
    this.angForm.controls['pai'].updateValueAndValidity();
    this.angForm.controls['mae'].clearValidators();
    this.angForm.controls['mae'].updateValueAndValidity();
    this.angForm.controls['rg'].clearValidators();
    this.angForm.controls['rg'].updateValueAndValidity();
    this.angForm.controls['cpf'].clearValidators();
    this.angForm.controls['cpf'].updateValueAndValidity();
    this.angForm.controls['cnpj'].setValidators([
      Validators.required,
      Validators.pattern('^[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}$')
    ]);
    this.angForm.controls['cnpj'].updateValueAndValidity();
  }

}
