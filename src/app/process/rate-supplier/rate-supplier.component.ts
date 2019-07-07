import { Component, OnInit } from '@angular/core';
import { GlobalParams } from 'src/app/shared/services/CorparateServices/globalparams.service';

@Component({
  selector: 'app-rate-supplier',
  templateUrl: './rate-supplier.component.html',
  styleUrls: ['./rate-supplier.component.sass']
})
export class RateSupplierComponent implements OnInit {

  constructor(private config:GlobalParams) { }
  ngOnInit() {
  }

}
