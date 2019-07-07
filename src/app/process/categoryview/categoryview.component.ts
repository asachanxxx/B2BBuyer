import { Component, OnInit, Input } from '@angular/core';
import { ProductFilter } from 'src/app/shared/interfaces/product-filter';
import { filters } from '../../../data/shop-filters';
import { Product } from '../../shared/interfaces/product';
import { products } from '../../../data/shop-products';
import { ActivatedRoute } from '@angular/router';
import { categories } from '../../../data/blog-widget-categories';
import { DomSanitizer } from '@angular/platform-browser';
import { DirectionService } from 'src/app/shared/services/direction.service';
@Component({
  selector: 'app-categoryview',
  templateUrl: './categoryview.component.html',
  styleUrls: ['./categoryview.component.scss']
})
export class CategoryviewComponent implements OnInit {
  products: Product[] = products;
  filters: ProductFilter[] = filters;
  categories = categories;

  columns: 3 | 4 | 5 = 3;
  viewMode: 'grid' | 'grid-with-features' | 'list' = 'grid';
  sidebarPosition: 'start' | 'end' = 'start'; // For LTR scripts "start" is "left" and "end" is "right"



  @Input() withDepartments = false;

  options = {
      nav: false,
      dots: true,
      loop: true,
      responsive: {
          0: {items: 1}
      },
      rtl: this.direction.isRTL()
  };

  slides = [
      {
          title: 'Big choice of<br>Plumbing products',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
          image_classic: 'assets/images/slides/slide-1.jpg',
          image_full: 'assets/images/slides/slide-1-full.jpg',
          image_mobile: 'assets/images/slides/slide-1-mobile.jpg'
      },
      {
          title: 'Screwdrivers<br>Professional Tools',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
          image_classic: 'assets/images/slides/slide-2.jpg',
          image_full: 'assets/images/slides/slide-2-full.jpg',
          image_mobile: 'assets/images/slides/slide-2-mobile.jpg'
      },
      {
          title: 'One more<br>Unique header',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
          image_classic: 'assets/images/slides/slide-3.jpg',
          image_full: 'assets/images/slides/slide-3-full.jpg',
          image_mobile: 'assets/images/slides/slide-3-mobile.jpg'
      }
  ];






  constructor(
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer,
    private direction: DirectionService
    ) {
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
