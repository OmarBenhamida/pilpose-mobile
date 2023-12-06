import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  imageUrl: string = "assets/pilposepic.jpeg";
  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToFotgotPwd() {
    this.router.navigate(['/forgot-pwd']);

  }

}
