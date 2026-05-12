import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Produit} from './produit';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angutrain');

constructor() {
  const laptop = new Produit(1,"AppleMacBook",1200,true,"Portable");
  const phone = new Produit(2,"Samsung",700,false,"Mobile");
  const tablet = new Produit(3,"Ipad",600,true);
  console.log (laptop.IsEnStock());
  console.log (phone.IsEnStock());
  console.log(tablet.appliquerRemise(20));
  console.log(phone.appliquerRemise(10));
  console.log(laptop.appliquerRemise(50));

}
}
