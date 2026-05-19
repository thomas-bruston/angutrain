import { Component } from '@angular/core';
import { DatePipe,CurrencyPipe,UpperCasePipe,SlicePipe } from '@angular/common';
import { AgoPipe } from '../ago-pipe';

@Component({
  selector: 'app-profil',
  standalone : true,
  imports: [DatePipe,CurrencyPipe,UpperCasePipe,SlicePipe,AgoPipe],
  templateUrl: './profil.html',
  styleUrl: './profil.css',
})
export class Profil {
nom : string = 'thomas bruston';
dateInscription : Date = new Date ('2024-01-15');
salaire : number = 3500;
bio : string = 'Developpeur Angular passionné par le code et les nouvelles technologies'
}
