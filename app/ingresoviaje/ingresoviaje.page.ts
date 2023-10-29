import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
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
    origen: '',
    destino: '',
    metodopago:''
  };

  constructor(private router:Router) { }

  ngOnInit() {
    this.travelinfoRestart();
    console.log("lista usuario", this.travelinfo)
  }

  volverinicio(){
    this.router.navigate(['/login']);
  }
  
  ingresarviaje(){
    console.log("lista usuario", this.travelinfo)
  }

  




travelinfoRestart(): void{
  this.travelinfo.origen='';
  this.travelinfo.destino='';
  this.travelinfo.metodopago='';
  }
}
