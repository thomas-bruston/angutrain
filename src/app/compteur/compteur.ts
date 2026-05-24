import { Component,signal,computed } from '@angular/core';

@Component({
  selector: 'app-compteur',
  standalone: true, 
  templateUrl: './compteur.html',
  styleUrl: './compteur.css',
})
export class Compteur {
  compteur = signal(0);
  maximum = signal(10);

 estAuMax = computed(() => this.compteur() >= this.maximum());
 estAZero = computed(() => this.compteur() === 0);
 progression = computed(() => (this.compteur() / this.maximum()) * 100)

  incrementer() : void{
    if (!this.estAuMax()){
      this.compteur.update(v=>v+1);
    }}

decrementer() : void{
    if (!this.estAZero()) {
      this.compteur.update(v=>v-1);
    }}

reset() : void{
  this.compteur.set(0)
}


    
 

}

