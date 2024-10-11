import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  constructor(private navCtrl: NavController) {
  }

  login() {
    this.navCtrl.navigateForward('/home');
  }

  ngOnInit() {
  }

}
