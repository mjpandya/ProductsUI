/**
 * Created by Pratham on 6/1/2017.
 */
import {Component} from '@angular/core';
import {ProductsService} from './products.service';
import {Http} from '@angular/http';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'phone-details',
  templateUrl= 'product-component.html',
  providers: [ProductsService]
});

export class SmartPhoneComponenet{
  BrandName: string;
  Model: string;
  Price: string;
  constructor(private http: Http){}

  getSmartPhoneDetails(){
   this.http.get('http://localhost:2550/getSmartPhoneDetails').subscribe();
  }
  GetPhoneDetails(model: FormControl){

  }
}
