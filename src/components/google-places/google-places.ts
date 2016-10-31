import { Component } from '@angular/core';

/*
  Generated class for the GooglePlaces component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'google-places',
  templateUrl: 'google-places.html'
})
export class GooglePlaces {

  text: string;

  constructor() {
    console.log('Hello GooglePlaces Component');
    this.text = 'Hello World';
  }

}
