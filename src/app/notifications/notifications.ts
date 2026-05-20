import { Component,OnInit,OnDestroy } from '@angular/core';
import { NotificationService, INotification } from '../notification-service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-notifications',
  standalone :true,
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications implements OnInit,OnDestroy{
  notifications : INotification[] = [];
  private sub : Subscription = new Subscription();

  constructor(private notifService : NotificationService){}
  ngOnInit(): void {
    this.sub = this.notifService.notifications$.subscribe(notifs=>{
      this.notifications = notifs;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();

  }

  supprimer(id : number ) : void{
    this.notifService.supprimer(id);
  }

  ajouterSucces() : void{
    this.notifService.ajouter('Produit ajouté au panier','success')
  }

  ajouterErreur() : void{
    this.notifService.ajouter('Erreur de connexion' , 'error')
  }

  ajouterInfos() : void{
    this.notifService.ajouter('Mis à jour disponible' , 'info')
  }
}
