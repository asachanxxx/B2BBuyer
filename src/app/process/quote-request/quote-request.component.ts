import { Component, OnInit } from '@angular/core';
import { GlobalParams } from 'src/app/shared/services/CorparateServices/globalparams.service';

@Component({
  selector: 'app-quote-request',
  templateUrl: './quote-request.component.html',
  styleUrls: ['./quote-request.component.sass']
})
export class QuoteRequestComponent implements OnInit {

  constructor(public config:GlobalParams) { }

  ngOnInit() {
  }

}
