import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm:FormGroup;
  @ViewChild('mySlider')  slides: IonSlides;


  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private form:FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.form.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onLogin(){

  }

  get loginControls() {
    return this.loginForm.controls;
  }
  
  getErrorMessage(field: string): string {
    let retorno = "";
    if(this.loginControls[field].hasError("required")) {
      retorno = "El campo es requerido.";
    }
    else if(this.loginControls[field].hasError('email')){
      retorno = "Formato de mail inválido";
    }
    else if(this.loginControls[field].hasError('pattern')){
      if((field == 'nombre' || field == 'apellido')){
        retorno = "El campo debe contener solo letras!";
      }
      else{
        retorno = 'Debe contener solo números';
      }
    }
    else if(this.loginControls[field].hasError('minlength')){
      retorno = "La contraseña debe contener 6 caracteres mínimo";
    }
    return retorno;
  }

  isNotValidField(field: string): boolean {
    return (this.loginControls[field].touched && this.loginControls[field].dirty);
  }

}
