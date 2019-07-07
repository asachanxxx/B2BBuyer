import { Component, OnInit } from '@angular/core';
import { GlobalParams } from 'src/app/shared/services/CorparateServices/globalparams.service';

@Component({
  selector: 'app-quotation-history',
  templateUrl: './quotation-history.component.html',
  styleUrls: ['./quotation-history.component.sass']
})
export class QuotationHistoryComponent implements OnInit {

  constructor(private config:GlobalParams) { }

  ngOnInit() {
  }

}
