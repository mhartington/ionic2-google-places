import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail-page/detail-page'
declare var google: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public places: Array<any> = [];
  public autocomplete = {
    query: ''
  }
  constructor(
    public navCtrl: NavController,
    private zone: NgZone
  ) {}
  updateSearch() {
    let service = new google.maps.places.AutocompleteService();
    if (this.autocomplete.query == '') {
      this.places = [];
      return;
    }
    service.getPlacePredictions({
      input: this.autocomplete.query
    }, (predictions, status) => {
      this.zone.run(()=> {
        this.places = predictions
      });
    });

  }

  detail(place){
    this.navCtrl.push(DetailPage, {
      'place': place
    })
  }
}
