import { Component } from '@angular/core';

@Component({
  selector: 'app-compteur',
  standalone: true, 
  templateUrl: './compteur.html',
  styleUrl: './compteur.css',
})
export class Compteur {
  compteur: number = 0;
  maximum : number = 10;

  incrementer() : void{
    if(this.compteur < this.maximum)
    {this.compteur++;}
  }

  decrementer() : void{
    if (this.compteur > 0)
    {this.compteur --;}
  }
  reset() : void{
    this.compteur =0;
  }

}

