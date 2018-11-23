import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BusesComponent } from './Buses/buses.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { detalleBusesComponent } from './detalleBuses/detalleBuses.component';
import { BusesServices } from './services/buses.services';
import { AppResaltarDirective } from './directives/resaltar.directive';
import { AppContarClickDirective } from './directives/contarclick.directive';
import { Login2Component } from './login2/login2.component';

import { RegistroComponent } from './registro/registro.component';
import { RegistroBusComponent } from './registroBus/registroBus.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { InicioComponent } from './inicio/inicio.component';
import { Inicio2Component } from './inicio2/inicio2.component';
import { PetComponent } from './pet/pet.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import { environment } from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {FormsModule} from '@angular/forms';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AuthenticationGuard} from './services/authentication.guard';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MzButtonModule, MzInputModule, MzValidationModule } from 'ngx-materialize';

const rutas: Routes = [
  {path: '', component : InicioComponent},
  {path: 'inicio', component : InicioComponent},
  {path: 'inicio2', component : Inicio2Component},
  {path: 'login', component : LoginComponent},
  {path: 'buses', component : BusesComponent}, /*canActivate: [AuthenticationGuard]},*/
  {path: 'login2', component : Login2Component},
  {path: 'dashboard', component : DashboardComponent, canActivate: [AuthenticationGuard]},
  {path: 'perfil', component : PerfilComponent, canActivate: [AuthenticationGuard] },
  {path: 'pet', component : PetComponent, canActivate: [AuthenticationGuard]},
  {path: 'detalleBuses/:id', component: detalleBusesComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'registroBus', component: RegistroBusComponent},
  {path: 'uploadfile', component : UploadfileComponent, canActivate: [AuthenticationGuard]},
  {path: 'contacto', component : ContactoComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    AppResaltarDirective,
    AppContarClickDirective,
    RegistroComponent,
    RegistroBusComponent,
    detalleBusesComponent,
    ContactoComponent,
    BusesComponent,
    LoginComponent,
    Login2Component,
    DashboardComponent,
    PerfilComponent,
    InicioComponent,
    Inicio2Component,
    PetComponent,
    UploadfileComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    MzButtonModule,
    MzInputModule,
    MzValidationModule
  ],
  exports: [
    MzInputModule,
    MzValidationModule,
  ],
  providers: [BusesServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
