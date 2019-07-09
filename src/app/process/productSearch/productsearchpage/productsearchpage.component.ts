import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { DirectionService } from 'src/app/shared/services/direction.service';

@Component({
  selector: 'app-productsearchpage',
  templateUrl: './productsearchpage.component.html',
  styleUrls: ['./productsearchpage.component.sass']
})
export class ProductsearchpageComponent implements OnInit {

  passingValue = 0;
  
  constructor(
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer,
    private direction: DirectionService,
    ) {
    this.route.paramMap.subscribe(params => {
      console.log("params.get('id')", params.get('id'))
      this.passingValue = +params.get('id')
    });
  }


  ngOnInit() {
  }

}
