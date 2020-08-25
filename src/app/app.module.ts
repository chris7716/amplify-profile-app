import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CheckboxModule, WavesModule, ButtonsModule, InputsModule, IconsModule, CardsModule, NavbarModule } from 'angular-bootstrap-md'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckboxModule,
    WavesModule, 
    ButtonsModule, 
    InputsModule, 
    IconsModule, 
    CardsModule, 
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
