import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { IViaje } from '../models/IViaje';


@Component({
  selector: 'app-ingresoviaje',
  templateUrl: './ingresoviaje.page.html',
  styleUrls: ['./ingresoviaje.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IngresoviajePage implements OnInit {

  travelinfo: IViaje = {
    id: null,
    origen: '',
    destino: '',
    id_pasajero: null,
    metodopago:'',

  };

  constructor(private router: Router) { }

  ngOnInit() {
    this.travelinfoRestart();
    console.log("lista usuario", this.travelinfo)
  }

  volverinicio(){
    this.router.navigate(['/alumno']);
  }
  
  ingresarviaje(){
    
    console.log("lista usuario", this.travelinfo)
  }
  userViaje(userViajeInfo: IViaje){
    console.log('User Loged...', this.travelinfo.origen, this.travelinfo.destino);
    let userInfoSend: NavigationExtras = {
      state: {
        user: this.travelinfo
      }
    }
    if(this.travelinfo.origen == 'valparaiso'){
      this.router.navigate(['/alumno'], userInfoSend);
      return true;
    } else {
      return false;
    }
  }         

  

travelinfoRestart(): void{
  this.travelinfo.origen='';
  this.travelinfo.destino='';
  this.travelinfo.metodopago='';
  }
}
