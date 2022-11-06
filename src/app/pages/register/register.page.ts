import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  loginForm:FormGroup;
  
  constructor(private form:FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.form.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      cuil: ['', [Validators.required]],
      img: ['../../../../assets/images/default.jpg'],
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
    return retorno;
  }

  isNotValidField(field: string): boolean {
    return (this.loginControls[field].touched && this.loginControls[field].dirty);
  }
}
