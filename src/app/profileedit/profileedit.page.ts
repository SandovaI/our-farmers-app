import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profileedit',
  templateUrl: 'profileedit.page.html',
  styleUrls: ['profileedit.page.scss'],
})
export class ProfileEditPage {
  croppedImagepath = '';
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50,
  };
  icon: string =
    'https://lh4.googleusercontent.com/Uar7UY8ulMpzODZYaEVgnUL6NRbKGpJJWr2DwbnG61SMjtyQbq96J6Y5NHc5jNr9ZeO0295JgzvqUoBeHL0d_dwUrFaWyTNUFjdIBkds2c88s5v0k_wyaAl0Hl94H-FrrPeTlAlv';

  type = 'Selling';

  constructor(
    private router: Router,
  
    
    private file: File
  ) {}

 



  back() {
    this.router.navigate(['/tabs/tab1/login/tab2']);
  }

  segmentChanged(ev: any) {
    console.log('Segment changed');
  }
}
