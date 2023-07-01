import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    AlumnosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
