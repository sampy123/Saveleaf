import { ApiService } from './../services/api.service';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private email = "";
  private password = "";

  constructor(private api: ApiService, private storage: Storage, private router: Router) {

  }

  submitForm() {
    const data = {
      email: this.email,
      password: this.password
    }
    this.api.getAuthentication(data).subscribe((res: any) => {
 this.router.navigateByUrl('map');
      this.storage.set('token', res.token);

    })
  }
}
