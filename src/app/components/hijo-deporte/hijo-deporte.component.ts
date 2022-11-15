
import { Component, OnInit,Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-deporte',
  templateUrl: './hijo-deporte.component.html',
  styleUrls: ['./hijo-deporte.component.css']
})
export class HijoDeporteComponent implements OnInit {
  @Input()sport!: string;
  //VAMOS A RECIBIR UN METODO DEL PADRE
  //MEDIANTE props
  @Output()seleccionarDeporte:EventEmitter<any> =
            new EventEmitter();



  seleccionarFavoritoHijo():void{
    
    this.seleccionarDeporte.emit(this.sport);
  }


 


  constructor() { }

  ngOnInit(): void {
  }

}
