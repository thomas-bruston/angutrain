import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-admin',
  standalone : true,
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {

    constructor(private authservice : AuthService,private router : Router){};

    seDeconnecter() : void{
      this.authservice.Deconnecter;
      this.router.navigate (['/login'])
    }

}
