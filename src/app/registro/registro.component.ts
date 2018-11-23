import { Component, OnInit } from '@angular/core';
import { contacto } from '../interfaces/contacto';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
// tslint:disable-next-line:class-name
export class RegistroComponent implements OnInit {

  title = 'EurekaTrip';
  personaRegistro: contacto = {nombre: '', apellido: '', direccion: '', telefono: '' , pais: '', ciudad: '', zip: ''};
  guardarPersona() {
    console.log(this.personaRegistro);
  }
  constructor() {

    }
  ngOnInit() {
  }

}
