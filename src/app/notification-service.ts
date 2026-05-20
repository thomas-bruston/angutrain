import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface INotification{
  id : number;
  message : string;
  type : 'success'| 'error'|'info';

}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notifications = new BehaviorSubject<INotification[]>([]);
  notifications$ = this.notifications .asObservable();

  ajouter(message : string, type :'success'|'error'| 'info') : void {
    const notif: INotification = {
      id : Date.now(),
      message,
      type};
      const current = this.notifications.value;
      this.notifications.next([...current, notif]);}

  supprimer ( id: number) : void{
    const current = this.notifications.value;
    this.notifications.next(current.filter(n => n.id !== id));

  }


    }
  
  

