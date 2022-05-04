import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { UserPhoto, PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: 'editprofile.page.html',
  styleUrls: ['editprofile.page.scss']
})
export class EditprofilePage {
  

  constructor(public photoService: PhotoService, public actionSheetController: ActionSheetController) {}
  async ngOnInit() {
    await this.photoService.loadSaved();
  }
  async display(){
    console.log(this.photoService.photos.length);
    if (this.photoService.photos.length == 0){
      return 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
    }
  }
  public async showActionSheet(photo: UserPhoto, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Update Profile Picture',
      buttons: [{
        text: 'Upload',
        role: 'destructive',
        icon: 'add-circle-outline',
        handler: async () => {
          this.photoService.addNewToGallery();
          this.photoService.deletePicture(photo,position)
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
         }
      }]
    });
    await actionSheet.present();
  }
 
}