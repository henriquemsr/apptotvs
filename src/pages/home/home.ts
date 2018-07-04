import { Component } from '@angular/core';
import { ServiceProvider } from '../../providers/service/service';
import { NavController, LoadingController } from 'ionic-angular';
import { ViewphotoPage } from '../viewphoto/viewphoto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  error: any;
  photos: any;
  constructor(
    public navCtrl: NavController,
    public service: ServiceProvider,
    public loadingCtrl: LoadingController
  ) {
    this.getFrontPhotos();
  }
  getFrontPhotos() {
    let loader = this.loadingCtrl.create({ content: "Aguarde...", });
    loader.present();
    this.service.getPhotos().subscribe(
      data => {
        this.error = data;
        this.photos = data;
        console.log(this.photos);
        loader.dismiss();
      },
      err => console.log(err)
    );
  }
  goView(id) {
    this.navCtrl.push(ViewphotoPage,{obj:id});
  }
  getEventWords(ev) {        
    var val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.photos = this.photos.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else{
      this.getFrontPhotos();
    }
  }
}
