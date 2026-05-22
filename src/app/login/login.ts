import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service';
import { Admin } from '../admin/admin';

@Component({
  selector: 'app-login',
  standalone : true,
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private authservice : AuthService,private router : Router){};

  seConnecter() : void{
    this.authservice.connecter();
    this.router.navigate(['/admin']);
  }
}
