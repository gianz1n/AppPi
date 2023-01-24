import { Component } from '@angular/core';

// IMPORTS

import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( private storage: Storage) {}

  async ngOninit() {
    await this.storage.create()
  }
}
