import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface IInscription{
  nom : string;
  email : string;
  motDePasse : string;
}

@Component({
  selector: 'app-inscription',
  standalone : true,
  imports: [FormsModule],
  templateUrl: './inscription.html',
  styleUrl: './inscription.css',
})
export class Inscription {

  formData:IInscription = {
    nom : '',
    email : '',
    motDePasse : '',
  }
  submitted : boolean = false;

  onSubmit() : void{
    this.submitted = true;
    console.log('formulaire soumis:', this.formData);
  }

}
