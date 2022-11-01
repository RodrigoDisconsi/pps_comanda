import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-anonimo',
  templateUrl: './login-anonimo.component.html',
  styleUrls: ['./login-anonimo.component.scss'],
})
export class LoginAnonimoComponent implements OnInit {
  loginForm:FormGroup;
  
  constructor(private form:FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.form.group({
      alias: ['', [Validators.required]],
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
