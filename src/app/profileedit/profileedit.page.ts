import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';

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
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private file: File
  ) {}

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };
    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        this.croppedImagePath = 'data:image/jpeg;base64,' + imageData;
      },
      (err) => {
        // Handle error
      }
    );
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
          },
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.CAMERA);
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }
  async change() {
    this.icon =
      'https://lh4.googleusercontent.com/tWDc-WKaCGqMG07TRiALBWJVCiQ8NA-UYHAFUV5Fyx4askK3JUPn_FoqTpgRF_2JOdXDgNM2EP2rym5HlVIiwQdLVPZPYwPQo8y_7JG_n8lt6h_hiAI2S66QgE-5unvycz7XnhVj';
  }

  back() {
    this.router.navigate(['/tabs/tab1/login/tab2']);
  }

  segmentChanged(ev: any) {
    console.log('Segment changed');
  }
}
