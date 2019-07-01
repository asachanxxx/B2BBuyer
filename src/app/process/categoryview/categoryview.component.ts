import { Component, OnInit } from '@angular/core';
import { ProductFilter } from 'src/app/shared/interfaces/product-filter';
import { filters } from '../../../data/shop-filters';
import { Product } from '../../shared/interfaces/product';
import { products } from '../../../data/shop-products';
import { ActivatedRoute } from '@angular/router';
import { categories } from '../../../data/blog-widget-categories';
@Component({
  selector: 'app-categoryview',
  templateUrl: './categoryview.component.html',
  styleUrls: ['./categoryview.component.sass']
})
export class CategoryviewComponent implements OnInit {
  products: Product[] = products;
  filters: ProductFilter[] = filters;
  categories = categories;

  columns: 3 | 4 | 5 = 3;
  viewMode: 'grid' | 'grid-with-features' | 'list' = 'grid';
  sidebarPosition: 'start' | 'end' = 'start'; // For LTR scripts "start" is "left" and "end" is "right"

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      this.columns = 'columns' in data ? data.columns : this.columns;
      this.viewMode = 'viewMode' in data ? data.viewMode : this.viewMode;
      this.sidebarPosition = 'sidebarPosition' in data ? data.sidebarPosition : this.sidebarPosition;
    });

    console.log("this.route.params", this.route.paramMap);

    this.route.paramMap.subscribe(params => {
      console.log("params.get('id')", params.get('id'))
      // this.contactService.getContact(params.get('id')).subscribe(c => {
      //   console.log(c);
      //   this.contact = c;
      // })
    });
  }

  ngOnInit() {
  }

}
