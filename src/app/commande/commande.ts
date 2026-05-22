import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-commande',
  standalone : true,
  imports: [ReactiveFormsModule],
  templateUrl: './commande.html',
  styleUrl: './commande.css',
})
export class Commande {
  submitted = false;

  form = new FormGroup(
    {
      nom : new FormControl('', [Validators.required, Validators.minLength(3)]),
      email : new FormControl('', [Validators.required, Validators.email]),
      adresse : new FormControl('', [Validators.required,]),
      telephone : new FormControl('' , [Validators.required, Validators.pattern('[0-9]{10}')]),
    }
  );

  onSubmit() : void{
    if(this.form.valid){
      this.submitted = true;
      console.log('commande: ',this.form.value)
    }
  }

}
