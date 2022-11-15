import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Comic } from 'src/app/models/comics.ts/comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  @Input()comic!:Comic;
  

  @Output()metodoConsolelog:EventEmitter<any> =
  new EventEmitter();

  metodoHijo():void {
    this.metodoConsolelog.emit();
  }





  @Output()metodoFavorito:EventEmitter<any> =
  new EventEmitter();

  favorito():void{
    this.metodoFavorito.emit();
  }

  // @Output()metodoModificar:EventEmitter<any> =
  // new EventEmitter();

  // modificar():void {
  //   this.metodoModificar.emit();
  // }

  // @Output()metodoEliminar:EventEmitter<any> =
  // new EventEmitter();

  // eliminar():void {
  //   this.metodoModificar.emit();
  // }





  // @Output()seleccionarComic:EventEmitter<any> =
  //   new EventEmitter();

  //   seleccionarComicFavorito():void {
  //     this.seleccionarComic.emit(this.comic);
  //   }




    
    
  constructor() { }

  ngOnInit(): void {
  }

}
