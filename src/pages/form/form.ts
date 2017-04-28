import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { FormBuilder, FormGroup, AbstractControl, Validators } from "@angular/forms";

import { UserService } from "../../services/user.service";

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class Form {
  public rfcForm: FormGroup;
  public nameF: AbstractControl;
  public patF: AbstractControl;
  public matF: AbstractControl;
  public birthF: AbstractControl;
  public rfc: string = 'CONSULTAR';

  public submit: boolean = false;

  constructor(
    public navCtrl: NavController, 
    fb: FormBuilder,
    public userService: UserService
  ) {
    this.rfcForm = fb.group({
      name: ['', [Validators.required]],
      pat: ['', [Validators.required]],
      mat: ['', [Validators.required]],
      birth: ['', [Validators.pattern(/[0-9]{4}\/(0[1-9]|1[1-2])\/(0[1-9]|1[1-9]|2[1-9]|3[0-1])/), Validators.required]]
    });

    this.nameF = this.rfcForm.controls['name'];
    this.patF = this.rfcForm.controls['pat'];
    this.matF = this.rfcForm.controls['mat'];
    this.birthF = this.rfcForm.controls['birth'];
  }

  onSubmit({value, valid}: {value: any, valid: boolean}) {
    this.submit = true;
    this.rfc = 'INVALID';
    if (!valid) return;
    this.rfc = this.getRfc(value);
  }

  getRfc(value): string {
    let rfc = '';
    rfc += value.pat.charAt(0);
    rfc += value.pat.split('').filter(char => /[aeiou]/.test(char))[0]
    rfc += value.mat.charAt(0);
    rfc += value.name.charAt(0);
    rfc += value.birth.replace(/\//g, '');
    return rfc.toUpperCase();
  }

}
