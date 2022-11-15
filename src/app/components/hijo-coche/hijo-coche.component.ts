
import { Component, OnInit,Input } from '@angular/core';
import { Coche } from 'src/app/models/coche';

@Component({
  selector: 'app-hijo-coche',
  templateUrl: './hijo-coche.component.html',
  styleUrls: ['./hijo-coche.component.css']
})
export class HijoCocheComponent implements OnInit {
 @Input() car!: Coche;
  public mensaje!: string;

  constructor() {
     
   }

   comprobarEstado(): boolean{
    if(this.car.estado==false){
      this.mensaje= "El coche esta apagado!"
      this.car.velocidad= 0;
      return false;
    }else{
      this.mensaje="El coche esta encendido!"
       return true
    }
   }

   encenderCoche(): void{
    this.car.estado=!this.car.estado;
    this.comprobarEstado();
   }

   acelerarCoche(): void{
    if(this.comprobarEstado()== false){
      alert("DONDE VAS ANIMAL?? EL COCHE ESTA APAGADO!")
    }else
    this.car.velocidad= this.car.velocidad+ this.car.aceleracion;
   }

  ngOnInit(): void {
  }

}
