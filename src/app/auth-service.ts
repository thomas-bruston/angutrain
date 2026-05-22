import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token = 'fake-jwt-token';


  connecter() : void{

    localStorage.setItem('token',this.token)
  }

  Deconnecter() : void{
    localStorage.removeItem('token')
  }

  estConnecte() : boolean{
    return localStorage.getItem('token') !==null;

  }
  
  
}
