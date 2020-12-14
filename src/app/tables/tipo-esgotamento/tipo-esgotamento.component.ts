import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-tipo-esgotamento',
  templateUrl: './tipo-esgotamento.component.html',
  styleUrls: ['./tipo-esgotamento.component.scss'],

})

export class TipoEsgotamentoComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openMediumModal(mediumModalContent) {
    this.modalService.open(mediumModalContent);
  }

  openModal(exampleModalContent) {
    this.modalService.open(exampleModalContent, { size: 'lg' });
  }

  textFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();
}
