import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductFilter } from 'src/app/shared/interfaces/product-filter';
import { products } from 'src/data/shop-products';
import { filters } from 'src/data/shop-filters';

@Component({
  selector: 'app-page-levelview',
  templateUrl: './page-levelview.component.html',
  styleUrls: ['./page-levelview.component.sass']
})
export class PageLevelviewComponent implements OnInit {

  products: Product[] = products;
  filters: ProductFilter[] = filters;

  columns: 3|4|5 = 3;
  viewMode: 'grid'|'grid-with-features'|'list' = 'grid';
  sidebarPosition: 'start'|'end' = 'start'; // For LTR scripts "start" is "left" and "end" is "right"

  constructor() { }

  ngOnInit() {
  }

}
