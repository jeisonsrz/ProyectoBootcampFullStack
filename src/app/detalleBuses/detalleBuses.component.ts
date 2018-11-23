import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusesServices } from '../services/buses.services';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-detalleBuses',
  templateUrl: './detalleBuses.component.html',
  styleUrls: ['./detalleBuses.component.css']
})
// tslint:disable-next-line:class-name
export class detalleBusesComponent implements OnInit {

  title = 'EurekaTrip';
  idBus;
  nomBus;
  disBus;
  /*any es para que el json buses reciba cualquier parametro */
  Bus: any = {};
  busRegistro: any = {};
  // en id recibo el parametro desde buses.html /detalleBuses/{{id}}
  id =  null;
  constructor(private route: ActivatedRoute, private busesServices: BusesServices) {
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.Bus = this.busesServices.buscarBus(this.id);
    console.log(this.Bus);
  }


  // debe ser public para buscar en otro servicio
  // funcion que me retorna que bus se hizo click .... bus.id es lo que retorna porque no la cree en ninguna otra parte
  // buscarBus() {
  //   return this.buses.filter((bus) => bus.id === this.id)[0] || null;
  // }

  ngOnInit() {
  }

}
