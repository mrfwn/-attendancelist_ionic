import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ContactService } from '../services/contact.service';
import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  contacts: Observable<any>;
  constructor(private toast: ToastController, private provider: ContactService, private route: Router) {
    this.contacts = this.provider.getAll();
  }

  editContact(contact: any) {
    this.route.navigate(['/tabs/tab2/', contact]);
  }

  removeContact(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(async () => {
          const toDo = await this.toast.create({ message: 'Contato removido sucesso.', duration: 3000 });
          toDo.present();
        })
        .catch(async () => {
          const toDo = await this.toast.create({ message: 'Erro ao remover o contato.', duration: 3000 });
          toDo.present();
        });
    }
  }
}
