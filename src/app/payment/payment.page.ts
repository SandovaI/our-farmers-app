import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: 'payment.page.html',
  styleUrls: ['payment.page.scss']
})
export class PaymentPage {
  constructor(
    private router: Router,
    private modalController: ModalController
  ) {}
  continue() {
    this.router.navigate(['/tabs/tab1/login/tab2/profile/cart/order']);
    console.log('sucess');
    this.modalController.dismiss({ dismissed: true });
  }
}
