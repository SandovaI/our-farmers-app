import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sellerprofile',
  templateUrl: 'sellerprofile.page.html',
  styleUrls: ['sellerprofile.page.scss']
})
export class SellerProfilePage {
  icon: string =
    'https://lh4.googleusercontent.com/Uar7UY8ulMpzODZYaEVgnUL6NRbKGpJJWr2DwbnG61SMjtyQbq96J6Y5NHc5jNr9ZeO0295JgzvqUoBeHL0d_dwUrFaWyTNUFjdIBkds2c88s5v0k_wyaAl0Hl94H-FrrPeTlAlv';

  type = 'Selling';

  constructor(private router: Router) {}
  async change() {
    this.icon =
      'https://lh4.googleusercontent.com/tWDc-WKaCGqMG07TRiALBWJVCiQ8NA-UYHAFUV5Fyx4askK3JUPn_FoqTpgRF_2JOdXDgNM2EP2rym5HlVIiwQdLVPZPYwPQo8y_7JG_n8lt6h_hiAI2S66QgE-5unvycz7XnhVj';
  }

  back() {
    this.router.navigate(['/tabs/tab1/login/tab2']);
  }
  next() {
    this.router.navigate(['/tabs/tab4/sellerprofile/edit']);
  }

  segmentChanged(ev: any) {
    console.log('Segment changed');
  }
}
