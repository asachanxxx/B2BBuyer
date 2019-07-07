import { Component, OnInit } from '@angular/core';
import { GlobalParams } from 'src/app/shared/services/CorparateServices/globalparams.service';

@Component({
  selector: 'app-seeall-reviews',
  templateUrl: './seeall-reviews.component.html',
  styleUrls: ['./seeall-reviews.component.sass']
})
export class SeeallReviewsComponent implements OnInit {

  constructor(private config:GlobalParams) { }

  ngOnInit() {
  }

}
