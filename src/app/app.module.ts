import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PlatillosComponent } from './components/platillos/platillos.component';
import { CartComponent } from './components/cart/cart.component';
import { OrdenarComponent } from './components/ordenar/ordenar.component';
import { GraciasComponent } from './components/gracias/gracias.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { MesaComponent } from './components/mesa/mesa.component';
import { PlatilloComponent } from './components/platillo/platillo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrudNavbarComponent } from './components/crud-navbar/crud-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PlatillosComponent,
    CartComponent,
    OrdenarComponent,
    GraciasComponent,
    EmployeeComponent,
    MesaComponent,
    PlatilloComponent,
    CrudNavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
