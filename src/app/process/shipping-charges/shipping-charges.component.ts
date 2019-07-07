import { Component, OnInit } from '@angular/core';
import { GlobalParams } from 'src/app/shared/services/CorparateServices/globalparams.service';

@Component({
  selector: 'app-shipping-charges',
  templateUrl: './shipping-charges.component.html',
  styleUrls: ['./shipping-charges.component.sass']
})
export class ShippingChargesComponent implements OnInit {

  constructor(private config:GlobalParams) { }

  ngOnInit() {
  }

}
