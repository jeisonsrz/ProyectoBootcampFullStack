import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()

export class BusesServices {
    buses: any = [
        {id: '01' , rutaBus: 'Ruta1', active: true, distancia: 120, cercania : 1, plan: 'gratiuto' },
        {id: '02' , rutaBus: 'Ruta2', active: false, distancia: 20, cercania : 3, plan: 'gratiuto'},
        {id: '03' , rutaBus: 'Ruta5', active: true, distancia: 30, cercania : 3, plan: 'pagado'},
        {id: '04' , rutaBus: 'Ruta7', active: false, distancia: 1.8, cercania : 2, plan: 'gratiuto'},
        {id: '05' , rutaBus: 'Ruta9', active: true, distancia: 2, cercania : 1, plan: 'gratiuto'}
    ];
    constructor(private afDB: AngularFireDatabase) {}
    public getBuses() {
        // return this.buses;
        // de esta manera recibo datos desde fire base
        return this.afDB.list('buses/').valueChanges();
    }
    public buscarBus(id) {
        return this.buses.filter((bus) => bus.id === id) [0] || null;
      }
    public guardarBus(busRegistro) {
        console.log(busRegistro);
        // asi se suben dadtos a fire base aparte de crear un contructor constructor(private afDB: AngularFireDatabase) {}
        this.afDB.database.ref('buses/' + busRegistro.id).set(busRegistro);
    }
}
