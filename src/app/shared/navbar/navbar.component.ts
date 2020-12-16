import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

interface Cidade {
  nomeCidade: string;
  sigla: string;
  id: number;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent {

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

  public iconOnlyToggled = false;
  public sidebarToggled = false;
  
  constructor(config: NgbDropdownConfig) {
    config.placement = 'bottom-right';
  }


  // toggle sidebar in small devices
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }

  // toggle sidebar
  toggleSidebar() {
    let body = document.querySelector('body');
    if((!body.classList.contains('sidebar-toggle-display')) && (!body.classList.contains('sidebar-absolute'))) {
      this.iconOnlyToggled = !this.iconOnlyToggled;
      if(this.iconOnlyToggled) {
        body.classList.add('sidebar-icon-only');
        body.getElementsByClassName('nav-bar-logo')[0].innerHTML = "S5";
      } else {
        body.getElementsByClassName('nav-bar-logo')[0].innerHTML = "SAN 5";
        body.classList.remove('sidebar-icon-only');
      }
    } else {
      this.sidebarToggled = !this.sidebarToggled;
      if(this.sidebarToggled) {
        body.classList.add('sidebar-hidden');
      } else {
        body.classList.remove('sidebar-hidden');
      }
    }
  }

  // toggle right sidebar
  // toggleRightSidebar() {
  //   document.querySelector('#right-sidebar').classList.toggle('open');
  // }

}
