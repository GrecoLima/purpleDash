import { Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { FormControl, Validators } from '@angular/forms';

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


  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);


}
