
import { Component, OnInit } from '@angular/core';
import { Router            } from '@angular/router';

@Component({
  selector: 'at-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  user;
  message: string;

  constructor(private router: Router) {
    this.user = {
      email   : '',
      password: ''
    }

    this.message = '';
   }

  ngOnInit() {
  }

  submit(): void {
    if(this.user.email == 'test' && this.user.password == 'test') {
      this.router.navigate(['home']);
    } else {
      this.message = 'Datos incorrectos, verifique';
    }
  }

}
