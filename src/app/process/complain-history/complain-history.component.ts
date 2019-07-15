import { Component, OnInit } from '@angular/core';
import { GlobalParams } from 'src/app/shared/services/CorparateServices/globalparams.service';

@Component({
  selector: 'app-complain-history',
  templateUrl: './complain-history.component.html',
  styleUrls: ['./complain-history.component.sass']
})
export class ComplainHistoryComponent implements OnInit {

  constructor(public config:GlobalParams) { }

  ngOnInit() {
  }

}
