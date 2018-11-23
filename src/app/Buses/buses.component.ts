import { Component, OnInit } from '@angular/core';
import { BusesServices } from '../services/buses.services';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})
export class BusesComponent implements OnInit {
  title = 'EurekaTrip';
  /*any es para que el json buses reciba cualquier parametro */
  buses = null;
  constructor(private busesService: BusesServices) {
    //  this.buses = this.busesService.getBuses();
    // console.log(this.buses);
    // en ves de obtener como anteriormente, porque es una promesa
    // debo subscribirme a un EventSource, indicandole a firebase que estoy esperando el bus
    // y que en cuanto lo regrese quiero saberlo para asignarle a la variable bus los buses que
    // estoy esperando
    this.busesService.getBuses()
      .subscribe(busesFBDB => {
        this.buses = busesFBDB;
      });
  }

  ngOnInit() {}
}
