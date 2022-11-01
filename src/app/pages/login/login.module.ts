import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { LoginUserComponent } from 'src/app/components/login/login-user/login-user.component';
import { LoginAnonimoComponent } from 'src/app/components/login/login-anonimo/login-anonimo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginPage, LoginUserComponent, LoginAnonimoComponent]
})
export class LoginPageModule {}
