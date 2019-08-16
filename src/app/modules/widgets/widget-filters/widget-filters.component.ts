import { Component, Inject, Input, PLATFORM_ID, OnInit } from '@angular/core';
import { ProductFilter } from '../../../shared/interfaces/product-filter';
import { isPlatformBrowser } from '@angular/common';
import { DirectionService } from '../../../shared/services/direction.service';
import { ProductService } from 'src/app/shared/services/processservices/product.service';

@Component({
    selector: 'app-widget-filters',
    templateUrl: './widget-filters.component.html',
    styleUrls: ['./widget-filters.component.scss'],
    providers:[ProductService]
})
export class WidgetFiltersComponent implements OnInit {
    //@Input() filters: ProductFilter[] = [];
    @Input() level3Id: any;
    isPlatformBrowser = isPlatformBrowser(this.platformId);
    rightToLeft = false;
    rightFilters:any;


    constructor(
        @Inject(PLATFORM_ID) private platformId: any,
        private direction: DirectionService,
        private servicex:ProductService
    ) {
        this.rightToLeft = this.direction.isRTL();
       

    }

    ngOnInit(): void {
        console.log("WidgetFiltersComponent level3Id " , this.level3Id)
        this.GetFilters();
    }
    GetFilters() {
        this.servicex.GetSpecGroupingLevel3(this.level3Id).subscribe(
            data=>{
                this.rightFilters = data
                console.log("WidgetFiltersComponent GetFilters " , data)
            },err=>{
                console.log("WidgetFiltersComponent GetFilters " , err)
            }

        )        
    }


}
