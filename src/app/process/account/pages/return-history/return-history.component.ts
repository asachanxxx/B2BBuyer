import { Component, OnInit } from '@angular/core';
import { GlobalParams } from 'src/app/shared/services/CorparateServices/globalparams.service';

@Component({
  selector: 'app-return-history',
  templateUrl: './return-history.component.html',
  styleUrls: ['./return-history.component.sass']
})
export class ReturnHistoryComponent implements OnInit {

  constructor(public config:GlobalParams) { }

  ngOnInit() {
  }

}
