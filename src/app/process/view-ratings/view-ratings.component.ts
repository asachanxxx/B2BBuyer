import { Component, OnInit } from '@angular/core';
import { GlobalParams } from 'src/app/shared/services/CorparateServices/globalparams.service';

@Component({
  selector: 'app-view-ratings',
  templateUrl: './view-ratings.component.html',
  styleUrls: ['./view-ratings.component.sass']
})
export class ViewRatingsComponent implements OnInit {

  constructor(public config:GlobalParams) { }

  ngOnInit() {
  }

}
