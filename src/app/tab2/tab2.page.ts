import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public csvItems: any;
  title: string;
  form: FormGroup;
  contact: any;
  // tslint:disable-next-line:no-trailing-whitespace
  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private provider: ContactService,
              private toast: ToastController, private activatedroute: ActivatedRoute) {
    this.contact = this.activatedroute.snapshot.params || {};
    this.createForm();
  }
  createForm() {
    this.form = this.formBuilder.group({
      key: [this.contact.key],
      name: [this.contact.name, Validators.required],
      email: [this.contact.email, Validators.required],
      tel: [this.contact.tel, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(async () => {
          const toDo = await this.toast.create({ message: 'Contato salvo com sucesso.', duration: 3000 });
          toDo.present();
          this.navCtrl.pop();
        })
        .catch(async (e) => {
          const toDo = await this.toast.create({ message: 'Erro ao salvar o contato.', duration: 3000 });
          toDo.present();
          console.error(e);
        });
    }
  }
}
