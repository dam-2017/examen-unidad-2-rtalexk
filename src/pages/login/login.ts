import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FormBuilder, FormGroup, AbstractControl, Validators } from "@angular/forms";

import { UserService } from "../../services/user.service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public loginForm: FormGroup;
  public nameF: AbstractControl;
  public passF: AbstractControl;

  public invalidLogin: boolean = false;
  public submit: boolean = false;

  constructor(
    public navCtrl: NavController, 
    fb: FormBuilder,
    public userService: UserService
  ) {
    this.loginForm = fb.group({
      name: ['', [Validators.required, Validators.minLength(6), Validators.pattern('[a-z]+')]],
      pass: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]/)]]
    });

    this.nameF = this.loginForm.controls['name'];
    this.passF = this.loginForm.controls['pass'];
  }

  onSubmit({value, valid}: {value: any, valid: boolean}) {
    this.submit = true;

    if ( this.invalidLogin = !this.doLogin(value)) return;
    this.userService.setUserName(value.name);
    this.navCtrl.push('Home');
  }

  doLogin({name, pass}): boolean {
    return name === 'alriverato' && pass === '13400483@ittepic';
  }

}
