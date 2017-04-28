import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserService } from "../../services/user.service";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userService: UserService
  ) {
  }

  onForm() {
    this.navCtrl.push('Form');
  }
}
