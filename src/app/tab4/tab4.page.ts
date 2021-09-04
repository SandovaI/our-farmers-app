import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  constructor(public alertController: AlertController) {}

  farmerPosts: String[] = [];

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Caption'
        },

        {
          name: 'name3',
          value:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
          type: 'url',
          placeholder: 'Favorite site ever'
        }
        // input date with min & max

        // input date without min nor max
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Ok',
          handler: alertData => {
            console.log(alertData.name1);
          }
        }
      ]
    });
    await alert.present();
  }
}
export class HomePage implements OnInit {
  type: string;
  constructor(public alertController: AlertController) {}

  ngOnInit() {
    this.type = 'Posts';
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}
