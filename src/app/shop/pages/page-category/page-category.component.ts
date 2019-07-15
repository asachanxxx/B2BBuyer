import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/product';
import { products } from 'src/data/shop-products';
import { filters } from 'src/data/shop-filters';
import { ProductFilter } from 'src/app/shared/interfaces/product-filter';
import { CategoryService } from 'src/app/shared/services/processservices/categoryservices.service';

@Component({
    selector: 'app-grid',
    templateUrl: './page-category.component.html',
    styleUrls: ['./page-category.component.scss'],
    providers: [CategoryService]
})
export class PageCategoryComponent {
    products: Product[] = products;
    filters: ProductFilter[] = filters;
    incomingsubcat2: any;
    headertext:any;

    columns: 3 | 4 | 5 = 3;
    viewMode: 'grid' | 'grid-with-features' | 'list' = 'grid';
    sidebarPosition: 'start' | 'end' = 'start'; // For LTR scripts "start" is "left" and "end" is "right"

    constructor(private route: ActivatedRoute, private catservice: CategoryService) {
        this.route.data.subscribe(data => {
            this.columns = 'columns' in data ? data.columns : this.columns;
            this.viewMode = 'viewMode' in data ? data.viewMode : this.viewMode;
            this.sidebarPosition = 'sidebarPosition' in data ? data.sidebarPosition : this.sidebarPosition;
        });

        this.route.paramMap.subscribe(params => {
            var paramid = params.get('id').substring(1, params.get('id').length);
            console.log("params.get('id').substring(0,1)", paramid)

            //If the passing one is a subcategory
            if (params.get('id').substring(0, 1).trim() === 'y') {
                this.catservice.GetAllSubCategor2sUsingID(+paramid).subscribe(
                    data => {
                        this.incomingsubcat2 = data;
                        this.headertext = data.Level3Name;
                        console.log("data    ", data);
                    }
                )
            } else {
                //or the passing one is a subcategory2
                this.catservice.GetAllSubCategorsUsingID(+paramid).subscribe(
                    data => {
                        this.incomingsubcat2 = data;
                        this.headertext = data.Level2Name;
                        console.log("data    ", data);
                    }
                )
                
            }

        });
    }

    GetAllSubCategor2sUsingID(id: number) {
    }
}
