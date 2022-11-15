import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-padre-deportes',
  templateUrl: './padre-deportes.component.html',
  styleUrls: ['./padre-deportes.component.css']
})
export class PadreDeportesComponent implements OnInit {

public deportes: Array<string>;
public mensaje!:string;

seleccionarDeportePadre(event:string):void{
  console.log(event);
  this.mensaje="Deporte Seleccionado "+ event+"!!!";

}



  constructor() {
    this.deportes=["pentanca","padel","cometas"] }


  ngOnInit(): void {
  }

}
