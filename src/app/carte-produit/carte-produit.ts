import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carte-produit',
  standalone : true,
  imports: [],
  templateUrl: './carte-produit.html',
  styleUrl: './carte-produit.css',
})
export class CarteProduit {
  @Input() id : number = 0;
  @Input() nom : string = '';
  @Input() prix : number =0;
  @Input() disponible : boolean = true;

  @Output() ajouterAuPanier = new EventEmitter<string>();

  ajouter() : void{
    this.ajouterAuPanier.emit(this.nom)
  }

}
