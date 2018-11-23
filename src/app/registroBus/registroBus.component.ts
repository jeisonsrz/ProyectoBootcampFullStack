import { Component, OnInit } from '@angular/core';
import { BusesServices } from '../services/buses.services';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-registroBus',
  templateUrl: './registroBus.component.html',
  styleUrls: ['./registroBus.component.css']
})
// tslint:disable-next-line:class-name
export class RegistroBusComponent implements OnInit {

  title = 'EurekaTrip';
  // Aqui se recibe todo lo que se envia desde el [ngModel] desde el html
  busRegistro: any = {};
  // busRegistro: Bus = {idBus: '', rutaBus: '', nombreConductor: '', apellidoConductor: '', telefonoConductor: ''};
  constructor(private busesServices: BusesServices) {
    // este servicio lo que hace es crear un bus sin necesidad de tener una interface como se hizo en registro
    // se crea mediante el servicio Buses services funcion guardarBus
  }

  // esta funcion le asigna a busesServices el registro del bus que se envia desde buses.services funcion guardarBus
  guardarBus() {
    // como se realizo el servicio que crea un arreglo de cualquier cosa para el bus. entonces
    // this.busRegistro.id = Date.now(); sirve para generar un id de diamesañoshorasegundo
    this.busRegistro.id = Date.now();
    this.busesServices.guardarBus(this.busRegistro);
    // En buses.service. ts declare un servicio que tiene el mismo nombre de busRegistro. Entonces desde el service imprime en consola
    alert('Bus guardado con exito');
    this.busRegistro = {};
  }
  ngOnInit() {
  }

}
