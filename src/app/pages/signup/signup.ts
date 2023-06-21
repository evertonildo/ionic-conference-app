import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { ApiService } from '../../providers/api.service';



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  signup: UserOptions = { username: '', password: '', email: '', cpf: '' };
  submitted = false;
  fullForm: boolean;

  constructor(
    public router: Router,
    public userData: UserData,
    public api: ApiService
  ) {
    this.fullForm = false;
  }

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      // this.userData.signup(this.signup.username);
      this.api.addUser(this.signup.email, this.signup.password, this.signup.username, this.signup.cpf)
        .then(response => console.log('response', response));

    }
  }
}
