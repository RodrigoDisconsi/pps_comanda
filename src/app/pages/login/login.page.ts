import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  valueSegment:string = "usuario";

  constructor() { }

  ngOnInit() {
  }

  onChange(e){
    this.valueSegment = e.detail.value;
  }

}
