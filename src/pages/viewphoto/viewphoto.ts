import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the ViewphotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewphoto',
  templateUrl: 'viewphoto.html',
})
export class ViewphotoPage {
  getObj: any;
  imgObj: any;
  thumbObg: any;
  titleObj: any;
  imgObjCamera: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera
  ) {
    this.getObj = this.navParams.get('obj');
    this.imgObj = this.getObj['url'];
    this.thumbObg = this.getObj['thumbnailUrl'];
    this.titleObj = this.getObj['title'];
    console.log(this.imgObj);
    console.log(this.getObj);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewphotoPage');
  }
  goBack() {
    this.navCtrl.pop();
  }
  image:any;
  imgGetChange:Boolean = false;  
  getPhotoCam(){
    this.camera.getPicture().then((imageData) => {        
      this.image = imageData;
        this.imgGetChange = true;
    }, (err) => {
        console.log(err);
    });
  }
  
  getPhotoGallery(sourceType:number) {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType:sourceType,
    }

    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
      this.imgGetChange = true;

    }, (err) => {
      // Handle error
    });
  }

}
