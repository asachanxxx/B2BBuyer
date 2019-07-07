import { Component, OnInit } from '@angular/core';
import { GlobalParams } from 'src/app/shared/services/CorparateServices/globalparams.service';

@Component({
  selector: 'app-returnan-item',
  templateUrl: './returnan-item.component.html',
  styleUrls: ['./returnan-item.component.sass']
})
export class ReturnanItemComponent implements OnInit {

  constructor(private config:GlobalParams) { }

  ngOnInit() {
  }

}
