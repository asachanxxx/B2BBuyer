import { Component, OnInit } from '@angular/core';
import { GlobalParams } from 'src/app/shared/services/CorparateServices/globalparams.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.sass']
})
export class OrderHistoryComponent implements OnInit {

  constructor(private config:GlobalParams) { }

  ngOnInit() {
  }

}
