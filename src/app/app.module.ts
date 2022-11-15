import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { HijoCocheComponent } from './components/hijo-coche/hijo-coche.component';
import { PadrecochesComponent } from './components/padrecoches/padrecoches.component';
import { HijoDeporteComponent } from './components/hijo-deporte/hijo-deporte.component';
import { PadreDeportesComponent } from './components/padre-deportes/padre-deportes.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { ComicComponent } from './components/comic/comic.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaproductosComponent,
    HijoCocheComponent,
    PadrecochesComponent,
    HijoDeporteComponent,
    PadreDeportesComponent,
    LibreriaComponent,
    ComicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
